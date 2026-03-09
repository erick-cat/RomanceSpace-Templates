# RomanceSpace Templates

存放所有可上传到 RomanceSpace Worker 的 HTML 模板。

## 目录结构

```
src/
├── love_letter/        ← 模板名称（即 template name）
│   ├── index.html      ← 必须存在
│   ├── schema.json     ← 可选：定义可注入字段
│   └── assets/         ← 可选：CSS / JS / 图片等
└── anniversary/
    ├── index.html
    └── schema.json
```

## 自动部署（推荐）

**当你向 `main` 分支 push 代码时，GitHub Actions 会自动检测 `src/` 下发生变更的模板，并上传到 Worker。**

### 前置：配置 GitHub Secrets

1. 打开 GitHub 仓库页 → **Settings** → **Secrets and variables** → **Actions**
2. 点击 **New repository secret**，添加：
   - Name: `RS_ADMIN_KEY`
   - Secret: 你的 Worker 管理密钥（即 Cloudflare Dashboard 中设置的 `ADMIN_KEY` Secret）

3. （可选）如果你的 Worker URL 不是默认值，添加 **Variables**（非 Secret）：
   - Name: `RS_WORKER_URL`
   - Value: `https://romancespace.885201314.xyz`

### 触发条件

- **自动触发**：push 到 `main` 分支且 `src/` 目录下有文件变更
- **只上传变更的模板**：Actions 会 diff 上一次 commit，只上传有修改的模板目录

---

## 手动上传（可选）

如果不想等 CI，也可以在本地手动运行：

1. 安装依赖：
   ```bash
   npm install
   ```

2. 在仓库根目录创建 `.env` 文件：
   ```env
   RS_ADMIN_KEY="your_admin_secret_here"
   # RS_WORKER_URL="https://romancespace.885201314.xyz"
   ```

3. 运行上传命令：
   ```bash
   npm run upload <template_name> <path_to_template_folder>
   ```

   **示例：**
   ```bash
   npm run upload love_letter ./src/love_letter
   ```

---

## 如何新建模板

1. 在 `src/` 下创建一个新目录，名称只能包含小写字母、数字、下划线
2. 在目录中放入 `index.html`（必须）
3. 可选：添加 `schema.json` 定义模板参数（见文档站点）
4. 将改动 push 到 `main` 分支，GitHub Actions 将自动上传
