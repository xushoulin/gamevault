/**
 * Content de-dup remediation, batch 2:
 * Rewrites descriptions/instructions for 48 more popular non-featured games
 * with original copy and marks them featured. Skips trademark-risky slugs
 * (roblox-like obby/goblox/noob, skibidi, barbee, trump, left-4-dead clones).
 * Idempotent: safe to re-run.
 */
import { Client } from "pg";
import fs from "node:fs";

const env = fs.readFileSync(new URL("../.env.local", import.meta.url), "utf8");
const DATABASE_URL = env.match(/DATABASE_URL="([^"]+)"/)[1];

const FEATURED_COPY = {
  // ---------- Puzzle ----------
  "slingshot-shooting-game": {
    description:
      "Slingshot Shooting Game is a physics toy box: load a shot, pull back, and let trajectory do the thinking. Every target sits behind an angle worth finding, and the most satisfying solves are the banked shots nobody planned for.",
    instructions:
      "Drag back on the slingshot to set power and angle, then release to fire. Knock down every target with as few shots as you can, and use walls and ramps to reach the awkward ones.",
  },
  "thief-puzzle-long-hand-game": {
    description:
      "Thief Puzzle puts a comically stretchable arm in your hands and a museum's worth of loot just out of reach. The catch is that every level is also guarded, so the stretchy arm that grabs the goods can just as easily tap a sleeping guard on the shoulder.",
    instructions:
      "Drag to extend your stretchy arm toward the loot, steering around guards, lasers and other hazards. Time your grabs carefully — touching anything that moves ends the attempt.",
  },
  "screw-nuts-snap-puzzle": {
    description:
      "Screw Nuts Snap Puzzle is an unscrewing puzzle in the satisfying factory-tool genre: a plate full of crossed screws, a limited set of holes to park them in, and an order of operations that matters more than it first appears. Unscrew in the wrong sequence and the board jams.",
    instructions:
      "Tap screws to unscrew them and place each one into an open slot. Plan which screws to free first — a plate only comes apart when its screws leave in the right order.",
  },
  "royal-jelly-jam": {
    description:
      "Royal Jelly Jam is a bright match-and-merge puzzle set in a busy beehive kitchen. You pour, stack and combine jellies to fill royal orders, and later levels ask you to juggle several recipes on one crowded board.",
    instructions:
      "Tap or swap jellies to combine matching ones into higher tiers, then serve the requested orders before the board fills up. Bigger combinations earn bigger tips.",
  },
  "cannon-shooter-game": {
    description:
      "Cannon Shooter Game is a no-nonsense artillery puzzler: one cannon, a wall of targets, and limited ammunition per round. The early levels teach you arcs, the later ones assume you have learned to love them.",
    instructions:
      "Aim the cannon with your mouse or finger, adjust power, and fire at the targets. Clear every target before you run out of shots, and use ricochets where direct hits are impossible.",
  },
  "sky-hop-3d": {
    description:
      "Sky Hop 3D is a hopping course suspended in the clouds, where every platform is a decision. Chains of well-timed hops build combo multipliers, and one greedy leap over open air resets a run you had under control.",
    instructions:
      "Tap or press to hop from platform to platform. Hold for longer jumps, chain perfect landings for combos, and don't let the camera's perspective talk you into a bad leap.",
  },
  "tank-push": {
    description:
      "Tank Push is a compact sokoban-with-treads: a little tank, a warehouse of crates, and exit tiles that only open once every box sits where it should. The shooting adds a twist — your cannon nudges crates from a distance, which solves some puzzles and ruins others.",
    instructions:
      "Drive with the arrow keys or on-screen controls and push crates onto their target tiles. Use your cannon to shove crates you cannot reach directly, but remember you cannot pull them back.",
  },
  "boo-brew": {
    description:
      "Boo Brew is a cozy Halloween puzzler about running a potion stand for very picky ghosts. Orders stack up faster than your cauldron likes, and the late levels are a genuine exercise in batching the right brews together.",
    instructions:
      "Combine ingredients to match each ghost's potion order and serve before their patience runs out. Chained serves earn bonus points and buy you breathing room.",
  },
  "category-match-puzzle": {
    description:
      "Category Match Puzzle is a sorting game with a trivia twist: items arrive jumbled together and must be grouped not just by color or shape but by what they actually are. It is part tidy-up sim, part gentle brain teaser.",
    instructions:
      "Drag each item into the category it belongs to. Some items could plausibly fit two groups — read the categories first, then sort in the order that keeps your board clear.",
  },
  "mahjong-master-tile-sort-and-match": {
    description:
      "Mahjong Master: Tile Sort and Match modernizes the classic tile-matching formula with clean visuals and layouts that open up as you clear them. Free tiles in the wrong order and you will build yourself a dead board.",
    instructions:
      "Click two identical tiles that each have at least one side open to remove them. Clear the whole layout before time or moves run out, and prioritize the tiles blocking the most others.",
  },
  "pixel-jam-bus-puzzle": {
    description:
      "Pixel Jam is a rush-hour traffic puzzle in miniature: a bus lot frozen solid, one bus that needs to leave, and a grid of vehicles that can only move along their own facing. Every level is a small, satisfying untangling.",
    instructions:
      "Slide vehicles forward or backward along their orientation to carve an exit lane for the bus. Fewer moves earn more stars, so scan the whole lot before you start shoving.",
  },
  "ricopop": {
    description:
      "RicoPop is a bubble shooter that rewards the trick shot: cushions, banked angles and clusters popped from behind. Straight shots clear bubbles; clever shots clear whole sections.",
    instructions:
      "Aim with the mouse or drag, and fire to match three or more bubbles of one color. Bounce shots off walls to reach pockets that a direct line cannot, and don't let the ceiling push you into defeat.",
  },
  "try-again": {
    description:
      "Try Again is a bite-sized precision platformer that lives up to its name: short levels, instant respawns, and deaths that are always your fault. The loop is deliberately addictive — each failure teaches one more detail of the level.",
    instructions:
      "Run and jump to reach the exit of each stage. Obstacles reset you instantly to the start, so learn the timing piece by piece and piece the run together.",
  },
  pushplush: {
    description:
      "PushPlush is a soft, rounded pushing puzzle about herding plush toys into their matching slots. It looks gentle and stays gentle — the challenge is purely in which plush you move first when the room gets crowded.",
    instructions:
      "Push plush toys across the floor into the slots that match their color. Plushes only push, never pull, so plan your path before you commit to a corner.",
  },
  "draw-to-help": {
    description:
      "Draw to Help is an ink-and-physics puzzle: sketch a line, a ramp or a wild scribble, and whatever you draw becomes real. Each level's stranded character needs a specific kind of rescue, and there is usually more than one way to draw it.",
    instructions:
      "Draw shapes with your mouse or finger to build paths and move the character toward the goal. Your ink is limited, so make every stroke do work.",
  },
  "sorting-ball-quiz": {
    description:
      "Sorting Ball Quiz mixes a color-sorting puzzle with quick-fire trivia rounds. Balls pour in faster as you level up, and the quiz questions break the rhythm just enough to keep both halves of your brain employed.",
    instructions:
      "Tap a tube to drop the top ball into another, sorting balls so each tube holds one color. Answer quiz rounds between levels for bonus moves.",
  },

  // ---------- Arcade ----------
  glimmer: {
    description:
      "Glimmer is a neon arcade crawler about collecting light in a darkening maze. The glow you gather is also your score and your visibility, which makes every detour for one more sparkle a genuine risk decision.",
    instructions:
      "Move through the maze collecting glowing shards while avoiding the dark hunters. Your light radius shrinks as danger rises, so keep moving and grab the exit before the dark catches you.",
  },
  shaftbound: {
    description:
      "Shaftbound is a vertical descent arcade game: ride a mine shaft ever downward, dodging debris, grabbing gems and upgrading your rig between runs. The deeper you get, the less the shaft forgives hesitation.",
    instructions:
      "Steer left and right as you fall, slip between obstacles and collect gems. Spend gems on upgrades after each run to survive deeper shafts.",
  },
  "daddy-mouse": {
    description:
      "DADDY MOUSE is a frantic arcade chase about a mouse dad collecting cheese while staying ahead of everything that wants him gone. Levels are short, speed ramps hard, and the cheese greed is real.",
    instructions:
      "Run through each maze collecting cheese and dodging enemies. Grab power-ups to turn the tables briefly, and reach the exit hole before your pursuers corner you.",
  },
  "bug-crunch": {
    description:
      "Bug Crunch is a pest-control arcade game with attitude: waves of cartoon bugs march in from every side and your roller is the only thing between them and the kitchen. It starts cute and ends with you frantically flattening a beetle stampede.",
    instructions:
      "Move your roller to squash incoming bugs before they reach the end of their path. Bigger bugs take several passes, and missed waves come back meaner.",
  },
  "zaruvane-the-amber-oasis": {
    description:
      "ZARUVANE: The Amber Oasis is an atmospheric arcade adventure through a sun-bleached desert world. Puzzles and reflex challenges alternate as you restore life to a fading oasis, and the art style alone is worth the trip.",
    instructions:
      "Explore each area, solve the environmental puzzles and avoid the desert hazards to gather the amber shards. Collected shards revive parts of the oasis and unlock the path forward.",
  },
  "octobeer": {
    description:
      "Octobeer is a chaotic arcade bar-round about an octopus bartender juggling more mugs than any eight arms should handle. Orders slide in, arms fill up, and the tavern crowd does not believe in patience.",
    instructions:
      "Assign your octopus arms to pour, mix and serve drinks in the right order. Keep every customer's patience bar alive and clear the shift to advance.",
  },
  "midnight-taxi-hustle": {
    description:
      "Midnight Taxi Hustle is a city-driving arcade game set in the quiet hours, where the streets are empty but the fares are good. Pick up passengers, thread the night traffic and chain rides before the clock runs out.",
    instructions:
      "Drive with the arrow keys, follow the arrow to your passenger, and deliver them to their destination before the timer expires. Fast, clean rides earn bigger tips and extend your shift.",
  },
  "lumen-descent": {
    description:
      "Lumen Descent is a moody light-based arcade platformer: your lantern is your only view of the caves below, and it burns down as you go. Managing light against distance is the whole game, and it is a genuinely tense balancing act.",
    instructions:
      "Descend through the cave, platforming by lantern light and refueling your flame at glow points along the way. Reach each level's depths before your light dies.",
  },
  swarmfront: {
    description:
      "Swarmfront is a top-down survival arena against waves that simply do not stop. You pick upgrades between swarms, build a loadout on the fly, and every run is a fresh argument between firepower and footwork.",
    instructions:
      "Move with the keyboard or joystick and aim automatically or with the mouse. Survive each swarm wave, collect drops, and choose upgrades that fix whatever nearly killed you last round.",
  },
  "signal-survival-block-arena": {
    description:
      "Signal Survival: Block Arena is a shrinking-arena battle game where the floor itself is the enemy. Signal zones keep you alive but contested, blocks fall away, and positioning matters as much as aim.",
    instructions:
      "Move across the block arena and stay inside the active signal zone. Eliminate rivals, avoid the falling edges, and be the last one standing as the arena shrinks.",
  },
  "scary-granny-horror-maze-escape": {
    description:
      "Scary Granny: Horror Maze Escape is a first-person hide-and-seek horror maze. Granny hears everything, the layout shifts between attempts, and the exit key is never where you left your nerve.",
    instructions:
      "Explore the maze quietly, find the items needed to unlock the exit, and hide when Granny closes in. Sound attracts her — running is loud, so plan your routes.",
  },
  "impostor-dominion": {
    description:
      "Impostor Dominion is a social-deduction-flavored arena game: complete your tasks, watch the crew, and decide when to strike if you are the impostor. Rounds are quick, and reading the room beats raw speed.",
    instructions:
      "As crew, finish tasks and report suspicious behavior. As impostor, eliminate the crew without being seen and sabotage their progress before they finish.",
  },

  // ---------- Action ----------
  "formula-car-stunt": {
    description:
      "Formula Car Stunt takes a single-seat racer and points it at impossible tracks: loop-the-loops, sky gaps and ramps that ask for exactly the right speed. It is a stunt sandbox with a checkered flag's discipline.",
    instructions:
      "Accelerate and brake with the on-screen or keyboard controls and hit each ramp at the right speed to clear the stunt. Reach the finish line without falling off the track.",
  },
  "ragdoll-survivor": {
    description:
      "Ragdoll Survivor is a wave-based action game with gloriously floppy physics: your character flails, tumbles and ragdolls through enemy waves, and half the fun is that your dodge is never quite where you sent it.",
    instructions:
      "Move, attack and dodge through endless enemy waves, collecting power-ups between rounds. Survive as long as possible — every wave hits harder than the last.",
  },
  "stickman-bow-clash": {
    description:
      "Stickman Bow Clash is a one-on-one archery duel game with stickman physics: draw, aim, release, and watch a perfectly curved arrow decide the round. The ragdoll knockouts are half the appeal.",
    instructions:
      "Drag to draw your bow and set the arc, release to fire. Land hits on your stickman rival before they land theirs, and lead your shots when they start moving.",
  },
  "sniper-shooter-3d": {
    description:
      "Sniper Shooter 3D is a precision marksman game with clean 3D levels: study the scene, find your target, and make one steady shot count. Breath control and timing matter more than reflexes here.",
    instructions:
      "Aim with the mouse or drag, zoom to identify your target, and fire when your steadiness bar is right. Complete each mission's objective without hitting the wrong person.",
  },
  "shooter-outbreak-protocol": {
    description:
      "Shooter: Outbreak Protocol is a wave-based zombie defense shooter with a tactical streak — choke points, ammo management and upgrade choices decide how deep into the outbreak you get.",
    instructions:
      "Move with the keyboard, aim and shoot with the mouse, and hold each zone against incoming waves. Reload before you must, and spend upgrade points on the weakness that got you hit.",
  },
  "catchfish-mdash-fishing-master": {
    description:
      "CatchFish — Fishing Master is a relaxed-but-profitable fishing arcade: cast, hook, reel and build a collection of freshwater oddities. The rarity chase is where the quiet obsession kicks in.",
    instructions:
      "Cast your line, wait for a bite, then reel in with the right rhythm — too fast snaps the line, too slow loses the fish. Sell your catch to upgrade rods and unlock deeper waters.",
  },
  "dinos-rush": {
    description:
      "Dinos Rush is a prehistoric endless runner with a herd of unlockable dinosaurs. Swap between runners with different abilities, dodge the era's hazards and see how far the stampede carries you.",
    instructions:
      "Jump, slide and switch lanes to dodge obstacles as you run. Collect coins to unlock new dinosaurs, each with their own special move.",
  },

  // ---------- Casual ----------
  sparkzap: {
    description:
      "SparkZap is a quick-fire casual puzzle about connecting power nodes to complete circuits. Levels are bite-sized, but the later boards layer in switches and polarity flips that reward thinking two connections ahead.",
    instructions:
      "Drag between nodes to connect them and complete each circuit without crossing live wires. Hit the switch nodes to flip polarity and light up the whole board.",
  },
  "monster-caf-eacute-idle-tycoon": {
    description:
      "Monster Café: Idle Tycoon is a laid-back management game where your staff are adorable monsters and your customers keep coming anyway. Hire, upgrade and automate your way from a tiny food stall to a monster-run empire — progress continues even while you are away.",
    instructions:
      "Serve customers to earn coins, then spend them on new stations, faster monsters and menu upgrades. Check back often to collect offline earnings and unlock the next monster hire.",
  },
  "storm-dash": {
    description:
      "Storm Dash is a weather-chasing runner where the storm behind you is never far enough back. Sprint, slide and vault through escalating weather hazards, and enjoy a run that always ends faster than you would like.",
    instructions:
      "Jump and slide with the keyboard or swipe controls to clear obstacles. Keep ahead of the storm wall — the run ends the moment it swallows you.",
  },
  "funny-gummy-characters": {
    description:
      "Funny Gummy Characters is a lighthearted casual game about a cast of squishy gummy figures getting into bite-sized challenges. Mini-games rotate fast, the art is pure candy, and nothing takes more than a minute to learn.",
    instructions:
      "Play each mini-game with taps or simple drags, following the on-screen prompt for the round. Score high to unlock more gummy characters and new challenge types.",
  },
  "halloween-dentist-for-kids-2": {
    description:
      "Halloween Dentist for Kids 2 is a friendly pretend-play game where you run a dental clinic for monsters with sweet tooths. No scares, no timers — just gentle tool-based play aimed squarely at younger players.",
    instructions:
      "Pick the right dental tool and follow the prompts to clean, fix and polish each monster patient's teeth. Finish a patient to unlock the next one.",
  },

  // ---------- Sports & Racing ----------
  pocketgolf: {
    description:
      "PocketGolf is a miniature golf puzzler with clean courses and honest physics. Each hole is a small geometry problem, and the course design rewards bank shots over brute power almost every time.",
    instructions:
      "Drag back to set power and direction, then release to putt. Sink the ball in as few strokes as possible — walls are your friends if you use the angle.",
  },
  "euro-truck-parking": {
    description:
      "Euro Truck Parking is a big-rig precision game: articulated trailers, tight European lots and parking bays that were clearly designed by someone who dislikes trucks. Reversing an 18-wheeler has never been this humbling.",
    instructions:
      "Steer the truck with the arrow keys and use camera angles to line up your trailer. Park inside the marked bay without hitting anything — mirrors and patience win.",
  },
  "spooky-racing": {
    description:
      "Spooky Racing is a Halloween-themed kart racer with haunted tracks, pumpkins on the apex and rival drivers who take corners like they have nothing to lose. Item power-ups keep every race chaotic.",
    instructions:
      "Accelerate and steer with the keyboard controls, drift through corners and use item pickups to slow your rivals. Finish first to unlock the next haunted cup.",
  },
  "referee-simulator-3d": {
    description:
      "Referee Simulator 3D flips the pitch: you are the official, and every call you make — or miss — shapes the match. Positioning, timing and a good read of the play matter more than speed.",
    instructions:
      "Move around the pitch, watch each challenge closely, and make the call: foul, play on, card. Get decisions right to build your reputation and progress to bigger matches.",
  },
  "halloween-football-championship": {
    description:
      "Halloween Football Championship is a spooky-season soccer tournament with haunted stadium energy. Trick shots, costumed teams and a bracket that actually escalates make it a solid quick-play footy fix.",
    instructions:
      "Control your player with the keyboard or on-screen joystick, pass and shoot with the action buttons, and win each match to advance through the haunted championship bracket.",
  },
  "wall-rush-3d": {
    description:
      "Wall Rush 3D is a fast runner built around one brutal idea: walls appear, and they do not care about your momentum. Slide under, vault over or thread the gap — the reaction window shrinks with every checkpoint.",
    instructions:
      "Run forward automatically and use jump and slide inputs to pass each wall. Survive the increasing speed as long as you can and chase your best distance.",
  },
  "ramp-rider-mega-bike-racing": {
    description:
      "Ramp Rider: Mega Bike Racing is a stunt-bike racer with absurd ramps and a generous air-time budget. Flips earn boost, landings earn survival, and the balance between the two is the whole sport.",
    instructions:
      "Accelerate down the ramp, tilt in the air to pull flips, and level out before you land. Reach the finish line, earn boost from tricks and unlock faster bikes.",
  },
  "funny-cars-reload": {
    description:
      "Funny Cars Reload is a top-down combat racer where the cars are armored and the smiles are temporary. Missiles, mines and oil slicks turn every lap into a demolition derby with a finish line.",
    instructions:
      "Race with the keyboard controls, fire weapons with the action key, and use pickups scattered on the track. Cross the line first — wrecking rivals along the way is legal here.",
  },
};

const DRY = process.argv.includes("--dry");

const client = new Client({ connectionString: DATABASE_URL });
await client.connect();

if (DRY) {
  const slugs = Object.keys(FEATURED_COPY);
  const { rows } = await client.query(
    `SELECT slug, title FROM gq_games WHERE slug = ANY($1)`,
    [slugs]
  );
  const found = new Set(rows.map((r) => r.slug));
  console.log(`total copy: ${slugs.length}, found in DB: ${found.size}`);
  console.log("MISSING:", slugs.filter((s) => !found.has(s)).join(", ") || "none");
  await client.end();
  process.exit(0);
}

let rewritten = 0;
let missing = [];
for (const [slug, copy] of Object.entries(FEATURED_COPY)) {
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
