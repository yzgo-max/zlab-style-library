import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkgRoot = resolve(__dirname, '..');
const repoRoot = resolve(pkgRoot, '../..');

const styleLibraryPath = join(repoRoot, 'data/base/style-library.json');
const templatesMdPath = join(repoRoot, 'data/base/skill/templates.md');
const outRefPath = join(pkgRoot, 'references/style-library.md');

const styleData = JSON.parse(readFileSync(styleLibraryPath, 'utf8'));
const templatesMarkdown = readFileSync(templatesMdPath, 'utf8');

const categoryMap = new Map(styleData.categories.map(c => [c.value, c.title.zh]));

let doc = `# Zlab AI 视觉风格与工业级提示词工程库 (Style Library & Prompt Engineering)

> 本文档为 Agent（Claude Code、Codex、Cursor、Antigravity）提供离线结构化知识库，收录 26 套工业级图像生成提示词模板、视觉流派指南与工程避坑守则。

---

## 一、工业级 6 块提示词设计规范 (The 6-Block Architecture)

在向图像模型（如 Midjourney v6 / DALL-E 3 / SDXL / FLUX / Imagen 3）生成提示词时，必须严格遵守以下 6 块结构，杜绝模糊的情绪化描述与形容词堆砌：

1. **任务与目标 (Task & Objective)**：一句话定义生成物类型、商业场景与核心目的（例如：“为消费级便携蓝牙音箱生成亚马逊白底 1:1 主图”）。
2. **主体与视角 (Subject & Framing)**：主体的形态、材质、核心特征、摆放朝向、相机机位与焦距（例如：“平视微俯 15 度，3/4 侧方位，居中构图，85mm 中焦镜头”）。
3. **构图与环境 (Composition & Background)**：黄金分割、三等分法、对称构图、背景留白比率、环境光散射介质与场景道具。
4. **光影与材质 (Lighting & Materiality)**：硬光/柔光/侧逆光、接触阴影（Contact Shadow）、材质质感（阳极氧化铝磨砂、亲肤硅胶、双折射清漆、移轴景深）。
5. **排版与文字规范 (Typography & Text Guidelines)**：如果画面包含文字，严格限定字体族（无衬线 Geometric Sans / 优雅现代衬线 Serif）、层级结构与拼写，或显式要求“模拟排版占位（Simulated text blocks）”。
6. **边界与负向排除 (Constraints & Exclusions)**：显式剔除边缘模糊、色彩脏乱、比例畸变、浮动杂物、多余促销徽章或非受控元素。

---

## 二、26 套工业级模板全景索引

| 序号 | 模板 ID | 中文名称 | 所属分类 | 核心应用场景 |
| :--- | :--- | :--- | :--- | :--- |
`;

styleData.templates.forEach((tpl, idx) => {
  const cat = categoryMap.get(tpl.category) || tpl.category;
  doc += `| ${String(idx + 1).padStart(2, '0')} | \`${tpl.id}\` | [${tpl.title.zh}](#${tpl.anchor}) | ${cat} | ${tpl.useWhen.zh} |\n`;
});

doc += `
---

## 三、各分类核心特征与设计流派

### 1. Products & E-commerce (电商与硬件产品)
- **核心法则**：真实反射、接触阴影、无杂色背景（RGB 255, 255, 255）、材质真实度优先。
- **代表模板**：电商主图与商详套图、极简产品摄影、工业设计与研发拆解板。

### 2. Posters & Typography (海报与排版系统)
- **核心法则**：文字层级分明、视觉重量平衡、网格系统对齐（Grid System）。
- **代表模板**：4 宫格社交战役广告、概念字体海报、双重曝光水墨海报、商业 Campaign。

### 3. Illustration & Art (插画与艺术表现)
- **核心法则**：笔触肌理、透视法则（等轴测/多点透视）、情感氛围营造。
- **代表模板**：3D 街区微缩生态盒、治愈水彩插画、复古波普艺术、复古童话绘本。

### 4. UI & Interfaces (界面与数字资产)
- **核心法则**：高光倒角、纯净度、像素级对齐、小尺寸缩放下高识别度。
- **代表模板**：3D 高光应用图标、模切贴纸组、系统级应用界面截图、深色 SaaS 仪表盘。

---

## 四、26 套模板正文、提示词变体与工程避坑指南

`;

// Append the canonical template markdown bodies
doc += templatesMarkdown;

doc += `

---

## 五、风格与场景常用词库 (Lexicon)

### 常用视觉风格 (Styles)
- **Minimalist Modern**：极简现代，大面积负空间，中性色调，硬朗克制。
- **Claymorphism / 3D Isometric**：黏土质感与等轴测模型，柔和圆角与漫反射高光。
- **Glassmorphism / Frosted Translucency**：毛玻璃拟态，次表面散射，半透明双折射。
- **Retro Vintage / Risograph**：复古孔版印刷，网点肌理，受控叠印错位。
- **Industrial Blueprint**：技术图纸，细线尺寸标注，CAD 分层线框。
- **Cyberpunk / Neo-Tokyo**：赛博霓虹，雨夜路面反射，高饱和冷暖撞色。
- **Editorial High-Fashion**：杂志大片，强侧光，高对比度，超模情绪张力。

### 常用布光与视角 (Lighting & Angles)
- **Macro 100mm Tilt-Shift**：移轴微距，极浅景深，微缩沙盘感。
- **Studio Softbox Dual Lighting**：双柔光箱，无死黑阴影，平滑明暗过渡。
- **Chiaroscuro / Dramatic Rim Light**：明暗对照法，强轮廓光，凸显边缘立体轮廓。
- **Top-Down Flat Lay**：俯视平铺，垂直正投影，无透视形变。
- **True Isometric 45°**：正 45 度等轴测，无广角畸变，空间几何严整。
`;

writeFileSync(outRefPath, doc.trim() + '\n', 'utf8');
console.log(`✓ Compiled references/style-library.md successfully (${styleData.templates.length} templates).`);
