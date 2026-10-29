/**
 * Content de-dup remediation:
 * 1. Adds `featured` column to gq_games.
 * 2. Marks curated games + all local games as featured.
 * 3. Rewrites descriptions/instructions for curated GameMonetize games with
 *    original copy (the feed text is duplicated across thousands of sites).
 *
 * Non-featured games stay playable but are noindexed by the app and excluded
 * from the sitemap.
 */
import { Client } from "pg";

const FEATURED_COPY = {
  // ---------- Puzzle ----------
  "2244-number-match": {
    description:
      "2244 Number Match is a quiet, methodical number puzzle about doubling your way up a grid. Every merge opens breathing room on a board that fills fast, so the real skill is spotting the merge chain that frees the most space rather than grabbing the first pair you see.",
    instructions:
      "Click or tap matching number tiles to combine them into their sum's next step up the chain. Plan a few moves ahead and never let one corner of the grid clog up completely.",
  },
  "4-in-a-blow": {
    description:
      "4 in a Blow takes the connect-four rules everyone already knows and bolts on power-ups that wreck tidy plans. Bombs, clears and other surprises mean the classic diagonal trap only gets you so far — you have to read the power-up economy as carefully as the columns.",
    instructions:
      "Drop discs into columns on your turn and try to line up four in a row horizontally, vertically or diagonally. Use power-ups when the board turns against you, and watch what your opponent is stacking.",
  },
  blockblast: {
    description:
      "BlockBlast is the drag-and-drop block puzzle that has quietly eaten millions of coffee breaks. There is no timer and no gravity — just you, a grid, and three wooden shapes that must all find a home. The calm surface hides a genuinely sharp spatial puzzle.",
    instructions:
      "Drag the three offered shapes onto the grid. Complete a full row or column to clear it and score. The round ends when none of the remaining shapes fit, so always keep an exit lane open.",
  },
  "block-blaster": {
    description:
      "Block Blaster mixes block-matching with satisfying chain explosions. Groups of same-colored blocks pop together, and big enough groups trigger blasts that cascade into the blocks above — one smart match can snowball into a board-clearing chain.",
    instructions:
      "Click any group of two or more connected blocks of one color to pop them. Larger groups score more and charge bigger blasts, so resist clearing small clusters until you must.",
  },
  "block-crush": {
    description:
      "Block Crush is a fast, colorful block-breaker built for short sessions. Levels ramp up gently, special pieces keep the board lively, and the one-more-level pull is very real. A solid pick if you like puzzle games that respect your time.",
    instructions:
      "Swap or tap blocks to create matches of three or more of the same color. Clear the level objective before you run out of moves and use special pieces at the messiest moment, not the first one.",
  },
  "bubble-rush": {
    description:
      "Bubble Rush is a classic bubble shooter with a brisk pace: aim, bank shots off the wall and pop clusters before the ceiling creeps down. The banking mechanic is where the skill lives — direct shots are for beginners.",
    instructions:
      "Aim with the mouse or by dragging, then release to fire. Match three or more bubbles of one color to pop them, and use wall bounces to reach clusters tucked behind others.",
  },
  "bus-mania-parking-puzzle": {
    description:
      "Bus Mania turns parking into a sliding-block puzzle: a bus lot packed bumper to bumper, one stubborn bus that needs out, and a tangle of vehicles blocking every exit route. Each level is a small logic knot that untangles faster once you find the true stuck point.",
    instructions:
      "Drag vehicles along their facing direction to clear a path for the target bus to the exit. Buses and cars move differently, so study which way each one can slide before you start shuffling.",
  },
  "cake-sort": {
    description:
      "Cake Sort is a satisfying sorting puzzle with a dessert twist: layered cake slices must be stacked in the right order, one plate at a time. It starts trivial and quietly becomes a genuine planning exercise about which slice to move first.",
    instructions:
      "Move slices between plates so each cake ends up assembled in the correct stack order. A plate can usually only accept a matching slice, so plan your spare space carefully.",
  },
  "candy-sort": {
    description:
      "Candy Sort applies the beloved liquid-sort formula to a candy shop. Pour and swap until every jar holds a single color, with just enough spare jars to make every level solvable — but only if you don't waste them early.",
    instructions:
      "Tap a jar to lift its top candy, then tap another jar to drop it if allowed. Sort so each jar ends up one solid color, and think twice before committing a move that fills a spare jar.",
  },
  "bolts-and-nuts-online": {
    description:
      "Bolts and Nuts Online is a mechanical unscrewing puzzle that has become a surprisingly big genre. Plates overlap, screws pin each other down, and you must find the removal order that frees everything without wedging the rest tighter.",
    instructions:
      "Click screws to remove them — but only when nothing above still depends on them. Study which plate holds which before you start unscrewing, or you will deadlock the board.",
  },
  "crossmath-challenge": {
    description:
      "Crossmath Challenge is a crossword where the answers are equations. Arithmetic crosses arithmetic, and every solved line constrains the rest, so it plays like Sudoku for people who like actual numbers. A genuinely good daily-brain workout.",
    instructions:
      "Fill the empty cells with digits and operators so every horizontal and vertical equation is correct. Use the given numbers as anchors and eliminate possibilities row by row.",
  },
  "crazy-plinko": {
    description:
      "Crazy Plinko modernizes the pachinko-style drop game with multipliers, slots and risk choices. Where you drop matters less than which reward row you are aiming for, and the bounce physics keeps every ball suspenseful to the last peg.",
    instructions:
      "Pick your bet and drop the ball from the position you fancy. It bounces off pegs into a reward slot at the bottom — edge slots pay best, the middle pays safest.",
  },
  "animal-klotski": {
    description:
      "Animal Klotski refreshes the centuries-old sliding-block escape puzzle with a zoo cast. The classic klotski depth is intact: the board barely moves, but every move matters, and the solution is an order, not a trick.",
    instructions:
      "Slide the animal blocks around the board to escort the special character to the exit. Blocks only slide, never jump, so the puzzle is about creating and using space in the right sequence.",
  },

  // ---------- Action ----------
  "3d-police-car-parking": {
    description:
      "3D Police Car Parking drops you in a patrol car with realistic handling and a series of tight, obstacle-strewn lots. Precision beats speed here: clip one cone too many and the level restarts, so steady steering is the whole game.",
    instructions:
      "Drive with the arrow keys or on-screen controls and park in the outlined spot without hitting obstacles. Use the camera controls to check your angles before committing to tight turns.",
  },
  "archer-clash": {
    description:
      "Archer Clash is a one-on-one archery duel where trajectory, wind and timing decide everything. Matches are quick and the arc-shot learning curve is genuinely fun — leading a moving target across half the map never stops feeling good.",
    instructions:
      "Drag to set the angle and power of your shot, then release to fire at your opponent. Account for distance and wind, and keep moving between shots to dodge incoming arrows.",
  },
  "call-of-tanks": {
    description:
      "Call of Tanks is a compact tank strategy game about picking the right armor for the right wave. Deploy, upgrade and position your tanks as enemy columns roll in — the loadout decision before each wave matters more than your reflexes during it.",
    instructions:
      "Buy and place tanks on the battlefield, then start the wave and watch your defense work. Spend rewards on upgrades between waves and prioritize the unit types the next wave counters.",
  },
  "dino-hunter-jurassic-hunt": {
    description:
      "Dino Hunter: Jurassic Hunt is a first-person hunting expedition through dinosaur country. Patience, steady aim and knowing when a shot is a bad idea are the difference between a trophy haul and becoming one.",
    instructions:
      "Move through the level, aim down sights and take your shot when the target is clear. Bigger dinosaurs drop bigger rewards but demand better positioning before you pull the trigger.",
  },
  "gun-merge-mr-bullet": {
    description:
      "Gun Merge Mr Bullet fuses two addictive loops: solving ragdoll shooting puzzles and merging stronger guns between rounds. Each level is a short ricochet brainteaser, and the merge screen keeps dangling a better barrel in front of you.",
    instructions:
      "Aim your shots to hit all targets with as few bullets as possible, using walls and objects for ricochets. Between levels, merge duplicate guns into upgraded ones to unlock tougher stages.",
  },
  "bag-defense": {
    description:
      "Bag Defense is a tower-defense-meets-survival game where your loadout is literally what you carry. Choosing which gear goes in the bag shapes your entire defense, and the tension between firepower and flexibility is the core puzzle.",
    instructions:
      "Fill your bag with weapons and tools before the wave starts, then place and manage your defense as enemies close in. Rearrange your loadout between waves to cover what nearly broke through last time.",
  },
  "escape-the-giant-school-3d": {
    description:
      "Escape the Giant School 3D is a comedic stealth-run through an oversized school where everything — desks, doors, teachers — is scaled against you. Sprinting is easy; sprinting smartly, past patrolling giants and through timed gaps, is the game.",
    instructions:
      "Run with the movement keys and use cover and timing to slip past patrolling giants. Reach the exit of each area without being spotted, and learn each guard's route before you commit.",
  },
  "full-space-shooter": {
    description:
      "Full Space Shooter is a love letter to the arcade shoot-em-ups of the 90s: waves of enemies, screen-filling bullet patterns and upgrade pickups raining from every kill. It is tuned for flow — once a run gets going, it is very hard to put down.",
    instructions:
      "Move your ship and fire automatically or on click, dodge enemy bullets, and grab power-ups to stack your firepower. Survive the waves and spend your score on ship upgrades.",
  },
  "ambulance-rescue-game": {
    description:
      "Ambulance Rescue Game puts you behind the wheel with somewhere to be: pick up patients, thread city traffic and deliver them in time. The siren helps; your lane discipline helps more. A neat blend of driving sim and time pressure.",
    instructions:
      "Drive the ambulance with the arrow keys, follow the marker to the patient, then rush them to the hospital before the timer expires. Watch traffic and use the siren to keep the clock at bay.",
  },
  "farming-simulation-game": {
    description:
      "Farming Simulation Game covers the whole loop that makes farm sims so sticky: till, plant, water, harvest, sell, reinvest. Seasons and crop choice add a light strategy layer on top of the relaxing routine.",
    instructions:
      "Use the toolbar to till soil, plant seeds and water your crops, then harvest when they mature and sell at the market. Reinvest earnings into better seeds and expand your fields.",
  },

  // ---------- Arcade ----------
  "crash-tower-3d": {
    description:
      "Crash Tower 3D is physics demolition distilled: charge into stacked towers and watch the debris fly, then do it again bigger. It sits squarely in the satisfying-destruction genre, and the upgrade curve keeps each crash noticeably punchier than the last.",
    instructions:
      "Steer your vehicle into the tower to knock as much of it down as possible. Earn coins from the destruction and spend them on speed, power and size before the next structure.",
  },
  "demolition-tycoon-3d": {
    description:
      "Demolition Tycoon 3D wraps wrecking-ball physics in an idle-tycoon progression loop. Smash structures, collect the scrap, buy bigger hammers, repeat — a satisfying loop for anyone who likes numbers going up accompanied by collapsing buildings.",
    instructions:
      "Swing or drive your demolition tool into buildings to earn currency, then invest in stronger equipment and new sites. Idle income accrues between sessions, so check back to compound your progress.",
  },
  "geometry-vibes": {
    description:
      "Geometry Vibes is a rhythm-adjacent one-touch platformer in the geometry-runner family: your cube zips forward, obstacles arrive in musical patterns, and survival is a matter of internalizing each section's rhythm rather than reacting to it.",
    instructions:
      "Tap or click to jump (or fly, depending on the mode) and avoid every spike and wall. Sections repeat, so learn the pattern on each attempt and push a little further every run.",
  },
  "grab-io": {
    description:
      "Grab.io is an arena io game built around one verb: grab. Hook, yank and toss rivals out of the ring or into hazards while guarding your own footing. Rounds are short, comebacks are constant, and the physics do most of the laughing.",
    instructions:
      "Move around the arena and use the grab action to latch onto nearby players, then pull or throw them off the platform. Stay near the center and time your grabs for when opponents overextend.",
  },
  "going-up-rooftop": {
    description:
      "Going Up Rooftop is a vertical parkour climb with the satisfying tension of every height game: the higher you get, the more a single mistimed jump costs. Short sections and quick respawns keep frustration low and momentum high.",
    instructions:
      "Run and jump across rooftops, ledges and moving platforms to climb as high as you can. Time jumps from the edge and use camera drag to plan your next landing before you leap.",
  },
  "deep-drill": {
    description:
      "Deep Drill is a mining idle game about following the good stuff downward. Dig through layers, manage your drill's load, and return to the surface to sell — the deeper you push, the richer and more dangerous the strata become.",
    instructions:
      "Steer the drill downward, collect ores and surface before you overload. Sell your haul, upgrade drilling speed and capacity, and dive back down past your previous record.",
  },
  "car-wash-idle": {
    description:
      "Car Wash Idle runs the classic service-tycoon loop: cars queue up dirty, you wash, rinse and polish, and the profits fund a faster, fancier operation. Watching your scruffy garage turn into a gleaming automated car spa is the whole appeal.",
    instructions:
      "Drag customers' cars through each wash station in order, collect payments, and reinvest in stations and staff. Upgrades automate steps so the line keeps moving even while you plan.",
  },
  "haunted-house-idle": {
    description:
      "Haunted House Idle flips the tycoon formula spooky: instead of serving customers you scare them, upgrading ghosts, traps and jump-scares to maximize the frights per visitor. Cozy-horror vibes with genuinely funny visitor reactions.",
    instructions:
      "Place and upgrade haunted attractions along the visitors' path, collect the fear they generate, and reinvest in scarier exhibits. Balance scare power with throughput to keep guests flowing in.",
  },

  // ---------- Casual ----------
  "chess-3d": {
    description:
      "Chess 3D is a straightforward, no-nonsense chess set with a clean 3D board and adjustable difficulty. Whether you are relearning the rules or grinding your opening repertoire, it gets out of the way and lets you play.",
    instructions:
      "Click a piece to see its legal moves, then click a highlighted square to move. Beat the AI at your chosen difficulty or hand the device back and forth for local two-player games.",
  },
  "cake-stack": {
    description:
      "Cake Stack is a one-button stacking game with dessert aesthetics: layers swing overhead and you drop them onto a wobbling tower. Every slightly-off landing narrows your target, so perfection is rewarded and greed is punished quickly.",
    instructions:
      "Tap or click to drop the swinging cake layer onto the stack. Align each layer as closely as possible — overhangs are trimmed away, and running out of width ends the run.",
  },
  "cars-tycoon": {
    description:
      "Cars Tycoon lets you build the dealership-assembly empire of your inner twelve-year-old: produce cars, manage the line, expand the lot. Light management, cheerful pacing and a satisfying sense of the operation growing under your thumbs.",
    instructions:
      "Buy production stations, connect your assembly flow and keep cars rolling out to customers. Reinvest profits into more stations and faster lines to grow the tycoon.",
  },
  "cat-boba-tea-food-asmr-master": {
    description:
      "Cat Boba Tea is an ASMR food-prep game where you serve an endless parade of cats their exactly-ordered bubble tea. The pleasure is in the ritual: fill, shake, top, serve — with satisfying sounds doing half the work.",
    instructions:
      "Follow each cat's order: pick the cup, add the right ingredients and toppings, then serve before patience runs out. Accuracy matters as much as speed for tips.",
  },
  "dinosaur-dig": {
    description:
      "Dinosaur Dig is an excavation game for the paleontologist in all of us: brush away layers of sediment, uncover bones piece by piece and assemble the skeleton. Slow, tactile and oddly meditative.",
    instructions:
      "Use the dig and brush tools to carefully reveal the bones buried in the rock, then collect and place each piece into the skeleton outline. Work gently — some tools can damage finds.",
  },

  // ---------- Sports & Racing ----------
  "8-ball-pool-2d": {
    description:
      "8 Ball Pool 2D is clean, readable pool with honest physics and a proper rules engine — break, pot your group, sink the 8 last. The 2D top-down view makes bank shots and cue-ball control easier to learn than in most 3D pool sims.",
    instructions:
      "Drag to aim, adjust power and take the shot. Pot all your assigned balls (solids or stripes) before your opponent, then legally sink the 8-ball to win.",
  },
  "9-ball-pool-3d": {
    description:
      "9 Ball Pool 3D brings the faster, more tactical rack of nine-ball into a polished 3D table. Always shooting the lowest ball first creates constant combination puzzles, and the 3D view adds satisfying depth to long cuts.",
    instructions:
      "You must always strike the lowest-numbered ball first; pot the 9 early for an instant win or clear up to it. Aim with the mouse, set power, and use combos to cheat the order.",
  },
  "car-driving-master": {
    description:
      "Car Driving Master is a relaxed open driving playground with real-traffic roads, checkpoints and free-roam cruising. It doubles as a surprisingly decent place to practice smooth throttle and lane discipline without a timer breathing down your neck.",
    instructions:
      "Drive with the arrow keys or WASD, follow checkpoint routes in career mode or just cruise in free mode. Obey traffic and avoid crashes to keep your run clean and your score up.",
  },
  "mega-ramp-car-stunt-racing": {
    description:
      "Mega Ramp Car Stunt Racing is exactly what the title promises: impossible ramps, mid-air flips and landings that range from glorious to spectacular. The stunt-checkpoint structure gives it just enough purpose to keep you chasing the next bigger jump.",
    instructions:
      "Accelerate down the ramp, control your rotation in the air with the arrow keys, and land straight to survive. Complete checkpoints and stunts to unlock faster cars and wilder tracks.",
  },
  "city-bus-parking": {
    description:
      "City Bus Parking takes the hardest parking-anything question — a full-length bus — and makes a game of it. Tight lots, mirrored reversing and a wheelbase that punishes lazy steering make every successful park feel earned.",
    instructions:
      "Maneuver the bus into the marked bay using the arrow keys, minding the mirror view for rear clearance. Touch nothing on the way in; precision over pace.",
  },
  "extreme-car-parking-3d": {
    description:
      "Extreme Car Parking 3D escalates parking from lot to obstacle course: ramps, moving hazards and multi-point turns between concrete walls. A good next step once standard parking sims start feeling easy.",
    instructions:
      "Drive to the parking zone through the obstacle layout without collisions. Use the camera and mirrors, take multi-point turns patiently, and mind the hazards that move on timers.",
  },
  "soccer-battle-online": {
    description:
      "Soccer Battle Online shrinks football to its funniest form: a small arena, a big ball, and chaotic 3v3 brawls where goals happen in flurries. Car-style movement and power-ups make it feel closer to Rocket-League-style mayhem than FIFA.",
    instructions:
      "Move your player, kick and tackle to push the ball into the opposing goal. Score more than the other team before time runs out, and use power-ups when the ball is contested.",
  },
  "curve-free-kick": {
    description:
      "Curve Free Kick is a specialist's game: nothing but dead-ball situations, a defensive wall, a keeper with opinions and your ability to bend the ball around both. Learning the curve mechanic turns impossible angles into routine goals.",
    instructions:
      "Drag to set direction and curl on your free kick, then release to shoot. Bend the ball around the wall and away from the keeper — power matters less than placement.",
  },
  "pocket-golf": {
    description:
      "Pocket Golf is mini-golf distilled into tidy, puzzle-like holes. Each course is a short geometry problem — banks, slopes, windmills and all — and the two-putt finish always feels one stroke away, which is exactly the hook.",
    instructions:
      "Drag back from the ball to set aim and power, then release to putt. Sink the ball in as few strokes as possible, using walls and slopes to your advantage.",
  },
  "monster-truck-offroad-2": {
    description:
      "Monster Truck Offroad 2 hands you absurd suspension and a landscape designed to test it: mud, craters, hills and jumps across proper offroad courses. The physics-driven bounce is the star — half the fun is just seeing what the truck absorbs.",
    instructions:
      "Balance throttle and tilt with the arrow keys to climb, jump and land without flipping. Reach the finish of each course, collecting pickups and air time for score.",
  },
  "snow-rider-neo": {
    description:
      "Snow Rider Neo is a slick downhill sledding runner: carve the slope, hop obstacles and chain tricks while the speed keeps building. The one-more-run pull is strong, and near-misses are where the fun concentrates.",
    instructions:
      "Steer left and right, jump over rocks and gaps, and keep your run alive as long as possible. Collect gifts along the slope to unlock new sleds and gear.",
  },
  "derby-car-smash-challenge": {
    description:
      "Derby Car Smash Challenge is demolition-derby chaos in browser form: ram, wreck and outlast rival cars in an arena where every dent is mutual. Simple controls, big crashes and last-car-standing stakes.",
    instructions:
      "Drive into opponents to deal damage while dodging their charges — your car takes what it gives. Upgrade between rounds and be the last car running to win the derby.",
  },

  // ---------- Guide-covered GameMonetize games (rewrite feed copy) ----------
  "obby-rainbow-tower": {
    description:
      "Obby Rainbow Tower is a multiplayer tower race in the classic obby tradition: moving platforms, spinning hazards and portals — first to the top takes the crown. Falling is fast, respawning is instant, and the leaderboard never stays quiet for long.",
    instructions:
      "Run and jump up the tower, timing your moves to the rhythm of each obstacle. Use portals to skip sections once you have learned where they lead.",
  },
  "tiny-track-rally": {
    description:
      "Tiny Track Rally shrinks rally racing down to pocket size: chunky little cars, tight looping tracks and drift-heavy corners that reward brave throttle control. Easy to start, genuinely tricky to master at full speed.",
    instructions:
      "Steer with the arrow keys and feather the gas through corners to keep your drift tight. Beat the clock or rival cars across the championship tracks.",
  },
  "boo-chains": {
    description:
      "Boo Chains is a chain-reaction puzzle with a ghostly coat of paint: trigger one boo and watch a well-planned cascade clear the board. Levels are compact, solutions are elegant, and the chain previews make near-misses educational.",
    instructions:
      "Click to start the chain reaction from the right spot so boos clear every target on the board. Study each level's layout — order and position are everything.",
  },
  "monster-cafe-idle-tycoon": {
    description:
      "Monster Café Idle Tycoon puts you in charge of a restaurant whose clientele has tentacles. Hire staff, unlock recipes and let the income compound — an idle tycoon with charm to spare and a genuinely satisfying upgrade tree.",
    instructions:
      "Serve customers, collect earnings and reinvest in staff, kitchen stations and décor. Progress continues while you are away, so check back to collect and expand.",
  },
  "netherton-volleyball": {
    description:
      "Netherton Volleyball is a pixel-art volleyball duel with beefy, satisfying hit physics. Read the ball's arc, position under it and spike at the apex — simple to learn, extremely hard to stop playing once rallies get long.",
    instructions:
      "Move your player and jump to bump, set and spike the ball over the net. Win by points against the AI or challenge a friend in local two-player mode.",
  },
  "sort-master-satisfeel-asmr": {
    description:
      "Sort Master: Satisfeel ASMR is pure organizational therapy — cases, drawers and containers that fill up in exactly the right order, with sounds tuned to be genuinely calming. No timers, no fail state, just tidy.",
    instructions:
      "Drag items into their matching slots or compartments until everything is perfectly organized. Complete each satisfying setup and move on to the next.",
  },
  "warehouse-tetris-3d": {
    description:
      "Warehouse Tetris 3D reimagines the classic block puzzle as a packing job: rotate 3D boxes and slot them into a delivery container with no wasted space. Spatial thinking in three dimensions makes familiar mechanics feel new.",
    instructions:
      "Rotate each box and place it inside the container to fill it completely without overlaps. Clear the packing quota before you run out of boxes.",
  },
  "bow-or-die": {
    description:
      "Bow or Die is a survival archery gauntlet: waves of enemies close in and your bow is the only thing between you and the respawn screen. Draw, lead your target and prioritize — the rhythm of draw-and-release becomes hypnotic.",
    instructions:
      "Aim with the mouse, hold to draw for power and release to fire. Survive each wave, upgrade your bow between rounds and keep moving — standing still is how runs end.",
  },
  "obby-toilet-line": {
    description:
      "Obby Toilet Line is obby comedy at full power: an absurd queue-themed obstacle course of jumps, traps and moving parts, with the humor dialed all the way up. Underneath the jokes is a legitimately well-designed course.",
    instructions:
      "Run and jump through the obstacle course, timing each section and dodging the hazards. Laugh at the theme, respect the timing windows.",
  },
  darkhood: {
    description:
      "DarkHood is a moody stealth-action game about moving unseen: guard patrols, light and shadow, and takedowns that reward patience over aggression. A compact stealth experience that actually respects the genre's core loop.",
    instructions:
      "Move through each area avoiding guards' vision cones, use shadows and cover, and take down targets silently when the moment is right. Alerted guards make everything harder.",
  },
};

// Slugs with guides but no rewrite above still get featured (original guide
// content differentiates them); all local games are always featured.
const EXTRA_FEATURED = [
  // none — all guide-covered GM games have rewrites above
];

const DRY = process.argv.includes("--dry");

const client = new Client({ connectionString: process.env.DATABASE_URL });
await client.connect();

await client.query(`
  ALTER TABLE gq_games ADD COLUMN IF NOT EXISTS featured boolean NOT NULL DEFAULT false;
  CREATE INDEX IF NOT EXISTS gq_games_featured_idx ON gq_games (featured);
`);

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

// All local games are featured (original hand-written content).
const localRes = await client.query(
  `UPDATE gq_games SET featured = true WHERE source = 'local'`
);

const counts = await client.query(
  `SELECT source, count(*) FILTER (WHERE featured) AS featured, count(*) AS total FROM gq_games GROUP BY source`
);

console.log(`rewritten: ${rewritten}, local featured: ${localRes.rowCount}`);
if (missing.length) console.log("MISSING SLUGS:", missing.join(", "));
console.log(counts.rows);

await client.end();
