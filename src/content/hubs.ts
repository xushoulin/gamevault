/**
 * Topic-cluster pillar pages ("hubs"): each hub aggregates related guides
 * and games so link equity flows hub <-> guide <-> game. All 40 guides are
 * mapped to exactly one hub.
 */

export type Hub = {
  slug: string;
  title: string; // H1 / full title
  metaTitle: string;
  description: string; // meta description
  tagline: string; // short blurb shown on index
  intro: string[]; // original body copy
  guideSlugs: string[];
  gameSlugs: string[];
};

export const hubs: Hub[] = [
  {
    slug: "block-puzzle-games",
    title: "Free Block Puzzle & Logic Games",
    metaTitle: "Free Block Puzzle Games — Strategy Guides & Instant Play",
    description:
      "Play free block puzzle and logic games instantly in your browser, plus expert strategy guides: 2048 corner strategy, Tetris stacking, block-blast tactics, sorting puzzles and more. No download, no signup.",
    tagline: "2048, Tetris, block blasts, sorting and unscrewing — every grid-based brainteaser in one place, with guides that actually make you better.",
    intro: [
      "Block and logic puzzles are the quiet champions of browser gaming: no downloads, no accounts, and a difficulty curve you control entirely yourself. This hub collects GameVault's full puzzle lineup — from the number-merging calm of 2048 to the spatial pressure of Tetris and the unscrewing order of mechanical plates — alongside the strategy guides we wrote for each one.",
      "If you are new, start with a guide before you play: the corner strategy in 2048, the flat-ceiling rule in block blasters, or the overlap-counting method in screw puzzles will save you hours of trial and error. If you are already deep in the genre, the sorting and sokoban-style titles below are where the real logic workouts live.",
      "Every game on this page runs instantly in your browser — nothing to install, nothing to sign up for. Bookmark the hub: we add new puzzle titles and guides regularly, and each one links back here so you can always find your way around the collection.",
    ],
    guideSlugs: [
      "how-to-beat-2048",
      "tetris-strategy-tips",
      "block-blast-tips",
      "sorting-games-asmr-guide",
      "3d-packing-puzzle-tips",
      "mahjong-tile-priority-guide",
      "screw-nuts-order-guide",
      "pixel-jam-bus-exit-guide",
      "tank-push-sokoban-guide",
      "sparkzap-circuit-guide",
      "memory-match-techniques",
      "minesweeper-strategy",
    ],
    gameSlugs: [
      "2048",
      "tetris",
      "blockblast",
      "memory-match",
      "minesweeper",
      "sort-master-satisfeel-asmr",
      "warehouse-tetris-3d",
      "mahjong-master-tile-sort-and-match",
      "screw-nuts-snap-puzzle",
      "pixel-jam-bus-puzzle",
      "tank-push",
      "sparkzap",
    ],
  },
  {
    slug: "arcade-action-games",
    title: "Free Arcade & Action Games",
    metaTitle: "Free Arcade & Action Games — Guides, Tips & Instant Play",
    description:
      "Free online arcade and action games playable instantly: snake, brick breaker, bubble shooters, archery duels, zombie survival and more — with in-depth tips guides for every title. No download required.",
    tagline: "Reflex classics, bubble shooters, archery duels and survival arenas — the loud half of the site, with guides that turn luck into skill.",
    intro: [
      "Arcade games are where browser gaming earned its reputation: one more run, one more high score, one more impossible shot. This hub gathers every action-oriented title on GameVault — from the patience-testing classics like Snake and Brick Breaker to modern survival arenas and precision archery duels.",
      "What sets this collection apart is that every game comes with a real strategy guide. Bubble shooter players can learn cluster-cutting and bank-shot geometry; sniper fans can study steadiness timing; survival arena runners can pick up upgrade prioritization that actually carries them past wave ten.",
      "All games load instantly and play in the browser. New arcade titles and guides land here first, so check back — and when a guide shaves strokes, seconds or deaths off your runs, you will know why the hub exists.",
    ],
    guideSlugs: [
      "snake-game-high-score-tips",
      "brick-breaker-tips",
      "flappy-bird-high-score-guide",
      "boo-chains-guide",
      "archery-games-online-tips",
      "darkhood-guide",
      "stickman-bow-clash-archery-guide",
      "sniper-shooter-3d-aim-guide",
      "swarmfront-upgrade-guide",
      "scary-granny-maze-guide",
      "bubble-shooter-strategy",
      "ricopop-bank-shot-guide",
      "thief-puzzle-timing-guide",
      "8-ball-pool-tips",
    ],
    gameSlugs: [
      "snake",
      "brick-breaker",
      "flappy-wings",
      "boo-chains",
      "bow-or-die",
      "darkhood",
      "stickman-bow-clash",
      "sniper-shooter-3d",
      "swarmfront",
      "scary-granny-horror-maze-escape",
      "bubble-rush",
      "ricopop",
      "thief-puzzle-long-hand-game",
      "8-ball-pool-2d",
    ],
  },
  {
    slug: "racing-driving-games",
    title: "Free Racing & Driving Games",
    metaTitle: "Free Racing & Driving Games — Drift, Stunt & Parking Guides",
    description:
      "Play free racing and driving games in your browser: kart racers, stunt tracks, truck parking sims and city drivers — plus driving guides on drifting, ramp speed, trailer reversing and more.",
    tagline: "Kart racing, stunt ramps, trailer reversing and midnight taxi runs — pick a wheel, then read the guide that wins races.",
    intro: [
      "Driving games reward a specific kind of learning: the physics never lie, and small input changes produce dramatic results. This hub collects GameVault's racing and driving lineup — arcade kart cups, stunt ramp courses, precision truck parking and free-roam cruising — together with the guides that decode each game's handling model.",
      "Ramp speed is the whole game in stunt racing, drift timing decides kart cups, and trailer geometry humbles everyone in truck parking at least once. Our guides break each of these into routines you can practice in an afternoon, from reading landing zones to holding a defensive item until the final straight.",
      "Everything plays instantly in the browser with no downloads. The garage keeps growing — new courses and vehicles get added regularly, and every new driving guide links back to this hub.",
    ],
    guideSlugs: [
      "best-free-racing-games-online",
      "tiny-track-rally-tips",
      "euro-truck-parking-reverse-guide",
      "spooky-racing-drift-guide",
      "midnight-taxi-route-guide",
      "formula-car-stunt-ramp-guide",
    ],
    gameSlugs: [
      "tiny-track-rally",
      "euro-truck-parking",
      "spooky-racing",
      "midnight-taxi-hustle",
      "formula-car-stunt",
      "super-nitro-racing-3",
      "classic-car-driving-game",
      "impossible-jeep-driver",
      "neo-traffic-rider-championship",
      "bike-stunt-master-mini-rush",
    ],
  },
  {
    slug: "casual-games-hub",
    title: "Free Casual & Family Games",
    metaTitle: "Free Casual Games — Word Puzzles, Dress-Up, Sports & Sim Guides",
    description:
      "Relaxed free browser games for every mood: word puzzles, mini golf, fishing, volleyball, dress-up styling and idle tycoons — with friendly guides. Instant play, no download, no signup.",
    tagline: "Word puzzles, mini golf, fishing trips, styling studios and idle empires — the low-pressure side of GameVault, with friendly guides.",
    intro: [
      "Not every session needs a timer and a health bar. Casual games are the ones you open with a coffee and close with a smile: a quick golf course, a fishing trip, a styling challenge, an empire that grows while you are away. This hub is GameVault's low-pressure wing.",
      "Casual does not mean shallow. Mini golf rewards angle reading, fishing rewards reel rhythm, idle tycoons reward upgrade ordering, and word puzzles reward a disciplined opening vocabulary. Our guides cover the transfers of skill that make relaxed games genuinely satisfying to improve at.",
      "As with everything on GameVault, no downloads and no accounts — just pick a game and play. The casual shelf rotates often, so when you need a new wind-down game, start here.",
    ],
    guideSlugs: [
      "wordle-strategy-best-starters",
      "pocketgolf-putting-guide",
      "catchfish-reel-guide",
      "volleyball-games-online-tips",
      "idle-tycoon-games-tips",
      "obby-games-guide",
      "obby-toilet-line-guide",
      "best-free-browser-games-no-download",
    ],
    gameSlugs: [
      "word-guess",
      "pocketgolf",
      "catchfish-mdash-fishing-master",
      "netherton-volleyball",
      "monster-cafe-idle-tycoon",
      "obby-rainbow-tower",
      "obby-toilet-line",
    ],
  },
];

export function getHubBySlug(slug: string): Hub | null {
  return hubs.find((h) => h.slug === slug) ?? null;
}

export function getHubForGuide(guideSlug: string): Hub | null {
  return hubs.find((h) => h.guideSlugs.includes(guideSlug)) ?? null;
}

export function getGuidesForHub(hub: Hub) {
  return hub.guideSlugs
    .map((s) => guides.find((g) => g.slug === s))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));
}
