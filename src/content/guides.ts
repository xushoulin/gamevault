/**
 * Guide articles (static content, data-driven — no MDX dependency).
 * Each guide targets a long-tail informational keyword and links back
 * to its playable game page (internal linking for SEO).
 */

export type GuideBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

export type Guide = {
  slug: string;
  title: string;
  gameSlug?: string;
  description: string;
  date: string;
  blocks: GuideBlock[];
};

export const guides: Guide[] = [
  {
    slug: "how-to-beat-2048",
    title: "How to Beat 2048: The Corner Strategy That Actually Works",
    gameSlug: "2048",
    description:
      "A step-by-step 2048 strategy guide: the corner technique, why you should never press one arrow, and how to build chains to finally reach the 2048 tile.",
    date: "2026-10-20",
    blocks: [
      {
        type: "p",
        text: "2048 looks like pure luck, but every person who reaches the 2048 tile is using the same core idea: keep your biggest tile locked in one corner and build a decreasing chain around it. Once the chain becomes a habit, winning stops being a miracle and starts being a routine. This guide breaks that routine into five rules you can apply in your very next game.",
      },
      { type: "h2", text: "Rule 1: Pick one corner and never let the big tile leave it" },
      {
        type: "p",
        text: "Most players pick bottom-left. Every move you make should keep your largest tile glued to that corner. If your biggest tile drifts to the middle of the board, one unlucky spawn can bury it under small tiles and end the run. The entire corner strategy is built on protecting that position.",
      },
      { type: "h2", text: "Rule 2: Use only two or three directions" },
      {
        type: "p",
        text: "If your big tile lives in the bottom-left corner, your main moves are Left and Down. Up is forbidden in almost every situation — it pulls tiles away from your chain. Right is an emergency move only. Strong players press two arrows 90% of the time, and that discipline is exactly why their boards stay tidy while yours turns to chaos.",
      },
      { type: "h2", text: "Rule 3: Build a snake chain, not random pairs" },
      {
        type: "p",
        text: "A winning board looks like a snake: 512 in the corner, 256 next to it, 128 next to that, decreasing all the way to 2s at the tail. When the chain is ordered, a single merge cascades through the whole row — 2s become 4s, 4s become 8s, and the wave rolls toward your corner. Before every move, ask one question: does this keep the chain decreasing?",
      },
      { type: "h2", text: "Rule 4: Think two moves ahead, not one" },
      {
        type: "p",
        text: "Every swipe shifts the entire board, so before you commit, imagine where every tile will land and where the new 2 or 4 will spawn. If a merge fills the empty square you were saving, that swipe is a trap no matter how good it looks. Slowing down and visualizing two full boards ahead is the single biggest skill gap between 2000-point players and 20000-point players.",
      },
      { type: "h2", text: "Rule 5: Clean up small tiles early" },
      {
        type: "ul",
        items: [
          "Merge 2s and 4s as soon as possible — they are the clutter that blocks your chain.",
          "Never leave a small tile stranded on the row your big tiles live on.",
          "If the bottom row is full, sweep Left then Down to compact everything.",
          "When the board is nearly full, prioritize moves that create empty space over moves that score points.",
        ],
      },
      { type: "h2", text: "What to do when the board is almost full" },
      {
        type: "p",
        text: "Panic swiping is how good runs die. When space runs out, stop trying to build and start trying to breathe: look for any merge that frees a square on your main rows, take it, and rebuild the chain. You will lose some structure, but a slightly messier board with room to move always beats a beautiful board that is one swipe from game over. Now put it into practice — play 2048 free in your browser and try the corner strategy right away.",
      },
    ],
  },
  {
    slug: "tetris-strategy-tips",
    title: "Tetris Strategy: 7 Tips to Clear More Lines and Survive Longer",
    gameSlug: "tetris",
    description:
      "Practical Tetris tips for beginners and intermediate players: keep the stack flat, master the I-piece well, use hold wisely, and stop digging yourself into holes.",
    date: "2026-10-20",
    blocks: [
      {
        type: "p",
        text: "Tetris is 40 years old and still the most-played puzzle game on earth, and the gap between beginners and strong players is not reflexes — it is a handful of habits. Here are the seven that matter most, whether you are chasing your first 10-line clear or trying to survive speed levels.",
      },
      { type: "h2", text: "1. Keep the stack flat" },
      {
        type: "p",
        text: "A bumpy stack forces you to place pieces where they fit instead of where they should go, and every compromise creates the holes that kill runs. Aim for a surface with at most one step of height difference between columns. If a placement makes the stack uneven, it needs to pay for itself with a line clear.",
      },
      { type: "h2", text: "2. Never cover a hole" },
      {
        type: "p",
        text: "A hole is any empty cell with blocks above it. Once covered, it can only be cleared with an I-piece or by clearing rows above it — both expensive. If you must create a hole, create it in one column only, keep that column consistent, and dig it out at the first chance.",
      },
      { type: "h2", text: "3. Save the I-piece for a Tetris" },
      {
        type: "p",
        text: "Clearing four lines at once is called a Tetris and scores far more per line than any other clear. Keep one well — a single column with no gaps — on the side of your stack, and drop the I-piece into it the moment it appears. A well on either edge is easiest to maintain.",
      },
      { type: "h2", text: "4. Use the hold slot as a toolbox" },
      {
        type: "ul",
        items: [
          "Hold an I-piece when you have no well yet — it is your Tetris ticket.",
          "Hold an S or Z when neither fits well; they are the most awkward pieces.",
          "Do not hold the same piece forever — an unused hold is wasted flexibility.",
        ],
      },
      { type: "h2", text: "5. Learn to love hard drops and rotation" },
      {
        type: "p",
        text: "Most versions let you rotate a piece after it has landed (wall kicks and tucks). Sliding a T-piece under an overhang or tucking an L into a corner saves placements that would otherwise create holes. Also use hard drop deliberately: it is instant, and knowing the piece is exactly where you saw it keeps your plan honest.",
      },
      { type: "h2", text: "6. Play for the next piece, not this one" },
      {
        type: "p",
        text: "The preview queue is the real game. Before placing a piece, glance at the next two or three: if an I is coming, protect the well; if three flat pieces are coming, now is the time to even out the stack. Players who only react to the current piece are always one bad spawn from disaster.",
      },
      { type: "h2", text: "7. Under pressure, clear singles without shame" },
      {
        type: "p",
        text: "When the stack is high and the speed is brutal, forget T-spins and Tetris combos — just clear lines. A single-line clear that lowers the stack buys time and thinking space, and surviving is the only score that counts at high speed. Ready to practice? Play Tetris free online at GameVault, no download needed.",
      },
    ],
  },
  {
    slug: "snake-game-high-score-tips",
    title: "Snake Game: 6 Tips to Double Your High Score",
    gameSlug: "snake",
    description:
      "Snake tips that actually raise your high score: stay in open space, use the perimeter loop, plan turns early, and avoid the classic self-trap in the endgame.",
    date: "2026-10-20",
    blocks: [
      {
        type: "p",
        text: "Snake is the simplest game ever made — until your tail takes up half the board and every direction looks like suicide. The players with huge scores are not faster; they follow a few spatial habits that keep them alive long after the board gets crowded. Here they are.",
      },
      { type: "h2", text: "1. Stay in the middle early, hug the walls late" },
      {
        type: "p",
        text: "In the opening, the center gives you the shortest path to food from any position. As your snake grows, the opposite becomes true: the open center turns into a maze of your own body, and the perimeter becomes the only reliable highway. Shift your patrol route outward as you lengthen.",
      },
      { type: "h2", text: "2. Learn the perimeter loop" },
      {
        type: "p",
        text: "The single most reliable high-score pattern is a big loop around the edge of the board: travel along the walls in a rectangle and cut inward only to grab food that is one tile from the edge. This turns a long snake into a train on rails — it can circle forever without ever meeting itself.",
      },
      { type: "h2", text: "3. Never turn into a space smaller than your body" },
      {
        type: "ul",
        items: [
          "Before turning, check the pocket you are entering: can your whole length fit or exit it?",
          "If food is inside a pocket, take it from the opening side, never dive deep first.",
          "When in doubt, keep following your tail — the space it just left is guaranteed safe.",
        ],
      },
      { type: "h2", text: "4. Approach food from the right side" },
      {
        type: "p",
        text: "Every food pellet has a safe approach and a deadly one. Before grabbing, ask: after I eat this, where does my head go next? If the answer is 'into my own body', loop around and take the food from another angle. Two extra seconds of planning beats losing a 300-point snake.",
      },
      { type: "h2", text: "5. Follow your tail when lost" },
      {
        type: "p",
        text: "There is one move that is always safe: following the tip of your own tail. The tail vacates its square every tick, so trailing it means the space ahead of you is guaranteed to be free. When the board is crowded and you cannot see a plan, tail-following buys you time to find one.",
      },
      { type: "h2", text: "6. Slow down your inputs, not the game" },
      {
        type: "p",
        text: "Most self-collisions are double-taps: two turns pressed faster than the game ticks. If your version allows it, play at a moderate speed and make one deliberate input per tick — precision scores higher than raw speed in the endgame every time. Put it to the test and play Snake free online — see if you can beat your record tonight.",
      },
    ],
  },
  {
    slug: "minesweeper-strategy",
    title: "How to Win at Minesweeper: Patterns, Probabilities and First-Click Logic",
    gameSlug: "minesweeper",
    description:
      "Learn real Minesweeper strategy: the 1-2-1 and 1-2-2-1 patterns, how to count openings, when a guess is mathematically forced, and how to stop clicking in fear.",
    date: "2026-10-20",
    blocks: [
      {
        type: "p",
        text: "Minesweeper is not a guessing game — on a good day, over 95% of a board is pure logic. The rest is knowing which patterns to recognize instantly and how to think about the few forced guesses. This guide covers both, plus the counting technique that turns vague fear into numbers.",
      },
      { type: "h2", text: "The core skill: reading numbers as territory claims" },
      {
        type: "p",
        text: "Every number claims exactly that many mines among its touching squares. The fastest habit to build: when you open a number, immediately compare it against the flagged and opened squares around it. A '1' with a flag already touching it is satisfied — every other neighbor is safe. Chaining that simple subtraction clears most of the board.",
      },
      { type: "h2", text: "Memorize the two killer patterns" },
      {
        type: "ul",
        items: [
          "1-2-1 pattern: three numbers in a row reading 1-2-1 with two hidden squares above the 2 — the hidden squares touching the 1s are safe, and the mine sits above the 2.",
          "1-2-2-1 pattern: the same logic stretched one wider — the two outer hidden squares are safe, the two middle ones are mines.",
          "Corner '1': a 1 in a corner with one hidden neighbor means that neighbor is a mine, always.",
        ],
      },
      {
        type: "p",
        text: "These patterns account for a huge share of all deductions on real boards. When you spot the shape, resolve it instantly instead of recounting from scratch each time.",
      },
      { type: "h2", text: "Open territory, not edges" },
      {
        type: "p",
        text: "Numbers along a wall or in a corner have fewer neighbors, which means less information per square and more forced guesses. Always work from opened territory inward and delay wall and corner regions as long as possible. The middle of the board gives you the most logic per click.",
      },
      { type: "h2", text: "When you must guess, guess with math" },
      {
        type: "p",
        text: "Some positions are genuinely 50/50 — but most 'guesses' are not. Count the ways mines can be arranged in each unresolved region: if one square is a mine in every arrangement, flag it; if it is a mine in none, open it. Only when two squares are truly symmetric does the probability tie — and then, click the one that is safer if wrong: opening a mine ends the game, but so does flagging wrong and walking into it later. Prefer the guess that leaves you more information either way.",
      },
      { type: "h2", text: "Speed comes last" },
      {
        type: "p",
        text: "Beginners lose by clicking fast and thinking slow. First learn to never misclick: chord-opening (both mouse buttons on a satisfied number) opens all safe neighbors at once, but only chord when the count matches the flags exactly. Accuracy first, then patterns, then speed — in that order. Practice now: play Minesweeper free online, no download, right in your browser.",
      },
    ],
  },
  {
    slug: "wordle-strategy-best-starters",
    title: "Wordle Strategy: Best Starter Words and How to Narrow Down Fast",
    gameSlug: "word-guess",
    description:
      "A data-informed Wordle strategy: the best starter words, how to use yellow and green letters properly, and the elimination mindset that solves puzzles in four guesses.",
    date: "2026-10-20",
    blocks: [
      {
        type: "p",
        text: "Wordle-style games reward structure, not vocabulary size. Solvers that test every five-letter word show the same truth: a good opening plus disciplined elimination solves most puzzles in three or four guesses. Here is the method.",
      },
      { type: "h2", text: "Start with a word rich in common letters" },
      {
        type: "p",
        text: "The best openers pack frequent letters — E, A, R, O, T, S, L, I, N — into distinct positions. Words like SLATE, CRANE, TRACE, RAISE and AUDIO are popular for good reason: they test ten or more of the highest-frequency letters at once, and their results cut the candidate list by 80-90% immediately.",
      },
      { type: "h2", text: "Your second guess should test new letters" },
      {
        type: "ul",
        items: [
          "If your opener found nothing, do not panic — play a second word covering the letters the first missed (e.g. after SLATE, try POUND or IRONY).",
          "If you found a green letter, keep it in the same slot and surround it with fresh letters.",
          "Avoid re-testing letters you already know are absent — that wastes the most valuable resource in the game: information.",
        ],
      },
      { type: "h2", text: "Understand yellow properly" },
      {
        type: "p",
        text: "A yellow letter means the letter is in the word but not in that position — and crucially, it may appear again elsewhere, even multiple times. When you place a yellow letter in a new spot and it stays yellow, you are learning the word contains that letter somewhere else you have not tried. Doubles are more common than players expect: words like SPEED and CHESS trip up people who assume every letter is unique.",
      },
      { type: "h2", text: "Think in candidate lists, not vibes" },
      {
        type: "p",
        text: "Strong players maintain a mental shortlist: 'must contain R and T, not those positions, ends in S' — then pick the guess that splits that list best, not the first word that pops to mind. When several candidates remain and you have spare guesses, use one to test ambiguous letters rather than gambling on the answer.",
      },
      { type: "h2", text: "Endgame: protect your streak, not your ego" },
      {
        type: "p",
        text: "With two guesses left and three candidates, always spend a guess discriminating — a 100% solve beats a 33% hero play every time. Ready to practice the method? Play Word Guess free online at GameVault, unlimited puzzles, no waiting for tomorrow's word.",
      },
    ],
  },
  {
    slug: "brick-breaker-tips",
    title: "Brick Breaker Tips: Angle Control Beats Fast Reflexes",
    gameSlug: "brick-breaker",
    description:
      "Why calm paddle positioning wins at brick breaker: open tunnels, control the bounce angle, catch power-ups safely, and never let the ball flat-line.",
    date: "2026-10-20",
    blocks: [
      {
        type: "p",
        text: "Brick breaker (Breakout-style) games look like reflex tests, but the scoreboard tells a different story: the best runs come from positioning the paddle early and letting angles do the work. These five habits will carry you further than any amount of frantic mouse-wiggling.",
      },
      { type: "h2", text: "1. Hit with the paddle's edges to steepen the angle" },
      {
        type: "p",
        text: "The ball's rebound angle depends on where it strikes the paddle. Center hits send the ball nearly vertical (easy to track but low value); edge hits create wide, fast angles that chew through rows. Learn to intentionally choose contact points instead of just 'getting under the ball'.",
      },
      { type: "h2", text: "2. Open a tunnel to the top" },
      {
        type: "ol",
        items: [
          "Pick one column, usually near an edge, and dig through it.",
          "Once the ball gets above the brick field, it ricochets between the top wall and the bricks, clearing dozens without you.",
          "Protect that tunnel: when the ball comes back down, guide it back in rather than letting it wander.",
        ],
      },
      { type: "h2", text: "3. Position before the ball arrives" },
      {
        type: "p",
        text: "Amateurs chase the ball; strong players watch its trajectory and move the paddle to the intercept point early, then fine-tune. Moving less also means your contact point — and therefore the rebound angle — stays a decision instead of an accident.",
      },
      { type: "h2", text: "4. Treat power-ups like grenades" },
      {
        type: "p",
        text: "Not every falling power-up is a gift. Multi-ball is almost always good; widening paddles and slows are safe; anything that shrinks the paddle or speeds the ball up can be declined by simply not catching it. Read the label, then decide whether to move toward it or out of its way.",
      },
      { type: "h2", text: "5. Never let the ball flat-line horizontally" },
      {
        type: "p",
        text: "A ball bouncing purely left-right between walls above the bricks can loop forever without hitting anything — the classic stall. If the trajectory goes flat, deliberately give a shallow paddle nudge or edge hit to tilt it back into the bricks. Want to feel the difference angle control makes? Play Brick Breaker free online now.",
      },
    ],
  },
  {
    slug: "flappy-bird-high-score-guide",
    title: "Flappy Bird Guide: The Rhythm Method for a 50+ High Score",
    gameSlug: "flappy-wings",
    description:
      "Stop tapping on panic. Learn the flap rhythm, the apex trick, pipe-edge targeting and the mindset shift that turns Flappy Bird rage into consistent 50+ runs.",
    date: "2026-10-20",
    blocks: [
      {
        type: "p",
        text: "Flappy Bird and its clones are not really about reaction speed — the pipes never surprise you. They are about rhythm: a steady internal metronome of taps that keeps the bird at a constant height with tiny, boring corrections. Players who 'feel calm' at 50 points are playing a metronome, not a reflex game. Here is how to build yours.",
      },
      { type: "h2", text: "The apex trick: tap at the top of the arc" },
      {
        type: "p",
        text: "Every flap launches the bird into a small arc: rise, hang, fall. Tapping at the apex — the hang moment — costs almost no altitude and produces a gentle, controllable bounce. Tapping during the fall wastes most of the flap fighting gravity, and tapping while rising rockets you into the pipe above. Feel for the hang, tap there.",
      },
      { type: "h2", text: "Aim for the pipe gap's lower-middle, not the center" },
      {
        type: "ul",
        items: [
          "Gravity is always pulling you down, so errors drift downward — flying high leaves room for correction, flying low does not.",
          "Target the gap's middle-lower edge and you will brush through with margin either way.",
          "Do not fixate on the gap itself; look one pipe ahead and let peripheral vision handle the current one.",
        ],
      },
      { type: "h2", text: "Flap early and small, never late and hard" },
      {
        type: "p",
        text: "The panic double-tap — two fast flaps after dropping too low — is the number-one killer. It launches the bird into the top pipe and ends runs that were perfectly recoverable. If you feel late, take the small hit: graze the bottom pipe's top corner rather than death-spiraling upward.",
      },
      { type: "h2", text: "Lock a rhythm and refuse to change it" },
      {
        type: "p",
        text: "The gaps in most versions arrive at a constant spacing, which means one constant flap rhythm clears them all. Count it out loud for your first ten pipes — many players literally tap to a beat — and your score stops depending on adrenaline.",
      },
      { type: "h2", text: "Reset your mind between runs" },
      {
        type: "p",
        text: "Flappy-style games punish tilt: the run after a near-miss is statistically your worst. Breathe once before restarting, and treat every run as the first run. Now apply it — play Flappy Wings free online and put the metronome to work.",
      },
    ],
  },
  {
    slug: "memory-match-techniques",
    title: "Memory Match Techniques: How to Clear the Board in Fewer Moves",
    gameSlug: "memory-match",
    description:
      "Memory game techniques backed by how working memory works: spatial grouping, the story method, edge-first scanning, and why slow turns win faster.",
    date: "2026-10-20",
    blocks: [
      {
        type: "p",
        text: "Memory match seems like a pure memory test, but technique changes the outcome enormously. The same 16-pair board can take one player 40 moves and another 22 — the difference is a few learnable habits, not photographic memory.",
      },
      { type: "h2", text: "Encode position + picture as one package" },
      {
        type: "p",
        text: "The brain remembers 'a cat' poorly and 'a cat in the top-left corner' far better — location is a second memory hook. When a card is revealed, silently say both facts: name and place. 'Two of hearts, row three, second from left.' Saying it engages auditory memory on top of the visual one, roughly doubling your recall surface.",
      },
      { type: "h2", text: "Group the board into rooms" },
      {
        type: "ul",
        items: [
          "Mentally split the grid into four quadrants and recall card-by-quadrant, not card-by-board.",
          "When you need a pair, first ask which quadrant it was in — halving the search space beats scanning everything.",
          "This is the same 'memory palace' trick used in memory sports, scaled to a card grid.",
        ],
      },
      { type: "h2", text: "Turn cards slowly and deliberately" },
      {
        type: "p",
        text: "Rushed flips create double exposure problems: you glimpse card B while thinking about card A, and neither sticks. A slow, conscious look at each card — one second of attention — records it properly the first time and saves three failed re-flips later. Slow is fast in memory games.",
      },
      { type: "h2", text: "Build stories for stubborn pairs" },
      {
        type: "p",
        text: "When two known matches keep slipping, chain them into a mini-story with their positions: 'the umbrella (top right) leans on the duck (bottom left)'. Absurd, vivid images are sticky by design, and a five-second story can lock a pair permanently.",
      },
      { type: "h2", text: "Scan edges first in the opening" },
      {
        type: "p",
        text: "Edge and corner cards have fewer neighbors, which makes them easier to relocate later. Clearing pairs from the border inward keeps your mental map simple as the board empties. Try the techniques now: play Memory Match free online at GameVault and count how few moves you need.",
      },
    ],
  },
  {
    slug: "best-free-browser-games-no-download",
    title: "The 10 Best Free Browser Games You Can Play Right Now (No Download)",
    description:
      "The best free online browser games in 2026 — instant-play classics from 2048 to Tetris. No download, no signup, works on desktop and mobile.",
    date: "2026-10-20",
    blocks: [
      {
        type: "p",
        text: "Browser games are having a quiet renaissance: no installers, no launchers, no 80 GB updates — you click and you are playing. We picked ten instant-play classics that run on any laptop, phone or school Chromebook. Every game below is playable free on GameVault with zero signup.",
      },
      { type: "h2", text: "1. 2048 — the perfect five-minute puzzle" },
      {
        type: "p",
        text: "Slide numbered tiles, merge equals, chase the 2048 tile. Simple rules hide a surprisingly deep strategy game — check our corner-strategy guide once you are hooked. Ideal for commutes and coffee breaks.",
      },
      { type: "h2", text: "2. Tetris — the eternal king" },
      {
        type: "p",
        text: "Forty years on, no puzzle game has surpassed it. Our HTML5 version runs smoothly on any device; read our Tetris strategy guide if you want to survive past level 5.",
      },
      { type: "h2", text: "3. Snake — the high-score machine" },
      {
        type: "p",
        text: "Eat, grow, avoid yourself. Deceptively calm for the first minute, white-knuckle by the third. Perfect one-more-run energy.",
      },
      { type: "h2", text: "4. Minesweeper — logic under pressure" },
      {
        type: "p",
        text: "The office classic that Windows made famous. Modern browser versions add responsive controls and mobile support — finally playable properly on a phone.",
      },
      { type: "h2", text: "5. Word Guess — your daily five-letter fix" },
      {
        type: "p",
        text: "Wordle-style deduction with unlimited plays. Our starter-word guide will have you solving in four guesses or fewer.",
      },
      { type: "h2", text: "6. Brick Breaker — pure arcade satisfaction" },
      {
        type: "p",
        text: "Bounce, smash, repeat. The tunnel-to-the-top trick makes it feel like a power fantasy once it clicks.",
      },
      { type: "h2", text: "7. Flappy Wings — the rage classic" },
      {
        type: "p",
        text: "One button, infinite frustration, endless one-more-try. Our rhythm-method guide is the difference between 7 points and 50.",
      },
      { type: "h2", text: "8. Memory Match — brain training that is actually fun" },
      {
        type: "p",
        text: "Great for kids and adults alike; our memory techniques make you noticeably faster within a single session.",
      },
      { type: "h2", text: "Why browser games beat downloads in 2026" },
      {
        type: "ul",
        items: [
          "Zero friction: no accounts, no installs, no updates — click and play.",
          "Runs anywhere: works on school and office machines, old laptops, phones and tablets.",
          "Actually free: no energy timers, no gacha, no 'watch 5 ads to continue'.",
          "Safe: games run sandboxed in your browser with nothing installed on your machine.",
        ],
      },
      {
        type: "p",
        text: "All ten games are live on GameVault right now — pick one from the menu above and start playing. No download, no signup, no nonsense.",
      },
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | null {
  return guides.find((g) => g.slug === slug) ?? null;
}

export function getGuidesByGame(gameSlug: string): Guide[] {
  return guides.filter((g) => g.gameSlug === gameSlug);
}

export function getRelatedGuides(currentSlug: string, limit = 4): Guide[] {
  return guides.filter((g) => g.slug !== currentSlug).slice(0, limit);
}
