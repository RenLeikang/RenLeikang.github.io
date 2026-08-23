# 任磊康｜个人学术主页

面向 2027 年研究生推免、联系导师与科研经历展示的中文个人学术主页。项目使用 React、Vite、TypeScript、Tailwind CSS 和 Lucide React 构建，并配置 GitHub Pages 自动部署。

## 本地开发

```bash
npm install
npm run dev
```

## 数据与证明检查

```bash
npm run check:competitions
```

该命令自动检查国家级竞赛数量是否为 11，以及每一项 `proof.path` 对应的文件是否真实存在。

## 生产构建

```bash
npm run build
npm run preview
```

构建产物位于 `dist/`。

## 内容修改

- 姓名、邮箱、GitHub、个人简介、研究方向和技能：`src/data/profile.ts`
- 项目经历和项目链接：`src/data/projects.ts`
- 11 项国家级竞赛与证明路径：`src/data/competitions.ts`
- 荣誉和奖学金：`src/data/honors.ts`

当前邮箱、头像和 CV 已根据提供的材料配置。现有资料中没有找到 GitHub 地址，请在 `src/data/profile.ts` 中将 `YOUR_GITHUB_URL` 替换为真实链接。

## 静态资源

- 个人照片：`public/images/profile.jpg`
- 项目图片：`public/images/projects/`
- 个人简历：`public/files/CV.pdf`
- 国家级竞赛证明：`public/proofs/competitions/`

蓝桥杯证明的原文件包含完整身份证号码。网站使用的是已遮盖号码的副本：

```text
public/proofs/competitions/2026-lanqiao-national-first-redacted.pdf
```

原始证明未被修改。

## GitHub Pages 部署

建议将仓库命名为：

```text
RenLeikang.github.io
```

首次部署：

1. 在 GitHub 创建 `RenLeikang.github.io` 仓库。
2. 将当前项目提交并推送到 `main` 分支。
3. 进入仓库 **Settings → Pages**。
4. 在 **Build and deployment** 中选择 **GitHub Actions**。
5. 推送后 `.github/workflows/deploy.yml` 会自动执行 `npm ci`、证明检查、生产构建和 Pages 部署。

```bash
git add .
git commit -m "build academic homepage"
git branch -M main
git remote add origin https://github.com/RenLeikang/RenLeikang.github.io.git
git push -u origin main
```

部署地址：`https://RenLeikang.github.io/`
