# GameVault — Free Online Games Portal

Next.js 15 + Neon PostgreSQL 的 SEO 友好游戏门户，面向 Google 英文流量 + AdSense 变现。

## 功能

- 首页 / 游戏详情页（iframe 嵌入可玩）/ 分类页 / About / Privacy Policy
- 19 款游戏：8 款自托管（2048、Tetris、Snake、Minesweeper、Brick Breaker、Flappy Wings、Memory Match、Word Guess）+ 11 款 GameMonetize 官方嵌入
- SEO：TDK 模板、sitemap.xml、robots.txt、BreadcrumbList + VideoGame JSON-LD、canonical、内链结构
- 性能：click-to-play（LCP 优化）、封面图懒加载、SSG/ISR（revalidate 600s）
- AdSense：ads.txt（pub-2622415797490761）、页头/边栏/内容内 3 类广告位（预留空间防 CLS）

## 快速开始

```bash
npm install
cp .env.local .env.local   # 已包含 DATABASE_URL / 站点 URL / AdSense ID
npm run db:init && npm run db:seed   # 初始化并填充 Neon 数据库（幂等，可重复执行）
npm run dev                # 本地开发 http://localhost:3000
npm run build && npm start # 生产构建
```

## 部署到 Vercel

1. GitHub 建仓并推送本目录
2. Vercel 导入仓库，设置环境变量：
   - `DATABASE_URL` = Neon 连接串（见 .env.local）
   - `SITE_URL` = 正式域名（如 `https://www.yourdomain.com`，服务端专用，无 NEXT_PUBLIC 前缀）
   - `NEXT_PUBLIC_ADSENSE_CLIENT` = `ca-pub-2622415797490761`
   - `NEXT_PUBLIC_ADSENSE_ENABLED` = `1`（AdSense 审核通过后开启；审核期保持留空显示占位符）
3. 绑定域名，部署完成后到 GSC 提交 `https://域名/sitemap.xml`

## AdSense 上线步骤

1. 审核期：站点部署后保持 `NEXT_PUBLIC_ADSENSE_ENABLED` 未设置（显示灰色占位），ads.txt 已就位
2. AdSense 控制台添加站点 → 等待审核（约 1-14 天）
3. 通过后：创建广告单元 → 将单元 ID 填入 `AdBanner` 的 `slot` prop → 设置 `NEXT_PUBLIC_ADSENSE_ENABLED=1` 重新部署
4. 广告位分布：页头 leaderboard（728×90/响应式）、详情页右栏 300×250、内容区 responsive、分类页底部

## 扩量

- 新增游戏：编辑 `scripts/seed-data.mjs` → `npm run db:seed`（自托管游戏放 `public/games/<slug>/index.html` + `public/thumbs/<slug>.svg`）
- GameMonetize 开发者账号开通后可接完整 Games API 批量导入数千款游戏
- 关键词策略见 `docs/keyword-research.md`
