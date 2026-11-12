/**
 * Append "Frequently asked questions" sections (h2 + p blocks) to guides
 * that lack them, then regenerate src/content/guides.ts.
 * The guide page template auto-detects the FAQ h2 and emits FAQPage JSON-LD.
 *
 * Usage: node scripts/add-faqs.mjs [--dry]
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const GUIDES_PATH = join(__dirname, "../src/content/guides.ts");
const dry = process.argv.includes("--dry");

// slug -> 3 Q&A pairs. Page template splits each paragraph at the first "?"
// into Question (before) + Answer (after), so keep exactly one "?" per Q.
const faqs = {
  "how-to-beat-2048": [
    ["What is the highest possible tile in 2048?", "Theoretically the board can support tiles far beyond 2048 — 4096, 8192, and higher — but the practical goal for most players is the 2048 tile itself, which wins the game. Reaching 4096 requires the same corner strategy executed with near-perfect discipline for twice as long."],
    ["Is 2048 a solved game?", "Not formally solved, but the corner strategy is the closest thing to a winning system: pin your biggest tile in a corner, build a decreasing chain beside it, and restrict yourself to two or three arrow directions. Players who follow it win consistently rather than occasionally."],
    ["What should I do when my corner tile gets trapped?", "If the anchor tile is buried and cannot merge, treat the run as a rebuild: use the opposite corner as a new anchor and migrate your chain there. Trying to dig the old tile out usually fills the board faster than it frees it."],
  ],
  "tetris-strategy-tips": [
    ["What is the best Tetris strategy for beginners?", "Build flat and keep a one-column well open on the far right or left for the long I-piece. A flat stack gives you placement options for every piece, while a bumpy stack forces desperate moves that create holes."],
    ["How do I avoid topping out?", "Never let the stack climb above the halfway mark without a clear plan to bring it down. When things get tall, stop chasing Tetrises and clear singles and doubles aggressively — survival beats efficiency under pressure."],
    ["What is a Tetris and why does it matter?", "A Tetris is clearing four lines at once with an I-piece, worth far more points than four separate line clears. The standard scoring strategy is to build up, hold an I-piece, and cash in four-line clears repeatedly."],
  ],
  "snake-game-high-score-tips": [
    ["What is the safest way to play Snake at high length?", "Once your snake covers a third of the board, switch from chasing food to following a repeating patrol route that keeps your tail within reach. A fixed loop means you always have an escape path, which matters more than speed at high scores."],
    ["How do I avoid trapping myself?", "Never cut across your own body diagonally without an exit — always leave a corridor back to open space. Most deaths at high length come from greed: taking food that forces a turn you cannot unwind."],
    ["Does speed increase as the snake grows?", "In classic Snake the speed is constant or increases slightly per food, which is why early points are cheap and late points are precious. Play the early game fast to build length, then slow your decision-making as the board fills."],
  ],
  "minesweeper-strategy": [
    ["What is the best first move in Minesweeper?", "Click a corner or center square — the first click is always safe in modern versions. A corner start tends to open smaller, more readable regions, while a center start opens bigger regions with more information per click."],
    ["How do I solve situations that look like pure guessing?", "Look for mine-count constraints: count remaining mines against remaining covered squares across overlapping number zones. Many apparent guesses resolve into certainties when you combine the information from two or three adjacent numbers."],
    ["Is flagging mines faster than not flagging?", "For beginners, flagging helps track logic; for speed, many experts play no-flag and chord directly. Either way, only flag mines you have logically confirmed — guessing flags creates false confidence and later mistakes."],
  ],
  "wordle-strategy-best-starters": [
    ["What is the best starting word for Wordle?", "Statistically strong openers include CRANE, SLATE, and TRACE because they cover the most common English letters in the most common positions. Any opener rich in common vowels and consonants will outperform a random favorite word."],
    ["Should my second guess reuse letters from the first?", "If your opener found little, use a second word with entirely new letters to maximize information — eliminating ten letters in two guesses is worth more than one lucky green. Once you have two or more confirmed letters, switch to solving."],
    ["Is Hard Mode worth playing?", "Hard Mode forces you to reuse confirmed letters, which raises difficulty but also teaches disciplined guessing. If you are playing for streaks, standard mode gives you more escape routes on unlucky boards."],
  ],
  "brick-breaker-tips": [
    ["How do I control where the ball goes?", "The ball's exit angle depends on where it strikes the paddle: hitting near the edge sends it sharply sideways, the center sends it straight up. Aim with paddle contact position, not just paddle position, to steer the ball into corners."],
    ["What is the best way to clear the last few bricks?", "Use shallow angles to make the ball travel horizontally across the top rows rather than bouncing straight up and down. A flat trajectory touches far more bricks per rally, which is exactly what stubborn endgame rows require."],
    ["Should I always catch power-ups?", "Catch the good ones — multiball, wide paddle, laser — but let harmful ones like shrink or speed-up drop if you are mid-rally on a good setup. Chasing a falling power-up is also the most common way to lose the ball, so never break your defensive position for one."],
  ],
  "flappy-bird-high-score-guide": [
    ["What is the secret to a high Flappy Bird score?", "Rhythm, not reaction. Top players tap to a steady internal beat rather than panicking at each pipe, keeping the bird in a narrow horizontal band so every gap is approached from the same height."],
    ["Why do I always crash on the pipe after a high gap?", "Because the bird gains downward momentum during the long fall, and late taps cannot cancel it in time. Start braking with early small taps the moment you clear the high pipe instead of waiting until you are near the next one."],
    ["Does tapping softer help?", "The game has one fixed flap strength, so control comes from tap timing, not force. Short, evenly spaced taps produce a level glide; clustered taps produce the deadly up-down oscillation that kills most runs."],
  ],
  "memory-match-techniques": [
    ["What is the best memory technique for matching games?", "Name what you see out loud or in your head — encoding a card as a word like red car is far stickier than remembering a position and a picture separately. Verbal encoding is the single biggest upgrade for casual players."],
    ["Should I flip new cards or known pairs first?", "When you reveal the first card of a turn and it matches one you have already seen, take the known pair immediately. Only explore new cards when the revealed card has no known partner, because banking pairs shrinks the board and the memory load together."],
    ["How do I remember positions reliably?", "Chunk the grid into quadrants and attach each card to its quadrant rather than an exact square. Four zones are easy to hold in working memory, and quadrant-plus-image is usually precise enough to find the pair on the next pass."],
  ],
  "best-free-browser-games-no-download": [
    ["Are browser games really free?", "Yes. Every game on GameVault runs free in your browser with no download, no install, and no account required. The games are funded by optional ads rather than paywalls, so you can play the full experience without paying anything."],
    ["Do browser games work on school or work computers?", "Usually yes, because nothing needs to be installed. A modern browser like Chrome, Edge, or Firefox is all you need. If a network blocks gaming sites entirely, that is a network policy rather than a game limitation."],
    ["Which browser is best for playing online games?", "Chrome and Edge currently offer the most consistent performance for HTML5 games. Keep hardware acceleration enabled in your browser settings for the smoothest frame rates, especially in 3D titles."],
  ],
  "obby-games-guide": [
    ["What does obby mean in gaming?", "Obby is short for obstacle course. Obby games are platformers built around jumping across gaps, dodging traps, and reaching checkpoints, with difficulty that ramps up as you progress through the stages."],
    ["Why do I keep failing the same jump in obby games?", "Most failed jumps come from jumping too early or holding the direction key too long. Try jumping at the very edge of the platform and tapping rather than holding movement keys. Watching the pattern of moving obstacles for one full cycle before committing also helps enormously."],
    ["Are obby games good for kids?", "Yes. Obby games teach timing, patience, and spatial reasoning with simple controls and no violent content. They are among the most kid-friendly browser game genres available."],
  ],
  "tiny-track-rally-tips": [
    ["How do I take corners faster in Tiny Track Rally?", "Brake before the corner, not during it. Enter wide, clip the inside apex, and accelerate out as the track straightens. Sliding through a turn feels fast but scrubs speed, so clean lines almost always beat dramatic drifts."],
    ["What is the best upgrade to buy first?", "Prioritize handling and acceleration over top speed. Rally tracks are full of corners, and the ability to change direction quickly and regain speed after a turn wins far more time than a higher maximum speed on the rare straight."],
    ["How can I beat the later tracks?", "Learn the track layout before pushing for time. Run a few slow laps to memorize braking points and corner order, then build speed lap by lap. Consistency across all laps matters more than one perfect lap followed by crashes."],
  ],
  "boo-chains-guide": [
    ["How do chains work in Boo?", "Chains trigger when clearing one group causes new groups to fall together and clear automatically. Each successive link in the chain multiplies your score, so a well-planned four or five chain is worth far more than several single clears."],
    ["How do I set up big chains?", "Build vertically and think about gravity. Place colors so that removing a bottom group drops upper groups into matching positions. It helps to plan two moves ahead and resist clearing an obvious group if leaving it enables a bigger cascade next turn."],
    ["Is Boo a game of luck or skill?", "Mostly skill. The pieces you receive are random, but strong players consistently outscore beginners because chain setup, board reading, and timing are learnable skills. Luck decides individual pieces, not long-run results."],
  ],
  "idle-tycoon-games-tips": [
    ["What should I upgrade first in idle tycoon games?", "Upgrade whatever multiplies your income rate rather than flat bonuses. Early on, unlock new income sources quickly because each new source compounds with your existing multipliers and accelerates everything that follows."],
    ["Should I prestige or reset for bonuses?", "Prestige as soon as the permanent multiplier meaningfully outweighs your current progress. A common rule is to reset when your next few hours of idle income would be matched within minutes after the prestige bonus applies."],
    ["Do idle games progress while the tab is closed?", "Most idle tycoon games calculate offline earnings when you return, often capped at a maximum number of hours. Check whether your game has an offline cap and collect before hitting it so no earnings are wasted."],
  ],
  "volleyball-games-online-tips": [
    ["How do I time my spikes better?", "Watch the ball, not your player. Jump as the ball reaches its highest point above the net and hit the action key at the peak of your jump. Most missed spikes come from jumping early, so practice a slightly late rhythm until it clicks."],
    ["What is the best way to defend against spikes?", "Position yourself where the spike is aimed before it is hit, reading the attacker's angle. In most volleyball games a well-timed block at the net is worth more than chasing the ball afterward, so prioritize net defense on obvious attack setups."],
    ["Are volleyball games better with keyboard or touch?", "Both work, but keyboard controls tend to give more precise timing for jumps and hits. On touch devices, use short deliberate taps rather than holding, and give yourself an extra beat of anticipation on defense."],
  ],
  "sorting-games-asmr-guide": [
    ["What makes sorting games so relaxing?", "Sorting games combine simple rules with visible progress: every move brings the board closer to perfect order. That steady feedback loop, paired with gentle sounds and no time pressure, creates the calming effect people describe as ASMR-like."],
    ["What is the best strategy for color sorting puzzles?", "Keep at least one container empty as working space, and avoid splitting a color across three or more containers. Move colors in complete groups whenever possible, and undo or restart early if the board becomes tangled rather than fighting a bad position."],
    ["Are sorting games good for your brain?", "They are light logic puzzles, so they exercise planning and pattern recognition without stress. They are not a substitute for deep cognitive training, but as a relaxing daily habit they keep your problem-solving instincts active."],
  ],
  "3d-packing-puzzle-tips": [
    ["How do I fit everything into the box?", "Start with the largest and most awkward pieces first, placing them flat in corners. Small flexible pieces can always fill gaps later, but a big piece left for last often has no valid position. Rotate pieces through all orientations before deciding one does not fit."],
    ["Why do I always run out of space near the end?", "Almost every failed packing run comes from placing large pieces late. Once the box is partially filled with small items, the remaining space becomes fragmented. Reset and place big pieces first, then pour the small ones into the gaps around them."],
    ["Is there a trick to rotating pieces faster?", "Learn the rotation controls before the timer levels. Most 3D packing games rotate on two axes, so practice flipping pieces with two quick inputs instead of cycling through every orientation. Saving a second per piece adds up to whole levels across a run."],
  ],
  "archery-games-online-tips": [
    ["How do I aim accurately in archery games?", "Account for arrow drop by aiming slightly above distant targets, and lead moving targets by shooting where they will be rather than where they are. Start each session with a few warm-up shots at close range to calibrate your feel for the arc."],
    ["How does wind affect arrows?", "In games that model wind, arrows drift sideways over distance, so compensate by aiming into the wind. The effect grows with range, meaning close targets barely drift while long shots need a clear offset. Check the wind indicator before every shot, not just the first."],
    ["What is the best way to improve quickly?", "Pick one bow or control scheme and stick with it for a full session instead of switching. Consistency builds muscle memory, and archery games reward repeatable form far more than experimentation."],
  ],
  "best-free-racing-games-online": [
    ["Are free online racing games worth playing?", "Absolutely. Modern browser racing games offer real physics, drifting, upgrades, and multiplayer without downloads. Titles in the genre range from arcade drift games to parking simulators, so there is something for every taste at zero cost."],
    ["Do I need a controller to play racing games online?", "No. Browser racing games are designed around keyboard controls, typically arrow keys or WASD for steering, throttle, and brake. A controller can feel nicer for analog steering, but keyboard players compete perfectly well in most titles."],
    ["Which racing game style is best for beginners?", "Start with arcade-style racers that forgive mistakes and auto-recover you onto the track. Simulation-style parking and truck games are more punishing but excellent once you want a precision challenge."],
  ],
  "obby-toilet-line-guide": [
    ["What is Obby Toilet Line?", "It is a comedic obstacle-course game where you queue and dash through a bathroom-themed gauntlet of traps and jumps. The humor is part of the appeal, but underneath the jokes sits a genuinely tricky precision platformer."],
    ["How do I get past the moving obstacles?", "Watch each obstacle for a full cycle before moving, then cross immediately after it passes. Most deaths happen when players rush in mid-cycle. Patience at each section is faster than repeatedly respawning."],
    ["Is Obby Toilet Line suitable for kids?", "Yes. The toilet humor is silly rather than crude, the controls are simple, and there is no violent content. It is a light-hearted platformer that younger players tend to love."],
  ],
  "darkhood-guide": [
    ["What kind of game is Darkhood?", "Darkhood is a stealth-flavored action game where you navigate shadowy levels, avoid detection, and strike at the right moment. Success depends more on patience and route planning than on fast reflexes."],
    ["How do I avoid being detected?", "Stay out of enemy sight lines and use shadows and obstacles as cover. Learn each guard's patrol loop before moving, and cross open ground only when you know where every enemy is looking."],
    ["What should I do when spotted?", "Break line of sight immediately by rounding a corner or dropping behind cover, then wait for the alert to cool down. Fighting through an alert rarely ends well, so disengage, reset, and re-approach from a safer angle."],
  ],
  "block-blast-tips": [
    ["What is the best opening strategy in Block Blast?", "Keep the center of the board open and build along the edges. Placing blocks centrally early fragments your available space and makes large pieces unplaceable later. A flat, open middle gives you options for every shape the game can deal."],
    ["How do I survive when the board gets crowded?", "Prioritize clearing lines over perfect placement, even if it means a slightly wasteful move. One completed row or column relieves pressure immediately, and surviving to the next set of pieces matters more than optimizing every placement."],
    ["Is Block Blast a game of luck?", "Partly, since piece order is random, but skilled players score consistently higher because space management is a learnable discipline. Luck decides your pieces, not your planning."],
  ],
  "8-ball-pool-tips": [
    ["How do I aim better in 8 Ball Pool?", "Use the guideline as a starting point, then learn to feel power and spin. Soft shots give you far more positional control than hard ones, so default to the gentlest stroke that does the job and let the cue ball stop near your next target."],
    ["What is the most important skill in 8 Ball Pool?", "Cue ball control. Where the white ball stops after each shot determines whether your next shot is easy or impossible. Plan two shots ahead: the pot you are taking and the position you need for the one after."],
    ["Should I play offense or defense?", "Play offense when you can run out the table, otherwise play a safety. Leaving your opponent without a clean shot is often stronger than attempting a low-percentage pot that opens the table for them."],
  ],
  "bubble-shooter-strategy": [
    ["What is the best strategy in Bubble Shooter?", "Aim for groups hanging from a single connection point. Dropping a large cluster by cutting its link to the ceiling scores far more than clearing small groups one at a time, so look for structural shots before obvious matches."],
    ["Should I use bank shots?", "Yes, bank shots off the walls are essential for reaching pockets behind the front rows. Practice the angle in low-pressure moments: the bounce mirrors your entry angle, so aim where the reflected line lands."],
    ["How do I stop the ceiling from dropping?", "Clear bubbles consistently, because most versions push the ceiling down after a number of shots that clear nothing. If no good match exists, use a throwaway shot to set up a future drop rather than firing randomly."],
  ],
  "pocketgolf-putting-guide": [
    ["How do I judge putting power?", "Start with shorter putts than feel necessary and build a reference: on most greens a medium-strength stroke carries a fixed number of grid squares. Overshooting is the most common error, so when in doubt, putt softer and leave a tap-in."],
    ["How do slopes affect the ball?", "Slopes curve the ball as it slows, so the break is strongest in the last third of the putt. Aim to the high side and let the slope bring the ball down to the hole, treating fast downhill putts with extra caution."],
    ["What is the fastest way to lower my scores?", "Eliminate three-putts by focusing on lag putting from long range: your first putt should finish within easy tap-in distance, not necessarily in the hole. Par golf comes from avoiding disasters, not from holing miracle putts."],
  ],
  "euro-truck-parking-reverse-guide": [
    ["How do I reverse a trailer without jackknifing?", "Make small steering inputs and correct early. A trailer amplifies every turn, so steer gently in the opposite direction you want the trailer to go, then straighten as it lines up. If the angle gets sharp, pull forward and reset rather than fighting it."],
    ["Why do I keep hitting the cones?", "Most cone hits come from watching the cab instead of the trailer. Track the trailer's rear corners in your mirrors and give yourself a wider approach angle than feels necessary, especially on the blind side."],
    ["What is the best technique for tight parking bays?", "Set up wide before the bay, swing the cab out so the trailer points at the entrance, then reverse in one smooth arc with tiny corrections. A good setup does ninety percent of the work in a tight spot."],
  ],
  "spooky-racing-drift-guide": [
    ["How do I drift properly in Spooky Racing?", "Enter the corner with speed, tap the brake or handbrake to break traction, then counter-steer and feather the throttle to hold the slide. The goal is a controlled slide through the apex, not the longest possible drift."],
    ["Do drifts make you faster or slower?", "Controlled drifts through tight corners are faster than sliding everywhere. On gentle bends, gripping the racing line beats drifting, so save the handbrake for hairpins and sharp turns where rotating the car matters."],
    ["How do I use power-ups effectively?", "Save offensive items for straight sections where rivals cannot dodge, and hold defensive items when you are leading. Using a boost right before a corner usually wastes it, so fire boosts on exits where you can carry the speed."],
  ],
  "stickman-bow-clash-archery-guide": [
    ["How do I hit headshots consistently?", "Aim slightly above the head at long range to compensate for arrow drop, and learn the arc at each distance through repetition. Headshots reward precision over speed, so take the extra half second to settle your aim before releasing."],
    ["Should I charge my shots fully?", "Full power is best for long range, but mid-range duels favor quick partial shots that keep pressure on. Mixing shot strengths keeps opponents guessing and lets you fire again sooner after a miss."],
    ["How do I win duels against fast opponents?", "Control the pace by shooting first and forcing them to react. Move between volleys if the game allows, and aim for body shots when the head angle is awkward, because consistent hits beat ambitious misses."],
  ],
  "sniper-shooter-3d-aim-guide": [
    ["How do I stop my scope from swaying?", "Use the hold-breath mechanic if the game offers one, and time your shot during the natural pause at the end of the sway cycle. Shooting while the reticle is moving guarantees a miss on distant targets."],
    ["How do I find hidden targets faster?", "Scan systematically rather than sweeping randomly: divide the scene into left, middle, and right thirds and check each in order. Look for movement and shape breaks against the background rather than color alone."],
    ["Should I go for headshots or body shots?", "Body shots are the reliable default on moving or distant targets, since the torso is a far larger target. Reserve headshot attempts for stationary targets where you have time to settle the reticle."],
  ],
  "thief-puzzle-timing-guide": [
    ["How do I time my moves past guards?", "Study each guard's patrol loop for a full cycle before moving, then act at the moment their attention turns away. Most levels are puzzles of rhythm rather than speed, so patient observation beats rushed attempts every time."],
    ["What should I do when a level seems impossible?", "Change your entry point or order of operations. Many Thief Puzzle levels have a single intended sequence, and trying the objects in a different order often reveals the trick. Watch what moves and what stays fixed."],
    ["Are there shortcuts in Thief Puzzle levels?", "Sometimes. A few levels allow grabbing the target from an unexpected angle that skips half the puzzle. If you are stuck, try interacting with background objects, because the solution often hides in something that looks decorative."],
  ],
  "screw-nuts-order-guide": [
    ["Does the order of removing screws matter?", "Absolutely. Removing screws in the wrong order can drop a plate over the holes you still need, blocking the level. Always trace which plate holds which others before unscrewing anything, and free the topmost pieces first."],
    ["What should I do when all holes are blocked?", "Look for the screw whose plate can fall away harmlessly, freeing space underneath. Most blocked states come from one premature removal, so use the undo button liberally and test sequences before committing."],
    ["How do I get three stars on hard levels?", "Plan the full removal sequence before touching a screw, and minimize wasted moves. Three-star runs come from solving the level in your head first, then executing cleanly without trial and error."],
  ],
  "mahjong-tile-priority-guide": [
    ["Which tiles should I match first?", "Free the tiles that unblock the most other tiles: pairs on top of stacks and at the ends of long rows. Clearing a random available pair can lock the board, while clearing the right pair opens a cascade of new options."],
    ["How do I avoid running out of moves?", "Keep an eye on pairs buried under stacks and avoid taking their only free twin. If two identical tiles are each the sole free copy of their kind, matching them with other tiles first preserves your escape routes."],
    ["Is Mahjong solvable every time?", "Not every random layout is solvable, which is why the shuffle option exists. Good priority play dramatically increases your solve rate, but if the board locks with tiles remaining, shuffle or restart without hesitation."],
  ],
  "pixel-jam-bus-exit-guide": [
    ["How do I free the blocked bus?", "Identify which vehicles block the bus's exit path and move them in reverse dependency order, starting with the one furthest from the bus. Moving blockers without a plan usually jams the lot tighter, so trace the full chain before the first move."],
    ["What is the trick to the harder levels?", "Use empty spaces as buffer parking, sliding vehicles aside temporarily even when the move seems backwards. The hardest Pixel Jam boards require two or three setup moves that look counterproductive before the exit line opens."],
    ["Is there a penalty for extra moves?", "Later levels score you on efficiency, so solving in fewer moves earns better ratings. When a level allows multiple solutions, the one that shifts each vehicle the fewest times is usually the intended elegant path."],
  ],
  "ricopop-bank-shot-guide": [
    ["How do bank shots work in RicoPop?", "Shots ricochet off walls at mirrored angles, letting you reach targets hidden behind obstacles. Picture the reflected path as a straight line from a mirrored target position, and aim down that line to make the bounce land where you want."],
    ["When should I use a bank shot instead of a direct shot?", "Use banks when the direct line is blocked or when the rebound can hit multiple targets in sequence. A well-planned ricochet that clears two clusters is worth more than two separate direct shots."],
    ["How do I improve my bank shot accuracy?", "Practice single-wall bounces first, noting where shots land at common angles. Add a second wall only after one-wall shots feel automatic, because each extra bounce multiplies small aiming errors."],
  ],
  "tank-push-sokoban-guide": [
    ["How do I solve the push puzzles without getting stuck?", "Never push a crate into a corner or against a wall you cannot pull it away from, since pushes are irreversible. Before each push, confirm the destination square is useful and that you can stand behind the crate for the next push."],
    ["What should I do when the puzzle seems unsolvable?", "Undo or restart and rethink the order. Almost every stuck state comes from one early push into a dead position, so identify which crate ended somewhere useless and replay with that crate handled differently."],
    ["How does shooting fit into the puzzles?", "Use shots to clear destructible blocks or enemies blocking key corridors, but save ammunition for places where pushing cannot open the path. Shooting is the escape valve, pushing is the puzzle."],
  ],
  "catchfish-reel-guide": [
    ["Why does my line keep breaking?", "Line breaks happen when tension stays in the red zone too long. Ease off the reel when the fish runs and the tension meter climbs, then reel during its rest phases. Fighting the fish in pulses is far safer than constant reeling."],
    ["How do I catch bigger fish?", "Bigger fish need patience: let them tire themselves out by keeping steady moderate tension instead of forcing them in. Upgrade your line and reel as soon as you can, because stronger gear widens the safe tension window."],
    ["What is the best rhythm for reeling?", "Reel in short bursts while the fish is calm, and release the moment it surges. Watch the tension meter rather than the fish itself, since the meter tells you exactly how much room you have before the snap."],
  ],
  "midnight-taxi-route-guide": [
    ["How do I earn more per shift?", "Chain pickups efficiently by planning your next fare while driving the current one. Longer fares pay more, but only if the route is clean, so learn which districts generate high-value rides at which times."],
    ["What is the fastest route strategy?", "Prefer routes with fewer turns over the shortest distance, because every corner costs more time than straight road. Memorize the two or three arterial streets in each district and build every route around them."],
    ["How do I keep my rating high?", "Smooth driving matters as much as speed: avoid collisions and hard braking, and arrive within the expected window. A consistent four-star-plus rating unlocks better-paying fares faster than risky driving ever will."],
  ],
  "swarmfront-upgrade-guide": [
    ["Which upgrades should I buy first?", "Prioritize economy upgrades that increase resource income, because every minute of boosted income compounds through the rest of the run. Damage upgrades feel satisfying but pay for themselves far more slowly than a bigger resource engine."],
    ["When should I switch from economy to combat?", "Shift spending when waves start overwhelming your defenses. A good rule is to invest in combat only when the previous wave cost you more health than you are comfortable losing twice."],
    ["How do I survive the late waves?", "Layer your defenses so no single breach ends the run: spread damage sources across multiple lanes, keep one emergency ability in reserve, and never spend your last resources on a luxury upgrade before a boss wave."],
  ],
  "scary-granny-maze-guide": [
    ["How do I avoid Granny?", "Move quietly and crouch-walk near her patrol routes, because noise draws her directly to you. Close doors behind you to slow her pursuit, and never run unless you already know your escape route."],
    ["What should I do when Granny spots me?", "Break line of sight immediately by rounding corners and hiding in a closet or under a bed before she arrives. Do not keep running in straight corridors, since she is faster in open pursuit."],
    ["Where should I explore first?", "Clear the ground floor of key items before venturing upstairs, and memorize two hiding spots in every area you loot. Knowing your nearest hide location turns every encounter from a death sentence into a delay."],
  ],
  "formula-car-stunt-ramp-guide": [
    ["How fast should I hit the ramps?", "Enter ramps at roughly three-quarter throttle for controlled landings. Full speed launches further but makes midair corrections sluggish, and overshooting the landing zone costs more time than a modest jump ever would."],
    ["How do I control the car in midair?", "Use gentle pitch and roll inputs the moment you leave the ramp, aiming to land on all four wheels. Large midair corrections destabilize the landing, so set your attitude early and hold it."],
    ["How do I land without spinning out?", "Land straight with the steering centered and avoid touching the throttle until all four wheels grip. Most spinouts come from steering input on touchdown, so treat the landing as a moment of stillness."],
  ],
  "sparkzap-circuit-guide": [
    ["Where should I start on a circuit puzzle?", "Start from the power source and trace outward, because every tile must ultimately connect back to it. Solving from the source guarantees each placed segment is live, while working from the far end often leaves orphaned sections."],
    ["How do I handle levels with multiple endpoints?", "Identify which endpoint must connect first based on the available tiles, then route the remaining branches afterward. Multi-endpoint levels are really several small circuits sharing a trunk line."],
    ["What should I do when one tile will not connect?", "Re-check the tiles one step back rather than forcing the problem tile. A stubborn tile almost always means an earlier segment is rotated wrong, and fixing the upstream error makes the final connection obvious."],
  ],
};

const source = readFileSync(GUIDES_PATH, "utf8");
const marker = "export const guides: Guide[] = ";
const startIdx = source.indexOf(marker);
const endIdx = source.lastIndexOf("\n];");
if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
  console.error("Could not locate guides array bounds");
  process.exit(1);
}
const prefix = source.slice(0, startIdx + marker.length);
const suffix = ";" + source.slice(endIdx + 3); // ";" + functions (JSON.stringify already emits closing "]")

const { guides } = await import(
  `data:text/javascript;base64,${Buffer.from(
    "export const guides = " + source.slice(startIdx + marker.length, endIdx + 3)
  ).toString("base64")}`
);

let updated = 0;
for (const g of guides) {
  const pairs = faqs[g.slug];
  if (!pairs) continue;
  const hasFaq = g.blocks.some(
    (b) => b.type === "h2" && b.text.toLowerCase().startsWith("frequently asked")
  );
  if (hasFaq) continue;
  g.blocks.push({ type: "h2", text: "Frequently asked questions" });
  for (const [q, a] of pairs) {
    g.blocks.push({ type: "p", text: `${q} ${a}` });
  }
  updated++;
}

console.log(`Guides updated: ${updated}`);
const missing = Object.keys(faqs).filter((s) => !guides.find((g) => g.slug === s));
if (missing.length) console.log("MISSING SLUGS:", missing.join(", "));
const stillNoFaq = guides.filter(
  (g) => !g.blocks.some((b) => b.type === "h2" && b.text.toLowerCase().startsWith("frequently asked"))
);
console.log(`Guides still without FAQ: ${stillNoFaq.length} (${stillNoFaq.map((g) => g.slug).join(", ")})`);

if (!dry && missing.length === 0) {
  writeFileSync(GUIDES_PATH, prefix + JSON.stringify(guides, null, 2) + suffix);
  console.log("guides.ts regenerated");
}
