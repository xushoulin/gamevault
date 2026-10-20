// Seed data: categories + games for GameVault
// Local games are self-hosted open-source style HTML5 games in /public/games/<slug>/
// Remote games are embedded via GameMonetize with their permission (revenue share program)

export const categories = [
  {
    slug: "puzzle",
    name: "Puzzle Games",
    description:
      "Free puzzle games you can play online — no download needed. Train your brain with logic, matching, number and word puzzles right in your browser.",
  },
  {
    slug: "arcade",
    name: "Arcade Games",
    description:
      "Classic free arcade games for your browser. Fast, fun and instantly playable — just like the old-school arcade, but online and free.",
  },
  {
    slug: "action",
    name: "Action Games",
    description:
      "Play free action games online, no download required. Reflex-based challenges, shooters and fast-paced adventures in your browser.",
  },
  {
    slug: "casual",
    name: "Casual Games",
    description:
      "Relaxing casual games to play free online. Easy to learn, hard to master — perfect for a quick break at home or on the go.",
  },
  {
    slug: "sports",
    name: "Sports & Racing Games",
    description:
      "Free sports and racing games you can play online in your browser. Race cars, score goals and beat the clock — no download needed.",
  },
  {
    slug: "brain",
    name: "Brain & Word Games",
    description:
      "Free brain games and word puzzles online. Daily-friendly challenges to keep your mind sharp — playable instantly in any browser.",
  },
];

export const games = [
  // ---- Self-hosted local games ----
  {
    slug: "2048",
    title: "2048",
    category: "puzzle",
    source: "local",
    embed_url: "/games/2048/index.html",
    thumb: "/thumbs/2048.svg",
    width: 460,
    height: 460,
    description:
      "2048 is the iconic number puzzle game. Swipe or use arrow keys to slide tiles and merge matching numbers — 2, 4, 8, 16… can you reach the legendary 2048 tile? Play 2048 online free in your browser, no download and no signup needed.",
    instructions:
      "Use arrow keys (or swipe on mobile) to move all tiles. When two tiles with the same number touch, they merge into one. Reach 2048 to win!",
  },
  {
    slug: "snake",
    title: "Snake",
    category: "arcade",
    source: "local",
    embed_url: "/games/snake/index.html",
    thumb: "/thumbs/snake.svg",
    width: 480,
    height: 480,
    description:
      "Play the classic Snake game online for free. Eat the apples, grow longer and avoid hitting yourself. The speed ramps up as you score — how long can you survive? A browser classic that works on desktop and mobile.",
    instructions:
      "Use arrow keys or WASD to steer (or swipe on mobile). Eat the red apple to grow and score. Don't crash into yourself!",
  },
  {
    slug: "tetris",
    title: "Tetris",
    category: "puzzle",
    source: "local",
    embed_url: "/games/tetris/index.html",
    thumb: "/thumbs/tetris.svg",
    width: 300,
    height: 600,
    description:
      "Play Tetris online free — the world's most famous block-stacking puzzle. Rotate and drop tetromino pieces to clear full lines. Every 5 lines the game speeds up. No download, plays instantly in your browser.",
    instructions:
      "← → move · ↑ rotate · ↓ soft drop. Fill complete rows to clear them and score. Clear more lines at once for bonus points.",
  },
  {
    slug: "minesweeper",
    title: "Minesweeper",
    category: "puzzle",
    source: "local",
    embed_url: "/games/minesweeper/index.html",
    thumb: "/thumbs/minesweeper.svg",
    width: 400,
    height: 460,
    description:
      "Play Minesweeper online free — the legendary logic puzzle. Use number clues to deduce where the 10 hidden mines are. Flag suspicious tiles and clear the whole board to win. Perfect quick brain workout in your browser.",
    instructions:
      "Left click (or tap) to reveal a square. Right click (or long press) to flag a mine. Numbers show how many mines touch that square.",
  },
  {
    slug: "brick-breaker",
    title: "Brick Breaker",
    category: "arcade",
    source: "local",
    embed_url: "/games/brick-breaker/index.html",
    thumb: "/thumbs/brick-breaker.svg",
    width: 480,
    height: 400,
    description:
      "A modern take on the classic Breakout arcade game. Bounce the ball, smash every brick and keep it alive with 3 lives. Free brick breaker game — playable online instantly, no download.",
    instructions:
      "Move the mouse (or drag on mobile) to control the paddle. Click or tap to launch the ball. Clear all 40 bricks to win.",
  },
  {
    slug: "flappy-wings",
    title: "Flappy Wings",
    category: "arcade",
    source: "local",
    embed_url: "/games/flappy-wings/index.html",
    thumb: "/thumbs/flappy-wings.svg",
    width: 420,
    height: 520,
    description:
      "Flappy Wings is a free flappy-style flying game. Tap to flap between endless pipes and chase your high score. One tap controls, instant restarts — the perfect one-more-try browser game.",
    instructions:
      "Tap, click or press Space to flap. Fly through the gaps between pipes. Each pipe passed = 1 point. Touch a pipe or the ground and it's over!",
  },
  {
    slug: "memory-match",
    title: "Memory Match",
    category: "casual",
    source: "local",
    embed_url: "/games/memory-match/index.html",
    thumb: "/thumbs/memory-match.svg",
    width: 480,
    height: 480,
    description:
      "Memory Match is a free online memory game for kids and adults. Flip cards and find all 12 emoji pairs in as few moves as possible. A relaxing brain training game that plays instantly in any browser.",
    instructions:
      "Click (or tap) two cards to flip them. Matched pairs stay open. Find all 12 pairs to win — try to beat your move count!",
  },
  {
    slug: "word-guess",
    title: "Word Guess",
    category: "brain",
    source: "local",
    embed_url: "/games/word-guess/index.html",
    thumb: "/thumbs/word-guess.svg",
    width: 420,
    height: 560,
    description:
      "Word Guess is a free word puzzle in the style of Wordle. You have 6 tries to guess a hidden 5-letter word. Green = right spot, yellow = wrong spot. Play unlimited rounds of word guessing online — no daily limit.",
    instructions:
      "Type a 5-letter word and press Enter. Green tiles are correct letters in the correct spot; yellow tiles are in the word but the wrong spot.",
  },
  // ---- GameMonetize embedded games (official embed program) ----
  {
    slug: "obby-rainbow-tower",
    title: "Obby Rainbow Tower",
    category: "action",
    source: "gamemonetize",
    embed_url: "https://html5.gamemonetize.co/hbf9jaxczsa4sqslxfxbzkuun22ylzh8/",
    thumb: "https://img.gamemonetize.com/hbf9jaxczsa4sqslxfxbzkuun22ylzh8/512x384.jpg",
    width: 1920,
    height: 1080,
    description:
      "Obby Rainbow Tower is a fast tower race where every second and every jump matters. Packed with moving platforms, icy tiles, spinning lava bars and snowball portals — race to the top solo or with a friend in 2 player mode.",
    instructions:
      "Player 1: WASD move, Shift sprint, Space jump/double jump. Player 2: Arrows move, K jump, L double jump. Mobile: on-screen buttons.",
  },
  {
    slug: "obby-toilet-line",
    title: "Obby Toilet Line",
    category: "casual",
    source: "gamemonetize",
    embed_url: "https://html5.gamemonetize.co/hrmwlp351g90vwzplt86bz4snam41y84/",
    thumb: "https://img.gamemonetize.com/hrmwlp351g90vwzplt86bz4snam41y84/512x384.jpg",
    width: 1920,
    height: 1080,
    description:
      "Obby Toilet Line starts in the most chaotic place imaginable: a gas station restroom line with 30 waiting characters. Earn money while you wait, move up the queue with idle progression and reach the mysterious toilet at the end. Supports 2 player mode.",
    instructions:
      "Player 1: WASD move, Space jump, E interact, Shift sprint. Player 2: Arrows move, K interact, L jump. Mobile: on-screen buttons.",
  },
  {
    slug: "darkhood",
    title: "DarkHood",
    category: "action",
    source: "gamemonetize",
    embed_url: "https://html5.gamemonetize.co/1zhakvwsb80tili3c8p352rmrjt011w5/",
    thumb: "https://img.gamemonetize.com/1zhakvwsb80tili3c8p352rmrjt011w5/512x384.jpg",
    width: 960,
    height: 540,
    description:
      "Step into a world where the only light is your own aura. Guide a brave boy in a dark hoodie through candle-lit caves, sleeping monsters and hidden passages. Collect glowing gems, avoid traps and unlock the exit in this cozy dark platform adventure.",
    instructions:
      "Desktop: arrow keys or A/D to move, Space/W/Up to jump. Mobile: on-screen touch buttons.",
  },
  {
    slug: "tiny-track-rally",
    title: "Tiny Track Rally",
    category: "sports",
    source: "gamemonetize",
    embed_url: "https://html5.gamemonetize.co/vwlvudub01fmurfybb0dnjy9c3arjxwa/",
    thumb: "https://img.gamemonetize.com/vwlvudub01fmurfybb0dnjy9c3arjxwa/512x384.jpg",
    width: 1280,
    height: 720,
    description:
      "Race tiny toy cars in this colorful 3D arcade racer! Drift through corners, fire your nitro and beat up to 7 rivals across 10 tracks in 5 modes — Race, Time Trial, Elimination, Checkpoint and Daily Challenge. Unlock cars and upgrade your ride in the garage.",
    instructions:
      "W/Up gas · S/Down brake · A/D steer · Shift or Space nitro · C camera · R reset. Mobile: on-screen controls.",
  },
  {
    slug: "funny-cars-reload",
    title: "Funny Cars Reload",
    category: "sports",
    source: "gamemonetize",
    embed_url: "https://html5.gamemonetize.co/jz4uknudxi9b7efyv5d6wdwolb7eta8c/",
    thumb: "https://img.gamemonetize.com/jz4uknudxi9b7efyv5d6wdwolb7eta8c/512x384.jpg",
    width: 800,
    height: 600,
    description:
      "Get ready for a fun cartoon racing adventure! Drive crazy cartoon cars through challenging tracks, overcome obstacles and prove you are the ultimate racing champion. Colorful 3D graphics with multiple levels of increasing difficulty.",
    instructions:
      "W or Up arrow to accelerate, S or Down to brake/reverse, A/D or Left/Right to steer.",
  },
  {
    slug: "boo-chains",
    title: "Boo Chains",
    category: "puzzle",
    source: "gamemonetize",
    embed_url: "https://html5.gamemonetize.co/meb1p0ebehdlwx4821lxmd1rxqfpxixv/",
    thumb: "https://img.gamemonetize.com/meb1p0ebehdlwx4821lxmd1rxqfpxixv/512x384.jpg",
    width: 720,
    height: 1280,
    description:
      "Link cute Halloween monsters with the same number or one apart and watch them blow up! Travel a spooky map with 5 zones, free trapped monsters, beat a giant boss every 10 stages, unlock 5 monster heroes and complete daily missions.",
    instructions:
      "Click/drag (or slide on mobile) across neighboring monsters with the same number or one apart, then release. Keys: Space collect, B power, H hint, P pause.",
  },
  {
    slug: "monster-cafe-idle-tycoon",
    title: "Monster Café: Idle Tycoon",
    category: "casual",
    source: "gamemonetize",
    embed_url: "https://html5.gamemonetize.co/58mlizgpff7kxddjlrim59iye7qx1ejl/",
    thumb: "https://img.gamemonetize.com/58mlizgpff7kxddjlrim59iye7qx1ejl/512x384.jpg",
    width: 1280,
    height: 720,
    description:
      "Run the cosiest café at the edge of the haunted woods! Slimes, ghosts, vampires and zombies line up for bat lattes and pumpkin muffins. Upgrade spooky machines, hire monster waiters and open 5 hand-drawn locations in this relaxing idle tycoon.",
    instructions:
      "Mouse or touch only: tap order bubbles and machines to serve monsters, tap coin bags for tips and lucky bats for bonus coins.",
  },
  {
    slug: "netherton-volleyball",
    title: "Netherton Volleyball",
    category: "sports",
    source: "gamemonetize",
    embed_url: "https://html5.gamemonetize.co/9kuz4crhnv4b36fvv51j5jg3n90f0nvn/",
    thumb: "https://img.gamemonetize.com/9kuz4crhnv4b36fvv51j5jg3n90f0nvn/512x384.jpg",
    width: 360,
    height: 640,
    description:
      "Netherton Volleyball is a quick pixel-art volleyball game where you call the shots for a whole 6v6 team. Time your taps to serve, pass, dig and block, level up your players and beat 18 rival teams to lift the cup.",
    instructions:
      "Tap anywhere on the court when the ring turns green, click a hitter's ring to set them. Keyboard: Space tap, Q/W/E front row, A/S/D back row.",
  },
  {
    slug: "sort-master-satisfeel-asmr",
    title: "Sort Master: Satisfeel ASMR",
    category: "casual",
    source: "gamemonetize",
    embed_url: "https://html5.gamemonetize.co/rxwlvvbj3tvj42wcvvbc8ut4mmoftt21/",
    thumb: "https://img.gamemonetize.com/rxwlvvbj3tvj42wcvvbc8ut4mmoftt21/512x384.jpg",
    width: 1334,
    height: 750,
    description:
      "Sort Master is a relaxing sorting puzzle with satisfying ASMR moments. Arrange foods, cabinets and objects into the right places with simple drag-and-drop controls — the perfect stress-free break game.",
    instructions:
      "Tap and drag to sort items into their correct places. Complete each mini-game to unlock the next relaxing challenge.",
  },
  {
    slug: "warehouse-tetris-3d",
    title: "Warehouse Tetris 3D",
    category: "puzzle",
    source: "gamemonetize",
    embed_url: "https://html5.gamemonetize.co/qsi8cf6y9f0srcp91qqfc1s84jm99421/",
    thumb: "https://img.gamemonetize.com/qsi8cf6y9f0srcp91qqfc1s84jm99421/512x384.jpg",
    width: 1280,
    height: 720,
    description:
      "Warehouse Tetris 3D is a relaxing 3D packing puzzle — load boxes, crates and cargo into warehouses, trucks and containers. Rotate pieces, avoid gaps and chase the highest packing efficiency across dozens of levels plus Endless and Time Attack modes.",
    instructions:
      "Mouse drag to move cargo, Q/E rotate, wheel zoom, right-drag rotate camera, Space/Click place, Ctrl+Z undo.",
  },
  {
    slug: "bow-or-die",
    title: "Bow or Die",
    category: "action",
    source: "gamemonetize",
    embed_url: "https://html5.gamemonetize.co/ets0wzzui28672jjkkna7crhnyd1k8r9/",
    thumb: "https://img.gamemonetize.com/ets0wzzui28672jjkkna7crhnyd1k8r9/512x384.jpg",
    width: 1280,
    height: 720,
    description:
      "Test your archery reflexes in Bow or Die, a fast-paced physics survival game! Aim your bow, calculate arrow trajectories and eliminate incoming targets before they strike. Dodge hazards, react fast and battle for the high score.",
    instructions:
      "Desktop: click and drag with the left mouse button to draw your bow, release to fire. Mobile: touch and drag to aim, lift to shoot.",
  },
];
