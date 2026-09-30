---
name: zlab-style-library
description: Zlab AI visual style & prompt engineering library. Generate industrial-grade image prompts using 26 production-ready templates, visual style constraints, and commercial design guidelines for Midjourney, DALL-E 3, SDXL, FLUX, and Imagen.
version: 1.0.0
author: Zlab
tags:
  - prompt-engineering
  - image-generation
  - style-library
  - visual-design
---

# Zlab AI Visual Style Library (Zlab 视觉风格库)

You are equipped with the **Zlab AI Visual Style Library**, an industrial-grade prompt engineering toolkit designed to generate precise, production-ready image generation prompts for models like Midjourney, FLUX.1, DALL-E 3, Stable Diffusion XL, and Imagen 3.

---

## When to Use This Skill

Activate this skill when the user:
- Requests an image generation prompt for products, branding, marketing, illustrations, UI assets, or photography.
- Mentions styles like ecommerce white-background, 4-panel comic/ad grids, 3D isometric dioramas, app icons, stickers, vintage risograph, double-exposure, or architectural diagrams.
- Wants to turn a rough idea (e.g. "帮我画一个耳机的主图" or "做一个未来风咖啡厅的等轴测模型") into a structured, production-grade prompt.
- Asks for guidance, pitfalls, or stylistic constraints in AI visual design.

---

## The 6-Block Industrial Prompt Architecture

Every generated prompt must follow the Zlab 6-Block Structure. Do not output vague adjectives or ambiguous poetry; provide concrete visual specifications:

```
1. [Task & Objective]
   Define the exact medium, commercial context, and goal (e.g., "Amazon product hero listing image for wireless noise-canceling headphones").

2. [Subject & Framing]
   Specify camera angle, distance, focal length, rotation, and subject posture (e.g., "Centered composition, eye-level 15° slight top-down, 3/4 angle, 85mm medium telephoto lens").

3. [Composition & Background]
   Define grid, aspect ratio, negative space, and environment props (e.g., "Pure seamless white background RGB(255,255,255) with natural soft contact shadow").

4. [Lighting & Materiality]
   Describe lighting setup and tactile surfaces (e.g., "Dual studio softboxes, crisp rim highlights, frosted anodized aluminum, matte skin-friendly silicone padding, no harsh glare").

5. [Typography & Text (if applicable)]
   Specify font classification, placement, and content (e.g., "Clean geometric sans-serif, minimal lead line indicators, simulated UI blocks").

6. [Hard Constraints & Exclusions]
   Explicitly eliminate distortion, floating artifacts, noise, badges, or unwanted watermarks.
```

---

## Master Template Catalog (26 Templates)

Consult [`references/style-library.md`](./references/style-library.md) for full prompt templates, JSON specifications, and detailed pitfall guides:

### 1. Products & E-commerce (电商与硬件产品)
- `ecommerce-listing-suite`: 电商跨境主图与商详套图系统 (白底 1:1、尺寸标注、A+ 生活场景)
- `minimalist-product-shot`: 极简商业产品摄影模板
- `concept-product-breakdown`: 概念产品研发拆解板模板
- `3d-collectible-toy`: 盲盒潮玩与 3D 收藏玩具模板

### 2. Posters & Typography (海报与排版系统)
- `multi-panel-ad-grid`: 4 宫格社交媒体战役广告与数字分镜网格模板
- `sports-campaign-poster`: 运动商业 Campaign 视觉海报模板
- `conceptual-typography-poster`: 概念中英文字体海报模板
- `ink-double-exposure-poster`: 水墨双重曝光人物意境海报模板
- `nature-science-poster`: 极简自然科普解剖海报模板

### 3. Illustration & Art (插画与艺术表现)
- `miniature-diorama-world`: 等轴测 3D 街区微缩生态盒与移轴沙盘模板
- `retro-botanical-lithograph`: 19 世纪古典植物石版画图鉴模板
- `healing-story-illustration`: 治愈系儿童故事绘本插画模板
- `retro-pop-art`: 20 世纪复古波普艺术与网点插画模板
- `character-design-sheet`: 动漫/游戏多视角角色设计分解参考表模板

### 4. UI & Interfaces (界面与数字资产)
- `app-icon-sticker-pack`: iOS/macOS 高光 3D 图标与模切贴纸设计系统
- `ui-screenshot-system`: 多端软件界面高保真截图生成模板
- `dark-saas-dashboard`: 现代深色 SaaS 数据可视化仪表盘模板

### 5. Diagrams & Education (图表与科普)
- `scientific-scale-diagram`: 跨尺度缩放科学信息图模板
- `botanical-specimen-sheet`: 植物标本解剖与科普信息图模板

### 6. Branding & System (品牌与系统视觉)
- `brand-identity-package`: 完整品牌视觉 VI 系统与延展方案模板
- `brand-touchpoint-board`: 品牌触点与物料视觉落地板模板

### 7. Photography & Realism (摄影与写实记录)
- `street-accident-moment`: 街头意外瞬间真实抓拍摄影模板
- `drone-aerial-landscape`: 航拍大景深地貌与工业壮丽摄影模板

### 8. Documents & General (出版物与通用工程)
- `editorial-magazine-layout`: 时尚杂志对开跨页出版物版式模板
- `corporate-brochure-system`: 企业商用宣传画册全套系统预览模板
- `general-generation-schema`: 通用多场景工业级生成框架 (含 JSON 结构化版本)

---

## Agent Execution Workflow

When fulfilling a user request:
1. **Analyze Intent**: Identify domain (e-commerce, branding, 3D, UI, poster, etc.) and target image generator (Midjourney, FLUX, SDXL, etc.).
2. **Select Template**: Pick the closest template from the catalog.
3. **Assemble Prompt**: Fill in all placeholders using the 6-Block Architecture. Ensure hard technical requirements (e.g. aspect ratio `--ar 16:9`, pure background `RGB 255,255,255`) are strictly stated.
4. **Apply Anti-Pitfalls**: Check the template's specific pitfalls in [`references/style-library.md`](./references/style-library.md) (e.g., text spelling constraints, avoiding distortion).
5. **Output**: Deliver both English and Chinese versions of the prompt, formatted cleanly in a code block with actionable parameters.
