/**
 * Per-game original editorial copy (background + tips).
 * Purpose: satisfy AdSense's "embedded/copied content must carry added
 * commentary or expanded original text" requirement. Every entry below is
 * written uniquely per game — do NOT template or copy between games.
 *
 * Keyed by game slug (matches gq_games.slug in the database).
 */

export type GameEditorial = {
  /** 1–2 sentence origin / what-makes-it-notable paragraph. */
  background?: string;
  /** 2–4 genuine, game-specific play tips. */
  tips: string[];
  /** Unique per-game FAQ pairs for the page FAQ section + FAQPage schema. */
  faqs?: [string, string][];
};

export const gameEditorial: Record<string, GameEditorial> = {
  // ---------------- Self-hosted classics ----------------
  "2048": {
    background:
      "2048 began as a 2014 weekend project by Italian developer Gabriele Cirulli, built in a single afternoon as a take on earlier titles like 1024 and Threes!. Its genius is the constraint: a 4×4 grid, two disciplined directions of play, and the slow, satisfying climb toward a single 2048 tile. Over a decade later it is still the default 'one more try' puzzle on browsers everywhere.",
    tips: [
      "Lock your highest tile into one corner and never let it leave — every other move exists to protect that rule.",
      "Press only two arrows about 90% of the time (Left and Down for a bottom-left corner); Up is almost always a mistake.",
      "Build a descending snake chain so a single merge cascades across the whole row instead of creating isolated pairs.",
    ],
  },
  snake: {
    background:
      "Snake traces back to the 1976 arcade game Blockade and reached global fame as a pre-loaded extra on early mobile phones in the late 1990s. The loop is deceptively simple — eat, grow, don't bite yourself — but the tension of a screen that fills up one dot at a time is what made it a generational classic.",
    tips: [
      "Plan a 'safe lane' along the map edge so you always have room to loop back when the board gets crowded.",
      "Never chase food into a corner unless you already have a clear exit path on the other side.",
      "As you grow, slow your inputs down — most crashes come from tapping one move too early, not from bad strategy.",
    ],
  },
  tetris: {
    background:
      "Tetris was created in 1984 by Soviet software engineer Alexey Pajitnov and became the best-selling puzzle game in history. The falling-block premise is so pure that it has been reimplemented on virtually every device ever made — including, now, right here in your browser.",
    tips: [
      "Keep the stack flat: aim for at most one step of height difference between columns so you never get trapped.",
      "Reserve one clean well (empty column) for the I-piece to set up a four-line 'Tetris' clear, which scores far more than singles.",
      "Watch the next-piece preview and play for the piece after this one, not just the current faller.",
    ],
  },
  minesweeper: {
    background:
      "Minesweeper grew out of 1980s mainframe logic games and shipped to millions as part of Windows 3.1 in 1992, teaching a generation to read probability from numbers. Under the casual surface it is a pure exercise in deductive reasoning.",
    tips: [
      "Start with a corner or edge tile — opening moves there reveal the largest connected area when you get lucky.",
      "Use the '1-2-1' and '1-2-1' patterns: a 1-2-1 row of numbers almost always means mines sit on the outer squares.",
      "When a number equals the count of still-hidden adjacent squares, flag every one of them immediately and move on.",
    ],
  },
  "brick-breaker": {
    background:
      "Brick Breaker is a direct descendant of 1976's Breakout, which itself spun out of Pong when Atari asked: what if one player smashed a wall instead of volleying a ball? The modern browser version keeps the core thrill — a single paddle, a relentless ball, and a wall that must come down.",
    tips: [
      "Angle the ball with the paddle edges, not the center — side hits send it steeper and clear awkward top corners.",
      "Prioritize the highest bricks only after you have opened a reliable lane; losing the ball early wastes the whole board.",
      "Watch the ball's rebound rhythm and pre-position the paddle one step ahead rather than chasing it.",
    ],
  },
  "flappy-wings": {
    background:
      "Flappy-style games exploded in 2013 with a mobile hit that was famously difficult yet impossible to put down. Flappy Wings strips it to the essence: one input, endless pipes, and a high score that is always just out of reach.",
    tips: [
      "Tap in a steady rhythm rather than reacting to each gap — consistency beats fast reflexes here.",
      "Aim to pass through the lower-middle of every gap; staying too high risks clipping the top pipe.",
      "Briefly pause between attempts; the game rewards a calm, even tempo far more than panic tapping.",
    ],
  },
  "memory-match": {
    background:
      "Memory Match is the digital cousin of the physical 'Concentration' card game that has been played on kitchen tables for over a century. It is gentle enough for children and sharp enough to stay a genuine working-memory workout for adults.",
    tips: [
      "Mentally narrate each flip out loud ('red apple is top-left') — saying it cements the location in memory.",
      "When you find a pair, immediately recall where you last saw the two matching tiles before the board resets your attention.",
      "Work one region of the grid at a time instead of flipping random tiles; localized scanning improves recall.",
    ],
  },
  "word-guess": {
    background:
      "Word Guess follows the modern word-game tradition popularized in 2022: six tries, a hidden five-letter word, and a grid of colored clues. It is a quick daily-brain habit that rewards vocabulary and pattern spotting over luck.",
    tips: [
      "Open with a word that packs common vowels and frequent consonants, such as CRANE or SLATE, to reveal the most information.",
      "After the first guess, rule letters in or out before chasing position — eliminate dead letters first.",
      "Save a known green letter's position and test remaining unknowns with entirely new consonants each round.",
    ],
  },

  // ---------------- GameMonetize embeds ----------------
  "obby-rainbow-tower": {
    background:
      "Obby Rainbow Tower rides the 'obby' (obstacle-course) wave that grew out of social-game worlds, where the challenge is simply to reach the top without falling. Its rainbow palette and mix of ice, lava and teleport tiles make every run a slightly different reflexes test.",
    tips: [
      "Use the double-jump the instant you leave a spinning bar — a single jump rarely clears the moving gap.",
      "On icy tiles, tap Sprint (Shift) in short bursts; holding it makes you slide straight off the edge.",
      "Snowball portals teleport you forward but often drop you mid-air — pre-aim your next landing before entering.",
    ],
  },
  "obby-toilet-line": {
    background:
      "Obby Toilet Line leans into the absurd: you start stuck in a gas-station restroom queue and slowly climb toward the mysterious toilet at the front. It blends obstacle-course hopping with idle-style progression as you earn while you wait.",
    tips: [
      "In 2-player mode, let one character hold a safe ledge while the other scouts the next jump.",
      "Spend earned cash on queue upgrades early — faster progress means less time on the slippery floor sections.",
      "Treat the interact (E) prompts as timed: missing one can drop you to the back of the line.",
    ],
  },
  darkhood: {
    background:
      "DarkHood is a cozy-but-tense platform adventure built around a clever idea: the only light you get is your own aura. That single mechanic turns ordinary caves into nerve-testing navigation puzzles where sound and memory matter more than speed.",
    tips: [
      "Move slowly near sleeping monsters — your aura radius grows when you sprint, which can wake them.",
      "Memorize the layout of lit rooms; you will need to retrace it once the aura dims in the next cave.",
      "Collect glowing gems in a loop route rather than backtracking blindly through the dark.",
    ],
  },
  "tiny-track-rally": {
    background:
      "Tiny Track Rally is a colorful 3D arcade racer in the tradition of pick-up-and-play kart games. With multiple modes and a garage of unlockable cars, it rewards clean cornering more than raw acceleration.",
    tips: [
      "Tap nitro on the longest straight, not out of corners — you keep more speed by launching from a clean exit.",
      "In Checkpoint mode, prioritize the racing line over position; missing a gate costs more than a dropped place.",
      "Brake early for hairpins; this game punishes late braking with spins far more than gentle lifts.",
    ],
    faqs: [
      ["What modes does Tiny Track Rally have?", "Circuit races, checkpoint runs and free-drive practice. Checkpoint mode is the best training ground because it teaches the racing line without rival cars complicating it."],
      ["How do I unlock cars faster?", "Consistent podium finishes beat one lucky win — the payout curve rewards reliability. Practice the first two tracks until you can win them blind, then bank funds for the next car."],
    ],
  },

  // ---------------- Block puzzles & guide-linked games ----------------
  "block-blaster": {
    tips: [
      "Build along the walls early and keep the center open for odd-shaped pieces.",
      "Clear rows opportunistically once the board passes half-full — survival beats optimization.",
      "Save wide flat pieces for rescue moments rather than spending them on easy placements.",
    ],
    faqs: [
      ["How is Block Blaster scored?", "Line clears score points and simultaneous multi-line clears multiply. But the hidden score is survival length — every ten placements you survive raises your effective ceiling."],
      ["What ends a run?", "Running out of legal placements. The discipline that prevents it: never place a piece that fragments the board's empty rectangles into unusable slivers."],
    ],
  },
  "blockblast": {
    tips: [
      "Guard one completely empty 3x3 region — it can accept every piece shape in the game.",
      "Clear lines as soon as three rows fill; hoarding lines risks the piece you need never arriving.",
      "Place corner pieces first when they appear; late-game corners are where runs die.",
    ],
    faqs: [
      ["Is BlockBlast the same game as Block Blaster?", "They are separate takes on the block-grid puzzle genre with slightly different piece pools and scoring. The core skill — space management — transfers perfectly between them."],
      ["How do people score so high?", "Long-run discipline: keeping the board flat and the center open for hundreds of placements. Big scorers are not making flashier moves, they are refusing to make bad ones."],
    ],
  },
  "block-crush": {
    tips: [
      "Crush from the outer edge inward — interior crushes leave unreachable debris.",
      "Chain crushes upward: clearing below lets upper blocks fall into new matches.",
      "Watch the next-piece queue, not just the board; the queue is your real planning window.",
    ],
    faqs: [
      ["How does gravity work in Block Crush?", "Cleared blocks vanish and everything above drops straight down, so crushes near the bottom cascade into new matches. Planning a drop before crushing is the difference between one match and five."],
      ["Is there a fail state?", "Blocks stacking past the top line. Gravity is your recycling mechanism — every intentional bottom crush directly prevents the overrun."],
    ],
  },
  "pocket-golf": {
    tips: [
      "Lag long putts to tap-in range instead of chasing the hole.",
      "Read breaks in the final third of the putt — slopes affect a slowing ball most.",
      "Downhill putts deserve half power; the slope adds the rest for free.",
    ],
    faqs: [
      ["What makes Pocket Golf different?", "It focuses purely on putting green reads — slopes, breaks and pace — rather than full-course play. Each hole is a focused puzzle about where the ball will curve, not how far you can drive."],
      ["How do I read the greens?", "Treat the grid squares as tilt indicators and imagine water rolling across them. A putt aimed at the hole will drift downhill; one aimed uphill of the line arrives from the safe side."],
    ],
  },
  "pocketgolf": {
    tips: [
      "Two-putt discipline first: long putts are for position, not for holing.",
      "Downhill lies play shorter — the ball releases; uphill lies grab and stop.",
      "On multi-tier greens, landing on the correct tier matters more than total distance.",
    ],
    faqs: [
      ["Is PocketGolf a putting or full golf game?", "A compact course game centered on short-game precision: chips, pitches and putts over quick holes. It is the fastest golf loop available when you have five minutes."],
      ["How do I lower my scores quickly?", "Stop three-putting. Getting every first putt inside tap-in distance saves more strokes than any driving improvement, and short-game practice in PocketGolf trains exactly that touch."],
    ],
  },
  "thief-puzzle-long-hand-game": {
    tips: [
      "Watch guard patrol cycles for a full loop before extending the hand.",
      "Grab targets from behind cover whenever the angle allows it.",
      "Background objects often hide switches and decoys — interact with everything once.",
    ],
    faqs: [
      ["How do Thief Puzzle levels work?", "You control a stretchable thief arm that must reach valuables past guards, cameras and obstacles. Each level is a timing and route puzzle — the arm ignores walls but not watchers."],
      ["Why do I keep getting caught?", "You are moving while the watcher's vision cone faces your path. Every guard has a rhythm, and the levels are tuned so waiting one full cycle reveals the safe window."],
    ],
  },
  "tank-push": {
    tips: [
      "Never push a crate into a corner — pushes are irreversible in this game.",
      "Use shots to clear destructible blocks only where pushing cannot open the path.",
      "Solve the puzzle backward from the goal squares when stuck.",
    ],
    faqs: [
      ["Is Tank Push a Sokoban game?", "Yes — classic push-puzzle logic with a tank that can also shoot destructible obstacles. The shooting is the escape valve; the pushing is the puzzle itself."],
      ["How do I get better ratings?", "Levels rate you on move count. Before the first push, mentally trace the whole sequence — three-star solutions are short and never include corrective pushes."],
    ],
  },
  "sparkzap": {
    tips: [
      "Solve from the power source outward — every live tile must trace back to it.",
      "A stuck tile means an upstream rotation is wrong; fix one step back, not at the deadlock.",
      "Multi-endpoint levels are several small circuits sharing a trunk; identify the trunk first.",
    ],
    faqs: [
      ["What is SparkZap about?", "Circuit rotation puzzles: rotate wire tiles to conduct electricity from the source to every endpoint. It is pure topology logic with satisfying electric feedback when a line completes."],
      ["Do the puzzles have time limits?", "Later levels add optional timers for score, but the core puzzles are untimed — the game respects that circuit logic deserves thinking time."],
    ],
  },
  "ricopop": {
    tips: [
      "Picture the mirrored path — a bank shot lands where the straight line from the mirrored target points.",
      "Use walls to reach clusters hiding behind shields.",
      "One ricochet that clears two targets beats two direct shots every time.",
    ],
    faqs: [
      ["How do bank shots work in RICOPOP?", "Shots bounce off walls at mirrored angles, so aim as if the target were reflected on the other side of the wall. The bounce is the intended tool — some targets are unreachable without it."],
      ["Is ammo limited?", "Yes, and the limits are the puzzle. Efficiency play — one shot clearing two targets — is how the later stages stay beatable."],
    ],
  },
  "scary-granny-horror-maze-escape": {
    tips: [
      "Crouch-walk near patrol routes — noise is how Granny finds you.",
      "Memorize two hiding spots in every room you loot.",
      "Close doors behind you; they slow her pursuit more than distance does.",
    ],
    faqs: [
      ["How do I avoid Granny?", "Sound discipline: she hunts by noise, so crouch-walking near her routes and closing doors keeps her guessing. When spotted, break line of sight with corners and hide in the nearest closet rather than sprinting."],
      ["Is the game too scary to enjoy?", "The horror is jump-scare-light — tension rather than gore. Players who treat it as a stealth puzzle with a costume usually settle in after the first few hiding cycles."],
    ],
  },
  "midnight-taxi-hustle": {
    tips: [
      "Route around fewer turns, not shorter distance — corners cost more than road.",
      "Memorize the arterial streets; build every fare around them.",
      "Smooth driving keeps your rating; hard braking costs fares more than slow routes.",
    ],
    faqs: [
      ["What is Midnight Taxi Hustle?", "A night-shift taxi game where you balance speed, safety and fare value across a city. The hustle is route planning — every fare is a small optimization problem."],
      ["How do I earn the most per shift?", "Chain pickups by planning the next fare while driving the current one, and keep the ride smooth — high ratings unlock the premium passengers that make a shift."],
    ],
  },
  "swarmfront": {
    tips: [
      "Buy economy upgrades first — income multipliers compound through the whole run.",
      "Layer defenses across lanes so one breach cannot end the run.",
      "Keep one emergency ability in reserve through boss waves.",
    ],
    faqs: [
      ["What genre is Swarmfront?", "A wave-defense strategy game: hold a line against escalating swarms using upgrades and abilities. Between-wave spending decisions are where runs are decided."],
      ["What should I upgrade first?", "Whatever multiplies income. Early damage feels productive but pays for itself slowly; a bigger economy funds everything later, and the later waves are where games end."],
    ],
  },
  "formula-car-stunt": {
    tips: [
      "Three-quarter throttle on ramps gives controllable flight.",
      "Set your landing attitude immediately after takeoff — midair corrections come too late.",
      "Touch down with steering centered and throttle untouched until all four wheels grip.",
    ],
    faqs: [
      ["How do I land the mega jumps in Formula Car Stunt?", "Enter straight, correct the car's pitch as you leave the ramp, then hold still until touchdown. The moment of landing is not for steering — it is for letting the suspension do its job."],
      ["Are the tracks loopable?", "Yes — many stunt circuits reward clean lap chaining, and score multipliers build across consecutive successful runs. Consistency compounds in this game."],
    ],
  },
  "embercraft": {
    tips: [
      "Bank basic resources before the first nightfall — tools made in panic waste materials.",
      "Upgrade the fire first; light expands your safe working radius.",
      "Explore in loops back to camp rather than outward treks.",
    ],
    faqs: [
      ["What is EmberCraft?", "A survival crafting game centered on fire, light and resource management. The day-night cycle is the core pressure: gather while it is bright, craft while it is safe."],
      ["Is it beginner friendly?", "The opening loop teaches gathering and crafting one system at a time. The first night is deliberately survivable with basic preparation, and difficulty ramps from there."],
    ],
  },
  "tidy-bot": {
    tips: [
      "Sweep debris toward the dustpan zones, not just anywhere — destination matters.",
      "Tidy high-traffic paths first; clutter compounds where it is walked through.",
      "Charging pads are your route anchors — plan sweeps as loops past them.",
    ],
    faqs: [
      ["What is Tidy Bot about?", "You pilot a cleaning robot restoring messy rooms to sparkle ratings. It is relaxing task-play with light routing strategy, and the tidying feedback is genuinely satisfying."],
      ["How do the ratings work?", "Rooms score on completeness and efficiency. A tidy loop that never backtracks earns top ratings — the game quietly teaches route planning through mopping."],
    ],
  },
  "pixel-jam-bus-puzzle": {
    tips: [
      "Identify the bus's exit path first, then move blockers in reverse dependency order.",
      "Use empty spaces as buffer parking — temporary backwards moves open final lines.",
      "The hardest boards need setup moves that look counterproductive; trust the sequence.",
    ],
    faqs: [
      ["How do I free the jammed bus?", "Trace which vehicles block the exit, then move the furthest blocker first. Moving vehicles without tracing the chain usually jams the lot tighter than it started."],
      ["Is there a move limit?", "Efficiency ratings rather than hard caps — fewer moves earn more stars. The elegant solutions shift each vehicle exactly once."],
    ],
  },
  "boo-brew": {
    tips: [
      "Brew to order, not to stock — potion shelves fill with unsold inventory fast.",
      "Upgrade the cauldron before the shelves; brewing speed gates every rush hour.",
      "Ghost customers tip extra for pattern recognition — regulars have favorite brews.",
    ],
    faqs: [
      ["What is Boo Brew?", "A Halloween café management game: serve spooky patrons their potions before patience runs out. It is a light time-management loop dressed in charming ghost art."],
      ["How do rush hours work?", "Customer waves peak periodically, and the answer is cauldron speed plus preparation order. Reading the queue and brewing sequentially, not reactively, is what survives the rush."],
    ],
  },
  "bubble-rush": {
    tips: [
      "Cut cluster attachment points to drop whole groups at once.",
      "Bank shots off walls reach pockets hidden behind front rows.",
      "Keep clearing — most versions push the ceiling when shots stop landing.",
    ],
    faqs: [
      ["What is Bubble Rush?", "A bubble shooter with a time-pressure twist — the board advances unless you keep clearing. Speed and structural aim are both required, which separates it from relaxed bubble games."],
      ["How do I score big?", "Drop large hanging clusters rather than popping small groups. One attachment-point shot that frees twenty bubbles is worth more than a dozen matched pairs."],
    ],
  },
  "galaxy-pop": {
    tips: [
      "Cluster same-color orbs before popping — grouped pops multiply.",
      "Use gravity: popping below a hanging chain drops it for bonus clears.",
      "Bank shots reach shielded pockets; direct lines are not the only lines.",
    ],
    faqs: [
      ["Is Galaxy Pop a bubble shooter in space?", "Yes — the classic aim-and-pop loop with a cosmic skin and gravity physics on the popped debris. The gravity chain drops are where the satisfying scores live."],
      ["Does it end?", "Levels clear and the galaxy map advances with escalating board complexity. It is level-based rather than endless, which suits short sessions."],
    ],
  },
  "grab-io": {
    tips: [
      "Grab from the sides rather than head-on; side grabs steal momentum.",
      "Center grabs hold best — edge grabs shed objects under acceleration.",
      "Drop low-value items when a better target enters range.",
    ],
    faqs: [
      ["What is Grab.io?", "A fast grab-battle game where you snatch objects and rivals from an arena, growing stronger with each successful grab. It plays like a reverse dodge game — the aggression is the mechanic."],
      ["Is it multiplayer?", "Yes, .io-style arena play against other players, with rounds short enough that losing never stings. Grab positioning is the whole skill."],
    ],
  },
  "hollow-pass": {
    tips: [
      "Conserve the lantern — light spent on shortcuts is light missing at the end.",
      "Mark corridor branches mentally in pairs; unmarked branches are how you circle back.",
      "The exit hums: listen before you sprint.",
    ],
    faqs: [
      ["What is HOLLOW PASS?", "A tense dungeon corridor crawler where you manage a limited light resource while navigating toward the exit. It is atmospheric rather than combat-heavy — the pressure is the dark itself."],
      ["How long is a run?", "Runs are roguelite-short: minutes when clean, longer when lost. Learning the pass layouts across attempts is the progression."],
    ],
  },
  "lumen-descent": {
    tips: [
      "Descend through lit rooms and bank the unlit ones for the return trip.",
      "Light sources replenish in cycles — return to a lit room when dim, not desperate.",
      "Map vertical landmarks; every floor has one unmistakable reference point.",
    ],
    faqs: [
      ["What kind of game is Lumen Descent?", "A light-management descent: you go deeper while your glow budget shrinks, balancing forward progress against the light needed to get back. Descending is easy; the return is the game."],
      ["Is it horror?", "Tense, not horrific — no jump scares, just the steady pressure of fading light. It plays like a resource puzzle wearing a cave-exploration costume."],
    ],
  },
  "shaftbound": {
    tips: [
      "Ladder climbs cost stamina — plan rest ledges before long verticals.",
      "Ore veins glow faintly; tunnel toward glow rather than grid-sweeping.",
      "Depth equals danger and reward: bank shallow ore before the deep runs.",
    ],
    faqs: [
      ["What is Shaftbound?", "A mining-descent game where you dig shafts, manage supplies and extract ore from progressively deeper and darker levels. It is cozy-industrial — methodical planning with pickaxes."],
      ["How deep should I go early?", "One ore run deeper than you can safely climb back from is the classic mistake. Match descent ambition to your supply budget, and bank shallow ore until upgrades change the math."],
    ],
  },

  // ---------------- Racing & traffic riders ----------------
  "snow-rider-neo": {
    tips: [
      "Brake before the hill crest, not on it — you cannot see what is behind.",
      "Deep powder kills speed; ride the groomed lines when the clock matters.",
      "Chain tricks only over long landings; short gaps punish greed.",
    ],
    faqs: [
      ["Is Snow Rider Neo a trick game or a race?", "Both — timed descents where tricks add time bonuses. The scoring layers on top of the racing line rather than replacing it."],
      ["Why do I keep crashing?", "Late braking on blind crests. Entering hills at controlled speed means you see the landing before committing to it."],
    ],
  },
  "super-nitro-racing-3": {
    tips: [
      "Spend nitro on corner exits, not straights you already own.",
      "Slipstream the leader before overtaking — the tow is worth a full boost.",
      "Brake in a straight line; trail-braking spins these cars easily.",
    ],
    faqs: [
      ["How does nitro recharge work?", "Driving cleanly — clean laps, drafting and overtakes — refills the tank. That loop rewards racing craft over conservative cruising."],
      ["What is the best car to main?", "The balanced starter cars teach the tracks better than the top-speed monsters. Upgrade only once you are fast in something forgiving."],
    ],
  },
  "neo-traffic-rider-championship": {
    tips: [
      "Weave between lanes rather than braking — traffic games score near-misses.",
      "The longer you stay above speed thresholds, the faster the multiplier climbs.",
      "Watch two cars ahead, not one; the gap you need opens before you reach it.",
    ],
    faqs: [
      ["Is Neo Traffic Rider endless?", "Yes — an endless traffic run where distance and near-misses build score. Runs end in walls and trucks, so the skill is reading traffic like water."],
      ["Do near-misses matter?", "They are the core scoring mechanic. Every clean pass at speed feeds the multiplier, which is why defensive crawling scores nothing."],
    ],
  },
  "derby-car-smash-challenge": {
    tips: [
      "Hit opponents with your car's corners — corners transfer force, centers absorb it.",
      "Target cars that just took a hit; damaged opponents are cheap knockouts.",
      "Avoid the arena edges early; pile-ups collect at the walls.",
    ],
    faqs: [
      ["What is the derby goal?", "Be the last car moving — destruction is the win condition, not a means to one. Steering is your weapon as much as your armor."],
      ["How do I survive the chaos?", "Stay away from three-car pile-ups and deliver hits at speed with your corner. Cars that trade hits evenly all day lose to cars that pick their moments."],
    ],
  },
  "police-car-chase-prison-escape-game": {
    tips: [
      "Break pursuit line-of-sight with corners, then hide rather than outrun.",
      "Roadblocks have a gap car — memorize the pattern before the spike strip.",
      "Damage kills the escape; trade paint only when the gap closes anyway.",
    ],
    faqs: [
      ["How do the police track me?", "By sight and noise — staying in their headlights is what keeps the chase alive. Corner-cutting and hiding resets the pursuit meter."],
      ["Is the escape timed?", "Chapters are checkpointed with soft timers, but the real pressure is pursuit intensity, which escalates the longer you stay visible."],
    ],
  },
  "bike-stunt-master-mini-rush": {
    tips: [
      "Land rear-wheel-first and slightly nose-up; flat landings break runs.",
      "Half-throttle over jumps gives the control that full speed takes away.",
      "Chain small hops rather than saving for one mega stunt.",
    ],
    faqs: [
      ["What is Bike Stunt Master about?", "Short stunt-course runs on tight miniature tracks — balance, throttle control and landing discipline over raw speed."],
      ["Why do I keep crashing after jumps?", "Nose-down landings. Correct the bike's pitch in the air with small brake or gas taps, and treat landing as the skill, not the jump."],
    ],
  },

  // ---------------- Shooter & defense ----------------
  "shooter-outbreak-protocol": {
    tips: [
      "Headshot the runners, body-shot the tanks — ammo economics decide waves.",
      "Reload between engagements, not during them.",
      "Retreat to choke points when overwhelmed; corridors are force multipliers.",
    ],
    faqs: [
      ["What is Shooter: Outbreak Protocol?", "A wave-based survival shooter with escalating enemy protocols. The loop is positioning plus ammo discipline — the horde punishes panic spray."],
      ["Which upgrades matter first?", "Reload speed and magazine size. Sustained output beats per-shot damage when enemies arrive in streams, and both upgrades multiply every wave after them."],
    ],
  },
  "shooter-zombie-survival": {
    tips: [
      "Move constantly — zombies converge on stillness.",
      "Save explosives for cluster moments; single-target grenades waste waves.",
      "Clear your backtrail: zombies path to where you were, not where you are.",
    ],
    faqs: [
      ["How do I survive later waves?", "Space management: fight near escape routes, never in dead-end rooms. Zombie survival is about where you stand far more than how fast you shoot."],
      ["Are there boss enemies?", "Yes — armored variants that shrug off body shots. Reserve heavy ammo for them and let the crowd fall to cheap weapons."],
    ],
  },
  "urban-military-strike": {
    tips: [
      "Use cover to split enemy groups; fighting six at once is a reload problem.",
      "Flank via side streets — frontal approaches meet prepared defenses.",
      "Ammo crates respawn on a cycle; learn their locations like map features.",
    ],
    faqs: [
      ["What is Urban Military Strike?", "A cover-based tactical shooter across city combat zones — squad-level engagements where positioning outweighs trigger speed."],
      ["Is there a difficulty curve?", "Zones escalate enemy variety and cover complexity. The early zones teach the cover rhythm the later zones assume you have."],
    ],
  },
  "scrap-arms-neo": {
    tips: [
      "Merge parts between waves, never during them.",
      "Keep one fast weapon and one heavy — mixed loadouts cover every wave shape.",
      "Sell duplicates immediately; scrap value decays as tiers rise.",
    ],
    faqs: [
      ["What is SCRAP ARMS NEO?", "A weapon-merge defense shooter: combine salvaged parts into better guns while holding positions against waves. The merge board is the actual battlefield."],
      ["Which merges should I prioritize?", "Fire rate on your main gun first, then damage on the heavy. Waves arrive as volume, and volume is what fire rate solves."],
    ],
  },
  "elemental-barrage": {
    tips: [
      "Match elements to enemy weaknesses — wrong-element shots cost double.",
      "Save the barrage meter for shielded waves; unshielded waves die to normal fire.",
      "Reposition between volleys; the turret sweep punishes static play.",
    ],
    faqs: [
      ["How does elemental matching work?", "Enemies carry elemental armor, and matching your ammunition to their weakness breaks it fast. The game is a color-matching layer on top of a defense shooter."],
      ["What is the barrage meter?", "A charged super-volley built by effective hits. Spending it on shielded waves converts accumulated good play into a wave-clear."],
    ],
  },
  "arms-race": {
    tips: [
      "Every early economy unit pays for itself by the third wave.",
      "Counter the composition you see, not the one you fear.",
      "Bank a late-game slot for the enemy's first heavy unit.",
    ],
    faqs: [
      ["What genre is Arms Race?", "A lane-battler: units auto-clash while you manage the economy and composition. It reads like strategy and plays like a puzzle."],
      ["How do I know what to build?", "Watch what the opponent fields and answer it directly. Reactive counters beat proactive favorites in every matchup."],
    ],
  },
  "bag-defense": {
    tips: [
      "Funnel enemies through one upgraded lane rather than defending three weak ones.",
      "Save abilities for wave-end leaks; mid-wave use wastes them.",
      "Ground clutter is cover for fast enemies — clear sightlines early.",
    ],
    faqs: [
      ["What is Bag Defense?", "A tower-defense variant where your defensive 'bags' hold chokepoints against streams of enemies. Placement geometry does the fighting, your timing decides the tide."],
      ["How hard is it?", "The early waves are tutorial-gentle and difficulty climbs with enemy speed variety. The fun is discovering each map's intended funnel."],
    ],
  },
  "block-ship-battle": {
    tips: [
      "Battleships need airflow around them — packed grids lose cannons.",
      "Merge identical hulls before combat, not during.",
      "Target the enemy flagship's support boats first; flagships heal from escorts.",
    ],
    faqs: [
      ["What is Block Ship Battle?", "A merge-and-battle naval game where you assemble block warships and duel rival fleets. Building discipline before the fight decides the fight."],
      ["How do fleet battles resolve?", "Auto-battle with your layout as the input — weapon placement and hull tier are the variables you control, so the dockyard is the actual game."],
    ],
  },
  "call-of-tanks": {
    tips: [
      "Tanks counter infantry, infantry counter vehicles — deploy to the matchup.",
      "Capture points pay more than kills; play the objective economy.",
      "Repair between pushes; wounded tank columns are donations to the enemy.",
    ],
    faqs: [
      ["Is Call of Tanks a war strategy game?", "Yes — a light RTS: build tank columns, capture points, and counter the enemy composition. Games are short and readable, built for quick sessions."],
      ["What is the fastest way to win?", "Economy discipline: hold capture income, counter-pick units, and attack with repaired forces. Most losses are spending mistakes, not tactical ones."],
    ],
  },
  "full-space-shooter": {
    tips: [
      "Stay near screen center — edges halve your dodge options.",
      "Save screen-clear bombs for bullet-pattern walls, not emergencies.",
      "Collect power-ups with grazing movement; greed kills runs.",
    ],
    faqs: [
      ["What is Full Space Shooter?", "A vertical bullet-hell shooter in the arcade tradition — memorizable patterns, tight hitboxes, and score built on survival and chaining."],
      ["How do I survive dense bullet patterns?", "Small movements near the screen center and reading the pattern's rhythm rather than each bullet. The safe lanes in every pattern are its pauses."],
    ],
  },
  "crash-tower-3d": {
    tips: [
      "Pull blocks from the middle rows — edge blocks are load-bearing.",
      "Watch the tower's lean before each pull; a leaning tower punishes symmetry.",
      "Alternate pull sides to keep the center of gravity centered.",
    ],
    faqs: [
      ["What is Crash Tower 3D?", "A Jenga-style physics stacker: extract blocks without toppling the tower. Every pull is a load-path decision, and the 3D view shows you the lean honestly."],
      ["How high can towers go?", "As long as your pulls stay clean — the physics allows impressive heights. Most topples trace to one greedy pull two moves before the fall."],
    ],
  },
  "wrecking-ball-tycoon": {
    tips: [
      "Upgrade swing weight before ball size — momentum clears buildings, not surface area.",
      "Chain contracts in the same district to cut travel overhead.",
      "Sell salvage immediately; the yard pays out on schedule regardless.",
    ],
    faqs: [
      ["What is Wrecking Ball Tycoon?", "A demolition business game: take contracts, swing the ball, sell salvage, upgrade equipment. It is destruction with an income statement."],
      ["What upgrades pay back fastest?", "Swing weight. Heavier momentum collapses structures in fewer passes, and passes are what your contracts are billed in."],
    ],
  },
  "demolition-tycoon-3d": {
    tips: [
      "Plan the collapse direction before the first hit — falling walls pay for cleanup mistakes.",
      "Dynamic zones score style: collapse into the target zone, not merely down.",
      "Upgrade the excavator before the wrecking crew; cleanup gates contracts.",
    ],
    faqs: [
      ["How is Demolition Tycoon 3D played?", "Structured demolition contracts: bring buildings down inside designated zones for pay, then clear the rubble. Strategy lives in the collapse plan, not the swinging."],
      ["Is there a sandbox mode?", "Yes — free demolition for stress relief and practice, separate from the contract career. Practicing collapse angles there makes the paid contracts cleaner."],
    ],
  },

  // ---------------- Idle & management ----------------
  "car-wash-idle": {
    tips: [
      "Upgrade drying before washing — the exit is the bottleneck, not the soap.",
      "Golden customers pay multiples; never let one queue behind regulars.",
      "Expand bays only when both queues back up; idle cash in bays earns nothing.",
    ],
    faqs: [
      ["How does Car Wash Idle progress?", "Serve cars, earn cash, upgrade each wash stage and open bays. The strategy is bottleneck management — always upgrade the slowest station first."],
      ["Does it run while closed?", "Offline earnings accrue on a capped timer, so collecting regularly converts idle time into income."],
    ],
  },
  "cars-tycoon": {
    tips: [
      "Sell in boom cycles, hold in busts — the market pulses on a schedule.",
      "Diversify one showroom per tier; single-tier inventory dies in downturns.",
      "Reputation upgrades compound with every sale — buy them before stock.",
    ],
    faqs: [
      ["What is Cars Tycoon about?", "Building a car dealership empire: buy stock, price against demand cycles, expand showrooms. It is an economics game wearing car keys."],
      ["How do I price cars?", "Against the demand curve, not the sticker. Watch how long cars sit — fast sales mean you priced too low, and no sales means you priced yourself out of the cycle."],
    ],
  },
  "farming-simulation-game": {
    tips: [
      "Rotate crops by field, not season — soil recovers per plot.",
      "Buy the second field before upgrading equipment; acreage multiplies everything.",
      "Water at dawn; growth timers run from planting, and dawn-watered crops sync harvests.",
    ],
    faqs: [
      ["Is the farming simulation relaxing or demanding?", "Both, by design — daily loops are meditative, but profit requires actual crop planning. Treating it purely as zen mode leaves money on the table."],
      ["What should I buy first?", "A second field. Acreage compounds every cycle, and equipment upgrades only matter once you have crops worth accelerating."],
    ],
  },
  "leaf-blower-yards": {
    tips: [
      "Blow toward the compost corner — piles count, scattered leaves do not.",
      "Sweep in arcs, not lines; arcs collect, lines disperse.",
      "Upgrade air power before bag size; throughput beats capacity.",
    ],
    faqs: [
      ["What is Leaf Blower Yards?", "A yard-clearing game where you herd autumn leaves into collection zones for pay. It plays like a reverse vacuum puzzle and reads as pure autumn calm."],
      ["How do levels score?", "By completeness and speed. The secret to both: never chase individual leaves — move the whole drift with patient arcs."],
    ],
  },
  "haunted-house-idle": {
    tips: [
      "Scare tourists, never visitors — scares pay, hospitality does not.",
      "Upgrade the attraction heart of the house first; wings feed the heart.",
      "Re-invest event earnings the same cycle; idle income decays when parked.",
    ],
    faqs: [
      ["What is Haunted House Idle?", "Running a haunted attraction for profit: room upgrades amplify scares, scares attract tourists, tourists fund the empire. It is an idle game with a grin."],
      ["How does prestige work here?", "Reopening at a scarier tier multiplies all future income. Prestige timing follows the same rule as every idle game — reset when the next hour outpaces your current run."],
    ],
  },
  "monster-caf-eacute-idle-tycoon": {
    tips: [
      "Upgrade the monster waiters before expanding locations — faster service compounds across every café.",
      "Tap coin bags and lucky bats the moment they appear; idle bonuses expire.",
      "Open new locations in order; skipping ahead stretches income too thin to staff.",
    ],
    faqs: [
      ["Is this the same game as Monster Café: Idle Tycoon?", "Yes — this listing is the same charming Halloween café management game, so the same strategy applies: waiter upgrades first, expansion second, collect bonus taps immediately."],
      ["What is the endgame?", "A chain of fully staffed monster cafés earning while you are away, with prestige multipliers for reopening at higher tiers. The collection loop stays rewarding well past the first café."],
    ],
  },

  // ---------------- Simulation & roleplay ----------------
  "hospital-surgeon-doctor-game": {
    tips: [
      "Triage by timer, not by severity order — patients closest to critical go first.",
      "Sterilize tools during animations, not between patients.",
      "Reinvest in the second operating room before the fancy tools; throughput heals more people.",
    ],
    faqs: [
      ["Is Hospital Surgeon realistic?", "It is stylized — real surgical pacing, arcade execution. The time-pressure loop teaches prioritization, which is genuinely the core skill of emergency medicine."],
      ["Is it too graphic for kids?", "No — procedures are cartoon-clean with no graphic content. The pressure is clocks, not blood, making it appropriate for players who enjoy time-management games."],
    ],
  },
  "ambulance-rescue-game": {
    tips: [
      "Route by traffic, not by distance; the fast road beats the short one.",
      "Stabilize before transport — a patient lost in transit pays nothing.",
      "Learn the hospital approaches on quiet shifts; sirens do not fix blind corners.",
    ],
    faqs: [
      ["What is the Ambulance Rescue loop?", "Emergency calls, route decisions and patient stabilization under time pressure. It plays like a driving game where every second has a medical cost."],
      ["Why do patients deteriorate in my ambulance?", "Transport time counts against their condition. Stabilizing fully before departure usually beats rolling out fast with a half-treated patient."],
    ],
  },
  "referee-simulator-3d": {
    tips: [
      "Position to see the defensive line before the pass, not after it.",
      "Book early fouls cheaply — cards are crowd management tools.",
      "Watch the keeper at set pieces; most missed incidents hide behind walls.",
    ],
    faqs: [
      ["What do you actually do as the referee?", "Track play, spot fouls, decide cards and manage the match clock. It is a perception game — you are graded on incidents you catch, and punished for those you invent."],
      ["Is it harder than playing football?", "Differently hard: no ball control, but continuous judgment. The best training is watching for the foul you cannot yet see, then checking the replay your score grades you on."],
    ],
  },
  "cat-boba-tea-food-asmr-master": {
    tips: [
      "Layer drinks bottom-up — syrup settles and ruins top layers if reversed.",
      "Tap customers' orders twice to confirm customization; remakes cost the combo.",
      "Save cute decorations for the screenshot moment after service, never during.",
    ],
    faqs: [
      ["What is Cat Boba Tea about?", "Running a cozy boba shop for cat customers — preparing drinks to order with satisfying ASMR-style feedback. The relaxation is the product; the score is a bonus."],
      ["Is there pressure gameplay?", "Mild rush waves exist, but the design keeps tension low. It is the right game for winding down rather than ramping up."],
    ],
  },
  "skincare-makeover-makeup-game": {
    tips: [
      "Treat the client's stated concern before the style request — the base rating comes from the diagnosis.",
      "Match product to skin type; generic routines cap your score.",
      "Finish with the client's original request, not your favorite look.",
    ],
    faqs: [
      ["What is the gameplay in Skincare Makeover?", "Diagnostic-style beauty routines: choose treatments, apply steps in order and finish to the client's brief. It rewards following instructions rather than creative freedom."],
      ["Are the products realistic?", "The categories mirror real skincare logic — cleansing before treatment, treatment before protection — which quietly teaches an actually useful order of operations."],
    ],
  },
  "fashion-show-dressup": {
    tips: [
      "Match the theme literally first — judges score concept fit before craft.",
      "Color palettes beat single statement pieces; cohesion wins shows.",
      "Rehearse the runway once; pose timing is judged and often forgotten.",
    ],
    faqs: [
      ["How does Fashion Show scoring work?", "Theme interpretation, outfit cohesion and runway presentation combine into judge scores. The fastest improvement is committing fully to the theme instead of mixing styles."],
      ["Is there a story mode?", "Yes — a competition ladder where each round raises the theme difficulty and unlocks the wardrobe. Progression rewards range, not hoarding."],
    ],
  },
  "cheerleader-magazine-dressup": {
    tips: [
      "Read the magazine cover brief — the shoot needs the outfit to photograph, not just to look good.",
      "Contrast colors pop on covers; pastels wash out.",
      "Accessory balance is judged — one statement piece beats five competing ones.",
    ],
    faqs: [
      ["What is Cheerleader Magazine Dressup?", "A styling game where cheer outfits are assembled for magazine covers, scored against the shoot brief. It is a visual-literacy puzzle more than a fashion free-play."],
      ["How do I score five stars?", "Follow the brief's color and mood words exactly, then add one eye-catching accent. Stars reward brief compliance, not adventurous taste."],
    ],
  },
  "jenni-styles": {
    tips: [
      "Build looks around one hero piece; wardrobes score cohesion over quantity.",
      "Save the premium wardrobe pieces for themed challenges, not daily quests.",
      "Replay early challenges with unlocked items — old levels reward new fashion.",
    ],
    faqs: [
      ["What is Jenni Styles?", "A wardrobe-curation styling game: compose outfits to briefs, unlock pieces and climb style challenges. The depth is in constraint interpretation, not item count."],
      ["Is it free to progress?", "Yes — challenges unlock wardrobe items through play rather than purchases, so scoring well is the only currency that matters."],
    ],
  },
  "halloween-dentist-for-kids-2": {
    tips: [
      "Clean in the order the tray presents — the sequence teaches the real one.",
      "Use the mirror tool on back teeth; cavities hide where the light does not reach.",
      "Calm the patient meter before procedures, not during.",
    ],
    faqs: [
      ["Is Halloween Dentist suitable for kids?", "Yes — it converts dental anxiety into a monster-themed game where the child holds the tools. The procedures are real enough to teach brushing habits gently."],
      ["What do you actually do?", "Clean, fill and extract on cartoon monster teeth in correct clinical order. It is a light medical-sequencing game, which is more fun than it sounds."],
    ],
  },

  // ---------------- Casual, runner & misc ----------------
  "geometry-vibes": {
    tips: [
      "Muscle-memory the first ten seconds; the levels are songs and the beats repeat.",
      "Attempt count beats attempt quality — restart instantly, do not study mid-run.",
      "Practice mode exists: learn the hard section in isolation.",
    ],
    faqs: [
      ["Is Geometry Vibes a rhythm platformer?", "It follows the Geometry Dash lineage — one-button levels synchronized to the music where memorization is the skill. Every death teaches one beat of the song."],
      ["How do players finish the hard levels?", "Hundreds of quick restarts, not long analysis. The level becomes muscle memory faster than it becomes conscious knowledge."],
    ],
  },
  "storm-dash": {
    tips: [
      "Dash toward gaps, not away from storms — speed is your only shield.",
      "The storm telegraphs its next lane; watch the pattern, not the cloud.",
      "Collect only what sits in your dash line; detours cost more than pickups pay.",
    ],
    faqs: [
      ["What is Storm Dash?", "A lane-runner where you dash between safe paths while a pursuing storm accelerates. It rewards forward commitment — hesitation is what the storm catches."],
      ["How is score calculated?", "Distance plus pickups gathered without detour. The top runs are straight-line dances through the gap patterns."],
    ],
  },
  "sneaky-spikes": {
    tips: [
      "Read spike rhythm in full cycles before entering a corridor.",
      "Half-steps between spikes beat full commits — the safe windows are tight.",
      "Death positions are information: your last run mapped the timing.",
    ],
    faqs: [
      ["What is Sneaky Spikes?", "A precision timing platformer — cross spike gauntlets whose patterns cycle predictably. It is a patience game wearing a reflex costume."],
      ["Is it brutally hard?", "Tight but fair: every gauntlet has a visible rhythm, and deaths are quick. Players who watch before they walk finish levels; players who rush do not."],
    ],
  },
  "pirate-dodge": {
    tips: [
      "Dodge diagonally — straight dodges run out of ocean.",
      "Cannon volleys alternate sides; count them rather than reacting.",
      "Stay near the center lane for maximum reaction margin.",
    ],
    faqs: [
      ["What is Pirate Dodge?", "A ship-dodging survival game — steer through cannon fire and floating hazards on open water. Score is survival time, and the sea gets denser as it goes."],
      ["How do I dodge the volleys?", "By counting. Enemy ships fire in alternating patterns, so the second you learn the cycle you are already moving before the shot arrives."],
    ],
  },
  "ragdoll-survivor": {
    tips: [
      "Protect the head at all costs — ragdolls end at the neck.",
      "Use the environment: hazards that damage enemies are your best weapons.",
      "Land flat and wide; crumpled ragdolls absorb nothing.",
    ],
    faqs: [
      ["What is Ragdoll Survivor?", "A physics-comedy survival game where your floppy character endures escalating hazards. Success is controlling momentum — the physics is the opponent."],
      ["Why does my character flop everywhere?", "Because momentum is the real control system. Small inputs early beat heroic corrections late, and flat landings keep runs alive."],
    ],
  },
  "octobeer": {
    tips: [
      "Catch full mugs, tap half-mugs — overflow kills the score.",
      "Serve the row that has waited longest; patience meters run in order.",
      "Chain same-row serves for combo bonuses.",
    ],
    faqs: [
      ["What is Octobeer?", "An Oktoberfest-themed serving game: fill, catch and deliver mugs faster than thirsty patrons lose patience. It is a light arcade time-management game in lederhosen."],
      ["How do the combos work?", "Consecutive serves to the same row build a multiplier. Reading which row's meter is closest to empty is the whole strategy."],
    ],
  },
  "nutty-rush": {
    tips: [
      "Grab nuts on the return path, not the outbound — loaded squirrels move slower.",
      "Bank at the nearest hole when the hawk appears; distance is death.",
      "One perfect loop beats three greedy ones; drops reset your streak.",
    ],
    faqs: [
      ["What is Nutty Rush?", "A collect-and-return arcade run — gather nuts, dodge predators, bank them at the burrow before they are knocked loose. Risk management is the scoring engine."],
      ["Why do I keep losing my nuts?", "Greed: carrying past a safe bank moment while the hawk's shadow grows. Banking smaller loads more often is the higher-scoring strategy, not the safer one."],
    ],
  },
  "dinos-rush": {
    tips: [
      "Duck under low branches, jump the stampede gaps — the two moves alternate in patterns.",
      "Collect eggs only on flat stretches; slopes eat your jump timing.",
      "Speed pads are commitments: use them only with clear runway.",
    ],
    faqs: [
      ["What is Dinos Rush?", "A dino-runner through prehistoric terrain — jump, duck and sprint past hazards while collecting eggs. The level patterns repeat, and memory outruns reflexes."],
      ["Is it kid-friendly?", "Yes — colorful, no fail-state punishment beyond restart, and the difficulty stays gentle through the early worlds."],
    ],
  },
  "try-again": {
    tips: [
      "Every death is the level's hint — replay the same approach once before changing it.",
      "The game's title is the strategy: persistence compounds skill here faster than brilliance.",
      "Take the checkpoint-free runs slowly; speed is earned after mastery.",
    ],
    faqs: [
      ["What is Try Again?", "A precision platformer built around its own name — short brutal levels where the run-restart loop is the core mechanic. It respects the player by making every failure legible."],
      ["How many levels are there?", "A tight campaign of escalating gauntlets, each solvable in under a minute once learned. The game's length lives in your learning curve, not its level count."],
    ],
  },
  "word-game-2026": {
    tips: [
      "Open with consonant-heavy words to map the letter pool early.",
      "Eliminate before you chase — knowing what is absent narrows twice as fast.",
      "Vowel position tests are worth more than new-letter tests by round three.",
    ],
    faqs: [
      ["How does Word Game 2026 differ from other word-guess games?", "It iterates the modern word-guess loop with fresh daily puzzles and a cleaner hint economy. The deduction fundamentals remain the joy."],
      ["What is the best opening word?", "One heavy in common letters — CRANE-style openers. The opener's job is information, not luck, and common letters maximize it."],
    ],
  },
  "royal-jelly-jam": {
    tips: [
      "Match three adjacent jellies only when it frees a fifth — efficiency scoring rules.",
      "Keep the queen's row clear; jelly piles that reach her end the level.",
      "Bank the special jellies for the jam walls; they clear rows nothing else touches.",
    ],
    faqs: [
      ["What is Royal Jelly Jam?", "A candy-match puzzle with a royal-bee twist: clear jelly clusters while the hive's structure changes beneath you. It is a match-three with architectural ambitions."],
      ["Are there boss levels?", "Yes — jam-wall stages where ordinary matches barely dent the obstacle. The intended solution is saving special jellies for exactly those walls."],
    ],
  },
  "impostor-dominion": {
    tips: [
      "Sabotage rooms you can reach fastest — distance from your alibi is the tell.",
      "Vote with the plurality, never against it; wrong votes cost more than wrong kills.",
      "The crew trusts the repairman — be near sabotages, never at them.",
    ],
    faqs: [
      ["What is Impostor Dominion?", "A social-deduction game in the Among Us lineage: deceive, sabotage and vote your way to dominance. Playing the crew's trust rather than their fear is the winning skill."],
      ["How do I win as impostor?", "By being forgettably helpful: fix what you sabotage, vote with the crowd, and kill where your alibi places you far from. Loud impostors die loud."],
    ],
  },
  "8-ball-pool-2d": {
    tips: [
      "Plan position for the shot after the one you are taking — cue ball control beats potting skill.",
      "Use soft power as the default; the 2D tables overreact to hard hits.",
      "Play a safety when no clean pot exists rather than gifting your opponent an open table.",
    ],
    faqs: [
      ["What are the rules of 8 Ball Pool 2D?", "Standard eight-ball: pot your group (solids or stripes), then the black 8 to win. Fouls on the 8 ball or potting it early hand the frame to your opponent, so the endgame matters more than the opening."],
      ["How do I get better at cue ball control?", "Practicing soft shots with deliberate position goals. Choose where the white should stop for the next pot before you strike, and treat every miss as a positioning lesson rather than a potting one."],
    ],
  },
  "9-ball-pool-3d": {
    tips: [
      "The lowest-numbered ball is always the legal target — plan caroms off it when it is blocked.",
      "Use the 3D camera angle to read long cut shots; the overhead view flattens the angles.",
      "Break hard and control the cue afterwards; a scattered table with no plan loses frames fast.",
    ],
    faqs: [
      ["How is 9 ball different from 8 ball?", "Nine-ball is rotation play: you must always hit the lowest-numbered ball first, and potting the 9 wins immediately. Games are shorter and more tactical — combos and caroms are the core skills."],
      ["Is the 3D view harder to aim with?", "Slightly, but it also shows true ball spacing that flat tables hide. Spending one practice session adjusting to depth perception makes long cut shots far more reliable."],
    ],
  },
  "curve-free-kick": {
    tips: [
      "Curve is applied by where you strike relative to the ball's center — off-center hits bend it.",
      "Aim your starting line outside the wall and let the curve bring it back inside the post.",
      "Power matters more than curl for far free kicks; near walls need the opposite recipe.",
    ],
    faqs: [
      ["How does the free kick physics work?", "Your aim sets the initial trajectory and your strike point adds spin, so the ball curves mid-flight. Reading where the wall's edge is and bending around — not over — it is the consistent technique."],
      ["How do I score from long range?", "Use full power with moderate curve, aimed at the corner just inside the post. Long kicks needcommitted contact rather than placement precision, which surprises most players at first."],
    ],
  },
  "halloween-football-championship": {
    tips: [
      "Monster players have bigger hitboxes — passing lanes close faster than in normal soccer games.",
      "Shoot across the keeper's body rather than near-post; the spooky keepers cover their near side well.",
      "Special abilities recharge per goal; save them for defensive clearances rather than showboat shots.",
    ],
    faqs: [
      ["Is Halloween Football a real soccer game?", "It is a full arcade football championship with a spooky skin — real passing, shooting and keeper mechanics, just played by costumed monsters. The tournament structure gives it genuine progression."],
      ["Can I play a season or only single matches?", "Championship mode strings matches into a season with escalating opponents, while quick play offers single games. The season mode is the better way to learn the teams' quirks."],
    ],
  },
  "soccer-battle-online": {
    tips: [
      "Hold your defensive line until the opponent commits forward — counter goals are the easiest ones.",
      "Pass into space, not to feet; the online lag makes feet-passes arrive late.",
      "Practice the first-touch animation window in training mode before ranked matches.",
    ],
    faqs: [
      ["Is Soccer Battle multiplayer?", "Yes — online 1v1 or small-sided matches against real players, with quick matchmaking. There is also practice mode for warming up your first touch before facing humans."],
      ["Why do my passes get intercepted?", "Because they are aimed at players rather than at space. Online opponents read where the ball will arrive; passing ahead of the runner into open grass beats passing to his current position."],
    ],
  },
  "chess-3d": {
    tips: [
      "Use the 3D board's depth to spot long diagonal attacks you would miss on flat boards.",
      "Develop knights before bishops and castle within the first ten moves.",
      "Play the opponent's last move twice in your head — most blunders come from ignoring threats while planning.",
    ],
    faqs: [
      ["Is the chess engine strong?", "The difficulty levels span beginner-friendly through genuinely challenging club-level play. The mid tiers are well tuned for casual improvement — they punish one-move blunders without playing perfectly."],
      ["Does the 3D view help or hurt?", "It adds depth perception that makes board vision more natural once you adapt, and you can usually switch to a classic 2D view. Piece legibility stays clear at every angle."],
    ],
  },
  "catchfish-mdash-fishing-master": {
    tips: [
      "Reel in pulses — when the tension meter runs red, ease off immediately.",
      "Sell your smallest catch to fund rod upgrades; the first two upgrades multiply catch value fast.",
      "Deeper water holds bigger fish but needs a stronger line; upgrade before wandering down.",
    ],
    faqs: [
      ["Why does my fishing line keep snapping?", "Constant maximum tension is the cause. Reel while the fish rests and release while it runs — the meter is a survival gauge, and riding the red zone is how lines break."],
      ["Is there a progression system?", "Yes — rod, line and reel upgrades unlock deeper fishing spots with rarer fish. Selling early catches to fund the first rod upgrade is the fastest opening move."],
    ],
  },
  "slingshot-shooting-game": {
    tips: [
      "Pull further for flatter trajectories — short pulls loft the pellet and drop it early.",
      "Aim slightly above distant targets; the slingshot's drop is stronger than a rifle's.",
      "Chain breakable targets in a line with one shot; the pellet carries through light objects.",
    ],
    faqs: [
      ["How accurate is the slingshot physics?", "The pellet drops and slows like a real projectile, so distance estimation is the actual skill. Close shots play almost straight while long shots need visible elevation."],
      ["What targets are worth the most?", "Moving and partially hidden targets pay more than static ones. The smart play is clearing the static field first, then hunting the movers when your aim is warm."],
    ],
  },
  "bottle-breakshot": {
    tips: [
      "Hit bottle necks for instant shatter — body hits need more force.",
      "Keep some ammo for the swinging shelf bottles; they reset and pay out repeatedly.",
      "Line up two bottles with one shot; aligned rows are worth double and cost one pellet.",
    ],
    faqs: [
      ["What is Bottle Breakshot?", "A shooting-gallery game where bottles swing on shelves and your shots have limited ammo. It rewards geometry — lining up targets — far more than fast trigger pulling."],
      ["How do I beat the ammo-limited levels?", "Never fire at a single bottle when two align, and let the swinging shelves bring targets to you. A patient gallery shooter finishes levels with ammo to spare; a hurried one runs dry."],
    ],
  },
  "archer-clash": {
    tips: [
      "Headshots register best on a still target — bait the enemy into stopping first.",
      "Swap to rapid light shots for moving duelists, save charged shots for stationary heavies.",
      "Learn each arena's cover rhythm; the bow's arc shoots over low walls that guns cannot.",
    ],
    faqs: [
      ["What is Archer Clash?", "An archery duel game — you and AI opponents trade arrows across obstacle-filled arenas. Cover, angle and arrow drop all matter, making it feel more like chess than a shooter."],
      ["How do I win consistently?", "Keep moving between shots and aim where the opponent will stand, not where they are. Duels are decided by who controls the timing of exchanges, and cover use decides that timing."],
    ],
  },
  "stickman-bow-clash": {
    tips: [
      "Aim above distant rivals to compensate for arrow drop, and settle the reticle before release.",
      "Partial-draw quick shots keep pressure on in close duels; full draws win long ones.",
      "Move between volleys — a stationary archer is a free headshot for the enemy.",
    ],
    faqs: [
      ["Is Stickman Bow Clash single or multiplayer?", "It is built around AI duels with escalating difficulty, in quick round-based fights. The duel loop is tight enough that beating your own high streak becomes the long-term game."],
      ["What is the fastest way to improve?", "Stick to one draw strength per session and learn its exact arc. Consistency builds the muscle memory that headshot streaks are made of — switching styles every round resets it."],
    ],
  },
  "sniper-shooter-3d": {
    tips: [
      "Use hold-breath at the end of the sway cycle — the reticle naturally pauses there.",
      "Body shots on moving targets, headshots only on still ones.",
      "Scan scenes in left-center-right thirds; movement betrays targets faster than color.",
    ],
    faqs: [
      ["How do I stop missing at long range?", "The scope sways on a cycle, and the trick is firing during its natural pause while holding breath. Distance also matters — bullets take time to travel, so lead anything that walks."],
      ["Is Sniper Shooter 3d violent?", "It is stylized target-shooting against robots and silhouettes rather than graphic violence — think shooting gallery with a scope. The tension is marksmanship, not gore."],
    ],
  },
  "gun-merge-mr-bullet": {
    tips: [
      "Merge guns of the same tier before the wave starts — mid-wave merges waste fire time.",
      "Save Ricochet bullets for clustered targets; they double-dip in crowds.",
      "Aim your first bullet at the environment: a falling crate can clear three enemies free.",
    ],
    faqs: [
      ["How does Gun Merge work?", "You combine duplicate guns into higher tiers between waves, so economy discipline matters as much as aim. The merge board is where runs are actually won or lost."],
      ["What is the best merge strategy?", "Keep the board empty of single low-tier guns — merge pairs immediately and always keep one free slot. A tidy merge board funds stronger weapons exactly when waves demand them."],
    ],
  },
  "cannon-shooter-game": {
    tips: [
      "Adjust elevation before power — angle corrections are finer-grained than power ones.",
      "One shot per structure pillar beats three shots at walls; find the load-bearing block.",
      "Bank shots off terrain work: shells bounce predictably on shallow slopes.",
    ],
    faqs: [
      ["Is Cannon Shooter a physics puzzle?", "Yes — projectile arcs, destructible structures and sometimes bouncing shells. Each level is a small geometry problem where the answer is where, not how hard, to fire."],
      ["How do I clear levels with limited shots?", "Identify the structure's support points and let gravity do the demolition. Collapsing a tower with one well-placed hit is the intended solution to the star-rated levels."],
    ],
  },
  "bug-crunch": {
    tips: [
      "Squash bugs in corner routes where they funnel — open-field chasing wastes time.",
      "Chain quick squashes before the combo timer resets for score multipliers.",
      "Leave one slow bug alive as a combo keeper when the screen clears.",
    ],
    faqs: [
      ["What is Bug Crunch?", "A reflex game about squashing insects before they reach their target — simple, fast and unexpectedly tactical once the bugs start moving in coordinated streams."],
      ["How does scoring work?", "Consecutive squashes build a combo multiplier that decays over a few seconds. Speed matters, but a maintained combo is worth more than raw swatting."],
    ],
  },
  "dinosaur-dig": {
    tips: [
      "Brush around fossil edges first; the outline reveals the safe dig directions.",
      "Follow bone shapes — fossils continue in anatomical lines, not random scatter.",
      "Use the small brush near joins; the big tool shatters thin connections.",
    ],
    faqs: [
      ["Is Dinosaur Dig educational?", "Yes — it teaches the real patience of paleontology field work: slow excavation, fragile joins and anatomical guessing about where a bone continues. Completing a skeleton teaches its structure naturally."],
      ["How long does a dig take?", "Early sites finish in a few minutes and later ones in a satisfying quarter hour. The meditative pace is the appeal, not the speed."],
    ],
  },
  "dog-runaway": {
    tips: [
      "Predict the dog's dash direction from its body language — it always telegraphs.",
      "Close gates before chasing; an open field makes the dog uncatchable.",
      "Use treats as corner traps: lure it toward you at dead ends only.",
    ],
    faqs: [
      ["What is Dog Runaway about?", "Chasing a runaway dog through obstacle yards — part reflex game, part prediction game, since the dog reacts believably to your movement and blocks."],
      ["Why can't I catch it?", "You are chasing it directly, which is exactly how dogs love to play. Cut off escape routes and let the dog come to a corner instead — approach control, not sprint speed, is the skill."],
    ],
  },
  "draw-to-help": {
    tips: [
      "Draw ramps, not platforms — rolling objects use slope, not support.",
      "One continuous line beats several short strokes; physics trusts joined geometry.",
      "Leave gaps where you want the object to drop, and close them where you want support.",
    ],
    faqs: [
      ["What kind of game is Draw to Help?", "A physics puzzler where you draw lines that become real objects, guiding characters toward goals. It rewards sketching like an engineer — simple lines doing structural work."],
      ["Does my drawing precision matter?", "Only rough geometry does. The physics is forgiving about wobble but strict about slope and gaps, so clean simple shapes beat detailed elaborate ones."],
    ],
  },
  "save-my-pet-game": {
    tips: [
      "Cut ropes in reverse-load order — the last supporting rope usually swings the pet to safety.",
      "Draw barriers before cutting; a falling pet needs a landing plan first.",
      "Watch pendulum timing: the pet's swing carries it past gaps that look unreachable.",
    ],
    faqs: [
      ["How does Save My Pet work?", "Cut-the-rope style physics: your pet hangs from lines amid hazards, and you sever or add ropes to deliver it safely. Every level is a small physics experiment in load and momentum."],
      ["Are there many levels?", "Dozens across difficulty tiers, introducing buzzsaws, water and movable anchors one mechanic at a time. New rules are layered rather than dumped, so learning never stalls."],
    ],
  },
  "funny-cars-reload": {
    background:
      "Funny Cars Reload is a cartoon racer that prizes personality over realism — crazy vehicles, bouncy physics and tracks that get harder the further you climb. It is the kind of game you play in short, laughing bursts.",
    tips: [
      "On bouncy tracks, ease off the accelerator before jumps so you land wheels-down instead of roof-first.",
      "Use the wider arcs of corners to line up the next straight; cutting too tight sends you into the wall.",
      "Replay earlier levels to bank unlocks — a better car makes the later difficulty spikes far more manageable.",
    ],
  },
  "boo-chains": {
    background:
      "Boo Chains is a spooky match-and-chain puzzle where you link cute Halloween monsters by number to set off satisfying chain explosions. The map structure and boss every ten stages give it a surprising amount of progression for a casual puzzler.",
    tips: [
      "Link monsters that are 'one apart' in number when you can — those chains trigger bigger cascades than equal pairs.",
      "Save the hint (H) for boss stages; wasted hints elsewhere leave you stuck on the ten-stage wall.",
      "Free trapped monsters first; a cleared tile often opens a longer chain you could not see before.",
    ],
  },
  "monster-cafe-idle-tycoon": {
    background:
      "Monster Café: Idle Tycoon wraps a relaxed management loop in hand-drawn Halloween charm. Slimes, ghosts and vampires queue for bat lattes while you upgrade machines and open new locations — the kind of game that rewards checking in often.",
    tips: [
      "Tap coin bags and lucky bats the moment they appear; idle bonuses disappear if you ignore them.",
      "Upgrade the monster waiters before expanding locations — faster service compounds across every café.",
      "Open new locations in order; skipping ahead stretches your income too thin to staff properly.",
    ],
  },
  "netherton-volleyball": {
    background:
      "Netherton Volleyball is a quick pixel-art take on the sport where you command a whole 6v6 team with timed taps. Its retro look hides a genuinely tactical game about reading the bounce and calling the right hitter.",
    tips: [
      "Tap the court only when the ring turns green — early or late inputs miss the dig entirely.",
      "Level up your front-row hitters first; they convert the sets your back row sets up.",
      "Watch the opponent's formation between points to predict where their next serve will land.",
    ],
  },
  "sort-master-satisfeel-asmr": {
    background:
      "Sort Master: Satisfeel ASMR is a calm sorting puzzle built around the relaxing feel of putting things in their place. Drag-and-drop mini-games of food, cabinets and objects make it a genuine stress-break rather than a score-chase.",
    tips: [
      "Sort by category before color — grouping types first makes the final arrangement almost automatic.",
      "Don't rush the drag; the satisfying snap is the point, and mis-drops cost you a restart on that tray.",
      "Unlock the next challenge the moment the current one clears so your streak of calm sessions continues.",
    ],
  },
  "warehouse-tetris-3d": {
    background:
      "Warehouse Tetris 3D reframes the classic block puzzle as a spatial packing problem: load boxes, crates and cargo into trucks and containers, rotating pieces in three dimensions. It scratches the same brain itch as Tetris but adds a satisfying logistics layer.",
    tips: [
      "Fill the floor layer completely before stacking — a flat base prevents the leaning gaps that waste space.",
      "Use Q/E rotation to test a piece's footprint before placing; wrong angles eat your efficiency score.",
      "In Time Attack, prioritize any clear fit over the perfect one; a moving board punishes hesitation.",
    ],
  },
  "bow-or-die": {
    background:
      "Bow or Die is a fast physics archery survival game: draw, calculate the arrow's arc, and drop incoming targets before they reach you. It is pure reflexes wrapped in a clean, satisfying bow-and-arrow fantasy.",
    tips: [
      "Lead moving targets slightly — the arrow drops over distance, so aim above a fast target's path.",
      "Clear clustered enemies with a single well-placed shot rather than spending arrows one at a time.",
      "Dodge hazards first, then shoot; surviving the wave matters more than a high single-shot count.",
    ],
    faqs: [
      ["How do I hit fast-moving targets in Bow or Die?", "Aim slightly above and ahead of the target so the arrow's arc intersects its path. One full practice wave spent watching trajectories instead of scoring pays off immediately."],
      ["What should I upgrade first?", "Arrow speed and draw time. Faster shots let you correct misses in the same wave instead of helplessly watching the next target arrive."],
    ],
  },

  // ---------------- Numeric & logic puzzles ----------------
  "2244-number-match": {
    tips: [
      "Scan for pairs that clear from the bottom of the column upward — low clears keep upper rows reachable.",
      "Merge chains across columns before clearing isolated pairs; connected groups remove more tiles per move.",
      "Keep at least one empty column on each side of the board as working space for late-game merges.",
    ],
    faqs: [
      ["What is the goal in 2244 Number Match?", "Clear the board by pairing equal numbers or numbers that sum to a target, removing tiles in groups until no valid pairs remain. Levels are decided by how efficiently you spot connections, not by speed."],
      ["Can every board be fully cleared?", "Most layouts are fully clearable with the right order, and a shuffle option exists for genuinely stuck states. The skill is in spotting which pair to take first so the board stays connected."],
    ],
  },
  "crossmath-challenge": {
    tips: [
      "Solve the row or column with the most given numbers first — it constrains the rest of the grid fastest.",
      "Track which digits you have already placed so you do not reuse them across the same equation.",
      "When stuck, test the equation mentally with the smallest remaining digit before committing it to the grid.",
    ],
    faqs: [
      ["Do I need to be good at math for Crossmath Challenge?", "Only basic arithmetic. Every puzzle uses addition, subtraction and multiplication of small numbers, so the real challenge is logical placement rather than calculation speed."],
      ["Is there a time limit?", "Timed rounds exist for score chasers, but the core puzzles can be solved at your own pace. Starting with untimed play is the fastest way to learn the deduction habits the levels assume."],
    ],
  },
  "mathematics-frenzy": {
    tips: [
      "Answer the easiest problems first to build combo multipliers before the hard ones appear.",
      "Keep your eyes on the numbers, not the timer — a wrong answer usually costs more than a slow one.",
      "Memorize the times tables up to 12 before attempting hard mode; everything else in the game builds on them.",
    ],
    faqs: [
      ["Is Mathematics Frenzy suitable for kids?", "Yes — the easy modes drill basic arithmetic suitable for primary school ages, while the harder levels give adults a genuine mental workout. It is one of the few games where playing more directly strengthens a school skill."],
      ["How is the score calculated?", "Points scale with answer speed and difficulty, and streak multipliers reward consecutive correct answers. A long unbroken streak is worth more than occasionally answering fast."],
    ],
  },
  "arrowxis-brain-escape-puzzle": {
    tips: [
      "Trace each arrow's full path before tapping it — most boards are solved by order, not by speed.",
      "Tapping an arrow rotates every arrow it points to, so use edges and corners as stable anchors for your plan.",
      "If a board locks, restart and change the first two taps; early choices determine whether the exit path ever opens.",
    ],
    faqs: [
      ["What kind of puzzle is ArrowXis?", "It is a directional logic puzzle: rotating arrows redirect a path across the grid toward an exit. Each tap has ripple effects, which makes it a planning game rather than a reflex game."],
      ["Do the puzzles get harder?", "Yes. Early boards teach single-arrow logic, and later boards layer chained rotations that must be sequenced correctly. The difficulty curve is gradual enough to learn by replaying a stuck level once or twice."],
    ],
  },
  "category-match-puzzle": {
    tips: [
      "Group items by category before touching the board — knowing the full grouping prevents half-matches.",
      "Clear the largest category first; the remaining tiles become easier to see once the board thins out.",
      "Use the shuffle only when two categories are genuinely interleaved, not just because you missed a pair.",
    ],
    faqs: [
      ["How does Category Match Puzzle work?", "You pair tiles that belong to the same category — foods with foods, tools with tools — clearing the board faster than the timer allows. It is a light logic and knowledge game rather than a memory game."],
      ["What is the best way to improve?", "Learn the category sets the game uses and pre-scan the board for cross-category decoys that look similar. Recognition speed, not memory, separates high scores from average ones."],
    ],
  },
  "sorting-ball-quiz": {
    tips: [
      "Keep one tube empty as a buffer at all times — it is your only undo mechanism.",
      "Move complete color groups together rather than splitting stacks across tubes.",
      "If a color ends up in three tubes, restart immediately; tangled boards rarely recover.",
    ],
    faqs: [
      ["Is Sorting Ball Quiz the same as ball sort puzzles?", "Yes — it follows the water-sort style where you move balls between tubes only when colors match, and the goal is one solid color per tube. The quiz framing adds level variety rather than new rules."],
      ["What do I do when no move is possible?", "Use the buffer tube to temporarily park a mismatched ball, or restart the level. Replays are fast, and reordering your first few moves usually solves the lock."],
    ],
  },
  "candy-sort": {
    tips: [
      "Plan three moves ahead: the empty dish you leave now is the space you need for the next color.",
      "Sort colors in order of abundance — the most frequent color needs the most runway.",
      "Avoid parking two candies of different colors in the same dish late in the level.",
    ],
    faqs: [
      ["Are Candy Sort levels always solvable?", "Almost always with good planning, and the game offers a restart with no penalty. Levels introduce more colors gradually, so the trick count grows only as fast as your planning does."],
      ["What is the hardest part of Candy Sort?", "The mid-game juggle, when every dish is partially filled and one wrong placement fragments a color across three dishes. That is the moment to slow down and plan rather than tap quickly."],
    ],
  },
  "cake-sort": {
    tips: [
      "Treat each cake stand as a mini stack — never let two different creams share a stand after mid-game.",
      "Move the tallest complete cake first to free stacked stands quickly.",
      "Use the one empty stand as your breathing room and refill it only when completing a cake.",
    ],
    faqs: [
      ["How is Cake Sort different from other sort puzzles?", "The stacking order matters: you can only place a smaller layer on a larger one, so each move must respect the physical stack. That extra constraint makes it feel closer to a real bakery puzzle than a pure color sort."],
      ["Is there a limit on moves?", "Levels are scored by move efficiency rather than hard-capped, so taking an extra safe move is usually better than a risky fast one. Star ratings reward the tidy solutions."],
    ],
  },
  "cake-stack": {
    tips: [
      "Stack matching flavors in a straight line — off-center cakes shrink your base and end runs early.",
      "Collect bonus items only when the tower is stable; a wide base forgives a greedy grab.",
      "On moving-platform levels, wait for the platform to center before dropping the next cake.",
    ],
    faqs: [
      ["What is the goal in Cake Stack?", "Build the tallest possible cake tower by catching layers as they arrive, balancing speed against precision. The higher the stack, the wilder the wobble — which is the whole game."],
      ["Why does my tower fall?", "Almost always because layers landed off-center. Each cake shifts the balance point slightly, and several small offsets in the same direction add up to a collapse."],
    ],
  },
  "mahjong-master-tile-sort-and-match": {
    tips: [
      "Free the tiles on top of stacks first — they gate everything underneath.",
      "Match pairs at the row ends before center pairs; ends open the middle of the board.",
      "Count remaining copies of each tile type before taking a pair that leaves an orphan.",
    ],
    faqs: [
      ["Is Mahjong Master solvable every time?", "Not every random layout is solvable, which is why the shuffle option exists. Good priority play — clearing top and end tiles first — dramatically raises your solve rate before you ever need it."],
      ["How do I get three stars on a level?", "Solve with minimal use of hints and shuffles, and clear the board before the bonus timer decays. Planning the whole board before your first match is the reliable way to do both at once."],
    ],
  },
  "animal-klotski": {
    tips: [
      "Move the large rectangular block first — its path to the exit defines the whole solution.",
      "Use the smallest blocks as shuttles to reposition medium blocks around corners.",
      "Count your moves: the classic solution is short, and wandering move chains mean a wrong turn early.",
    ],
    faqs: [
      ["What is Klotski?", "Klotski is a century-old sliding-block puzzle where you shift wooden blocks inside a tray to free one designated block through an exit. Animal Klotski dresses the classic in cute animal tiles without changing the logic."],
      ["How long does a level take?", "Beginner levels solve in a minute or two, while classic layouts can take a focused fifteen minutes. Every level has a known minimum move count that score-chasers can chase."],
    ],
  },
  "bolts-and-nuts-online": {
    tips: [
      "Unscrew the top plate first — every later move depends on the space it frees.",
      "Trace which plate overlaps which holes before starting; wrong early bolts lock the board.",
      "Use every hole including corners; partial threads that look stuck are often deliberate puzzle clues.",
    ],
    faqs: [
      ["How do Bolts and Nuts puzzles work?", "Layered metal plates are held by bolts, and you unscrew them in an order that lets each plate fall away without blocking the holes still needed below. It is a physical-logic puzzle disguised as hardware."],
      ["What if I remove bolts in the wrong order?", "A plate can drop onto a hole you still need, and the level locks. The undo button exists exactly for this — rewinding two moves is faster than restarting the level."],
    ],
  },
  "screw-nuts-snap-puzzle": {
    tips: [
      "Look for screws whose plates are held by only one or two bolts — those are always the opening moves.",
      "Watch the fall direction of each plate; dropping into a gap beats dropping onto another plate.",
      "Save undo for true dead ends; using it for tidying up wastes your three-star move count.",
    ],
    faqs: [
      ["Is Screw Nuts the same as other bolt puzzles?", "It builds on the same unscrew-and-drop idea but adds snap-fit plates that must land in specific slots, adding a spatial dimension beyond simple removal order."],
      ["How do I earn all three stars?", "Finish the level with few wasted moves and no undos. Reading the plate stack and mentally rehearsing the removal sequence before the first bolt is the skill that does it."],
    ],
  },
  "pushplush": {
    tips: [
      "Never push a plush into a corner with no pull-out path — pushes cannot be undone.",
      "Clear the target plush's direct route before arranging the decorative ones.",
      "Use walls as stopping aids: a plush against a wall needs one fewer corrective push.",
    ],
    faqs: [
      ["What kind of game is PushPlush?", "A Sokoban-style push puzzle where you slide plush toys onto target markers. It is relaxing in look and genuinely tactical in play, because every push is permanent."],
      ["Are undo or restart available?", "Yes, both — and on later levels you will need them. The intended solutions are short, so when a level drags on it usually means one early push went the wrong way."],
    ],
  },
  "pixel-shooter-puzzle": {
    tips: [
      "Plan the ricochet before the shot: bouncing bullets can clear several targets in one trigger pull.",
      "Aim at wall corners when targets hide behind cover; corner bounces preserve most of your angle.",
      "Count your bullets at the start of each room and reserve one for the last, trickiest target.",
    ],
    faqs: [
      ["How does Pixel Shooter Puzzle differ from action shooters?", "It is a puzzle game with gun physics: bullets bounce off walls, and every level is solved by geometry rather than reflexes. Thinking one bounce ahead is the entire skill."],
      ["Can I retry a level?", "Instantly and without penalty. Levels are short by design, so trial and error with different bounce angles is the intended way to learn each room."],
    ],
  },
  "crazy-plinko": {
    tips: [
      "Drop from the same slot several times to learn its drift before switching positions.",
      "Center drops spread widest — edge drops trade variance for safer average payouts.",
      "Bet small while learning a board's bias, then scale stakes only on slots with proven results.",
    ],
    faqs: [
      ["Is Crazy Plinko luck-based?", "The physics have genuine variance, but slot choice and stake sizing are real decisions. Players who track which lanes a board favors over dozens of drops consistently outperform random play."],
      ["Does it cost real money?", "No. Chips are virtual play money with no purchase or cash-out. It recreates the arcade plinko feel responsibly, purely for entertainment."],
    ],
  },
  "aberiel-church-jigsaws": {
    tips: [
      "Assemble the border first, then work inward by color region.",
      "Sort pieces by texture before starting — church art has distinct stone, glass and sky regions.",
      "Rotate pieces only when a region is nearly complete to avoid losing your place.",
    ],
    faqs: [
      ["How many pieces do the jigsaws have?", "Levels range from a relaxed dozen pieces to a few hundred for the full cathedral scenes, so you can pick a session length that fits your break."],
      ["Is there a preview image?", "Yes — a reference image stays available while you assemble, which is essential on the larger stained-glass scenes where color regions blend."],
    ],
  },
  "easy-halloween-coloring-quest": {
    tips: [
      "Fill the largest background areas first so details sit on top cleanly.",
      "Use the undo tool for edges — the fill bucket leaks on unfinished line art.",
      "Save your palette mix before switching pages; custom blends are not remembered between drawings.",
    ],
    faqs: [
      ["Is this game good for young kids?", "Yes — controls are one-tap fills with forgiving boundaries and friendly monster art. There is no timer or scoring, so it works as pure creative play."],
      ["Can I save my coloring pages?", "Finished drawings can be saved as images from the in-game gallery, which makes it easy to keep or print a child's favorites."],
    ],
  },

  // ---------------- Parking, driving & racing ----------------
  "3d-police-car-parking": {
    tips: [
      "Reverse into bays instead of driving forward — police cruisers have long hoods that blind your nose.",
      "Use the mirror view for parallel gaps; the top-down camera misleads depth in tight lots.",
      "Finish missions without curb scrapes for bonus payout; damage scales your reward down.",
    ],
    faqs: [
      ["Do police parking missions get harder?", "Yes — early levels are wide-open lots, later ones add moving traffic and night visibility. The difficulty comes from tighter bays rather than new controls, so your basic skills carry through."],
      ["Why does reverse parking matter so much?", "Reversing swings the rear into the bay while keeping the front clear of obstacles. Forward parking into a tight bay hides your exit path and usually forces a multi-point correction that costs the time bonus."],
    ],
  },
  "city-bus-parking": {
    tips: [
      "Swing wide before every bay — a bus needs far more turning room than it feels like.",
      "Watch the rear overhang in the side mirror; the back swings opposite to the front when turning.",
      "Straighten early and crawl the last meter: bus bays punish any late steering input.",
    ],
    faqs: [
      ["Is City Bus Parking realistic?", "It simulates the real difficulty of bus maneuvering — long wheelbase, wide tail swing and late-arriving visibility — without the tedium of a full simulator. It is a genuine spatial-reasoning workout."],
      ["How do I stop clipping the bay lines?", "Commit to one straight-in angle early instead of correcting mid-bay. Corrections in a long vehicle almost always cross a line, while a single committed approach leaves margin on both sides."],
    ],
  },
  "euro-truck-parking": {
    tips: [
      "Steer opposite to move the trailer where you want it — trailer physics amplify every input.",
      "Pull forward to reset a bad jackknife angle instead of fighting it in reverse.",
      "Watch the blind-side mirror more than the windshield; the trailer lives there.",
    ],
    faqs: [
      ["Why is reversing a trailer so hard?", "The trailer steers opposite to the cab and amplifies each turn, so errors grow exponentially. Small early corrections are the skill — a tiny steering fix at the start prevents a jackknife later."],
      ["How do I pass the hardest parking tests?", "Set up wide before the bay, point the trailer at the entrance, then reverse in one smooth arc. Ninety percent of a perfect parking score is decided before the wheels roll backward."],
    ],
  },
  "extreme-car-parking-3d": {
    tips: [
      "Use the cinematic camera on narrow multi-story ramps; the hood cam hides the corners.",
      "Brake before the ramp crest — ceiling entrances have low visibility and parked obstacles.",
      "On moving-platform levels, park while the platform is aligned, not while it is still drifting.",
    ],
    faqs: [
      ["What makes Extreme Car Parking extreme?", "Multi-story ramps, elevators and moving platforms replace flat lots. The driving is deliberately tense: slow speed, tight tolerances, and hazards that reward precise throttle control over speed."],
      ["Are the levels timed?", "Most offer a timer bonus but no hard fail, so you can choose calm precision or score chasing. Timed perfection runs unlock bonus cars for completionists."],
    ],
  },
  "bus-mania-parking-puzzle": {
    tips: [
      "Slide the emergency bus first — every other vehicle should yield to the exit path.",
      "Two or three setup moves that look backwards are usually required before the lane opens.",
      "Count each vehicle's free directions before the first move to avoid dead-ending a van against a wall.",
    ],
    faqs: [
      ["Is Bus Mania like other parking puzzles?", "It follows the classic unblock-the-exit genre but with buses that occupy long horizontal and vertical lines, making every move a domino decision rather than a simple swap."],
      ["How do I get three stars?", "Solve in the minimum move count, which usually means resisting obvious tempting slides and finding the elegant intended sequence. Undo lets you explore without restarting."],
    ],
  },
  "car-driving-master": {
    tips: [
      "Feather the throttle out of corners; full gas mid-turn spins the back out.",
      "Learn each route's braking markers — the game rewards repetition with real lap-time gains.",
      "Keep two wheels on the asphalt in traffic missions; the AI punishes sidewalk shortcuts.",
    ],
    faqs: [
      ["What does Car Driving Master include?", "Open driving plus structured missions — checkpoints, traffic rules and precision challenges — in one package. It is closer to a light driving school than an arcade racer."],
      ["Does it have a free roam mode?", "Yes, and it is the best way to learn a car's limits. Practicing throttle control and braking distances in free roam makes the timed missions dramatically easier."],
    ],
  },
  "classic-car-driving-game": {
    tips: [
      "Rear-wheel classics oversteer on corner exit — lift gently rather than braking mid-turn.",
      "Respect the long hoods on classic muscle cars; your corner entry is earlier than it looks.",
      "Bank clean-lap bonuses before chasing the fastest lap; consistency funds the garage.",
    ],
    faqs: [
      ["What cars are in the Classic Car Driving game?", "Vintage sedans and muscle-style classics with deliberately floatier handling than modern cars. The heavier steering is the point — it rewards smoothness over twitch reflexes."],
      ["Is there a progression system?", "Yes — clean driving earns credits toward unlockable classics, and each car handles differently enough to justify practicing them separately."],
    ],
  },
  "impossible-jeep-driver": {
    tips: [
      "Climb hills at a steady mid throttle — wheelspin on rocks stalls you halfway up.",
      "Lean back on jumps and level out before landing; jeeps roll easily on uneven terrain.",
      "Use the handbrake on steep descents instead of the brake pedal for controlled crawling.",
    ],
    faqs: [
      ["Why is it called Impossible Jeep Driver?", "The routes are deliberately absurd — near-vertical climbs, rock fields and seesaw bridges that a real jeep would never attempt. 'Impossible' is the marketing, physics is the reality: it is hard but very beatable."],
      ["How do I stop rolling over?", "Anticipate terrain under the wheels and keep the jeep level using small throttle adjustments. Once the roll starts, counter-steering rarely saves it — prevention is the only reliable fix."],
    ],
  },
  "monster-truck-offroad-2": {
    tips: [
      "Use the truck's suspension ripples: land with wheels level, not nose-down.",
      "Air control matters more than speed — straighten mid-jump before worrying about throttle.",
      "Crush sections reward momentum; slow crawling in a monster truck just gets you stuck.",
    ],
    faqs: [
      ["What is new in Monster Truck Offroad 2?", "Longer stunt runs, more crush obstacles and upgraded physics that make the suspension feel genuinely springy. It doubles down on the toy-smashing fantasy of the first game."],
      ["Does speed help or hurt?", "Speed helps through crush zones and hurts on landing precision. The best runs alternate: full throttle into obstacles, complete calm through the air."],
    ],
  },
  "mega-ramp-car-stunt-racing": {
    tips: [
      "Hit ramps at three-quarter throttle for controllable flight — full speed overshoots most landing zones.",
      "Make attitude corrections immediately after takeoff; midair steering loses effect the longer you wait.",
      "Land with wheels straight and centered before touching the throttle again.",
    ],
    faqs: [
      ["How do I land the mega jumps?", "Enter the ramp straight, set the car's pitch as you leave it, and do nothing but small corrections until touchdown. Almost every crash comes from steering or throttle input at the landing instant."],
      ["Are the stunt tracks timed?", "Rally-style checkpoints time some events, but most stunt levels score style and completion. Timed runs unlock after you master the landings."],
    ],
  },
  "ramp-rider-mega-bike-racing": {
    tips: [
      "Bikes wheelie on ramp exits — preload the front brake before the lip to keep the nose down.",
      "Tap brakes instead of holding them; locked wheels on ramps end runs instantly.",
      "Lean into the landing slope visually before the jump; your eyes set your balance point.",
    ],
    faqs: [
      ["Is Ramp Rider harder than car stunt games?", "Yes, because bikes balance on two wheels — every landing is a stability check. The skill ceiling is higher, but the levels are tuned so dozens of attempts still feel fair."],
      ["What is the fastest way to improve?", "Replay the first two ramps until takeoff and landing are automatic. Muscle memory from easy ramps transfers directly to the mega ones; skipping ahead leaves you rebuilding basics mid-run."],
    ],
  },
  "ramp-truck-mayhem": {
    tips: [
      "Keep the trailer straight on ramps — a skewed exit multiplies into a rollover.",
      "Brake with the trailer loaded nose-first; empty trailers swing wildly under braking.",
      "Learn each ramp's landing zone before going full speed; they are shorter than they look.",
    ],
    faqs: [
      ["What kind of game is Ramp Truck Mayhem?", "Truck stunt driving — sending big rigs and their trailers over ramps and loops. It is absurd by design and demanding in practice, because a truck's weight punishes sloppy timing far more than a car's."],
      ["Can I detach the trailer?", "Some levels let you drop the trailer for pure cab stunts, but most challenges score the full combo — flying cab and trailer together is where the big points live."],
    ],
  },
  "wall-rush-3d": {
    tips: [
      "Read wall gaps two segments ahead — the correct slot is rarely the closest one.",
      "Steer early and small; late large corrections scrape the edges and slow you down.",
      "Memorize the first ten seconds of each track; early walls are the run-killers.",
    ],
    faqs: [
      ["What is Wall Rush 3D?", "A high-speed tunnel runner where you steer through moving wall gaps at increasing speed. It is a pure reflex and anticipation trainer — the wall patterns repeat, and memory beats reaction."],
      ["How do I survive the later speeds?", "Stop watching your vehicle and watch the walls ahead. Once your eyes are two gaps forward, the game speed stops feeling unfair because you are already steering for the future."],
    ],
  },
  "sky-hop-3d": {
    tips: [
      "Hop only when the platform ahead is confirmed — the rhythm punishes premature taps.",
      "Use small platforms as rhythm resets, not as score opportunities.",
      "Collectibles on side platforms are bait unless a run is already stable.",
    ],
    faqs: [
      ["Is SKY HOP 3D an endless runner?", "Yes — an upward platform hopper where distance is the score. The 3D camera adds depth judgment, which makes each hop a small commitment decision rather than a reflex tap."],
      ["Does it have checkpoints?", "No — a fall ends the run, which is the genre's contract. Runs are short by design, so learning the platform patterns happens naturally across many attempts."],
    ],
  },
  "wobble-it": {
    tips: [
      "Correct wobbles with the smallest possible input — big corrections double the wobble.",
      "Keep your center of mass over the platform's middle third at all times.",
      "On rotating platforms, move with the rotation rather than against it.",
    ],
    faqs: [
      ["What is WOBBLE IT about?", "Balance. You control a wobbly character or object that tips with every input, and the goal is to travel without toppling. It looks silly and plays like a genuine stability puzzle."],
      ["Why do I keep falling right after starting?", "Overcorrection. New players respond to a small lean with a large input, which swings the wobble to the other side. The fix is counterintuitive: do less, not more."],
    ],
  },
  "going-up-rooftop": {
    tips: [
      "Plan two jumps ahead — rooftop routes branch and dead-end above you.",
      "Wall-jump chains need consistent timing; pause a beat before the second wall touch.",
      "Collectibles high on antennas are optional bait unless your route already passes them.",
    ],
    faqs: [
      ["What is Going Up Rooftop?", "A vertical platformer where you parkour up a city skyline, chaining wall jumps and ledge grabs. Reaching the top of each building is the goal, and falling usually means restarting the climb."],
      ["Is it beginner-friendly?", "The early rooftops teach each move in isolation. Difficulty climbs with the skyline — by mid-game you need wall-jump chains, so the tutorial pacing is genuinely gentle."],
    ],
  },
  "spooky-racing": {
    tips: [
      "Drift the hairpins and grip the sweepers — spooky tracks mix both corner types per lap.",
      "Save power-ups for straights where rivals cannot dodge.",
      "Ghost decorations move on laps two and three; memorize when, not just where.",
    ],
    faqs: [
      ["Is Spooky Racing hard?", "It is arcade-tuned: forgiving handling, generous drift assists, and rubber-band opponents. The spooky tracks add moving hazards, so the challenge is route memory more than driving skill."],
      ["Do power-ups decide the races?", "They matter, but placement matters more. A boost fired on the exit of the final corner wins races; one fired mid-corner usually ends in a wall."],
    ],
  },
  // ---------------- Final batch: remaining featured games ----------------
  "4-in-a-blow": {
    tips: [
      "Bounce low so four bricks align vertically before you clear.",
      "Aim side wall bounces at the top corners; direct shots cannot reach them.",
      "Hold paddle center as default and adjust late rather than guessing early.",
    ],
    faqs: [
      ["What is 4 in a Blow?", "A brick-breaker built around the number four: clear four bricks in one combo for escalating bonuses. It turns the arcade classic into a deliberate placement puzzle."],
      ["How do combo bonuses stack?", "Consecutive multi-brick clears within one rally multiply each other. The paddle positioning that survives long rallies is worth more than any single power-up."],
    ],
  },
  "dino-hunter-jurassic-hunt": {
    tips: [
      "Headshot sauropods is wasted ammo — their weak points glow at the flank.",
      "Raptors flank in pairs; watch your backtrail between herds.",
      "The tranquilizer path pays more than the rifle path per hunt.",
    ],
    faqs: [
      ["Is Dino Hunter a hunting simulation?", "Light simulation — tracking, distance and weak points matter, but the pace stays arcade. The prehistoric safari setting carries the loop."],
      ["Which weapon should I upgrade?", "The rifle's stability first — a steady scope unlocks every later dinosaur's weak-point shots."],
    ],
  },
  "cliff-boi-trap-adventure": {
    tips: [
      "Read the trap's cycle, not the cliff — the ground is honest; the traps are not.",
      "Checkpoint flags are your real currency; cross them at any speed cost.",
      "Watch for second-stage traps that trigger on your landing, not your jump.",
    ],
    faqs: [
      ["What is Cliff Boi Trap Adventure?", "A trap-platformer gauntlet: cheerful art hiding spikes, triggers and fake floors. Every trap is legible after one death, which makes progress feel earned rather than lucky."],
      ["Is it fair or just troll-game chaos?", "Fair with jokes — traps have consistent rules you can learn. The comedy is in the first encounter; the mastery is in the tenth."],
    ],
  },
  "glimmer": {
    tips: [
      "Your light radius is your health bar — keep it fed with motes, not saved for later.",
      "Dark corridors often hide shortcuts; dim paths are faster than lit detours.",
      "Guide lost wisps toward lanterns; their glow pays permanent dividends.",
    ],
    faqs: [
      ["What is Glimmer about?", "A gentle light-keeping exploration game: carry a fading glow through the dark, feed it and escort smaller lights. It is atmospheric without being hostile."],
      ["How long is a play session?", "Levels are short and self-contained, designed around a break-time loop. The atmosphere rewards slow play, but never demands it."],
    ],
  },
  "daddy-mouse": {
    tips: [
      "Carry cheese in order of distance — nearest-first routing keeps the family fed.",
      "The cat patrols on a lazy loop; its pauses are your crossing windows.",
      "Never carry two cheeses past one hazard; split your loads.",
    ],
    faqs: [
      ["What is DADDY MOUSE?", "A family-feeding dash game: the father mouse hauls cheese home past a patrolling cat. It plays like a cozy stealth-routing puzzle rather than a pure reflex game."],
      ["Is it good for kids?", "Yes — one-button simple, no fail-state punishment, and the cartoon stakes never rise above 'drop the cheese'."],
    ],
  },
  "signal-survival-block-arena": {
    tips: [
      "Build walls before the wave indicator finishes counting down.",
      "Your signal tower heals nearby blocks — keep a repair pocket around it.",
      "Enemy waves alternate melee and ranged; alternate wall thickness and height.",
    ],
    faqs: [
      ["What is Signal Survival Block Arena?", "A block-building defense game: construct and repair walls around a signal tower against arena waves. Building economy decides late waves more than aim does."],
      ["How does the repair mechanic work?", "Blocks regenerate near the signal tower, so layouts that funnel enemies toward the tower's radius get patched mid-battle. Design your kill paths around the heal zone."],
    ],
  },
  "zaruvane-the-amber-oasis": {
    tips: [
      "Water carries between zones — top off at every oasis before desert legs.",
      "Trade caravans at dusk; prices shift on the day cycle.",
      "The oasis map is circular, not linear — loop back through known water.",
    ],
    faqs: [
      ["What is ZARUVANE: The Amber Oasis?", "A desert-caravan survival game: manage water, trade goods and route your travelers between oases. It is resource strategy at caravan pace."],
      ["How does the day cycle matter?", "Night travel costs more water and offers better trades, so the loop becomes: trade at dusk, travel in darkness, rest at dawn oases."],
    ],
  },
  "funny-gummy-characters": {
    tips: [
      "Gummies bounce — aim landings at trampolines rather than platforms.",
      "Sticky walls are stairs; climb them with alternating short hops.",
      "Collect faces in cluster zones; the scatter singletons are bait.",
    ],
    faqs: [
      ["What is Funny Gummy Characters?", "A squishy physics platformer where candy characters bounce, stick and squelch through sweet levels. The physics is the joke and the mechanic at once."],
      ["Is it hard?", "Deliberately gentle — the comedy of bouncing around is the product. Kids and wind-down players are the audience."],
    ],
  },
  "grave-blast": {
    tips: [
      "Blast from the graves' corners — collapses chain toward open ground.",
      "Save the big charge for crypt walls; surface graves fall to taps.",
      "Watch the ghost meter: heavy blasts wake what you want to keep sleeping.",
    ],
    faqs: [
      ["What is Grave Blast?", "A demolition game with a graveyard twist: dynamite tombstones, chain collapses and sleeping ghosts you would rather not wake. It is puzzle demolition with atmosphere."],
      ["How do the chains work?", "Falling stones trigger adjacent blasts in sequence. Setting up the first collapse so its debris arms the second is the intended scoring art."],
    ],
  },
  "coinbound-voodoo-nightmare": {
    tips: [
      "Curse tokens are currency, not hazards — spend them at the shrine between waves.",
      "Dodge patterns are pentagonal; move along the shape's edges.",
      "The nightmare meter fills with idle time; aggression is defense here.",
    ],
    faqs: [
      ["What is Coinbound Voodoo Nightmare?", "A cursed-arena survival game: harvest tokens from waves, manage a nightmare pressure meter and spend everything at the voodoo shrine. Resource aggression beats cautious camping."],
      ["How does the nightmare meter work?", "It rises when you play passively — standing still, hoarding tokens — and forces action. The game actively punishes turtling, which keeps every wave kinetic."],
    ],
  },
  "finnie-escape": {
    tips: [
      "Bubble jumps carry you over pipes; save them for the tall gaps.",
      "Follow the current's edge — center currents drag you into hazards.",
      "The escape hatch opens on pattern cycles; count the hazards, not the clock.",
    ],
    faqs: [
      ["What is Finnie Escape?", "An underwater obstacle escape: guide Finnie through currents, pipes and predators to open water. It plays like a flowing precision-runner with gentle fish physics."],
      ["Are there levels or is it endless?", "Stage-based — each zone layers one new hazard type onto the last, so the difficulty teaches itself."],
    ],
  },
  "last-garage-zombie-road": {
    tips: [
      "The garage is your pit stop — never pass it wounded with a horde behind.",
      "Zombie clusters chase your headlights; drive dark through dense districts.",
      "Fuel scavenging beats speed runs; empty tanks end games faster than bites.",
    ],
    faqs: [
      ["What is Last Garage: Zombie Road?", "A zombie-road survival driver: run supply routes through infested streets and return to your garage stronghold between runs. It mixes driving precision with route economy."],
      ["How does the garage work?", "As your base — repairs, upgrades and fuel storage happen there, which turns every supply run into a loop you plan rather than a dash you survive."],
    ],
  },
  "grass-rush-adventure": {
    tips: [
      "Mow in rows, not circles — row patterns earn combo multipliers.",
      "Long grass hides hazards and bonuses both; commit to full rows to find both.",
      "Refuel at the shed whenever you pass; grass games end on empty tanks.",
    ],
    faqs: [
      ["What is Grass Rush Adventure?", "A mowing adventure game: clear lawns, find hidden treasures in the tall grass and manage your mower's fuel. It is cozy task-play with light routing strategy."],
      ["How does scoring work?", "Row-completion combos reward disciplined mowing patterns over chaotic paths. The lawn tells you its intended lines; following them is both faster and higher-scoring."],
    ],
  },
  "verity-block-survival": {
    tips: [
      "Anchor your platform before stacking — the base block decides the tower's fate.",
      "Balance indicators show drift direction; correct one notch early.",
      "Specialty blocks belong at the tower's waist, never the crown.",
    ],
    faqs: [
      ["What is Verity Block Survival?", "A block-stacking survival game: build upward while physics, wind and block quirks try to topple you. It is meditative until it suddenly is not, which is the genre's charm."],
      ["How do I build past the first wobble?", "One-notch corrections at the first drift sign. Waiting for a visible lean means waiting too long — the physics punishes delayed inputs exponentially."],
    ],
  },
  "collisiox": {
    tips: [
      "Orbit obstacles rather than dodging them — curves beat straight retreats.",
      "Chain near-misses for score; contact is the only fatal mistake.",
      "Memorize the spawn rhythm; patterns rotate predictably per wave.",
    ],
    faqs: [
      ["What is CollisioX?", "A collision-dodging arcade game: survive accelerating object fields where grazing near objects scores. The design pushes you toward the danger, not away from it."],
      ["How does graze scoring work?", "Points accrue per object passed closely without touching, so the optimal path is the frightening one. Mastering the graze line is the game's whole skill ceiling."],
    ],
  },
  "vesper-survival-mod": {
    tips: [
      "Dusk is your shopping window; night is your fighting shift.",
      "Barricade the ground floor, not the roof — escape routes beat defensible corners.",
      "Scavenge in loops back to your base; linear raids strand you at nightfall.",
    ],
    faqs: [
      ["What is Vesper Survival Mod?", "A survival-horror sandbox: scavenge by dusk, fortify and fight by night. It layers base-building onto the classic night-defense loop."],
      ["How does the day cycle drive strategy?", "Everything revolves around it — looting distance, barricade repairs and ammunition crafting are all scheduled against the falling sun. Planning the day is surviving the night."],
    ],
  },
  "legiontide-army-runner": {
    tips: [
      "Sprint gates refill momentum meters; pass through them even off-route.",
      "Bigger formations move slower — split before narrow passages.",
      "Collect soldiers in bursts of five; partial squads die to the first wall.",
    ],
    faqs: [
      ["What is Legiontide Army Runner?", "An army-runner where you gather soldiers and lead the formation through obstacle gauntlets. It plays like a crowd-control runner — your formation's shape is your health bar."],
      ["Why do my soldiers keep dying at walls?", "Formations inherit your path, so tight turns grind soldiers against obstacles. Wide arcs and split formations pass the same walls without casualties."],
    ],
  },
  "escape-the-giant-school-3d": {
    tips: [
      "Desks funnel the giant — furniture layouts are your maze design.",
      "Listen for footstep direction; the giant's shadow confirms it before you commit.",
      "Exit doors unlock from the far wing; plan routes as loops, not sprints.",
    ],
    faqs: [
      ["What is Escape the Giant School 3D?", "A hide-and-escape game in a giant school: evade a towering pursuer, unlock exits and slip away. Stealth routing, not running speed, decides escapes."],
      ["Is it scary?", "Tense rather than terrifying — the giant is a chase pressure rather than a horror presence, closer to playground tag than a horror game."],
    ],
  },
  "deep-drill": {
    tips: [
      "Drill shafts at angles, not plunges — angled tunnels self-support.",
      "Deep ores glow; tunneling toward glow beats systematic grids.",
      "Return with partial holds rather than greedy full ones — collapses eat cargo.",
    ],
    faqs: [
      ["What is Deep Drill?", "A mining arcade game: drill down, collect ores, manage tunnel stability and return before the shaft eats your cargo. The tension is structural, not combat."],
      ["How deep can you go?", "As deep as your tunnel discipline allows. Greedy straight plunges collapse; angled, supported shafts reach zones the careless never see."],
    ],
  },
};
const faqSupplements: Record<string, [string, string][]> = {
  "2048": [
    ["Can you beat 2048 every time?", "Almost — the corner strategy wins roughly ninety percent of disciplined runs. Losses come from breaking your own rules under time pressure, not from unlucky tiles."],
    ["What is the fastest way to reach the 2048 tile?", "Lock the corner, restrict yourself to two arrow directions, and build a descending chain. Players who follow all three consistently reach the winning tile within a few focused sessions."],
  ],
  snake: [
    ["How do I get a high score in Snake?", "Patrol a fixed looping route near the edges instead of chasing food. The loop guarantees an exit path at any length, which is what actually kills long snakes."],
    ["Why does the snake get harder to control?", "Because each segment adds turning inertia to your planning. The fix is slowing your decision cadence as you grow — early greed is cheap, late greed is fatal."],
  ],
  tetris: [
    ["What is the best Tetris opening?", "Build flat across the whole well while keeping one clean column for the I-piece. The flat stack gives every piece a home, and the reserved well is your Tetris cannon."],
    ["How do I clear four lines at once?", "Save the I-piece for a built-up well and drop it into the empty column. One four-line clear outscore four separate singles, so the well discipline pays for itself."],
  ],
  minesweeper: [
    ["Can you win Minesweeper without guessing?", "Most boards yes — the numbers encode enough logic once you learn patterns like 1-2-1. The residual guessing cases are rare and concentrated in the opening clicks."],
    ["What is the fastest first click?", "Corner or center in one click — modern versions make it safe. Corners open smaller regions that are easier to read, which is the calm start most players prefer."],
  ],
  "brick-breaker": [
    ["How do I control the ball's angle?", "With the paddle edges — edge hits send the ball sharply sideways, center hits send it straight up. Steering with contact position is the entire skill."],
    ["What is the trick to the last few bricks?", "Shallow angles. Flat trajectories travel across the top rows and touch more bricks per rally than vertical bounces ever will."],
  ],
  "flappy-wings": [
    ["Why is this genre so hard?", "Because it punishes rhythm breaks. A steady tap tempo keeps the bird level, while reactive panic-tapping creates the deadly up-down oscillation."],
    ["How do I improve fast?", "Play in short calm sessions and tap to an internal beat instead of watching the pipes. Scores double quickly once the rhythm becomes muscle memory."],
  ],
  "memory-match": [
    ["What is the best memory technique?", "Verbal encoding — naming each card and its position aloud cements it far better than silent glances. Speech is the cheapest memory upgrade available."],
    ["Should I take known pairs immediately?", "Yes, always — banking pairs shrinks the board and the memory load together. Only explore when the revealed card has no known partner."],
  ],
  "word-guess": [
    ["What is the best first word?", "A common-letter opener like CRANE or SLATE. The first guess exists to gather information, and common letters gather the most."],
    ["Should my second guess use new letters?", "If the opener found little, yes — eliminating ten letters in two guesses beats one lucky green. Switch to solving once two or more letters are confirmed."],
  ],
  "obby-rainbow-tower": [
    ["What does obby mean?", "Obstacle course — the platforming genre built on jumps, traps and checkpoints. Rainbow Tower's version layers ice, lava and teleport tiles over the classic climb."],
    ["How do I stop falling on spinning bars?", "Double-jump the moment you leave the bar rather than jumping early. Single jumps rarely clear the moving gaps."],
  ],
  "obby-toilet-line": [
    ["What is Obby Toilet Line?", "A comedic obstacle course where you queue through a bathroom-themed gauntlet toward the mysterious front toilet. Silly on the surface, genuine precision platforming underneath."],
    ["How do the moving obstacles work?", "They cycle on timers — watch one full cycle before crossing. Every death comes from crossing mid-cycle, and none from impossible timing."],
  ],
  darkhood: [
    ["How does the light mechanic work?", "Your aura is the only light source, and sprinting widens it — which wakes sleeping monsters. Slow movement near patrols is the stealth system."],
    ["What do I do when spotted?", "Break line of sight with corners and hide in closets or under beds. Straight-line running loses to a faster pursuer every time."],
  ],
  "funny-cars-reload": [
    ["Is Funny Cars Reload a serious racer?", "No — cartoon physics, bouncy tracks and vehicles that visibly enjoy crashing. It is the genre's comedy branch, best played in short laughing bursts."],
    ["How do I stay on the track?", "Ease off before jumps so you land wheels-down. Full-throttle launches flip the car more often than they win races."],
  ],
  "boo-chains": [
    ["How do chains trigger?", "When clearing one group causes others to fall together and clear automatically. Each link multiplies the score, which is why setup beats speed."],
    ["How do I build big chains?", "Vertically — place colors so removing a bottom group drops upper groups into matches. Resist obvious clears that break future cascades."],
  ],
  "monster-cafe-idle-tycoon": [
    ["What should I upgrade first?", "The monster waiters — faster service compounds across every café you own. Location expansion comes second, bonus tapping comes free with attention."],
    ["Does progress continue offline?", "Yes, on a capped earnings timer. Collecting regularly converts idle time into income instead of letting the cap waste it."],
  ],
  "netherton-volleyball": [
    ["How do I time spikes?", "Watch the ball, not your player — jump as it peaks above the net and hit at the top of your jump. Early jumps are the most common miss."],
    ["What wins matches?", "Net defense. A well-timed block at the net beats chasing the ball afterward, so prioritize reading the attacker's angle."],
  ],
  "sort-master-satisfeel-asmr": [
    ["Why is sorting so relaxing?", "Simple rules plus visible progress — every move brings the board closer to perfect order, with gentle sounds and no timer. It is order being restored at your pace."],
    ["What is the best sorting strategy?", "Keep one container empty as workspace and never split a color across three containers. Complete-group moves beat fragmenting every time."],
  ],
  "warehouse-tetris-3d": [
    ["How do I fit everything in the truck?", "Largest pieces first, flat in corners — small pieces fill gaps later, but a big piece left for last has no valid position. Rotate through all orientations before declaring a piece impossible."],
    ["Why do I run out of space near the end?", "Because late-placed large items fragment the remaining volume. Reset and lead with the big pieces; the small ones pour into whatever gaps remain."],
  ],
};

for (const [slug, faqs] of Object.entries(faqSupplements)) {
  const entry = gameEditorial[slug];
  if (entry && !entry.faqs) entry.faqs = faqs as [string, string][];
}

export function getGameEditorial(slug: string): GameEditorial | null {
  return gameEditorial[slug] ?? null;
}
