# Ghostty Style Lab

一个面向 Ghostty 的本地可视化配置工作台。它把终端主题、字体、窗口、背景、光标和高级功能项做成可调控件，并支持导入/导出完整配置包，方便像社区主题一样分享和复用。

English documentation is below.

## 功能亮点

- 可视化调节 Ghostty 的主题、颜色、字体、窗口留白、透明度、背景图、光标和功能项。
- 支持导入 `.zip` 配置包、`config`、`.ghostty`、`.conf` 文件，自动解析并填充到界面。
- 支持导出完整配置包，包含 `config.ghostty`、`themes/`、可选背景图和安装说明。
- 支持 Light/Dark 自动主题配置，例如 `theme = light:Catppuccin Latte,dark:Catppuccin Mocha`。
- 内置 Catppuccin、Gruvbox、TokyoNight、Rose Pine 等调色板和主题推荐。
- 支持“我的方案”，用浏览器 `localStorage` 保存多个本地方案。
- 支持本机保存并热加载到 Ghostty。
- 预览窗口支持像普通桌面窗口一样从四边和四角拖拽调整大小。

## 运行环境

- macOS
- Node.js 18 或更新版本
- Ghostty，可选；没有安装 Ghostty 也可以只用导入/导出功能
- `/usr/bin/zip` 和 `/usr/bin/unzip`，macOS 默认自带

## 本地启动

```sh
git clone https://github.com/zhangkaiming2579-dev/ghostty-style-lab.git
cd ghostty-style-lab
npm start
```

然后打开：

```text
http://localhost:5129
```

也可以指定端口：

```sh
PORT=5130 npm start
```

## 使用方式

1. 在左侧选择主题、字体、颜色、窗口、背景图、光标和功能项。
2. 在右侧预览区确认效果。
3. 点击 `导出配置` 下载完整配置包，发给别人或上传到社区。
4. 点击 `导入配置` 导入别人分享的配置包或 Ghostty 配置文件。
5. 点击 `保存并热加载` 将当前配置写入本机 Ghostty 配置路径。

默认 Ghostty 配置路径：

```text
~/Library/Application Support/com.mitchellh.ghostty/config.ghostty
```

如果你想写入其他路径，可以使用环境变量：

```sh
GHOSTTY_CONFIG_PATH="/path/to/config.ghostty" npm start
```

## 导出包结构

导出的 zip 通常包含：

```text
config.ghostty
themes/
background.png 或 background.jpg
README.md
```

如果没有自定义主题或背景图，对应文件可能不会出现。

## 隐私说明

`uploads/` 目录用于运行时保存用户上传的字体、背景图和导出的 zip。这个目录默认被 `.gitignore` 忽略，不会被提交到公开仓库。

## 当前限制

- 第一版主要面向 macOS 和 Ghostty。
- zip 导入/导出依赖 macOS 自带的 `/usr/bin/zip` 和 `/usr/bin/unzip`。
- 导入时只解析本工具认识的 Ghostty 配置项，未知配置会尽量保留在原始文本或提示中。
- “我的方案”保存在当前浏览器本地，没有账号同步。

---

# Ghostty Style Lab

A local visual workbench for Ghostty configuration. It turns terminal themes, fonts, window styling, backgrounds, cursors, and advanced options into friendly controls, with full import/export support for sharing configurations like community themes.

## Highlights

- Visually tune Ghostty themes, colors, fonts, window padding, opacity, backgrounds, cursors, and advanced behavior.
- Import `.zip` packages, `config`, `.ghostty`, or `.conf` files and map recognized options back into the UI.
- Export a complete configuration package with `config.ghostty`, `themes/`, optional background images, and installation notes.
- Generate Light/Dark theme configuration such as `theme = light:Catppuccin Latte,dark:Catppuccin Mocha`.
- Includes palette presets for Catppuccin, Gruvbox, TokyoNight, Rose Pine, and more.
- Save local schemes in browser `localStorage`.
- Save and hot-reload the generated configuration into the local Ghostty app.
- Resize the preview terminal like a desktop window by dragging edges or corners.

## Requirements

- macOS
- Node.js 18 or newer
- Ghostty, optional if you only need import/export
- `/usr/bin/zip` and `/usr/bin/unzip`, available by default on macOS

## Run Locally

```sh
git clone https://github.com/zhangkaiming2579-dev/ghostty-style-lab.git
cd ghostty-style-lab
npm start
```

Open:

```text
http://localhost:5129
```

Use another port if needed:

```sh
PORT=5130 npm start
```

## Workflow

1. Adjust themes, fonts, colors, window styling, background images, cursors, and advanced options from the left panel.
2. Check the live preview on the right.
3. Click `导出配置` to download a complete shareable package.
4. Click `导入配置` to import a package or an existing Ghostty config.
5. Click `保存并热加载` to write the current config to your local Ghostty config path.

Default Ghostty config path:

```text
~/Library/Application Support/com.mitchellh.ghostty/config.ghostty
```

Override it with:

```sh
GHOSTTY_CONFIG_PATH="/path/to/config.ghostty" npm start
```

## Export Package

The generated zip usually contains:

```text
config.ghostty
themes/
background.png or background.jpg
README.md
```

Theme or background files may be omitted when they are not needed.

## Privacy

The `uploads/` directory stores runtime uploads such as fonts, backgrounds, and exported zip files. It is ignored by git by default so personal assets are not committed to the public repository.

## Limitations

- This first version targets macOS and Ghostty.
- Zip import/export uses macOS system tools: `/usr/bin/zip` and `/usr/bin/unzip`.
- The importer only maps Ghostty options known by this tool. Unknown options are not forcefully edited.
- Local schemes are saved in the current browser only; there is no account sync yet.
