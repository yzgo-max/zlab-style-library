# Zlab AI 视觉风格与提示词工程库 (`zlab-style-library`)

面向 **Claude Code**、**OpenAI Codex**、**Antigravity** 与 **Cursor** 等主流 Agent IDE 的工业级图像提示词工程技能库（Agent Skill）。

收录 **26 套高成熟度工业级视觉模板**，覆盖跨境电商套图、分格广告、等轴测沙盘、应用图标、品牌系统、深色 SaaS 与出版物版式，杜绝玄学形容词，提供精确受控的商业级提示词输出。

---

## 核心特性

- 🎯 **工业级 6 块提示词体系**：严格按照【任务目标 + 主体视角 + 构图环境 + 光影材质 + 排版文字 + 边界约束】规范生成，生成质量稳定可控。
- 📦 **26 套经过生产验证的模板**：涵盖电商主图套图、4 宫格社媒战役广告、3D 街区微缩沙盘、高光应用图标等高频商业场景。
- 🛡️ **工程级避坑守则**：每套模板内置针对真实模型缺陷的调优指南（纯白底合规、文字伪排版、多格一致性、等轴测视角锁定等）。
- ⚡ **跨平台一键部署**：支持标准 CLI 自动部署至 Claude Code、Codex 及全局 Agent Skills 目录。

---

## 快速安装与配置

### 1. 自动安装（推荐）

通过 `npx` 即可一键分发安装到本地 Agent 运行环境：

```bash
# 一键安装到所有支持的 Agent 环境（Claude Code / Codex / Agents）
npx zlab-style-library install all

# 仅安装到 Claude Code
npx zlab-style-library install claude-code

# 仅安装到 OpenAI Codex
npx zlab-style-library install codex
```

### 2. 独立 Git 仓库初始化

本仓库为完全解耦的独立规范工程，可直接作为独立仓库管理与发布：

```bash
cd packages/zlab-style-library
git init
git add .
git commit -m "feat: initial commit of zlab-style-library v1.0.0"
git remote add origin https://github.com/yzgo-max/zlab-style-library.git
git push -u origin main
```

### 3. 手动安装

将本仓库目录复制到你的本地 Agent 技能目录：
- **Claude Code**: `~/.claude/skills/zlab-style-library`
- **Codex**: `~/.codex/skills/zlab-style-library`
- **Antigravity / Universal**: `~/.agents/skills/zlab-style-library`

---

## 目录结构

```text
zlab-style-library/
├── README.md                 # 技能库说明与使用指南
├── SKILL.md                  # Agent 标准技能定义与执行工作流
├── package.json              # npm 分发与 CLI 配置文件
├── bin/
│   └── install.mjs           # CLI 跨平台部署工具
├── agents/
│   └── openai.yaml           # OpenAI / Codex 技能规格配置
├── references/
│   └── style-library.md      # 26 套模板正文、变体与避坑词典
├── assets/
│   └── city-life-system-map.png # 示例运行图谱
└── scripts/
    └── build.mjs             # 词典维护与编译脚本
```

---

## 26 套工业级模板全览

| 序号 | 模板 ID | 中文名称 | 所属分类 | 核心场景 |
| :--- | :--- | :--- | :--- | :--- |
| **01** | **`ecommerce-listing-suite`** | **电商主图与商详套图系统** | Products & E-commerce | **亚马逊/Shopify 纯白底主图、A+ 场景生活照与尺寸标尺** |
| **02** | **`multi-panel-ad-grid`** | **多格分镜与数字广告网格系统** | Posters & Typography | **4 宫格社交战役广告、18 宫格矩阵排版、多格镜头一致性** |
| **03** | **`miniature-diorama-world`** | **微缩景观与等轴测透视模型** | Illustration & Art | **45° 等轴测生态盒、移轴微距摄影、树脂材质沙盘模型** |
| **04** | **`app-icon-sticker-pack`** | **应用图标与模切贴纸设计系统** | UI & Interfaces | **iOS/macOS 高光玻璃拟态 3D 图标、闭合白边模切贴纸包** |
| 05 | `ui-screenshot-system` | 截图生成模板 | UI & Interfaces | 多平台界面截图、高保真系统 UI |
| 06 | `scientific-scale-diagram` | 尺度缩放科学信息图模板 | Diagrams & Education | 宏观微观多尺度解剖科普 |
| 07 | `sports-campaign-poster` | 运动商业 Campaign 模板 | Posters & Typography | 强动感、光影爆破商业广告海报 |
| 08 | `conceptual-typography-poster` | 概念字体海报模板 | Posters & Typography | 字体创意演变、汉字与西文排版 |
| 09 | `ink-double-exposure-poster` | 水墨双重曝光人物海报模板 | Posters & Typography | 东方水墨留白、人物轮廓双重曝光 |
| 10 | `nature-science-poster` | 自然科普海报模板 | Posters & Typography | 植物标本网格、极简科普挂画 |
| 11 | `personalized-beauty-report` | 个人化美妆推荐报告模板 | Documents & General | 垂类测评方案、产品矩阵分析报告 |
| 12 | `brand-identity-package` | 完整品牌身份包模板 | Branding & System | VI 视觉规范、VI 物料延展系统 |
| 13 | `brand-touchpoint-board` | 品牌触点系统视觉板模板 | Branding & System | 空间实体物料、全渠道触点打样 |
| 14 | `street-accident-moment` | 街头意外瞬间写实摄影模板 | Photography & Realism | 纪实瞬间、真实突发新闻氛围 |
| 15 | `drone-aerial-landscape` | 航拍大景深地貌与工业摄影模板 | Photography & Realism | 超大景深、地理环境与工业建筑 |
| 16 | `editorial-magazine-layout` | 时尚杂志对开跨页版式模板 | Documents & General | 双页排版、高奢时尚杂志编排 |
| 17 | `dark-saas-dashboard` | 现代深色 SaaS 数据可视化模板 | UI & Interfaces | 深色模式、分析图表与指标监控 |
| 18 | `minimalist-product-shot` | 极简商业产品摄影模板 | Products & E-commerce | 静物摄影、几何石膏与柔光投影 |
| 19 | `botanical-specimen-sheet` | 植物标本解剖与科普信息图模板 | Diagrams & Education | 自然标本剖切图纸、手绘标尺 |
| 20 | `retro-botanical-lithograph` | 19 世纪古典植物石版画图鉴模板 | Illustration & Art | 古籍手绘图谱、雕版复古色调 |
| 21 | `healing-story-illustration` | 治愈系儿童故事绘本插画模板 | Illustration & Art | 温暖笔触、绘本叙事场景 |
| 22 | `retro-pop-art` | 20 世纪复古波普艺术插画模板 | Illustration & Art | 波普网点、浓烈撞色与复古报刊感 |
| 23 | `character-design-sheet` | 动作分解参考表模板 | Illustration & Art | 角色三视图、动态骨骼与表情拆解 |
| 24 | `3d-collectible-toy` | 参考图转 3D 收藏玩具模板 | Products & E-commerce | 潮玩手办、盲盒展示盒与树脂材质 |
| 25 | `concept-product-breakdown` | 概念产品研发拆解板模板 | Products & E-commerce | 工业设计提案、部件爆炸分解图 |
| 26 | `corporate-brochure-system` | 企业商用宣传画册全套系统模板 | Documents & General | 画册系统预览、商业物料整套提案 |

---

## 许可证

本项目基于 [MIT License](LICENSE) 开源。
