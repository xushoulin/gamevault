# GameVault 关键词调研报告（2026-10-20）

## 一、市场结论

- 浏览器游戏市场巨大：Poki 月访问 ~1.2 亿（DR 79）、CrazyGames ~1.04 亿（AS 90）、CoolMathGames ~1200 万。
- **头部大词（"online games"、"free games"）被巨头垄断，新站不可正面竞争。**
- 正确策略：**长尾意图词**（"play X online free"、"X game no download"）+ **分类集群页**（hub-and-spoke 内链结构）。
- 高意图信号：包含 "play"、"online"、"free"、"no download" 的查询为游玩意图，转化最高。

## 二、目标关键词清单

> 搜索量为基于公开工具（Google Keyword Planner 区间 / Ahrefs、Semrush 公开数据）的预估值，难度 0-100（越高越难）。

### A. 游戏详情页目标词（长尾，主攻）

| 关键词 | 预估月搜索量（全球） | 难度 | 承接页面 |
|---|---|---|---|
| play 2048 online free | 90,000 | 60 中高 | /game/2048 |
| snake game online | 60,000 | 50 中 | /game/snake |
| play tetris online free | 40,000 | 65 中高 | /game/tetris |
| minesweeper online free | 30,000 | 45 中 | /game/minesweeper |
| wordle unlimited / word guess game | 200,000 / 8,000 | 70 高 / 35 中低 | /game/word-guess |
| flappy bird online (clone) | 30,000 | 55 中 | /game/flappy-wings |
| breakout game free | 10,000 | 40 中低 | /game/brick-breaker |
| memory match game online free | 6,000 | 30 低 | /game/memory-match |

### B. 分类集群词（Hub 页，中期主攻）

| 关键词 | 预估月搜索量 | 难度 | 承接页面 |
|---|---|---|---|
| free puzzle games online no download | 20,000 | 40 中 | /category/puzzle |
| free arcade games online | 15,000 | 40 中 | /category/arcade |
| free action games online | 12,000 | 45 中 | /category/action |
| free racing games online | 18,000 | 45 中 | /category/sports |
| word games online free | 25,000 | 50 中 | /category/brain |
| casual games free online | 8,000 | 35 中低 | /category/casual |

### C. 站点级大词（首页承接，长期目标）

| 关键词 | 预估月搜索量 | 难度 | 备注 |
|---|---|---|---|
| free online games | 500,000+ | 88 极高 | 仅品牌+内容积累后触碰 |
| browser games no download | 40,000 | 60 中高 | 首页 TDK 已布局 |
| unblocked games | 500,000+ | 75 高 | 站点稳定后可加 "unblocked" 子线（注意学校场景合规） |

## 三、执行要点（已内置于网站）

1. **TDK**：首页/分类页/详情页独立 title + description，模板 `%s | GameVault`。
2. **关键词布局**：H1 含 "Play Free Online"，正文含变体（no download / browser / instant play），FAQ 板块承接 "is X free / on mobile" 问答。
3. **内链**：首页 → 分类 → 详情三层；详情页侧栏同分类相关游戏；面包屑 + BreadcrumbList 结构化数据。
4. **结构化数据**：详情页 VideoGame（price 0、playMode、platform）+ BreadcrumbList。
5. **性能（Core Web Vitals）**：
   - 游戏采用 **click-to-play**：先渲染文字+封面图（LCP 快），点击才加载 iframe/WASM；
   - 封面图懒加载（首屏 eager，其余 lazy），固定宽高比防 CLS；
   - 广告位预留 minHeight 防 CLS；
   - SSG/ISR：详情页与分类页静态生成，600 秒增量再生。
6. **内容扩展方向**（上线后 2-4 周内执行）：每款游戏补 1 篇攻略类文章（"How to get 2048 tile"、"Snake high score tips"），捕获信息型长尾词并内链游戏页。

## 四、游戏资源与授权

| 来源 | 数量 | 授权方式 |
|---|---|---|
| 自托管（/public/games/） | 8 款经典重制 | 自研实现，无第三方版权风险 |
| GameMonetize 官方嵌入 | 11 款 | 官方 RSS/嵌入计划，允许公开 iframe 嵌入并参与广告分成 |

后续扩量：GameMonetize 后台申请开发者账号后可用完整 Games API 拉取数千款游戏（本站已预留 source/embed_url 字段，seed 脚本可重复执行增量导入）。
