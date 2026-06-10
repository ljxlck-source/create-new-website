# LEDScreenX - 碳纤维 LED 显示屏企业官网

## 项目概览

LEDScreenX 是一个专业的碳纤维 LED 显示屏品牌企业官网，采用单页滚动设计，展示产品技术优势、制造工艺、性能指标和应用场景。

## 技术栈

- **Framework**: Next.js 16 (App Router)
- **Core**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React

## 构建与测试命令

| 命令 | 说明 |
|------|------|
| `pnpm dev` | 启动开发服务器 (端口 5000) |
| `pnpm build` | 构建生产版本 |
| `pnpm start` | 启动生产服务器 |
| `pnpm ts-check` | TypeScript 类型检查 |
| `pnpm lint` | ESLint 代码检查 |

## 目录结构

```
src/
├── app/
│   ├── globals.css          # 全局样式 + Design Tokens
│   ├── layout.tsx           # 根布局
│   └── page.tsx             # 首页（组合所有 Section）
├── components/
│   ├── Navbar.tsx           # 固定顶部导航栏
│   ├── Hero.tsx             # 首屏 Hero 区域
│   ├── ComparisonSection.tsx # 碳纤维 vs 铝合金对比表
│   ├── ManufacturingSection.tsx # 制造工艺 4 步流程
│   ├── PerformanceMetrics.tsx   # 质量数据指标
│   ├── AdvantagesSection.tsx    # 核心优势 4 列
│   ├── ApplicationsSection.tsx  # 应用场景
│   ├── TechSpecsSection.tsx     # 技术规格参数表
│   ├── AdvantageSummary.tsx     # 优势总结 + CTA
│   └── Footer.tsx              # 页脚
├── hooks/
│   └── use-scroll-reveal.ts    # 滚动触发淡入动画 Hook
└── lib/
    └── utils.ts                # 通用工具函数
```

## 设计规范

详见 `DESIGN.md`。核心设计语言：
- 暗色工业风（背景 `#0a0a0c`）
- 强调色：琥珀暖光 `#d4783b`
- 碳纤维编织纹理背景
- 等宽字体用于数据展示

## 开发注意事项

- 所有 Section 组件均为 `'use client'`（使用 IntersectionObserver 动画）
- 滚动动画通过 `useScrollReveal` Hook 实现
- 导航栏使用固定定位 + 毛玻璃效果
- 配色通过 CSS 变量定义在 `globals.css` 中
