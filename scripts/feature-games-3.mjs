/**
 * Content de-dup remediation, batch 3:
 * Rewrites descriptions/instructions for 49 more popular non-featured games
 * with original copy and marks them featured.
 * Excluded trademark-risky slugs: elden-ring-*, call-of-duty-*, destroy-minecraft,
 * need-for-drift, f-e-a-r-*, double-dragon-*, *obby*, skibidi/brainrot, drunken boxer.
 * Idempotent: safe to re-run.
 */
import { Client } from "pg";
import fs from "node:fs";

const env = fs.readFileSync(new URL("../.env.local", import.meta.url), "utf8");
const DATABASE_URL = env.match(/DATABASE_URL="([^"]+)"/)[1];

const FEATURED_COPY = {
  // ---------- Puzzle / Sorting ----------
  "pixel-shooter-puzzle": {
    description:
      "Pixel Shooter Puzzle is a hybrid that sounds odd and plays beautifully: aim shots to solve spatial puzzles, where every bullet is a resource and every wall is a tool. Think less run-and-gun, more billiards with pixels.",
    instructions:
      "Aim and fire to hit targets or trigger mechanisms in the correct order. Ammo is limited per level, so plan the shot sequence before pulling the trigger.",
  },
  "aberiel-church-jigsaws": {
    description:
      "Aberiel Church Jigsaws is a calm jigsaw collection set in gothic church scenes — stained glass, candlelight and stone arches cut into progressively trickier pieces. Pure quiet-focus gaming, no timers attached.",
    instructions:
      "Drag pieces from the tray onto the board to rebuild each church scene. Start with edges and distinctive colors like the stained glass, then fill in the rest.",
  },
  "finnie-escape": {
    description:
      "Finnie Escape is a compact room-escape puzzler about a small character in a big bind: find objects, combine them in odd ways, and talk your way past the level's one stubborn mechanism. Short levels, satisfying clicks.",
    instructions:
      "Click around each room to collect items and spot interactive spots, then use them in the right combination to unlock the exit. Stuck usually means one unexamined corner.",
  },
  "arrowxis-brain-escape-puzzle": {
    description:
      "ArrowXis Brain Escape Puzzle is a direction-based logic game: arrows on the board dictate movement, and your job is to clear every tile by launching each arrow at the right moment. One wrong launch can lock the whole grid.",
    instructions:
      "Tap arrows to send them flying in their facing direction; each must exit the board or hit its matching slot. Choose the launch order carefully — blocked arrows are stranded arrows.",
  },
  "wobble-it": {
    description:
      "WOBBLE IT is a physics balancing toy: stack wobbling shapes higher and higher on a base that has opinions about stability. It is part puzzle, part comedy, and entirely one-more-try.",
    instructions:
      "Drop or place each shape onto the stack, watching how weight shifts the structure. Keep the tower upright as long as you can — the wobble is the warning.",
  },
  collisiox: {
    description:
      "CollisioX is a minimalist collision puzzle: launch pieces across a clean grid so they crash, merge or deflect in exactly the way the level demands. Rules take thirty seconds to learn; solutions take much longer to see.",
    instructions:
      "Drag to set launch direction and power, then release. Use collisions between pieces to clear the board's objective, and remember most pieces only stop when they hit something.",
  },
  "word-game-2026": {
    description:
      "Word Game 2026 is a modern word puzzle with a daily-challenge feel: build words from a fresh letter set, chase longer words for bigger scores, and learn a genuinely surprising amount of vocabulary along the way.",
    instructions:
      "Drag or click letters to form valid words before time or moves run out. Longer words score disproportionately more, so hunt for the big one hiding in the letters.",
  },
  "mathematics-frenzy": {
    description:
      "Mathematics Frenzy is arithmetic under pressure: rapid-fire equations, a timer that does not believe in mercy, and difficulty that scales with your confidence. Great for keeping mental math sharp in short bursts.",
    instructions:
      "Pick the correct answer or type it in before the timer bar empties. Streaks multiply your score — one wrong answer resets the multiplier, so speed and accuracy must cooperate.",
  },
  "save-my-pet-game": {
    description:
      "Save My Pet is a line-drawing defense puzzle: draw barriers to shield an adorable pet from incoming bees, drops and hazards for a few crucial seconds. Simple premise, surprisingly clever level design.",
    instructions:
      "Draw lines or shapes with your finger or mouse to block every path of attack. Let go and watch the hazard play out — if the pet survives the timer, you win.",
  },
  "galaxy-pop": {
    description:
      "Galaxy Pop is a bubble shooter that left the living room for outer space: cosmic clusters, planet-sized combos and gravity-bent bank shots across a starfield backdrop.",
    instructions:
      "Aim and fire bubbles to match three or more of one color and pop them. Clear the board before the cluster reaches the bottom, and use planetary bumpers for angled shots.",
  },
  "easy-halloween-coloring-quest": {
    description:
      "Easy Halloween Coloring Quest is a gentle coloring book with seasonal quest framing: pick palettes, fill pumpkins and haunted houses, and complete each picture to advance. Zero stress, all vibes — great for younger players too.",
    instructions:
      "Choose a color and tap or drag over regions to fill them. Complete the required palette for each picture to finish the quest and unlock the next one.",
  },

  // ---------- Arcade / Action ----------
  "cheerleader-magazine-dressup": {
    description:
      "Cheerleader Magazine Dressup is a styling game with a magazine cover goal: mix uniforms, pom-poms, hairstyles and backgrounds to build the perfect cover look, then rate your own editorial instinct.",
    instructions:
      "Browse the wardrobe categories and tap items to apply them. Match the magazine's theme brief to score higher, then save or re-style your cover.",
  },
  "cliff-boi-trap-adventure": {
    description:
      "Cliff Boi Trap Adventure is a precision platformer about a small hero and a canyon full of traps: spikes, saws and ledges that vanish on a schedule. Deaths are instant, respawns are instant, progress is real.",
    instructions:
      "Run and jump across trap-lined platforms to reach each level's flag. Learn the timing of moving hazards — most traps repeat on a loop you can memorize.",
  },
  "block-ship-battle": {
    description:
      "Block Ship Battle is a naval combat game with a blocky build-your-own-fleet twist: assemble a ship from modules, sail into cannon duels, and rebuild smarter after every loss.",
    instructions:
      "Place weapon and armor modules on your ship grid, then steer and fire during battle. Win engagements to earn parts for a better hull next round.",
  },
  "grave-blast": {
    description:
      "Grave Blast is a spooky arcade blaster where waves of grave-spawned critters march at your position and your weapon upgrades decide everything. Halloween energy, arcade rules.",
    instructions:
      "Move and shoot to hold off the waves, collecting drops between rounds. Prioritize upgrades that fix whatever got past you last wave.",
  },
  "tidy-bot": {
    description:
      "Tidy Bot is a cleaning-logic puzzle starring a robot with one job: vacuum every tile without trapping itself. Levels are small, solutions are neat, and the tidy satisfaction is the point.",
    instructions:
      "Guide the robot across every floor tile using directional moves. The robot cannot stop mid-pattern, so plan a route that covers all tiles and ends somewhere safe.",
  },
  "ramp-truck-mayhem": {
    description:
      "Ramp Truck Mayhem is a physics driving game about a truck, a ramp and the glorious consequences: launch cargo, clear obstacles and chain stunts across sandbox levels that reward creative chaos.",
    instructions:
      "Drive with the arrow keys and hit ramps at speed to launch the truck or its cargo. Complete each level's objective, then do it again with more flair.",
  },
  "embercraft": {
    description:
      "EmberCraft is a cozy survival-crafting adventure: gather resources, keep the ember alive, craft tools and expand your little camp against a world that slowly cools down. Gentle systems, real stakes.",
    instructions:
      "Collect wood, stone and food, craft at the workbench, and keep the central ember fed. Explore outward as your gear improves, and always return before dark.",
  },
  "nutty-rush": {
    description:
      "Nutty Rush is a fast collection arcade about a squirrel with a deadline: dash through the forest, hoover up acorns and dodge everything with a grudge. Short levels, quick thumbs required.",
    instructions:
      "Run and jump through each course collecting nuts while avoiding obstacles. Reach the goal before time runs out — bonus nuts extend the clock slightly.",
  },
  "dog-runaway": {
    description:
      "Dog Runaway is a charming endless runner with a leash-length twist: your dog sprints, you control the swerves, and every near-miss with an obstacle feeds the combo meter. Cute, quick, addictive.",
    instructions:
      "Swipe or press to switch lanes and jump over obstacles as the run speeds up. Collect treats for score and power-ups, and see how far the escape goes.",
  },
  "fashion-show-dressup": {
    description:
      "Fashion Show Dressup puts you in the stylist seat for a runway event: build outfits from a deep wardrobe, match the show's theme, and send your model down the catwalk for the judges.",
    instructions:
      "Pick clothing, accessories and hair across categories to match the theme brief. Submit the look to walk the runway and earn style points toward the next show.",
  },
  "jenni-styles": {
    description:
      "Jenni Styles is a dress-up sandbox built around one stylish heroine: hundreds of mix-and-match pieces, seasonal collections and a lookbook that saves your best outfits. Low stakes, high fashion.",
    instructions:
      "Browse wardrobe tabs and combine pieces into complete looks. Save favorites to the lookbook and try theme challenges for inspiration.",
  },
  "scrap-arms-neo": {
    description:
      "SCRAP ARMS NEO is a mech-brawler where your fighter is only as good as the scrap you bolt onto it: salvage parts between bouts, rebuild your arms mid-career, and punch your way up the neo-arena ladder.",
    instructions:
      "Fight with attack and block controls, salvage parts from defeated rivals, and equip upgrades between rounds. Balance armor weight against swing speed when rebuilding.",
  },
  "last-garage-zombie-road": {
    description:
      "Last Garage: Zombie Road is a vehicular survival game with a garage layer: fortify your car between runs, drive the infected highway, and turn the vehicle itself into your best weapon.",
    instructions:
      "Drive through zombie crowds using ram and boost strategically, and reach checkpoints to earn scrap. Spend scrap in the garage on spikes, armor and engine upgrades.",
  },
  "grass-rush-adventure": {
    description:
      "Grass Rush Adventure is a lighthearted platform adventure through meadows, groves and hidden clearings, with collectibles that reward going off the obvious path. Cozy difficulty, generous checkpoints.",
    instructions:
      "Run, jump and explore each level to collect items and reach the exit. Secret paths usually hide behind suspicious-looking bushes.",
  },
  "elemental-barrage": {
    description:
      "Elemental Barrage is a dodge-and-survive arena where the sky rains fire, ice and lightning in patterns you must read like sheet music. Survival time is the score, and the elements never repeat a verse.",
    instructions:
      "Move through the elemental rain, avoiding matched-color hazards and using safe zones between patterns. Survive as long as possible — patterns accelerate over time.",
  },
  "leaf-blower-yards": {
    description:
      "Leaf Blower Yards is a satisfying yard-work sim with physics: aim the blower, herd leaves into piles, and turn messy lawns into magazine covers. Oddly meditative, honestly competitive.",
    instructions:
      "Move around the yard and aim the blower to push leaves toward the target zone. Clear the lawn within the time limit — corners and flowerbeds are where the challenge lives.",
  },
  "shooter-zombie-survival": {
    description:
      "Shooter Zombie Survival is a top-down holdout shooter: barricade a position, manage scarce ammo, and survive the night one wave at a time. Tense economy of bullets vs. bodies.",
    instructions:
      "Move with the keyboard, aim and fire with the mouse, and reload behind cover. Prioritize headshots and save heavy ammo for the horde waves.",
  },
  "hollow-pass": {
    description:
      "HOLLOW PASS is an atmospheric action gauntlet through a wind-scoured mountain pass: short combat encounters, careful footwork over drops, and a mood that never loosens its grip.",
    instructions:
      "Fight through each encounter zone and traverse the path beyond. Watch stamina when attacking and always look before you leap — the pass has no guardrails.",
  },
  "sneaky-spikes": {
    description:
      "Sneaky Spikes is a twitch platformer with a cruel sense of humor: spikes hide where spikes should not be, and the level design is a lesson in paranoia. Instant respawns keep the loop tight.",
    instructions:
      "Run and jump toward the exit, expecting traps in unlikely places. Memorize spike positions on each death and turn knowledge into a clean run.",
  },
  "verity-block-survival": {
    description:
      "Verity Block Survival is a blocky arena survival game where reading the environment matters as much as reflexes: structures crumble, safe zones shift, and every wave rearranges the map.",
    instructions:
      "Move and fight across the block arena as it degrades wave by wave. Stay on stable ground, use ruins as cover, and outlast the swarm.",
  },
  "vesper-survival-mod": {
    description:
      "Vesper Survival Mod is a night-based survival arena: hold your ground through escalating waves, gather drops, and decide between fighting another minute or banking your progress. Greed is a build decision.",
    instructions:
      "Survive each wave, collecting drops and upgrades between rounds. Choose when to cash out — pushing deeper multiplies rewards and risk together.",
  },
  "neo-traffic-rider-championship": {
    description:
      "Neo Traffic Rider Championship is a first-person moto racer through neon-lit traffic: thread gaps at speed, chain close passes for bonus, and climb the championship ladder one city at a time.",
    instructions:
      "Accelerate and steer with the on-screen controls, passing close to traffic for bonus points without touching it. Finish high enough in each race to advance the championship.",
  },
  "bike-stunt-master-mini-rush": {
    description:
      "Bike Stunt Master Mini Rush is a compact stunt-bike course game: ramps, flips and narrow landings in bite-sized levels that take seconds to start and ages to master.",
    instructions:
      "Accelerate off ramps and tilt mid-air to complete flips, leveling out before landing. Finish each course without crashing to unlock the next.",
  },
  "arms-race": {
    description:
      "Arms Race is a fast top-down shooter about loadout momentum: every elimination upgrades your weapon, and the run ends the moment you stop adapting. Short, sharp, replayable.",
    instructions:
      "Move and shoot through enemy waves, grabbing weapon upgrades with each kill. Survive as long as you can — the arsenal only grows if you do.",
  },
  "bottle-breakshot": {
    description:
      "Bottle Breakshot is a carnival-style marksmanship game: shelves of bottles, a slingshot, limited shots and scoring that rewards the trick breaks nobody asked for but everybody loves.",
    instructions:
      "Aim and fire at bottles to knock them all off the shelf within your shot count. Chain breaks and stacked shots score bonus points.",
  },
  "wrecking-ball-tycoon": {
    description:
      "Wrecking Ball Tycoon is destruction with a business plan: swing the ball, flatten the structure, and reinvest the salvage into a bigger, meaner demolition rig. Physics chaos with an upgrade spreadsheet.",
    instructions:
      "Release the wrecking ball with the right timing to maximize structural damage. Earn salvage from each demolition and upgrade your rig for bigger contracts.",
  },
  "legiontide-army-runner": {
    description:
      "Legiontide: Army Runner flips the runner genre — you control the army, not the soldier: sweep up recruits as you run, grow the column, and crash it into the enemy gates with overwhelming numbers.",
    instructions:
      "Steer your growing army through gates that add or multiply troops, avoiding hazards that thin the ranks. Arrive at the endgame with enough soldiers to take the fort.",
  },
  "super-nitro-racing-3": {
    description:
      "Super Nitro Racing 3 is an arcade circuit racer with generous drift physics and a nitro economy: earn boost by sliding, spend it on straights, and win races the stylish way.",
    instructions:
      "Steer and accelerate with the keyboard, drifting through corners to charge nitro. Use boost on straights and finish each race in the top positions.",
  },
  "urban-military-strike": {
    description:
      "Urban Military Strike is a cover-based mission shooter through city blocks: plan the approach, use cover properly, and clear objectives against opponents who shoot back with intent.",
    instructions:
      "Move between cover points, aim and fire with the mouse, and complete each mission objective. Reload behind cover and flank instead of trading shots head-on.",
  },
  "classic-car-driving-game": {
    description:
      "Classic Car Driving Game is a no-pressure driving sandbox behind the wheel of beautiful old iron: cruise open roads, enjoy the handling model, and just drive. Sometimes that is the whole assignment.",
    instructions:
      "Drive with the keyboard controls and explore the road network freely. No timer, no fail state — practice smooth cornering and enjoy the ride.",
  },
  "hospital-surgeon-doctor-game": {
    description:
      "Hospital Surgeon: Doctor Game is a steady-hands medical sim: diagnose patients, follow procedure steps in order, and complete operations with the calm of someone who watched one tutorial and decided that was enough.",
    instructions:
      "Follow each operation's step prompts using the correct tool at the right moment. Accuracy matters more than speed — mistakes cost patient health.",
  },
  "skincare-makeover-makeup-game": {
    description:
      "Skincare Makeover Makeup Game is a complete beauty-studio loop: cleanse, treat, then transform with makeup and accessories. The before-and-after is the whole reward, and it is a good one.",
    instructions:
      "Follow the skincare steps first, then apply makeup with the palette tools to match the requested look. Finish each client to unlock the next challenge.",
  },
  "police-car-chase-prison-escape-game": {
    description:
      "Police Car Chase Prison Escape is a two-seat action game: drive the getaway through traffic while the sirens multiply behind you. Escape routes close fast — momentum is your accomplice.",
    instructions:
      "Drive the escape vehicle through traffic and roadblocks, avoiding collisions that slow the pursuit timer. Reach the safe zone before the pursuit closes in.",
  },
  "impossible-jeep-driver": {
    description:
      "Impossible Jeep Driver is off-road precision against absurd terrain: near-vertical hills, swinging bridges and cliff ledges that ask exactly how much throttle you think you understand.",
    instructions:
      "Balance throttle and brake with the keyboard to climb each obstacle without flipping. Use the tilt physics — momentum up a hill can become a backflip off it.",
  },
  "pirate-dodge": {
    description:
      "Pirate Dodge is a swashbuckling dodge game on deck: cannonballs arc in from every quarter and your pirate's job is to be somewhere else. Simple controls, ruthless pattern-reading.",
    instructions:
      "Move your pirate around the deck to dodge incoming cannonballs and hazards. Survive each barrage wave — the cannons get faster and sneakier.",
  },
  "coinbound-voodoo-nightmare": {
    description:
      "Coinbound: Voodoo Nightmare is a spooky coin-pusher arcade with a haunted mask twist: drop coins, trigger cursed bonuses and survive the nightmare rounds where the machine pushes back.",
    instructions:
      "Time your coin drops to push treasure toward the collector. Trigger the voodoo bonus rounds for multiplied payouts, but watch the board's tricks.",
  },
};

const DRY = process.argv.includes("--dry");

const client = new Client({ connectionString: DATABASE_URL });
await client.connect();

const entries = Object.entries(FEATURED_COPY).filter(([, v]) => typeof v === "object");

if (DRY) {
  const slugs = entries.map(([s]) => s);
  const { rows } = await client.query(`SELECT slug FROM gq_games WHERE slug = ANY($1)`, [slugs]);
  const found = new Set(rows.map((r) => r.slug));
  console.log(`total copy: ${slugs.length}, found in DB: ${found.size}`);
  console.log("MISSING:", slugs.filter((s) => !found.has(s)).join(", ") || "none");
  await client.end();
  process.exit(0);
}

let rewritten = 0;
let missing = [];
for (const [slug, copy] of entries) {
  const res = await client.query(
    `UPDATE gq_games SET description = $1, instructions = $2, featured = true WHERE slug = $3`,
    [copy.description, copy.instructions, slug]
  );
  if (res.rowCount === 0) missing.push(slug);
  else rewritten += res.rowCount;
}

const counts = await client.query(
  `SELECT count(*) FILTER (WHERE featured) AS featured, count(*) AS total FROM gq_games`
);

console.log(`rewritten: ${rewritten}`);
if (missing.length) console.log("MISSING SLUGS:", missing.join(", "));
console.log(counts.rows[0]);

await client.end();
