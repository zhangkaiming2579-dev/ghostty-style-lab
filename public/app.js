const themes = {
  "Catppuccin Mocha": {
    bg: "#1e1e2e",
    fg: "#cdd6f4",
    muted: "#9399b2",
    selection: "#585b70",
    selectionFg: "#cdd6f4",
    green: "#a6e3a1",
    accent: "#89b4fa",
    swatches: ["#1e1e2e", "#f38ba8", "#a6e3a1", "#f9e2af", "#89b4fa", "#cdd6f4"],
  },
  "TokyoNight Storm": {
    bg: "#24283b",
    fg: "#c0caf5",
    muted: "#7982a9",
    selection: "#364a82",
    selectionFg: "#c0caf5",
    green: "#9ece6a",
    accent: "#7aa2f7",
    swatches: ["#24283b", "#f7768e", "#9ece6a", "#e0af68", "#7aa2f7", "#c0caf5"],
  },
  "TokyoNight Night": {
    bg: "#1a1b26",
    fg: "#c0caf5",
    muted: "#565f89",
    selection: "#283457",
    selectionFg: "#c0caf5",
    green: "#9ece6a",
    accent: "#7dcfff",
    swatches: ["#1a1b26", "#f7768e", "#9ece6a", "#e0af68", "#7dcfff", "#c0caf5"],
  },
  "Rose Pine Moon": {
    bg: "#232136",
    fg: "#e0def4",
    muted: "#908caa",
    selection: "#44415a",
    selectionFg: "#e0def4",
    green: "#9ccfd8",
    accent: "#c4a7e7",
    swatches: ["#232136", "#eb6f92", "#9ccfd8", "#f6c177", "#c4a7e7", "#e0def4"],
  },
  "Kanagawa Wave": {
    bg: "#1f1f28",
    fg: "#dcd7ba",
    muted: "#727169",
    selection: "#2d4f67",
    selectionFg: "#dcd7ba",
    green: "#98bb6c",
    accent: "#7e9cd8",
    swatches: ["#1f1f28", "#e46876", "#98bb6c", "#e6c384", "#7e9cd8", "#dcd7ba"],
  },
  Dracula: {
    bg: "#282a36",
    fg: "#f8f8f2",
    muted: "#bfbfbf",
    selection: "#44475a",
    selectionFg: "#f8f8f2",
    green: "#50fa7b",
    accent: "#8be9fd",
    swatches: ["#282a36", "#ff5555", "#50fa7b", "#f1fa8c", "#bd93f9", "#f8f8f2"],
  },
  "GitHub Dark": {
    bg: "#0d1117",
    fg: "#c9d1d9",
    muted: "#8b949e",
    selection: "#1f6feb",
    selectionFg: "#ffffff",
    green: "#3fb950",
    accent: "#58a6ff",
    swatches: ["#0d1117", "#ff7b72", "#3fb950", "#d29922", "#58a6ff", "#c9d1d9"],
  },
  "Gruvbox Material Dark": {
    bg: "#282828",
    fg: "#d4be98",
    muted: "#928374",
    selection: "#504945",
    selectionFg: "#d4be98",
    green: "#a9b665",
    accent: "#7daea3",
    swatches: ["#282828", "#ea6962", "#a9b665", "#d8a657", "#7daea3", "#d4be98"],
  },
  "Everforest Dark Hard": {
    bg: "#1e2326",
    fg: "#d3c6aa",
    muted: "#859289",
    selection: "#4f5b58",
    selectionFg: "#d3c6aa",
    green: "#a7c080",
    accent: "#7fbbb3",
    swatches: ["#1e2326", "#e67e80", "#a7c080", "#dbbc7f", "#7fbbb3", "#d3c6aa"],
  },
  Carbonfox: {
    bg: "#161616",
    fg: "#f2f4f8",
    muted: "#8d8d8d",
    selection: "#2a2a2a",
    selectionFg: "#f2f4f8",
    green: "#25be6a",
    accent: "#78a9ff",
    swatches: ["#161616", "#ee5396", "#25be6a", "#08bdba", "#78a9ff", "#f2f4f8"],
  },
  "Ayu Mirage": {
    bg: "#1f2430",
    fg: "#cbccc6",
    muted: "#707a8c",
    selection: "#33415e",
    selectionFg: "#cbccc6",
    green: "#bae67e",
    accent: "#73d0ff",
    swatches: ["#1f2430", "#ff3333", "#bae67e", "#ffd580", "#73d0ff", "#cbccc6"],
  },
  "Flexoki Dark": {
    bg: "#100f0f",
    fg: "#cecdc3",
    muted: "#878580",
    selection: "#403e3c",
    selectionFg: "#cecdc3",
    green: "#66800b",
    accent: "#205ea6",
    swatches: ["#100f0f", "#af3029", "#66800b", "#ad8301", "#205ea6", "#cecdc3"],
  },
  "Catppuccin Latte": {
    bg: "#eff1f5",
    fg: "#4c4f69",
    muted: "#7c7f93",
    selection: "#ccd0da",
    selectionFg: "#4c4f69",
    green: "#40a02b",
    accent: "#1e66f5",
    swatches: ["#eff1f5", "#d20f39", "#40a02b", "#df8e1d", "#1e66f5", "#4c4f69"],
  },
  "GitHub Light Default": {
    bg: "#ffffff",
    fg: "#24292f",
    muted: "#57606a",
    selection: "#ddf4ff",
    selectionFg: "#24292f",
    green: "#1a7f37",
    accent: "#0969da",
    swatches: ["#ffffff", "#cf222e", "#1a7f37", "#9a6700", "#0969da", "#24292f"],
  },
  "TokyoNight Day": {
    bg: "#e1e2e7",
    fg: "#3760bf",
    muted: "#6172b0",
    selection: "#b7c1e3",
    selectionFg: "#3760bf",
    green: "#587539",
    accent: "#2e7de9",
    swatches: ["#e1e2e7", "#f52a65", "#587539", "#8c6c3e", "#2e7de9", "#3760bf"],
  },
  "Rose Pine Dawn": {
    bg: "#faf4ed",
    fg: "#575279",
    muted: "#9893a5",
    selection: "#dfdad9",
    selectionFg: "#575279",
    green: "#56949f",
    accent: "#907aa9",
    swatches: ["#faf4ed", "#b4637a", "#56949f", "#ea9d34", "#907aa9", "#575279"],
  },
  "Ayu Light": {
    bg: "#fafafa",
    fg: "#5c6773",
    muted: "#abb0b6",
    selection: "#e1e6ec",
    selectionFg: "#5c6773",
    green: "#86b300",
    accent: "#41a6d9",
    swatches: ["#fafafa", "#f07178", "#86b300", "#f2ae49", "#41a6d9", "#5c6773"],
  },
  "Flexoki Light": {
    bg: "#fffcf0",
    fg: "#100f0f",
    muted: "#6f6e69",
    selection: "#e6e4d9",
    selectionFg: "#100f0f",
    green: "#66800b",
    accent: "#205ea6",
    swatches: ["#fffcf0", "#af3029", "#66800b", "#ad8301", "#205ea6", "#100f0f"],
  },
};

const presets = [
  {
    name: "清爽日用",
    values: {
      theme: "Catppuccin Mocha",
      fontSize: 15,
      fontThicken: true,
      fontThickenStrength: 80,
      backgroundOpacity: 0.93,
      backgroundBlur: 20,
      paddingX: 10,
      paddingY: 8,
      cursorStyle: "block",
      cursorBlink: false,
      titlebarStyle: "transparent",
      scrollbar: "never",
    },
  },
  {
    name: "专注写代码",
    values: {
      theme: "GitHub Dark",
      fontSize: 14,
      fontThicken: false,
      fontThickenStrength: 0,
      backgroundOpacity: 1,
      backgroundBlur: 0,
      paddingX: 6,
      paddingY: 4,
      cursorStyle: "bar",
      cursorBlink: false,
      titlebarStyle: "native",
      scrollbar: "system",
    },
  },
  {
    name: "毛玻璃",
    values: {
      theme: "TokyoNight Storm",
      fontSize: 15.5,
      fontThicken: true,
      fontThickenStrength: 110,
      backgroundOpacity: 0.86,
      backgroundBlur: 30,
      paddingX: 14,
      paddingY: 12,
      cursorStyle: "block",
      cursorBlink: true,
      titlebarStyle: "transparent",
      scrollbar: "never",
    },
  },
  {
    name: "暖色耐看",
    values: {
      theme: "Gruvbox Material Dark",
      fontSize: 15,
      fontThicken: true,
      fontThickenStrength: 70,
      backgroundOpacity: 0.95,
      backgroundBlur: 14,
      paddingX: 12,
      paddingY: 8,
      cursorStyle: "underline",
      cursorBlink: false,
      titlebarStyle: "transparent",
      scrollbar: "never",
    },
  },
];

const themeCategories = [
  {
    title: "推荐常用",
    hint: "稳妥耐看",
    themes: ["Catppuccin Mocha", "TokyoNight Storm", "Gruvbox Material Dark", "GitHub Dark"],
  },
  {
    title: "冷色专注",
    hint: "深色代码感",
    themes: ["TokyoNight Night", "TokyoNight Storm", "Carbonfox", "Atom One Dark", "One Dark Two", "Dark Modern"],
  },
  {
    title: "柔和护眼",
    hint: "低刺激",
    themes: ["Everforest Dark Hard", "Gruvbox Material Dark", "Flexoki Dark", "Kanagawa Wave", "Rose Pine Moon", "Ayu Mirage"],
  },
  {
    title: "暖色复古",
    hint: "咖啡/胶片感",
    themes: ["Gruvbox Dark", "Gruvbox Material Dark", "Espresso", "Coffee Theme", "Earthsong", "Japanesque"],
  },
  {
    title: "高对比",
    hint: "更醒目",
    themes: ["GitHub Dark High Contrast", "Dracula", "Dracula+", "Cobalt2", "Challenger Deep", "Broadcast"],
  },
  {
    title: "白天浅色",
    hint: "亮环境",
    themes: ["Catppuccin Latte", "GitHub Light Default", "TokyoNight Day", "Rose Pine Dawn", "Ayu Light", "Flexoki Light"],
  },
];

const themePairs = {
  "Catppuccin Mocha": "Catppuccin Latte",
  "Gruvbox Material Dark": "Gruvbox Light",
  "GitHub Dark": "GitHub Light Default",
  "TokyoNight Storm": "TokyoNight Day",
  "TokyoNight Night": "TokyoNight Day",
  "Rose Pine Moon": "Rose Pine Dawn",
  "Ayu Mirage": "Ayu Light",
  "Flexoki Dark": "Flexoki Light",
  "Everforest Dark Hard": "Catppuccin Latte",
  Carbonfox: "GitHub Light Default",
};

const paletteSets = [
  { name: "Catppuccin Mocha", theme: "Catppuccin Mocha" },
  { name: "Gruvbox 暖色", theme: "Gruvbox Material Dark" },
  { name: "TokyoNight 冷色", theme: "TokyoNight Storm" },
  { name: "Rose Pine 柔和", theme: "Rose Pine Moon" },
  { name: "GitHub 高可读", theme: "GitHub Dark" },
  { name: "Flexoki 纸感", theme: "Flexoki Dark" },
];

const themeRecommendations = {
  "Catppuccin Mocha": { fontFamily: "Maple Mono NF CN", backgroundOpacity: 0.93, backgroundBlur: 20, paddingX: 10, paddingY: 8, titlebarStyle: "transparent", scrollbar: "never", cursorStyle: "block" },
  "Gruvbox Material Dark": { fontFamily: "Maple Mono NF CN", backgroundOpacity: 0.95, backgroundBlur: 14, paddingX: 12, paddingY: 8, titlebarStyle: "transparent", scrollbar: "never", cursorStyle: "underline" },
  "GitHub Dark": { fontFamily: "SF Mono", backgroundOpacity: 1, backgroundBlur: 0, paddingX: 6, paddingY: 4, titlebarStyle: "native", scrollbar: "system", cursorStyle: "bar" },
  "TokyoNight Storm": { fontFamily: "JetBrains Mono", backgroundOpacity: 0.9, backgroundBlur: 26, paddingX: 14, paddingY: 10, titlebarStyle: "transparent", scrollbar: "never", cursorStyle: "block" },
  "Rose Pine Moon": { fontFamily: "Maple Mono NF CN", backgroundOpacity: 0.92, backgroundBlur: 22, paddingX: 13, paddingY: 10, titlebarStyle: "transparent", scrollbar: "never", cursorStyle: "block" },
  Carbonfox: { fontFamily: "SF Mono", backgroundOpacity: 1, backgroundBlur: 0, paddingX: 8, paddingY: 6, titlebarStyle: "hidden", scrollbar: "system", cursorStyle: "bar" },
};

const featureGroups = [
  {
    title: "选择和剪贴板",
    items: [
      { key: "selectionClearOnTyping", label: "打字清除选区", config: "selection-clear-on-typing", type: "bool", default: true },
      { key: "selectionClearOnCopy", label: "复制后清除选区", config: "selection-clear-on-copy", type: "bool", default: false },
      { key: "selectionWordChars", label: "双击选词字符", config: "selection-word-chars", type: "text", default: " \t'\"│`|:;,()[]{}<>$" },
      { key: "copyOnSelect", label: "选中即复制", config: "copy-on-select", type: "select", default: "true", options: [["true", "开启"], ["false", "关闭"], ["clipboard", "系统+选区剪贴板"]] },
      { key: "rightClickAction", label: "右键行为", config: "right-click-action", type: "select", default: "context-menu", options: [["context-menu", "菜单"], ["paste", "粘贴"], ["copy", "复制"], ["copy-or-paste", "有选区复制，否则粘贴"], ["ignore", "忽略"]] },
      { key: "clickRepeatInterval", label: "连击间隔", config: "click-repeat-interval", type: "range", default: 0, min: 0, max: 1000, step: 50, suffix: " ms" },
      { key: "clipboardRead", label: "程序读取剪贴板", config: "clipboard-read", type: "select", default: "ask", options: [["ask", "询问"], ["allow", "允许"], ["deny", "拒绝"]] },
      { key: "clipboardWrite", label: "程序写入剪贴板", config: "clipboard-write", type: "select", default: "allow", options: [["allow", "允许"], ["ask", "询问"], ["deny", "拒绝"]] },
      { key: "clipboardTrimTrailingSpaces", label: "复制去尾部空格", config: "clipboard-trim-trailing-spaces", type: "bool", default: true },
      { key: "clipboardPasteProtection", label: "粘贴保护", config: "clipboard-paste-protection", type: "bool", default: true },
      { key: "clipboardPasteBracketedSafe", label: "括号粘贴安全", config: "clipboard-paste-bracketed-safe", type: "bool", default: true },
    ],
  },
  {
    title: "鼠标、链接和滚动",
    items: [
      { key: "cursorClickToMove", label: "点击移动光标", config: "cursor-click-to-move", type: "bool", default: true },
      { key: "mouseReporting", label: "鼠标事件上报", config: "mouse-reporting", type: "bool", default: true },
      { key: "mouseShiftCapture", label: "Shift 鼠标捕获", config: "mouse-shift-capture", type: "bool", default: false },
      { key: "mouseScrollMultiplier", label: "鼠标滚动倍率", config: "mouse-scroll-multiplier", type: "text", default: "precision:1,discrete:3" },
      { key: "scrollToBottom", label: "自动滚到底部", config: "scroll-to-bottom", type: "select", default: "keystroke,no-output", options: [["keystroke,no-output", "按键时"], ["keystroke,output", "按键和输出时"], ["no-keystroke,output", "有输出时"], ["no-keystroke,no-output", "关闭"]] },
      { key: "scrollbackLimit", label: "历史行数", config: "scrollback-limit", type: "number", default: 10000000, min: 1000, step: 1000 },
      { key: "linkUrl", label: "识别链接", config: "link-url", type: "bool", default: true },
      { key: "linkPreviews", label: "链接预览", config: "link-previews", type: "bool", default: true },
      { key: "focusFollowsMouse", label: "鼠标悬停聚焦", config: "focus-follows-mouse", type: "bool", default: false },
    ],
  },
  {
    title: "颜色和高亮",
    items: [
      { key: "backgroundOpacityCells", label: "透明应用到单元格", config: "background-opacity-cells", type: "bool", default: false },
      { key: "minimumContrast", label: "最低对比度", config: "minimum-contrast", type: "range", default: 1, min: 1, max: 7, step: 0.1 },
      { key: "boldColor", label: "粗体颜色", config: "bold-color", type: "text", default: "" },
      { key: "faintOpacity", label: "淡色文字透明", config: "faint-opacity", type: "range", default: 0.5, min: 0, max: 1, step: 0.05 },
      { key: "cursorOpacity", label: "光标透明度", config: "cursor-opacity", type: "range", default: 1, min: 0, max: 1, step: 0.05 },
      { key: "cursorText", label: "光标中文字色", config: "cursor-text", type: "text", default: "" },
      { key: "searchForeground", label: "搜索文字", config: "search-foreground", type: "color", default: "#000000" },
      { key: "searchBackground", label: "搜索背景", config: "search-background", type: "color", default: "#ffe082" },
      { key: "searchSelectedForeground", label: "当前搜索文字", config: "search-selected-foreground", type: "color", default: "#000000" },
      { key: "searchSelectedBackground", label: "当前搜索背景", config: "search-selected-background", type: "color", default: "#f2a57e" },
      { key: "unfocusedSplitOpacity", label: "非聚焦分屏透明", config: "unfocused-split-opacity", type: "range", default: 0.7, min: 0, max: 1, step: 0.05 },
      { key: "unfocusedSplitFill", label: "非聚焦分屏填充", config: "unfocused-split-fill", type: "text", default: "" },
      { key: "splitDividerColor", label: "分屏分隔线", config: "split-divider-color", type: "text", default: "" },
    ],
  },
  {
    title: "窗口行为",
    items: [
      { key: "maximize", label: "默认最大化", config: "maximize", type: "bool", default: false },
      { key: "fullscreen", label: "默认全屏", config: "fullscreen", type: "bool", default: false },
      { key: "windowDecoration", label: "窗口装饰", config: "window-decoration", type: "select", default: "auto", options: [["auto", "自动"], ["none", "无装饰"], ["client", "客户端"], ["server", "服务端"]] },
      { key: "windowPaddingColor", label: "留白颜色", config: "window-padding-color", type: "select", default: "background", options: [["background", "背景色"], ["extend", "延展边缘"], ["extend-always", "始终延展"]] },
      { key: "windowVsync", label: "垂直同步", config: "window-vsync", type: "bool", default: true },
      { key: "windowInheritWorkingDirectory", label: "新窗口继承目录", config: "window-inherit-working-directory", type: "bool", default: true },
      { key: "tabInheritWorkingDirectory", label: "新标签继承目录", config: "tab-inherit-working-directory", type: "bool", default: true },
      { key: "splitInheritWorkingDirectory", label: "新分屏继承目录", config: "split-inherit-working-directory", type: "bool", default: true },
      { key: "windowInheritFontSize", label: "继承字号", config: "window-inherit-font-size", type: "bool", default: true },
      { key: "windowSaveState", label: "保存窗口状态", config: "window-save-state", type: "select", default: "default", options: [["default", "跟随系统"], ["never", "永不"], ["always", "总是"]] },
      { key: "windowStepResize", label: "按字符格缩放", config: "window-step-resize", type: "bool", default: false },
      { key: "windowNewTabPosition", label: "新标签位置", config: "window-new-tab-position", type: "select", default: "current", options: [["current", "当前标签后"], ["end", "末尾"]] },
      { key: "windowShowTabBar", label: "标签栏显示", config: "window-show-tab-bar", type: "select", default: "auto", options: [["auto", "自动"], ["always", "总是"], ["never", "隐藏"]] },
      { key: "windowSubtitle", label: "窗口副标题", config: "window-subtitle", type: "bool", default: false },
      { key: "windowTheme", label: "窗口主题", config: "window-theme", type: "select", default: "auto", options: [["auto", "自动"], ["system", "跟随系统"], ["light", "浅色"], ["dark", "深色"], ["ghostty", "Ghostty 配色"]] },
      { key: "windowTitlebarBackground", label: "标题栏背景", config: "window-titlebar-background", type: "text", default: "" },
      { key: "windowTitlebarForeground", label: "标题栏文字", config: "window-titlebar-foreground", type: "text", default: "" },
      { key: "resizeOverlay", label: "缩放提示", config: "resize-overlay", type: "select", default: "after-first", options: [["after-first", "首次后显示"], ["always", "总是"], ["never", "隐藏"]] },
      { key: "resizeOverlayPosition", label: "缩放提示位置", config: "resize-overlay-position", type: "select", default: "center", options: [["center", "居中"], ["top-left", "左上"], ["top-center", "上中"], ["top-right", "右上"], ["bottom-left", "左下"], ["bottom-center", "下中"], ["bottom-right", "右下"]] },
      { key: "resizeOverlayDuration", label: "缩放提示时长", config: "resize-overlay-duration", type: "text", default: "750ms" },
    ],
  },
  {
    title: "启动和 Shell",
    items: [
      { key: "command", label: "启动程序", config: "command", type: "text", default: "" },
      { key: "initialCommand", label: "初始命令", config: "initial-command", type: "text", default: "" },
      { key: "workingDirectory", label: "默认目录", config: "working-directory", type: "text", default: "" },
      { key: "term", label: "TERM 类型", config: "term", type: "text", default: "xterm-ghostty" },
      { key: "language", label: "语言环境", config: "language", type: "text", default: "" },
      { key: "shellIntegration", label: "Shell 集成", config: "shell-integration", type: "select", default: "detect", options: [["detect", "自动"], ["none", "关闭"], ["zsh", "zsh"], ["fish", "fish"], ["bash", "bash"], ["nushell", "nushell"], ["elvish", "elvish"]] },
      { key: "shellIntegrationFeatures", label: "Shell 集成功能", config: "shell-integration-features", type: "text", default: "cursor,no-sudo,title,no-ssh-env,no-ssh-terminfo,path" },
      { key: "waitAfterCommand", label: "命令结束后等待", config: "wait-after-command", type: "bool", default: false },
      { key: "abnormalCommandExitRuntime", label: "异常退出提示时间", config: "abnormal-command-exit-runtime", type: "range", default: 250, min: 0, max: 3000, step: 50, suffix: " ms" },
    ],
  },
  {
    title: "通知和声音",
    items: [
      { key: "notifyOnCommandFinish", label: "命令完成通知", config: "notify-on-command-finish", type: "select", default: "never", options: [["never", "从不"], ["unfocused", "未聚焦时"], ["always", "总是"]] },
      { key: "notifyOnCommandFinishAction", label: "通知动作", config: "notify-on-command-finish-action", type: "text", default: "bell,no-notify" },
      { key: "notifyOnCommandFinishAfter", label: "多久后通知", config: "notify-on-command-finish-after", type: "text", default: "5s" },
      { key: "bellAudioPath", label: "提示音路径", config: "bell-audio-path", type: "text", default: "" },
      { key: "bellAudioVolume", label: "提示音音量", config: "bell-audio-volume", type: "range", default: 0.5, min: 0, max: 1, step: 0.05 },
    ],
  },
  {
    title: "关闭和快速终端",
    items: [
      { key: "confirmCloseSurface", label: "关闭前确认", config: "confirm-close-surface", type: "bool", default: true },
      { key: "quitAfterLastWindowClosed", label: "最后窗口关闭后退出", config: "quit-after-last-window-closed", type: "bool", default: false },
      { key: "undoTimeout", label: "撤销时限", config: "undo-timeout", type: "text", default: "5s" },
      { key: "quickTerminalPosition", label: "快速终端位置", config: "quick-terminal-position", type: "select", default: "top", options: [["top", "顶部"], ["bottom", "底部"], ["left", "左侧"], ["right", "右侧"], ["center", "居中"]] },
      { key: "quickTerminalScreen", label: "快速终端屏幕", config: "quick-terminal-screen", type: "text", default: "main" },
      { key: "quickTerminalAnimationDuration", label: "快速终端动画", config: "quick-terminal-animation-duration", type: "text", default: "0.2" },
      { key: "quickTerminalAutohide", label: "快速终端自动隐藏", config: "quick-terminal-autohide", type: "bool", default: true },
      { key: "quickTerminalSpaceBehavior", label: "快速终端空间行为", config: "quick-terminal-space-behavior", type: "select", default: "move", options: [["move", "跟随空间"], ["remain", "留在原空间"]] },
      { key: "quickTerminalKeyboardInteractivity", label: "快速终端键盘模式", config: "quick-terminal-keyboard-interactivity", type: "select", default: "on-demand", options: [["none", "不接收"], ["on-demand", "按需"], ["exclusive", "独占"]] },
    ],
  },
  {
    title: "macOS",
    items: [
      { key: "macosTitlebarProxyIcon", label: "标题栏代理图标", config: "macos-titlebar-proxy-icon", type: "select", default: "visible", options: [["visible", "显示"], ["hidden", "隐藏"]] },
      { key: "macosWindowShadow", label: "窗口阴影", config: "macos-window-shadow", type: "bool", default: true },
      { key: "macosNonNativeFullscreen", label: "非原生全屏", config: "macos-non-native-fullscreen", type: "bool", default: false },
      { key: "macosOptionAsAlt", label: "Option 当 Alt", config: "macos-option-as-alt", type: "select", default: "", options: [["", "自动"], ["true", "左右都开启"], ["false", "关闭"], ["left", "左 Option"], ["right", "右 Option"]] },
      { key: "macosHidden", label: "隐藏 Dock/App 切换", config: "macos-hidden", type: "select", default: "never", options: [["never", "不隐藏"], ["always", "总是隐藏"]] },
      { key: "macosAutoSecureInput", label: "自动安全输入", config: "macos-auto-secure-input", type: "bool", default: true },
      { key: "macosSecureInputIndication", label: "安全输入提示", config: "macos-secure-input-indication", type: "bool", default: true },
      { key: "macosShortcuts", label: "快捷指令权限", config: "macos-shortcuts", type: "select", default: "ask", options: [["ask", "询问"], ["allow", "允许"], ["deny", "拒绝"]] },
    ],
  },
];

const featureSettings = featureGroups.flatMap((group) => group.items);

const defaults = {
  fontFamily: "Maple Mono NF CN",
  fontSize: 15,
  fontThicken: true,
  fontThickenStrength: 80,
  cellWidth: 0,
  cellHeight: 0,
  fontBaseline: 0,
  theme: "Catppuccin Mocha",
  background: "#1e1e2e",
  foreground: "#cdd6f4",
  selectionBackground: "#585b70",
  selectionForeground: "#cdd6f4",
  cursorColor: "#cdd6f4",
  backgroundOpacity: 0.93,
  backgroundBlur: 20,
  backgroundImage: "",
  backgroundImageOpacity: 0.18,
  backgroundImagePosition: "center",
  backgroundImageFit: "cover",
  backgroundImageRepeat: false,
  paddingX: 10,
  paddingY: 8,
  paddingBalance: true,
  windowWidth: 110,
  windowHeight: 34,
  titlebarStyle: "transparent",
  windowButtons: "visible",
  scrollbar: "never",
  cursorStyle: "block",
  cursorBlink: false,
  mouseHideWhileTyping: true,
  themeMode: "single",
  lightTheme: "Catppuccin Latte",
  darkTheme: "Catppuccin Mocha",
  syncLightDark: true,
  schemeName: "Ghostty Style",
  ...Object.fromEntries(featureSettings.map((item) => [item.key, item.default])),
};

let state = { ...defaults };
let availableFonts = [];

const $ = (id) => document.getElementById(id);
const sidebarStorageKey = "ghostty-style-lab-sidebar-width";
const sidebarDefaultVersionKey = "ghostty-style-lab-sidebar-default-version";
const sidebarDefaultVersion = "wide-480";
const schemesStorageKey = "ghostty-style-lab-schemes-v1";
const sidebarDefaultWidth = 480;
const sidebarMinWidth = 300;
const sidebarMaxWidth = 640;

function themeData(name) {
  return themes[name] || themes["Catppuccin Mocha"];
}

function hasPreviewTheme(name) {
  return Object.prototype.hasOwnProperty.call(themes, name);
}

function colorsFromTheme(name) {
  const data = themeData(name);
  return {
    background: data.bg,
    foreground: data.fg,
    selectionBackground: data.selection,
    selectionForeground: data.selectionFg || data.fg,
    cursorColor: data.fg,
  };
}

function themeValueForConfig() {
  if (state.themeMode === "auto" && state.lightTheme && state.darkTheme) {
    return `light:${state.lightTheme},dark:${state.darkTheme}`;
  }
  return `"${state.theme}"`;
}

function optionExists(selectId, value) {
  const select = $(selectId);
  return !!select && [...select.options].some((option) => option.value === value);
}

function pairTheme(themeName) {
  if (themePairs[themeName]) return themePairs[themeName];
  const reverse = Object.entries(themePairs).find(([, light]) => light === themeName);
  return reverse?.[0] || defaults.darkTheme;
}

function syncThemePairFrom(themeName) {
  if (!state.syncLightDark) return;
  const pair = pairTheme(themeName);
  const isLight = /latte|light|day|dawn/i.test(themeName);
  if (isLight) {
    state.lightTheme = themeName;
    state.darkTheme = optionExists("darkTheme", pair) ? pair : defaults.darkTheme;
    state.theme = state.darkTheme;
  } else {
    state.darkTheme = themeName;
    state.lightTheme = optionExists("lightTheme", pair) ? pair : defaults.lightTheme;
    state.theme = themeName;
  }
}

function recommendedValues(themeName) {
  const values = themeRecommendations[themeName] || {};
  const fontExists = !values.fontFamily || availableFonts.includes(values.fontFamily);
  return fontExists ? values : { ...values, fontFamily: state.fontFamily };
}

function setStatus(text) {
  $("status").textContent = text;
}

function cssString(value) {
  return `"${String(value || "").replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}

function setUploadedFontFace(family, filePath) {
  let style = $("uploadedFontFace");
  if (!style) {
    style = document.createElement("style");
    style.id = "uploadedFontFace";
    document.head.append(style);
  }
  if (!family || !filePath) {
    style.textContent = "";
    return;
  }
  const url = `/api/font?path=${encodeURIComponent(filePath)}`;
  style.textContent = `@font-face{font-family:${cssString(family)};src:url("${url}");font-display:swap;}`;
}

function ensureFontOption(name, label = "") {
  const select = $("fontFamily");
  if (!select || !name) return;
  const exists = [...select.options].some((option) => option.value === name);
  if (exists) return;
  const option = document.createElement("option");
  option.value = name;
  option.textContent = label ? `${name}（${label}）` : name;
  select.prepend(option);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function featureValueForConfig(item) {
  const value = state[item.key] ?? item.default;
  if (item.type === "bool") return String(Boolean(value));
  if (item.type === "range" || item.type === "number") return String(Number(value));
  const stringValue = String(value ?? item.default ?? "");
  return /[\s"']/.test(stringValue) ? JSON.stringify(stringValue) : stringValue;
}

function featureConfigText() {
  return featureSettings
    .map((item) => {
      const value = featureValueForConfig(item);
      if (!value && !item.default) return "";
      return `${item.config} = ${value}`;
    })
    .filter(Boolean)
    .join("\n");
}

function shellFeatureTokens(value) {
  return String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function defaultShellIntegrationFeatures() {
  const setting = featureSettings.find((item) => item.key === "shellIntegrationFeatures");
  return setting?.default || "cursor,no-sudo,title,no-ssh-env,no-ssh-terminfo,path";
}

function promptCursorFollowsStyle() {
  if (state.shellIntegration === "none") return true;
  const tokens = shellFeatureTokens(state.shellIntegrationFeatures || defaultShellIntegrationFeatures());
  return tokens.includes("no-cursor");
}

function setPromptCursorFollowsStyle(enabled) {
  const tokens = shellFeatureTokens(state.shellIntegrationFeatures || defaultShellIntegrationFeatures())
    .filter((item) => item !== "cursor" && item !== "no-cursor");
  state.shellIntegrationFeatures = [enabled ? "no-cursor" : "cursor", ...tokens].join(",");
}

function configText() {
  const backgroundImageBlock = state.backgroundImage
    ? `
# Background image
background-image = "${state.backgroundImage}"
background-image-opacity = ${state.backgroundImageOpacity}
background-image-position = ${state.backgroundImagePosition}
background-image-fit = ${state.backgroundImageFit}
background-image-repeat = ${state.backgroundImageRepeat}
`
    : `
# Background image
# background-image = /path/to/image.jpg
`;

  return `# Font
font-family = "${state.fontFamily}"
font-size = ${state.fontSize}
font-thicken = ${state.fontThicken}
font-thicken-strength = ${state.fontThickenStrength}
adjust-cell-width = ${state.cellWidth}
adjust-cell-height = ${state.cellHeight}
adjust-font-baseline = ${state.fontBaseline}

# Colors
theme = ${themeValueForConfig()}
background = ${state.background}
foreground = ${state.foreground}
selection-background = ${state.selectionBackground}
selection-foreground = ${state.selectionForeground}
cursor-color = ${state.cursorColor}
background-opacity = ${state.backgroundOpacity}
background-blur = ${state.backgroundBlur}
${backgroundImageBlock}
# Window
window-padding-x = ${state.paddingX}
window-padding-y = ${state.paddingY}
window-padding-balance = ${state.paddingBalance}
window-width = ${state.windowWidth}
window-height = ${state.windowHeight}
macos-titlebar-style = ${state.titlebarStyle}
macos-window-buttons = ${state.windowButtons}
scrollbar = ${state.scrollbar}

# Cursor and interaction
cursor-style = ${state.cursorStyle}
cursor-style-blink = ${state.cursorBlink}
mouse-hide-while-typing = ${state.mouseHideWhileTyping}

# Function controls
${featureConfigText()}`;
}

function validHex(value) {
  return /^#[0-9a-fA-F]{6}$/.test(String(value || ""));
}

function validateState() {
  const errors = [];
  const warnings = [];
  const colorFields = [
    ["背景", state.background],
    ["文字", state.foreground],
    ["选区", state.selectionBackground],
    ["选中文字", state.selectionForeground],
    ["光标", state.cursorColor],
  ];
  colorFields.forEach(([label, value]) => {
    if (!validHex(value)) errors.push(`${label}颜色格式不正确`);
  });
  if (state.themeMode === "auto" && (!state.lightTheme || !state.darkTheme)) {
    errors.push("Light/Dark 主题必须同时选择浅色和深色");
  }
  if (state.fontFamily && availableFonts.length && !availableFonts.includes(state.fontFamily)) {
    errors.push(`字体不存在或 Ghostty 未识别：${state.fontFamily}`);
  }
  if (state.backgroundImage && !/\.(png|jpg|jpeg)$/i.test(state.backgroundImage)) {
    warnings.push("背景图不是常见 PNG/JPEG 路径，保存后请确认 Ghostty 能读取");
  }
  return { errors, warnings };
}

function renderValidation(result = validateState()) {
  const box = $("validationMessages");
  if (!box) return result;
  const items = [
    ...result.errors.map((message) => `<p class="error">错误：${escapeHtml(message)}</p>`),
    ...result.warnings.map((message) => `<p class="warning">提示：${escapeHtml(message)}</p>`),
  ];
  box.innerHTML = items.join("");
  return result;
}

function canContinueWithValidation() {
  const result = renderValidation();
  if (result.errors.length) {
    setStatus(result.errors[0]);
    return false;
  }
  return true;
}

function hasManualColors() {
  if (!hasPreviewTheme(state.theme)) return true;
  const colors = colorsFromTheme(state.theme);
  return ["background", "foreground", "selectionBackground", "selectionForeground", "cursorColor"]
    .some((key) => String(state[key]).toLowerCase() !== String(colors[key]).toLowerCase());
}

function schemes() {
  try {
    const value = JSON.parse(localStorage.getItem(schemesStorageKey) || "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

function saveSchemes(items) {
  localStorage.setItem(schemesStorageKey, JSON.stringify(items));
}

function schemeThumbnail(settings) {
  const colors = [
    settings.background,
    settings.foreground,
    settings.selectionBackground,
    settings.cursorColor,
  ].filter(Boolean);
  return colors.join("|");
}

function renderSchemes() {
  const list = $("schemeList");
  if (!list) return;
  const items = schemes();
  if (!items.length) {
    list.innerHTML = `<p class="empty-state">还没有保存的方案。</p>`;
    return;
  }
  list.innerHTML = items.map((item) => {
    const colors = String(item.thumbnail || "").split("|").filter(Boolean);
    return `
      <article class="scheme-card" data-id="${escapeHtml(item.id)}">
        <div class="scheme-thumb">${colors.map((color) => `<span style="background:${escapeHtml(color)}"></span>`).join("")}</div>
        <div class="scheme-meta">
          <strong>${escapeHtml(item.name)}</strong>
          <span>${new Date(item.updatedAt || item.createdAt).toLocaleString()}</span>
        </div>
        <div class="scheme-card-actions">
          <button data-action="apply">应用</button>
          <button data-action="rename">改名</button>
          <button data-action="delete">删除</button>
        </div>
      </article>
    `;
  }).join("");
  list.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".scheme-card");
      handleSchemeAction(card.dataset.id, button.dataset.action);
    });
  });
}

function snapshotSettings() {
  return JSON.parse(JSON.stringify(state));
}

function saveCurrentScheme() {
  const name = state.schemeName?.trim() || "未命名方案";
  const now = new Date().toISOString();
  const items = schemes();
  const existing = items.find((item) => item.name === name);
  if (existing) {
    existing.settings = snapshotSettings();
    existing.thumbnail = schemeThumbnail(state);
    existing.updatedAt = now;
  } else {
    items.unshift({
      id: `scheme-${Date.now()}`,
      name,
      settings: snapshotSettings(),
      thumbnail: schemeThumbnail(state),
      createdAt: now,
      updatedAt: now,
    });
  }
  saveSchemes(items);
  renderSchemes();
  setStatus("方案已保存到本地");
}

function applySettings(nextSettings, status = "未保存") {
  state = { ...defaults, ...nextSettings };
  ensureFontOption(state.fontFamily);
  render();
  setStatus(status);
}

function handleSchemeAction(id, action) {
  const items = schemes();
  const item = items.find((scheme) => scheme.id === id);
  if (!item) return;
  if (action === "apply") {
    applySettings(item.settings, "已应用方案，未保存");
  }
  if (action === "rename") {
    const nextName = window.prompt("方案新名字", item.name);
    if (!nextName) return;
    item.name = nextName.trim();
    item.updatedAt = new Date().toISOString();
    saveSchemes(items);
    renderSchemes();
  }
  if (action === "delete") {
    saveSchemes(items.filter((scheme) => scheme.id !== id));
    renderSchemes();
    setStatus("方案已删除");
  }
}

function updateSegmented() {
  document.querySelectorAll(".segmented").forEach((group) => {
    const key = group.dataset.key;
    group.querySelectorAll("button").forEach((button) => {
      button.classList.toggle("active", button.dataset.value === String(state[key]));
    });
  });
}

function updateThemeChips() {
  document.querySelectorAll(".theme-chip").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.theme === state.theme);
  });
}

function renderFeatureControl(item) {
  if (item.type === "bool") {
    return `
      <label class="switch-row feature-row">
        <span>${escapeHtml(item.label)}</span>
        <input id="${item.key}" type="checkbox" />
      </label>
    `;
  }

  if (item.type === "range") {
    return `
      <label class="field feature-row">
        <span>${escapeHtml(item.label)}</span>
        <input id="${item.key}" type="range" min="${item.min}" max="${item.max}" step="${item.step}" />
        <output id="${item.key}Value"></output>
      </label>
    `;
  }

  if (item.type === "number") {
    return `
      <label class="text-field feature-row">
        <span>${escapeHtml(item.label)}</span>
        <input id="${item.key}" type="number" min="${item.min ?? ""}" step="${item.step ?? 1}" />
      </label>
    `;
  }

  if (item.type === "color") {
    return `
      <label class="feature-color feature-row">
        <span>${escapeHtml(item.label)}</span>
        <input id="${item.key}" type="color" />
      </label>
    `;
  }

  if (item.type === "select") {
    return `
      <label class="text-field feature-row">
        <span>${escapeHtml(item.label)}</span>
        <select id="${item.key}">
          ${item.options.map(([value, label]) => `<option value="${escapeHtml(value)}">${escapeHtml(label)}</option>`).join("")}
        </select>
      </label>
    `;
  }

  return `
    <label class="text-field feature-row">
      <span>${escapeHtml(item.label)}</span>
      <input id="${item.key}" type="text" placeholder="${escapeHtml(item.config)}" />
    </label>
  `;
}

function renderFeatureControls() {
  $("featureControls").innerHTML = featureGroups
    .map((group) => `
      <div class="feature-group">
        <div class="feature-group-head">
          <strong>${escapeHtml(group.title)}</strong>
          <span>${group.items.length} 项</span>
        </div>
        <div class="feature-grid">
          ${group.items.map(renderFeatureControl).join("")}
        </div>
      </div>
    `)
    .join("");
}

function renderPaletteGrid() {
  const grid = $("paletteGrid");
  if (!grid) return;
  grid.innerHTML = paletteSets.map((palette) => {
    const data = themeData(palette.theme);
    return `
      <button class="palette-card" data-theme="${escapeHtml(palette.theme)}">
        <strong>${escapeHtml(palette.name)}</strong>
        <span>${escapeHtml(palette.theme)}</span>
        <div>${data.swatches.map((color) => `<i style="background:${color}"></i>`).join("")}</div>
      </button>
    `;
  }).join("");
  grid.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const themeName = button.dataset.theme;
      state.theme = themeName;
      state = { ...state, ...colorsFromTheme(themeName) };
      syncThemePairFrom(themeName);
      updateControls();
      updatePreview();
      setStatus("已应用调色板，未保存");
    });
  });
}

function bindTabs() {
  const tabbar = $("tabbar");
  const buttons = [...document.querySelectorAll("#tabbar button")];
  const panels = [...document.querySelectorAll("[data-panel]")];

  let dragging = false;
  let didDrag = false;
  let startX = 0;
  let startScrollLeft = 0;
  let activePointerId = null;

  tabbar.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    dragging = true;
    didDrag = false;
    activePointerId = event.pointerId;
    startX = event.clientX;
    startScrollLeft = tabbar.scrollLeft;
    tabbar.classList.add("dragging");
  });

  window.addEventListener("pointermove", (event) => {
    if (!dragging || event.pointerId !== activePointerId) return;
    const deltaX = event.clientX - startX;
    if (Math.abs(deltaX) > 4) {
      didDrag = true;
      tabbar.dataset.dragged = "true";
    }
    tabbar.scrollLeft = startScrollLeft - deltaX;
    if (didDrag) event.preventDefault();
  });

  const finishDrag = (event) => {
    if (!dragging || event.pointerId !== activePointerId) return;
    dragging = false;
    activePointerId = null;
    tabbar.classList.remove("dragging");
    window.setTimeout(() => {
      didDrag = false;
      delete tabbar.dataset.dragged;
    }, 0);
  };

  window.addEventListener("pointerup", finishDrag);
  window.addEventListener("pointercancel", finishDrag);

  tabbar.addEventListener("click", (event) => {
    if (tabbar.dataset.dragged !== "true") return;
    event.preventDefault();
    event.stopPropagation();
  }, true);

  tabbar.addEventListener("wheel", (event) => {
    if (tabbar.scrollWidth <= tabbar.clientWidth) return;
    const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
    if (!delta) return;
    tabbar.scrollLeft += delta;
    event.preventDefault();
  }, { passive: false });

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const tab = button.dataset.tab;
      buttons.forEach((item) => item.classList.toggle("active", item === button));
      panels.forEach((panel) => panel.classList.toggle("active-panel", panel.dataset.panel === tab));
    });
  });
}

function clampNumber(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function currentSidebarMax() {
  const previewMinWidth = 420;
  const available = window.innerWidth - previewMinWidth;
  return Math.min(sidebarMaxWidth, Math.max(sidebarMinWidth, available));
}

function setSidebarWidth(width, persist = false) {
  const nextWidth = clampNumber(Number(width) || sidebarDefaultWidth, sidebarMinWidth, currentSidebarMax());
  document.documentElement.style.setProperty("--sidebar-width", `${nextWidth}px`);

  const splitter = $("splitter");
  splitter.setAttribute("aria-valuemin", String(sidebarMinWidth));
  splitter.setAttribute("aria-valuemax", String(currentSidebarMax()));
  splitter.setAttribute("aria-valuenow", String(Math.round(nextWidth)));

  if (persist) localStorage.setItem(sidebarStorageKey, String(Math.round(nextWidth)));
  return nextWidth;
}

function bindSplitResize() {
  const splitter = $("splitter");
  const shell = document.querySelector(".app-shell");
  if (!splitter || !shell) return;

  const savedWidthRaw = localStorage.getItem(sidebarStorageKey);
  const savedWidth = Number(savedWidthRaw);
  const savedDefaultVersion = localStorage.getItem(sidebarDefaultVersionKey);
  const shouldUseNewDefault = savedDefaultVersion !== sidebarDefaultVersion
    && (!savedWidthRaw || savedWidth === 420);
  setSidebarWidth(shouldUseNewDefault ? sidebarDefaultWidth : savedWidth || sidebarDefaultWidth, shouldUseNewDefault);
  localStorage.setItem(sidebarDefaultVersionKey, sidebarDefaultVersion);

  let resizing = false;

  const widthFromPointer = (event) => event.clientX - shell.getBoundingClientRect().left;

  const startResize = (event) => {
    if (window.matchMedia("(max-width: 980px)").matches) return;
    resizing = true;
    document.body.classList.add("resizing");
    splitter.classList.add("active");
    splitter.setPointerCapture(event.pointerId);
    setSidebarWidth(widthFromPointer(event), true);
    event.preventDefault();
  };

  const resize = (event) => {
    if (!resizing) return;
    setSidebarWidth(widthFromPointer(event), true);
  };

  const stopResize = (event) => {
    if (!resizing) return;
    resizing = false;
    document.body.classList.remove("resizing");
    splitter.classList.remove("active");
    if (splitter.hasPointerCapture(event.pointerId)) splitter.releasePointerCapture(event.pointerId);
  };

  splitter.addEventListener("pointerdown", startResize);
  splitter.addEventListener("pointermove", resize);
  splitter.addEventListener("pointerup", stopResize);
  splitter.addEventListener("pointercancel", stopResize);
  splitter.addEventListener("dblclick", () => {
    setSidebarWidth(sidebarDefaultWidth, true);
  });
  splitter.addEventListener("keydown", (event) => {
    const currentWidth = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--sidebar-width"));
    const step = event.shiftKey ? 40 : 16;
    if (event.key === "ArrowLeft") {
      setSidebarWidth(currentWidth - step, true);
      event.preventDefault();
    }
    if (event.key === "ArrowRight") {
      setSidebarWidth(currentWidth + step, true);
      event.preventDefault();
    }
    if (event.key === "Home") {
      setSidebarWidth(sidebarMinWidth, true);
      event.preventDefault();
    }
    if (event.key === "End") {
      setSidebarWidth(currentSidebarMax(), true);
      event.preventDefault();
    }
  });

  window.addEventListener("resize", () => {
    const currentWidth = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--sidebar-width"));
    setSidebarWidth(currentWidth);
  });
}

function bindPreviewResize() {
  const preview = $("terminalPreview");
  const handles = [...document.querySelectorAll(".preview-resize-handle")];
  if (!handles.length || !preview) return;

  let resizing = false;
  let direction = "";
  let startX = 0;
  let startY = 0;
  let startWidth = 0;
  let startHeight = 0;
  let activeHandle = null;

  const applySize = (event) => {
    const dx = event.clientX - startX;
    const dy = event.clientY - startY;
    const affectsWest = direction.includes("w");
    const affectsEast = direction.includes("e");
    const affectsNorth = direction.includes("n");
    const affectsSouth = direction.includes("s");
    const width = startWidth + (affectsEast ? dx : 0) - (affectsWest ? dx : 0);
    const height = startHeight + (affectsSouth ? dy : 0) - (affectsNorth ? dy : 0);
    if (affectsEast || affectsWest) {
      state.windowWidth = Math.round(clampNumber(width / 8.4, 80, 180));
    }
    if (affectsNorth || affectsSouth) {
      state.windowHeight = Math.round(clampNumber(height / 13, 22, 60));
    }
    updateControls();
    updatePreview();
    setStatus("预览窗口已调整，未保存");
  };

  handles.forEach((handle) => {
    handle.addEventListener("pointerdown", (event) => {
      resizing = true;
      direction = handle.dataset.resize || "";
      activeHandle = handle;
      startX = event.clientX;
      startY = event.clientY;
      const rect = preview.getBoundingClientRect();
      startWidth = rect.width;
      startHeight = rect.height;
      document.body.dataset.previewResize = direction;
      document.body.classList.add("resizing-preview");
      handle.setPointerCapture(event.pointerId);
      event.preventDefault();
    });

  });

  window.addEventListener("pointermove", (event) => {
    if (!resizing) return;
    applySize(event);
  });

  const stop = (event) => {
    if (!resizing) return;
    resizing = false;
    direction = "";
    document.body.classList.remove("resizing-preview");
    delete document.body.dataset.previewResize;
    if (activeHandle?.hasPointerCapture(event.pointerId)) activeHandle.releasePointerCapture(event.pointerId);
    activeHandle = null;
  };

  window.addEventListener("pointerup", stop);
  window.addEventListener("pointercancel", stop);
}

function updateOutputs() {
  $("fontSizeValue").textContent = `${state.fontSize} pt`;
  $("fontThickenStrengthValue").textContent = state.fontThickenStrength;
  $("cellWidthValue").textContent = state.cellWidth;
  $("cellHeightValue").textContent = state.cellHeight;
  $("fontBaselineValue").textContent = state.fontBaseline;
  $("backgroundOpacityValue").textContent = `${Math.round(state.backgroundOpacity * 100)}%`;
  $("backgroundBlurValue").textContent = `${state.backgroundBlur}`;
  $("backgroundImageOpacityValue").textContent = `${Math.round(state.backgroundImageOpacity * 100)}%`;
  $("paddingXValue").textContent = `${state.paddingX}`;
  $("paddingYValue").textContent = `${state.paddingY}`;
  $("windowWidthValue").textContent = `${state.windowWidth}`;
  $("windowHeightValue").textContent = `${state.windowHeight}`;
  $("backgroundImageLabel").textContent = state.backgroundImage
    ? state.backgroundImage.split("/").pop()
    : "未选择图片";
  $("clearImageBtn").disabled = !state.backgroundImage;
  featureSettings
    .filter((item) => item.type === "range")
    .forEach((item) => {
      const output = $(`${item.key}Value`);
      if (output) output.textContent = `${state[item.key]}${item.suffix || ""}`;
    });
}

function updateControls() {
  for (const [key, value] of Object.entries(state)) {
    const input = $(key);
    if (!input) continue;
    if (input.type === "checkbox") input.checked = Boolean(value);
    else input.value = value;
  }
  $("promptCursorFollowsStyle").checked = promptCursorFollowsStyle();
  updateSegmented();
  updateThemeChips();
  updateOutputs();
}

function updatePreview() {
  const root = document.documentElement;
  const data = themeData(state.theme);
  root.style.setProperty("--term-bg", state.background || data.bg);
  root.style.setProperty("--term-fg", state.foreground || data.fg);
  root.style.setProperty("--term-muted", data.muted);
  root.style.setProperty("--term-selection", state.selectionBackground || data.selection);
  root.style.setProperty("--term-selection-fg", state.selectionForeground || data.selectionFg || data.fg);
  root.style.setProperty("--term-green", data.green);
  root.style.setProperty("--term-accent", data.accent);
  root.style.setProperty("--term-cursor", state.cursorColor || state.foreground || data.fg);
  root.style.setProperty("--term-opacity", state.backgroundOpacity);
  root.style.setProperty("--term-blur", `${state.backgroundBlur}px`);
  root.style.setProperty("--term-pad-x", `${state.paddingX}px`);
  root.style.setProperty("--term-pad-y", `${state.paddingY}px`);
  root.style.setProperty("--preview-font-size", `${state.fontSize}px`);
  root.style.setProperty("--preview-line-height", 1.65 + Number(state.cellHeight) / 50);
  root.style.setProperty("--preview-baseline", `${Number(state.fontBaseline) * -0.5}px`);
  root.style.setProperty("--preview-weight", state.fontThicken ? 460 + Number(state.fontThickenStrength) / 4 : 430);
  root.style.setProperty("--preview-letter-spacing", `${Number(state.cellWidth) * 0.28}px`);
  root.style.setProperty("--preview-font-family", `${cssString(state.fontFamily || defaults.fontFamily)}, ui-monospace, SFMono-Regular, Menlo, monospace`);
  root.style.setProperty("--preview-window-width", `${Math.round(Number(state.windowWidth) * 8.4)}px`);
  root.style.setProperty("--preview-window-height", `${Math.round(Number(state.windowHeight) * 13)}px`);

  const image = String(state.backgroundImage || "").trim();
  if (image) {
    const url = image.startsWith("http") || image.startsWith("data:")
      ? image
      : `/api/image?path=${encodeURIComponent(image)}`;
    root.style.setProperty("--term-image", `url("${url}")`);
  } else {
    root.style.setProperty("--term-image", "none");
  }
  root.style.setProperty("--term-image-opacity", state.backgroundImageOpacity);
  root.style.setProperty("--term-image-position", String(state.backgroundImagePosition).replace("-", " "));
  const cssImageFit = state.backgroundImageFit === "stretch"
    ? "100% 100%"
    : state.backgroundImageFit === "none"
      ? "auto"
      : state.backgroundImageFit;
  root.style.setProperty("--term-image-fit", cssImageFit);
  root.style.setProperty("--term-image-repeat", state.backgroundImageRepeat ? "repeat" : "no-repeat");

  $("previewTitle").textContent = state.themeMode === "auto"
    ? `${state.lightTheme} / ${state.darkTheme}`
    : state.theme;
  $("configText").textContent = configText();

  const previewWindows = [$("terminalPreview"), $("cursorEffectPreview")].filter(Boolean);
  previewWindows.forEach((preview) => {
    preview.dataset.titlebarStyle = state.titlebarStyle;
    preview.dataset.windowButtons = state.windowButtons;
    preview.dataset.scrollbar = state.scrollbar;
  });

  [$("cursorPreview"), $("cursorPanelPreview")].filter(Boolean).forEach((cursor) => {
    cursor.className = `cursor ${cursor.id === "cursorPanelPreview" ? "cursor-large " : ""}${state.cursorStyle} ${state.cursorBlink ? "blink" : ""}`;
  });

  $("swatches").innerHTML = data.swatches
    .map((color) => `<span style="background:${color}"></span>`)
    .join("");
  renderValidation();
}

function render() {
  updateControls();
  updatePreview();
  renderValidation();
}

function resetToDefaults() {
  state = { ...defaults, ...colorsFromTheme(defaults.theme) };
  $("backgroundImageFile").value = "";
  $("fontFile").value = "";
  setUploadedFontFace("", "");
  ensureFontOption(state.fontFamily);
  render();
  setStatus("已重置为默认，未保存");
}

function bindInputs() {
  [
    "fontSize",
    "fontThickenStrength",
    "cellWidth",
    "cellHeight",
    "fontBaseline",
    "backgroundOpacity",
    "backgroundBlur",
    "backgroundImageOpacity",
    "paddingX",
    "paddingY",
    "windowWidth",
    "windowHeight",
  ].forEach((id) => {
    $(id).addEventListener("input", (event) => {
      state[id] = Number(event.target.value);
      updateOutputs();
      updatePreview();
      setStatus("未保存");
    });
  });

  ["fontThicken", "paddingBalance", "backgroundImageRepeat", "cursorBlink", "mouseHideWhileTyping", "syncLightDark"].forEach((id) => {
    $(id).addEventListener("change", (event) => {
      state[id] = event.target.checked;
      if (id === "syncLightDark" && state.syncLightDark) {
        syncThemePairFrom(state.theme);
        updateControls();
      }
      updatePreview();
      setStatus("未保存");
    });
  });

  $("promptCursorFollowsStyle").addEventListener("change", (event) => {
    setPromptCursorFollowsStyle(event.target.checked);
    updateControls();
    updatePreview();
    setStatus("未保存");
  });

  ["background", "foreground", "selectionBackground", "selectionForeground", "cursorColor"].forEach((id) => {
    $(id).addEventListener("input", (event) => {
      state[id] = event.target.value;
      updatePreview();
      setStatus("未保存");
    });
  });

  featureSettings.forEach((item) => {
    const input = $(item.key);
    if (!input) return;
    const eventName = item.type === "range" || item.type === "color" ? "input" : "change";
    input.addEventListener(eventName, (event) => {
      if (item.type === "bool") state[item.key] = event.target.checked;
      else if (item.type === "range" || item.type === "number") state[item.key] = Number(event.target.value);
      else state[item.key] = event.target.value;
      if (item.key === "shellIntegration" || item.key === "shellIntegrationFeatures") {
        $("promptCursorFollowsStyle").checked = promptCursorFollowsStyle();
      }
      updateOutputs();
      updatePreview();
      setStatus("未保存");
    });
  });

  $("fontFamily").addEventListener("change", (event) => {
    state.fontFamily = event.target.value;
    setUploadedFontFace("", "");
    updatePreview();
    setStatus("字体已切换，未保存");
  });
  $("uploadFontBtn").addEventListener("click", () => $("fontFile").click());
  $("refreshFontsBtn").addEventListener("click", async () => {
    await loadFonts();
    ensureFontOption(state.fontFamily);
    updateControls();
    setStatus("字体列表已刷新");
  });
  $("fontFile").addEventListener("change", uploadFont);

  $("uploadImageBtn").addEventListener("click", () => $("backgroundImageFile").click());
  $("clearImageBtn").addEventListener("click", () => {
    state.backgroundImage = "";
    $("backgroundImageFile").value = "";
    updateOutputs();
    updatePreview();
    setStatus("未保存");
  });
  $("backgroundImageFile").addEventListener("change", uploadBackgroundImage);

  $("backgroundImagePosition").addEventListener("change", (event) => {
    state.backgroundImagePosition = event.target.value;
    updatePreview();
    setStatus("未保存");
  });

  $("theme").addEventListener("change", (event) => {
    state.theme = event.target.value;
    state = { ...state, ...recommendedValues(state.theme) };
    syncThemePairFrom(state.theme);
    if (hasPreviewTheme(state.theme)) {
      state = { ...state, ...colorsFromTheme(state.theme) };
      updateControls();
    }
    updateThemeChips();
    updatePreview();
    setStatus("未保存");
  });

  ["lightTheme", "darkTheme"].forEach((id) => {
    $(id).addEventListener("change", (event) => {
      state[id] = event.target.value;
      if (state.syncLightDark) syncThemePairFrom(event.target.value);
      else if (id === "darkTheme") state.theme = state.darkTheme;
      if (hasPreviewTheme(state.theme)) {
        state = { ...state, ...colorsFromTheme(state.theme) };
      }
      updateControls();
      updatePreview();
      setStatus("未保存");
    });
  });

  $("schemeName").addEventListener("input", (event) => {
    state.schemeName = event.target.value;
    updatePreview();
    setStatus("未保存");
  });

  document.querySelectorAll(".segmented button").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.closest(".segmented").dataset.key;
      state[key] = button.dataset.value;
      if (key === "themeMode" && state.themeMode === "auto") {
        syncThemePairFrom(state.theme);
        updateControls();
      } else {
        updateSegmented();
      }
      updatePreview();
      setStatus("未保存");
    });
  });

  $("exportBtn").addEventListener("click", exportPackage);
  $("importBtn").addEventListener("click", () => $("importFile").click());
  $("importFile").addEventListener("change", importConfigFile);
  $("saveSchemeBtn").addEventListener("click", saveCurrentScheme);
  $("refreshSchemesBtn").addEventListener("click", () => {
    renderSchemes();
    setStatus("方案列表已刷新");
  });
  $("saveBtn").addEventListener("click", saveAndReload);
  $("resetBtn").addEventListener("click", resetToDefaults);
  $("copyPromptBtn").addEventListener("click", async () => {
    await navigator.clipboard.writeText("brew install starship\\necho 'eval \\\"$(starship init zsh)\\\"' >> ~/.zshrc");
    setStatus("已复制 Starship 命令");
  });
}

function renderPresets() {
  $("presetRow").innerHTML = presets.map((preset) => `<button data-name="${preset.name}">${preset.name}</button>`).join("");
  $("presetRow").querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const preset = presets.find((item) => item.name === button.dataset.name);
      const themeName = preset.values.theme || defaults.theme;
      state = {
        ...defaults,
        ...preset.values,
        ...recommendedValues(themeName),
        ...colorsFromTheme(themeName),
        schemeName: preset.name,
      };
      syncThemePairFrom(themeName);
      render();
      setStatus("未保存");
    });
  });
}

function renderThemeCategories(availableThemes = []) {
  const available = new Set(availableThemes);
  $("themeCategories").innerHTML = themeCategories
    .map((category) => {
      const chips = category.themes
        .filter((name) => available.size === 0 || available.has(name))
        .map((name) => `<button class="theme-chip" data-theme="${name}" title="${name}">${name}</button>`)
        .join("");
      if (!chips) return "";
      return `
        <div class="theme-category">
          <div class="theme-category-head">
            <strong>${category.title}</strong>
            <span>${category.hint}</span>
          </div>
          <div class="theme-grid">${chips}</div>
        </div>
      `;
    })
    .join("");

  document.querySelectorAll(".theme-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      state.theme = chip.dataset.theme;
      state = { ...state, ...recommendedValues(state.theme) };
      syncThemePairFrom(state.theme);
      if (hasPreviewTheme(state.theme)) state = { ...state, ...colorsFromTheme(state.theme) };
      updateControls();
      updatePreview();
      setStatus("未保存");
    });
  });
  updateThemeChips();
}

async function loadThemes() {
  const response = await fetch("/api/themes");
  const data = await response.json();
  const allThemes = [...new Set([...Object.keys(themes), ...(data.themes || [])])];
  const options = allThemes.map((name) => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`).join("");
  $("theme").innerHTML = options;
  $("lightTheme").innerHTML = options;
  $("darkTheme").innerHTML = options;
  renderThemeCategories(allThemes);
}

async function loadFonts() {
  const response = await fetch("/api/fonts");
  const data = await response.json();
  const fonts = [...new Set([defaults.fontFamily, ...(data.fonts || [])])];
  availableFonts = fonts;
  $("fontFamily").innerHTML = fonts
    .map((name) => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`)
    .join("");
}

async function loadConfig() {
  const response = await fetch("/api/config");
  const data = await response.json();
  $("configPath").textContent = data.configPath;
  state = { ...defaults, ...data.settings };
  if (hasPreviewTheme(state.theme)) {
    if (!/^background\s*=/m.test(data.raw || "")) state = { ...state, ...colorsFromTheme(state.theme) };
    if (!/^foreground\s*=/m.test(data.raw || "")) state.foreground = colorsFromTheme(state.theme).foreground;
    if (!/^selection-background\s*=/m.test(data.raw || "")) state.selectionBackground = colorsFromTheme(state.theme).selectionBackground;
    if (!/^selection-foreground\s*=/m.test(data.raw || "")) state.selectionForeground = colorsFromTheme(state.theme).selectionForeground;
    if (!/^cursor-color\s*=/m.test(data.raw || "")) state.cursorColor = colorsFromTheme(state.theme).cursorColor;
  }
  ensureFontOption(state.fontFamily);
  render();
}

async function uploadFont(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const extension = file.name.split(".").pop()?.toLowerCase();
  if (!["ttf", "otf", "ttc", "woff", "woff2"].includes(extension || "")) {
    setStatus("只支持 TTF/OTF/TTC/WOFF");
    event.target.value = "";
    return;
  }

  setStatus("上传字体中...");
  const response = await fetch("/api/upload-font", {
    method: "POST",
    headers: {
      "content-type": file.type || "application/octet-stream",
      "x-file-name": encodeURIComponent(file.name),
    },
    body: file,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: "字体上传失败" }));
    setStatus(error.error || "字体上传失败");
    event.target.value = "";
    return;
  }

  const result = await response.json();
  state.fontFamily = result.family;
  setUploadedFontFace(result.family, result.path);
  await loadFonts();
  ensureFontOption(result.family, "上传字体");
  updateControls();
  updatePreview();
  setStatus(result.installed ? "字体已上传并安装，未保存" : "字体已上传，仅网页预览");
  event.target.value = "";
}

async function uploadBackgroundImage(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  if (!["image/png", "image/jpeg"].includes(file.type)) {
    setStatus("只支持 PNG/JPEG");
    event.target.value = "";
    return;
  }

  setStatus("上传图片中...");
  const response = await fetch("/api/upload", {
    method: "POST",
    headers: {
      "content-type": file.type,
      "x-file-name": encodeURIComponent(file.name),
    },
    body: file,
  });

  if (!response.ok) {
    setStatus("图片上传失败");
    return;
  }

  const result = await response.json();
  state.backgroundImage = result.path;
  updateOutputs();
  updatePreview();
  setStatus("图片已上传，未保存");
}

async function exportPackage() {
  if (!canContinueWithValidation()) return;
  setStatus("正在生成配置包...");
  const response = await fetch("/api/export-package", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ settings: state, includeCustomTheme: hasManualColors() }),
  });
  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: "导出失败" }));
    setStatus(error.error || "导出失败");
    return;
  }
  const blob = await response.blob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  const downloadName = (state.schemeName || "ghostty-style").replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/^-+|-+$/g, "") || "ghostty-style";
  link.download = `${downloadName}.zip`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  setStatus("配置包已下载");
}

async function importConfigFile(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const isZip = /\.zip$/i.test(file.name);
  setStatus(isZip ? "导入配置包中..." : "导入 config 中...");
  const response = await fetch(isZip ? "/api/import-package" : "/api/import-config", {
    method: "POST",
    headers: isZip ? { "x-file-name": encodeURIComponent(file.name) } : { "content-type": "text/plain" },
    body: isZip ? file : await file.text(),
  });
  event.target.value = "";
  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: "config 格式不兼容" }));
    setStatus(error.error || "config 格式不兼容");
    return;
  }
  const result = await response.json();
  applySettings(result.settings, result.warnings?.length ? result.warnings[0] : "已导入，未保存");
}

async function saveAndReload() {
  if (!canContinueWithValidation()) return;
  setStatus("保存中...");
  const response = await fetch("/api/config", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ settings: state }),
  });
  if (!response.ok) {
    setStatus("保存失败");
    return;
  }
  await reloadGhostty("已保存，已热加载");
}

async function reloadGhostty(doneText = "已热加载") {
  setStatus("热加载中...");
  const response = await fetch("/api/reload", { method: "POST" });
  setStatus(response.ok ? doneText : "热加载失败，可手动按 Cmd+Shift+,");
}

async function init() {
  bindTabs();
  bindSplitResize();
  bindPreviewResize();
  renderPresets();
  renderPaletteGrid();
  renderFeatureControls();
  renderSchemes();
  bindInputs();
  await Promise.all([loadThemes(), loadFonts()]);
  await loadConfig();
}

init().catch((error) => {
  console.error(error);
  setStatus(error.message);
});
