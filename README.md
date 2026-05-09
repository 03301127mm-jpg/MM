# 赵翊冰个人作品集网站

这是一个中文个人作品集长网页，使用 React + Vite + TypeScript + Tailwind CSS + Framer Motion 制作。页面以滚动体验为主，包含封面、创作关键词、精选作品、团队价值、生活兴趣和联系信息。

## 运行方式

```bash
npm install
npm run dev
```

打开终端提示的本地地址即可预览。

## 主要目录

```text
src/components        页面组件
src/data/projects.ts  作品、关键词、价值、生活卡片数据
public/assets/hero    首页漂浮元素素材
public/assets/projects 项目封面素材
public/assets/life    生活兴趣照片
```

## 推荐素材命名

命名建议使用英文小写、短横线连接，方便网页引用，也避免中文路径在部署时出错。

首页漂浮元素放在 `public/assets/hero`：

```text
felt-cat.png
clay-smile.png
acrylic-card.png
pixel-blocks.png
stamp-map.png
video-card.png
blue-star.png
fabric-dot.png
```

作品封面放在 `public/assets/projects/项目文件夹/cover.jpg`：

```text
public/assets/projects/luoyang-ai/cover.jpg
public/assets/projects/season-dream/cover.jpg
public/assets/projects/hakka-game/cover.jpg
public/assets/projects/star-empathy/cover.jpg
public/assets/projects/ningyuan-tour/cover.jpg
public/assets/projects/pattern-exhibition/cover.jpg
public/assets/projects/campus-digital-twin/cover.jpg
public/assets/projects/auto-hud/cover.jpg
```

如果一个项目有多张图，可以继续这样命名：

```text
cover.jpg
detail-01.jpg
detail-02.jpg
process-01.jpg
video-preview.mp4
```

生活兴趣照片放在 `public/assets/life`：

```text
cat.jpg
sea.jpg
city-walk.jpg
content-record.jpg
photography.jpg
exhibition.jpg
```

## 替换图片

当前页面已经写好了图片路径。如果对应文件不存在，会自动显示柔和占位图。后续只需要把真实图片按上面的路径和文件名放进去，不需要改代码。

项目数据在 `src/data/projects.ts`，可以修改项目名、类型、关键词、简介和封面路径。简介建议控制在 100 字以内。

## 组件拆分

已按方案拆分：

```text
Header
HeroIntro
FloatingObject
KeywordCloud
ProjectSection
ProjectCard
ValueSection
ValueCard
LifeSection
LifeCard
Footer
```

## 后续建议

你的现有封面图可以先命名为：

```text
public/assets/hero/portfolio-cover.png
```

如果后面能把里面的小物件分别导出为透明 PNG，建议按 `felt-cat.png`、`clay-smile.png` 这类名称分别放到 `public/assets/hero`，再把 `HeroIntro.tsx` 里的 CSS 占位形状替换成真实图片。
