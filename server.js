import { createServer } from "node:http";
import { readFile, writeFile, copyFile, mkdir, mkdtemp, rm, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { basename, dirname, extname, join, resolve } from "node:path";
import { execFile } from "node:child_process";
import { homedir, tmpdir } from "node:os";

const PORT = Number(process.env.PORT || 5129);
const ROOT = new URL(".", import.meta.url).pathname;
const PUBLIC = join(ROOT, "public");
const UPLOADS = join(ROOT, "uploads");
const FONT_UPLOADS = join(UPLOADS, "fonts");
const HOME = homedir();
const USER_FONTS = join(HOME, "Library", "Fonts");
const GHOSTTY = "/Applications/Ghostty.app/Contents/MacOS/ghostty";
const CONFIG_PATH = process.env.GHOSTTY_CONFIG_PATH
  || join(HOME, "Library", "Application Support", "com.mitchellh.ghostty", "config.ghostty");
const CONFIG_DIR = dirname(CONFIG_PATH);
const TRANSPARENT_PNG = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+/p9sAAAAASUVORK5CYII=",
  "base64",
);

const featureSettings = [
  { key: "selectionClearOnTyping", config: "selection-clear-on-typing", type: "bool", default: true },
  { key: "selectionClearOnCopy", config: "selection-clear-on-copy", type: "bool", default: false },
  { key: "selectionWordChars", config: "selection-word-chars", type: "string", default: " \t'\"│`|:;,()[]{}<>$" },
  { key: "copyOnSelect", config: "copy-on-select", type: "string", default: "true" },
  { key: "rightClickAction", config: "right-click-action", type: "string", default: "context-menu" },
  { key: "clickRepeatInterval", config: "click-repeat-interval", type: "number", default: 0 },
  { key: "clipboardRead", config: "clipboard-read", type: "string", default: "ask" },
  { key: "clipboardWrite", config: "clipboard-write", type: "string", default: "allow" },
  { key: "clipboardTrimTrailingSpaces", config: "clipboard-trim-trailing-spaces", type: "bool", default: true },
  { key: "clipboardPasteProtection", config: "clipboard-paste-protection", type: "bool", default: true },
  { key: "clipboardPasteBracketedSafe", config: "clipboard-paste-bracketed-safe", type: "bool", default: true },
  { key: "cursorClickToMove", config: "cursor-click-to-move", type: "bool", default: true },
  { key: "mouseReporting", config: "mouse-reporting", type: "bool", default: true },
  { key: "mouseShiftCapture", config: "mouse-shift-capture", type: "bool", default: false },
  { key: "mouseScrollMultiplier", config: "mouse-scroll-multiplier", type: "string", default: "precision:1,discrete:3" },
  { key: "scrollToBottom", config: "scroll-to-bottom", type: "string", default: "keystroke,no-output" },
  { key: "scrollbackLimit", config: "scrollback-limit", type: "number", default: 10000000 },
  { key: "linkUrl", config: "link-url", type: "bool", default: true },
  { key: "linkPreviews", config: "link-previews", type: "bool", default: true },
  { key: "focusFollowsMouse", config: "focus-follows-mouse", type: "bool", default: false },
  { key: "backgroundOpacityCells", config: "background-opacity-cells", type: "bool", default: false },
  { key: "minimumContrast", config: "minimum-contrast", type: "number", default: 1 },
  { key: "boldColor", config: "bold-color", type: "string", default: "" },
  { key: "faintOpacity", config: "faint-opacity", type: "number", default: 0.5 },
  { key: "cursorOpacity", config: "cursor-opacity", type: "number", default: 1 },
  { key: "cursorText", config: "cursor-text", type: "string", default: "" },
  { key: "searchForeground", config: "search-foreground", type: "string", default: "#000000" },
  { key: "searchBackground", config: "search-background", type: "string", default: "#ffe082" },
  { key: "searchSelectedForeground", config: "search-selected-foreground", type: "string", default: "#000000" },
  { key: "searchSelectedBackground", config: "search-selected-background", type: "string", default: "#f2a57e" },
  { key: "unfocusedSplitOpacity", config: "unfocused-split-opacity", type: "number", default: 0.7 },
  { key: "unfocusedSplitFill", config: "unfocused-split-fill", type: "string", default: "" },
  { key: "splitDividerColor", config: "split-divider-color", type: "string", default: "" },
  { key: "maximize", config: "maximize", type: "bool", default: false },
  { key: "fullscreen", config: "fullscreen", type: "bool", default: false },
  { key: "windowDecoration", config: "window-decoration", type: "string", default: "auto" },
  { key: "windowPaddingColor", config: "window-padding-color", type: "string", default: "background" },
  { key: "windowVsync", config: "window-vsync", type: "bool", default: true },
  { key: "windowInheritWorkingDirectory", config: "window-inherit-working-directory", type: "bool", default: true },
  { key: "tabInheritWorkingDirectory", config: "tab-inherit-working-directory", type: "bool", default: true },
  { key: "splitInheritWorkingDirectory", config: "split-inherit-working-directory", type: "bool", default: true },
  { key: "windowInheritFontSize", config: "window-inherit-font-size", type: "bool", default: true },
  { key: "windowSaveState", config: "window-save-state", type: "string", default: "default" },
  { key: "windowStepResize", config: "window-step-resize", type: "bool", default: false },
  { key: "windowNewTabPosition", config: "window-new-tab-position", type: "string", default: "current" },
  { key: "windowShowTabBar", config: "window-show-tab-bar", type: "string", default: "auto" },
  { key: "windowSubtitle", config: "window-subtitle", type: "bool", default: false },
  { key: "windowTheme", config: "window-theme", type: "string", default: "auto" },
  { key: "windowTitlebarBackground", config: "window-titlebar-background", type: "string", default: "" },
  { key: "windowTitlebarForeground", config: "window-titlebar-foreground", type: "string", default: "" },
  { key: "resizeOverlay", config: "resize-overlay", type: "string", default: "after-first" },
  { key: "resizeOverlayPosition", config: "resize-overlay-position", type: "string", default: "center" },
  { key: "resizeOverlayDuration", config: "resize-overlay-duration", type: "string", default: "750ms" },
  { key: "command", config: "command", type: "string", default: "" },
  { key: "initialCommand", config: "initial-command", type: "string", default: "" },
  { key: "workingDirectory", config: "working-directory", type: "string", default: "" },
  { key: "term", config: "term", type: "string", default: "xterm-ghostty" },
  { key: "language", config: "language", type: "string", default: "" },
  { key: "shellIntegration", config: "shell-integration", type: "string", default: "detect" },
  { key: "shellIntegrationFeatures", config: "shell-integration-features", type: "string", default: "cursor,no-sudo,title,no-ssh-env,no-ssh-terminfo,path" },
  { key: "waitAfterCommand", config: "wait-after-command", type: "bool", default: false },
  { key: "abnormalCommandExitRuntime", config: "abnormal-command-exit-runtime", type: "number", default: 250 },
  { key: "notifyOnCommandFinish", config: "notify-on-command-finish", type: "string", default: "never" },
  { key: "notifyOnCommandFinishAction", config: "notify-on-command-finish-action", type: "string", default: "bell,no-notify" },
  { key: "notifyOnCommandFinishAfter", config: "notify-on-command-finish-after", type: "string", default: "5s" },
  { key: "bellAudioPath", config: "bell-audio-path", type: "string", default: "" },
  { key: "bellAudioVolume", config: "bell-audio-volume", type: "number", default: 0.5 },
  { key: "confirmCloseSurface", config: "confirm-close-surface", type: "bool", default: true },
  { key: "quitAfterLastWindowClosed", config: "quit-after-last-window-closed", type: "bool", default: false },
  { key: "undoTimeout", config: "undo-timeout", type: "string", default: "5s" },
  { key: "quickTerminalPosition", config: "quick-terminal-position", type: "string", default: "top" },
  { key: "quickTerminalScreen", config: "quick-terminal-screen", type: "string", default: "main" },
  { key: "quickTerminalAnimationDuration", config: "quick-terminal-animation-duration", type: "string", default: "0.2" },
  { key: "quickTerminalAutohide", config: "quick-terminal-autohide", type: "bool", default: true },
  { key: "quickTerminalSpaceBehavior", config: "quick-terminal-space-behavior", type: "string", default: "move" },
  { key: "quickTerminalKeyboardInteractivity", config: "quick-terminal-keyboard-interactivity", type: "string", default: "on-demand" },
  { key: "macosTitlebarProxyIcon", config: "macos-titlebar-proxy-icon", type: "string", default: "visible" },
  { key: "macosWindowShadow", config: "macos-window-shadow", type: "bool", default: true },
  { key: "macosNonNativeFullscreen", config: "macos-non-native-fullscreen", type: "bool", default: false },
  { key: "macosOptionAsAlt", config: "macos-option-as-alt", type: "string", default: "" },
  { key: "macosHidden", config: "macos-hidden", type: "string", default: "never" },
  { key: "macosAutoSecureInput", config: "macos-auto-secure-input", type: "bool", default: true },
  { key: "macosSecureInputIndication", config: "macos-secure-input-indication", type: "bool", default: true },
  { key: "macosShortcuts", config: "macos-shortcuts", type: "string", default: "ask" },
];

const featureByConfig = new Map(featureSettings.map((setting) => [setting.config, setting]));

const managedKeys = new Set([
  "font-family",
  "font-size",
  "font-thicken",
  "font-thicken-strength",
  "adjust-cell-width",
  "adjust-cell-height",
  "adjust-font-baseline",
  "theme",
  "background",
  "foreground",
  "background-opacity",
  "background-blur",
  "background-image",
  "background-image-opacity",
  "background-image-position",
  "background-image-fit",
  "background-image-repeat",
  "selection-foreground",
  "selection-background",
  "cursor-color",
  "window-padding-x",
  "window-padding-y",
  "window-padding-balance",
  "window-width",
  "window-height",
  "macos-titlebar-style",
  "macos-window-buttons",
  "scrollbar",
  "cursor-style",
  "cursor-style-blink",
  "mouse-hide-while-typing",
]);
for (const setting of featureSettings) managedKeys.add(setting.config);

const managedComments = new Set([
  "# Font",
  "# Colors",
  "# Background image",
  "# Window",
  "# Cursor and interaction",
  "# Function controls",
]);

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
  ...Object.fromEntries(featureSettings.map((setting) => [setting.key, setting.default])),
};

function send(res, status, body, type = "application/json") {
  res.writeHead(status, { "content-type": `${type}; charset=utf-8` });
  res.end(type === "application/json" ? JSON.stringify(body, null, 2) : body);
}

function sendBuffer(res, status, body, type) {
  res.writeHead(status, { "content-type": type });
  res.end(body);
}

function sendDownload(res, status, body, type, filename) {
  res.writeHead(status, {
    "content-type": type,
    "content-disposition": `attachment; filename="${filename}"`,
  });
  res.end(body);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        reject(new Error("Request body too large"));
        req.destroy();
      }
    });
    req.on("end", () => resolve(body));
    req.on("error", reject);
  });
}

function readBuffer(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on("data", (chunk) => {
      chunks.push(chunk);
      size += chunk.length;
      if (size > 30_000_000) {
        reject(new Error("File is too large"));
        req.destroy();
      }
    });
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

function sanitizeFileName(name) {
  const extension = extname(name).toLowerCase();
  const base = basename(name, extension)
    .replace(/[^a-zA-Z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80) || "ghostty-bg";
  return `${base}${extension}`;
}

function sanitizePackageName(name) {
  return String(name || "ghostty-style")
    .trim()
    .replace(/[^a-zA-Z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 64) || "ghostty-style";
}

function isPathInside(filePath, directory) {
  const resolvedFile = resolve(filePath);
  const resolvedDirectory = resolve(directory);
  return resolvedFile === resolvedDirectory || resolvedFile.startsWith(`${resolvedDirectory}/`);
}

function fontMime(extension) {
  if (extension === ".ttf") return "font/ttf";
  if (extension === ".otf") return "font/otf";
  if (extension === ".woff") return "font/woff";
  if (extension === ".woff2") return "font/woff2";
  return "font/collection";
}

function unquote(value) {
  const trimmed = value.trim();
  if (trimmed.startsWith('"') && trimmed.endsWith('"')) {
    try {
      return JSON.parse(trimmed);
    } catch {
      return trimmed.slice(1, -1);
    }
  }
  return trimmed;
}

function parseFeatureValue(value, setting) {
  if (setting.type === "bool") return value === "true";
  if (setting.type === "number") return Number(value);
  return value;
}

function parseThemeValue(value, settings) {
  const pairs = Object.fromEntries(
    String(value || "")
      .split(",")
      .map((part) => part.trim().match(/^(light|dark)\s*:\s*(.+)$/i))
      .filter(Boolean)
      .map((match) => [match[1].toLowerCase(), match[2].trim()]),
  );
  if (pairs.light && pairs.dark) {
    settings.themeMode = "auto";
    settings.lightTheme = pairs.light;
    settings.darkTheme = pairs.dark;
    settings.theme = pairs.dark;
    return;
  }
  settings.themeMode = "single";
  settings.theme = value;
}

function parseConfig(raw) {
  const settings = { ...defaults };
  for (const line of raw.split(/\r?\n/)) {
    const clean = line.trim();
    if (!clean || clean.startsWith("#")) continue;
    const match = clean.match(/^([a-z0-9-]+)\s*=\s*(.*)$/i);
    if (!match) continue;
    const [, key, rawValue] = match;
    const value = unquote(rawValue);

    if (key === "font-family" && value) settings.fontFamily = value;
    if (key === "font-size") settings.fontSize = Number(value);
    if (key === "font-thicken") settings.fontThicken = value === "true";
    if (key === "font-thicken-strength") settings.fontThickenStrength = Number(value);
    if (key === "adjust-cell-width") settings.cellWidth = Number(value);
    if (key === "adjust-cell-height") settings.cellHeight = Number(value);
    if (key === "adjust-font-baseline") settings.fontBaseline = Number(value);
    if (key === "theme") parseThemeValue(value, settings);
    if (key === "background") settings.background = value;
    if (key === "foreground") settings.foreground = value;
    if (key === "selection-background") settings.selectionBackground = value;
    if (key === "selection-foreground") settings.selectionForeground = value;
    if (key === "cursor-color") settings.cursorColor = value;
    if (key === "background-opacity") settings.backgroundOpacity = Number(value);
    if (key === "background-blur") settings.backgroundBlur = value === "false" ? 0 : Number(value);
    if (key === "background-image") settings.backgroundImage = value;
    if (key === "background-image-opacity") settings.backgroundImageOpacity = Number(value);
    if (key === "background-image-position") settings.backgroundImagePosition = value;
    if (key === "background-image-fit") settings.backgroundImageFit = value;
    if (key === "background-image-repeat") settings.backgroundImageRepeat = value === "true";
    if (key === "window-padding-x") settings.paddingX = Number(value.split(",")[0]);
    if (key === "window-padding-y") settings.paddingY = Number(value.split(",")[0]);
    if (key === "window-padding-balance") settings.paddingBalance = value === "true";
    if (key === "window-width") settings.windowWidth = Number(value);
    if (key === "window-height") settings.windowHeight = Number(value);
    if (key === "macos-titlebar-style") settings.titlebarStyle = value;
    if (key === "macos-window-buttons") settings.windowButtons = value;
    if (key === "scrollbar") settings.scrollbar = value;
    if (key === "cursor-style") settings.cursorStyle = value;
    if (key === "cursor-style-blink") settings.cursorBlink = value === "true";
    if (key === "mouse-hide-while-typing") settings.mouseHideWhileTyping = value === "true";

    const feature = featureByConfig.get(key);
    if (feature) settings[feature.key] = parseFeatureValue(value, feature);
  }
  return settings;
}

function cleanUnmanaged(raw) {
  const lines = raw.split(/\r?\n/);
  const kept = [];
  let inManagedBlock = false;
  for (const line of lines) {
    if (line.includes("--- Ghostty Style Lab start ---")) {
      inManagedBlock = true;
      continue;
    }
    if (line.includes("--- Ghostty Style Lab end ---")) {
      inManagedBlock = false;
      continue;
    }
    if (inManagedBlock) continue;
    const match = line.trim().match(/^([a-z0-9-]+)\s*=/i);
    if (match && managedKeys.has(match[1])) continue;
    if (managedComments.has(line.trim())) continue;
    kept.push(line);
  }
  return kept.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

function bool(value) {
  return value ? "true" : "false";
}

function quote(value) {
  return JSON.stringify(String(value ?? ""));
}

function optionalNumber(value, fallback) {
  return Number.isFinite(Number(value)) ? Number(value) : fallback;
}

function renderThemeValue(settings) {
  if (settings.themeMode === "auto" && settings.lightTheme && settings.darkTheme) {
    return `light:${settings.lightTheme},dark:${settings.darkTheme}`;
  }
  return quote(settings.theme || defaults.theme);
}

function renderFeatureLine(setting, settings) {
  const value = settings[setting.key] ?? setting.default;
  if (setting.type === "bool") return `${setting.config} = ${bool(value)}`;
  if (setting.type === "number") return `${setting.config} = ${optionalNumber(value, setting.default)}`;
  if (String(value ?? "") === "" && String(setting.default ?? "") === "") return "";
  const stringValue = String(value ?? setting.default);
  return `${setting.config} = ${/[\s"']/.test(stringValue) ? quote(stringValue) : stringValue}`;
}

function renderConfig(settings) {
  const lines = [
    "# --- Ghostty Style Lab start ---",
    "# Font",
    `font-family = ${quote(settings.fontFamily || defaults.fontFamily)}`,
    `font-size = ${optionalNumber(settings.fontSize, defaults.fontSize)}`,
    `font-thicken = ${bool(settings.fontThicken)}`,
    `font-thicken-strength = ${optionalNumber(settings.fontThickenStrength, defaults.fontThickenStrength)}`,
    `adjust-cell-width = ${optionalNumber(settings.cellWidth, defaults.cellWidth)}`,
    `adjust-cell-height = ${optionalNumber(settings.cellHeight, defaults.cellHeight)}`,
    `adjust-font-baseline = ${optionalNumber(settings.fontBaseline, defaults.fontBaseline)}`,
    "",
    "# Colors",
    `theme = ${renderThemeValue(settings)}`,
    `background = ${settings.background || defaults.background}`,
    `foreground = ${settings.foreground || defaults.foreground}`,
    `selection-background = ${settings.selectionBackground || defaults.selectionBackground}`,
    `selection-foreground = ${settings.selectionForeground || defaults.selectionForeground}`,
    `cursor-color = ${settings.cursorColor || defaults.cursorColor}`,
    `background-opacity = ${optionalNumber(settings.backgroundOpacity, defaults.backgroundOpacity)}`,
    `background-blur = ${optionalNumber(settings.backgroundBlur, defaults.backgroundBlur)}`,
    "",
    "# Background image",
  ];

  if (settings.backgroundImage) {
    lines.push(
      `background-image = ${quote(settings.backgroundImage)}`,
      `background-image-opacity = ${optionalNumber(settings.backgroundImageOpacity, defaults.backgroundImageOpacity)}`,
      `background-image-position = ${settings.backgroundImagePosition || defaults.backgroundImagePosition}`,
      `background-image-fit = ${settings.backgroundImageFit || defaults.backgroundImageFit}`,
      `background-image-repeat = ${bool(settings.backgroundImageRepeat)}`,
    );
  } else {
    lines.push("# background-image = /path/to/image.jpg");
  }

  lines.push(
    "",
    "# Window",
    `window-padding-x = ${optionalNumber(settings.paddingX, defaults.paddingX)}`,
    `window-padding-y = ${optionalNumber(settings.paddingY, defaults.paddingY)}`,
    `window-padding-balance = ${bool(settings.paddingBalance)}`,
    `window-width = ${optionalNumber(settings.windowWidth, defaults.windowWidth)}`,
    `window-height = ${optionalNumber(settings.windowHeight, defaults.windowHeight)}`,
    `macos-titlebar-style = ${settings.titlebarStyle || defaults.titlebarStyle}`,
    `macos-window-buttons = ${settings.windowButtons || defaults.windowButtons}`,
    `scrollbar = ${settings.scrollbar || defaults.scrollbar}`,
    "",
    "# Cursor and interaction",
    `cursor-style = ${settings.cursorStyle || defaults.cursorStyle}`,
    `cursor-style-blink = ${bool(settings.cursorBlink)}`,
    `mouse-hide-while-typing = ${bool(settings.mouseHideWhileTyping)}`,
    "",
    "# Function controls",
    ...featureSettings.map((setting) => renderFeatureLine(setting, settings)).filter(Boolean),
    "# --- Ghostty Style Lab end ---",
  );

  return lines.join("\n");
}

function timestamp() {
  const now = new Date();
  const pad = (value) => String(value).padStart(2, "0");
  return [
    now.getFullYear(),
    pad(now.getMonth() + 1),
    pad(now.getDate()),
    "-",
    pad(now.getHours()),
    pad(now.getMinutes()),
    pad(now.getSeconds()),
  ].join("");
}

function customThemeText(settings) {
  return [
    `background = ${settings.background || defaults.background}`,
    `foreground = ${settings.foreground || defaults.foreground}`,
    `selection-background = ${settings.selectionBackground || defaults.selectionBackground}`,
    `selection-foreground = ${settings.selectionForeground || defaults.selectionForeground}`,
    `cursor-color = ${settings.cursorColor || defaults.cursorColor}`,
    "",
  ].join("\n");
}

function readmeText(packageName, configFileName, backgroundName) {
  const lines = [
    `# ${packageName}`,
    "",
    "Generated by Ghostty Style Lab.",
    "",
    "## Install on this Mac",
    "",
    "```sh",
    "mkdir -p \"$HOME/Library/Application Support/com.mitchellh.ghostty/themes\"",
    `cp "${configFileName}" "$HOME/Library/Application Support/com.mitchellh.ghostty/config.ghostty"`,
    "cp -R themes/* \"$HOME/Library/Application Support/com.mitchellh.ghostty/themes/\" 2>/dev/null || true",
  ];
  if (backgroundName) {
    lines.push(`cp "${backgroundName}" "$HOME/Library/Application Support/com.mitchellh.ghostty/${backgroundName}"`);
  }
  lines.push(
    "```",
    "",
    "Then reload Ghostty with Cmd+Shift+, or restart Ghostty.",
    "",
    "Note: this first zip exporter uses macOS /usr/bin/zip and /usr/bin/unzip. If this project is published for cross-platform use, replace it with a pure JavaScript zip library.",
    "",
  );
  return lines.join("\n");
}

async function walkFiles(directory, root = directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name === "__MACOSX") continue;
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walkFiles(path, root));
    if (entry.isFile()) files.push({ path, relative: path.slice(root.length + 1) });
  }
  return files;
}

function importWarnings(raw, settings) {
  const warnings = [];
  if (!raw.trim()) warnings.push("config 文件为空");
  if (!settings.fontFamily) warnings.push("没有识别到字体配置，已使用默认字体");
  if (settings.backgroundImage && !existsSync(settings.backgroundImage)) {
    warnings.push("背景图路径在本机不可读，导入后需要重新选择背景图");
  }
  if (settings.themeMode === "auto" && (!settings.lightTheme || !settings.darkTheme)) {
    warnings.push("Light/Dark 主题配置不完整，已按单主题处理");
  }
  return warnings;
}

async function parseConfigPayload(raw) {
  const settings = parseConfig(raw);
  return { settings, warnings: importWarnings(raw, settings), raw };
}

function findConfigFile(files) {
  const preferredNames = new Set(["config", "config.ghostty", "ghostty.conf", "config.conf"]);
  return files.find((file) => preferredNames.has(basename(file.relative).toLowerCase()))
    || files.find((file) => [".ghostty", ".conf"].includes(extname(file.relative).toLowerCase()));
}

function findBackgroundFile(files, configFile, settings) {
  const imageExtensions = new Set([".png", ".jpg", ".jpeg"]);
  const configDir = configFile ? dirname(configFile.path) : "";
  if (settings.backgroundImage) {
    const targetName = basename(settings.backgroundImage).toLowerCase();
    const relativeCandidate = configDir ? join(configDir, settings.backgroundImage) : "";
    const byRelative = files.find((file) => resolve(file.path) === resolve(relativeCandidate));
    if (byRelative && imageExtensions.has(extname(byRelative.path).toLowerCase())) return byRelative;
    const byName = files.find((file) => basename(file.path).toLowerCase() === targetName);
    if (byName && imageExtensions.has(extname(byName.path).toLowerCase())) return byName;
  }
  return files.find((file) => ["background.png", "background.jpg", "background.jpeg"].includes(basename(file.relative).toLowerCase()))
    || files.find((file) => imageExtensions.has(extname(file.relative).toLowerCase()));
}

async function importBackground(file) {
  if (!file) return null;
  await mkdir(UPLOADS, { recursive: true });
  const fileName = `${timestamp()}-${sanitizeFileName(file.relative || basename(file.path))}`;
  const target = join(UPLOADS, fileName);
  await copyFile(file.path, target);
  return { path: target, fileName };
}

async function exportPackage(settings, includeCustomTheme) {
  await mkdir(UPLOADS, { recursive: true });
  const packageName = sanitizePackageName(settings.schemeName || settings.theme || "ghostty-style");
  const workDir = await mkdtemp(join(tmpdir(), "ghostty-style-lab-"));
  const zipPath = join(UPLOADS, `${timestamp()}-${packageName}.zip`);
  const configFileName = "config.ghostty";
  const themesDir = join(workDir, "themes");
  let backgroundName = "";

  try {
    await mkdir(themesDir, { recursive: true });

    const exportSettings = { ...settings };
    if (settings.backgroundImage && existsSync(settings.backgroundImage)) {
      const extension = extname(settings.backgroundImage).toLowerCase() || ".png";
      backgroundName = `background${extension === ".jpeg" ? ".jpg" : extension}`;
      await copyFile(settings.backgroundImage, join(workDir, backgroundName));
      exportSettings.backgroundImage = join(CONFIG_DIR, backgroundName);
    }

    if (includeCustomTheme) {
      await writeFile(join(themesDir, `${packageName}.conf`), customThemeText(exportSettings), "utf8");
    } else {
      await writeFile(join(themesDir, "README.md"), "Custom themes exported by Ghostty Style Lab will appear here.\n", "utf8");
    }

    await writeFile(join(workDir, configFileName), renderConfig(exportSettings), "utf8");
    await writeFile(join(workDir, "README.md"), readmeText(packageName, configFileName, backgroundName), "utf8");

    const result = await run("/usr/bin/zip", ["-qr", zipPath, "."], { cwd: workDir });
    if (!result.ok) throw new Error(result.stderr || result.error || "zip failed");
    return { path: zipPath, fileName: `${packageName}.zip` };
  } finally {
    await rm(workDir, { recursive: true, force: true });
  }
}

function run(command, args, options = {}) {
  return new Promise((resolve) => {
    execFile(command, args, { timeout: 8000, ...options }, (error, stdout, stderr) => {
      resolve({ ok: !error, stdout, stderr, error: error?.message || "" });
    });
  });
}

async function getThemes() {
  const popular = [
    "Catppuccin Mocha",
    "TokyoNight Storm",
    "TokyoNight Night",
    "Rose Pine Moon",
    "Kanagawa Wave",
    "Dracula",
    "GitHub Dark",
    "Gruvbox Material Dark",
    "Everforest Dark Hard",
    "Carbonfox",
    "Ayu Mirage",
    "Flexoki Dark",
  ];

  if (!existsSync(GHOSTTY)) return popular;
  const result = await run(GHOSTTY, ["+list-themes"]);
  if (!result.ok) return popular;
  const all = result.stdout
    .split(/\r?\n/)
    .map((line) => line.replace(/\s+\(resources\)\s*$/, "").trim())
    .filter(Boolean);
  return [...new Set([...popular, ...all])];
}

async function getFonts() {
  const popular = [
    "Maple Mono NF CN",
    "Menlo",
    "Monaco",
    "SF Mono",
    "JetBrains Mono",
    "Fira Code",
    "Cascadia Code",
    "Iosevka",
    "Hack",
    "Source Code Pro",
  ];

  if (!existsSync(GHOSTTY)) return popular;
  const result = await run(GHOSTTY, ["+list-fonts"]);
  if (!result.ok) return popular;

  const families = result.stdout
    .split(/\r?\n/)
    .filter((line) => line.trim() && !/^\s/.test(line))
    .map((line) => line.trim());
  return [...new Set([...popular, ...families])];
}

async function readFontFamily(filePath) {
  const scanner = existsSync("/opt/homebrew/bin/fc-scan") ? "/opt/homebrew/bin/fc-scan" : "fc-scan";
  const result = await run(scanner, ["--format", "%{family}\n", filePath]);
  const family = result.stdout
    .split(/\r?\n/)
    .map((line) => line.split(",")[0].trim())
    .find(Boolean);
  return result.ok && family ? family : "";
}

async function handleApi(req, res, pathname) {
  if (pathname === "/api/upload-font" && req.method === "POST") {
    const originalName = decodeURIComponent(req.headers["x-file-name"] || "ghostty-font.ttf");
    const extension = extname(originalName).toLowerCase();
    if (![".ttf", ".otf", ".ttc", ".woff", ".woff2"].includes(extension)) {
      return send(res, 400, { error: "Only TTF, OTF, TTC, WOFF and WOFF2 files are supported" });
    }

    await mkdir(FONT_UPLOADS, { recursive: true });
    await mkdir(USER_FONTS, { recursive: true });
    const fileName = `${timestamp()}-${sanitizeFileName(originalName)}`;
    const uploadPath = join(FONT_UPLOADS, fileName);
    await writeFile(uploadPath, await readBuffer(req));

    const family = await readFontFamily(uploadPath);
    if (!family) {
      return send(res, 400, { error: "Could not read font family from this file" });
    }

    const canInstall = [".ttf", ".otf", ".ttc"].includes(extension);
    const installPath = canInstall ? join(USER_FONTS, fileName) : "";
    if (canInstall) await copyFile(uploadPath, installPath);

    return send(res, 200, {
      ok: true,
      family,
      path: uploadPath,
      installPath,
      fileName,
      installed: canInstall,
    });
  }

  if (pathname === "/api/upload" && req.method === "POST") {
    const originalName = decodeURIComponent(req.headers["x-file-name"] || "ghostty-bg.png");
    const extension = extname(originalName).toLowerCase();
    if (![".png", ".jpg", ".jpeg"].includes(extension)) {
      return send(res, 400, { error: "Only PNG and JPEG files are supported" });
    }
    await mkdir(UPLOADS, { recursive: true });
    const fileName = `${timestamp()}-${sanitizeFileName(originalName)}`;
    const filePath = join(UPLOADS, fileName);
    await writeFile(filePath, await readBuffer(req));
    return send(res, 200, { ok: true, path: filePath, fileName });
  }

  if (pathname === "/api/image" && req.method === "GET") {
    const url = new URL(req.url || "/", `http://${req.headers.host}`);
    const imagePath = url.searchParams.get("path") || "";
    const extension = extname(imagePath).toLowerCase();
    if (!imagePath || ![".png", ".jpg", ".jpeg"].includes(extension)) {
      return send(res, 400, { error: "Only PNG and JPEG paths are supported" });
    }
    const mime = extension === ".png" ? "image/png" : "image/jpeg";
    try {
      return sendBuffer(res, 200, await readFile(imagePath), mime);
    } catch {
      return sendBuffer(res, 200, TRANSPARENT_PNG, "image/png");
    }
  }

  if (pathname === "/api/export-package" && req.method === "POST") {
    const payload = JSON.parse(await readBody(req));
    const settings = { ...defaults, ...(payload.settings || {}) };
    try {
      const result = await exportPackage(settings, Boolean(payload.includeCustomTheme));
      return sendDownload(res, 200, await readFile(result.path), "application/zip", result.fileName);
    } catch (error) {
      return send(res, 500, { error: error.message || "导出配置包失败" });
    }
  }

  if (pathname === "/api/import-config" && req.method === "POST") {
    const raw = await readBody(req);
    const parsed = await parseConfigPayload(raw);
    return send(res, 200, parsed);
  }

  if (pathname === "/api/import-package" && req.method === "POST") {
    const workDir = await mkdtemp(join(tmpdir(), "ghostty-style-import-"));
    const zipPath = join(workDir, "package.zip");
    try {
      await writeFile(zipPath, await readBuffer(req));
      const unzip = await run("/usr/bin/unzip", ["-qq", zipPath, "-d", workDir]);
      if (!unzip.ok) {
        return send(res, 400, { error: "config 格式不兼容：zip 无法解压" });
      }
      const files = await walkFiles(workDir);
      const configFile = findConfigFile(files.filter((file) => file.path !== zipPath));
      if (!configFile) {
        return send(res, 400, { error: "config 格式不兼容：zip 中没有找到 config 文件" });
      }
      const raw = await readFile(configFile.path, "utf8");
      const parsed = await parseConfigPayload(raw);
      const backgroundFile = findBackgroundFile(files, configFile, parsed.settings);
      const importedBackground = await importBackground(backgroundFile);
      if (importedBackground) {
        parsed.settings.backgroundImage = importedBackground.path;
      }
      return send(res, 200, {
        ...parsed,
        importedAssets: importedBackground ? { backgroundImage: importedBackground } : {},
      });
    } catch (error) {
      return send(res, 500, { error: error.message || "导入配置包失败" });
    } finally {
      await rm(workDir, { recursive: true, force: true });
    }
  }

  if (pathname === "/api/font" && req.method === "GET") {
    const url = new URL(req.url || "/", `http://${req.headers.host}`);
    const fontPath = url.searchParams.get("path") || "";
    const extension = extname(fontPath).toLowerCase();
    if (!fontPath || ![".ttf", ".otf", ".ttc", ".woff", ".woff2"].includes(extension)) {
      return send(res, 400, { error: "Only font paths are supported" });
    }
    if (!isPathInside(fontPath, FONT_UPLOADS) && !isPathInside(fontPath, USER_FONTS)) {
      return send(res, 403, { error: "Font path is outside allowed folders" });
    }
    try {
      return sendBuffer(res, 200, await readFile(fontPath), fontMime(extension));
    } catch {
      return send(res, 404, { error: "Font not found" });
    }
  }

  if (pathname === "/api/config" && req.method === "GET") {
    const raw = existsSync(CONFIG_PATH) ? await readFile(CONFIG_PATH, "utf8") : "";
    return send(res, 200, { configPath: CONFIG_PATH, raw, settings: parseConfig(raw) });
  }

  if (pathname === "/api/themes" && req.method === "GET") {
    return send(res, 200, { themes: await getThemes() });
  }

  if (pathname === "/api/fonts" && req.method === "GET") {
    return send(res, 200, { fonts: await getFonts() });
  }

  if (pathname === "/api/config" && req.method === "POST") {
    const payload = JSON.parse(await readBody(req));
    const settings = { ...defaults, ...(payload.settings || {}) };
    const oldRaw = existsSync(CONFIG_PATH) ? await readFile(CONFIG_PATH, "utf8") : "";
    const backupPath = `${CONFIG_PATH}.backup-${timestamp()}`;
    if (existsSync(CONFIG_PATH)) await copyFile(CONFIG_PATH, backupPath);

    const unmanaged = cleanUnmanaged(oldRaw);
    const next = [unmanaged, renderConfig(settings)].filter(Boolean).join("\n\n") + "\n";
    await writeFile(CONFIG_PATH, next, "utf8");
    return send(res, 200, { ok: true, backupPath, configPath: CONFIG_PATH, raw: next, settings });
  }

  if (pathname === "/api/reload" && req.method === "POST") {
    const result = await run("/usr/bin/osascript", [
      "-e",
      'tell application "Ghostty" to activate',
      "-e",
      "delay 0.2",
      "-e",
      'tell application "System Events" to keystroke "," using {command down, shift down}',
    ]);
    return send(res, result.ok ? 200 : 500, result);
  }

  return send(res, 404, { error: "Not found" });
}

async function handleStatic(req, res, pathname) {
  const filePath = pathname === "/" ? join(PUBLIC, "index.html") : join(PUBLIC, pathname);
  const safePath = filePath.startsWith(PUBLIC) ? filePath : join(PUBLIC, "index.html");
  const type =
    extname(safePath) === ".css" ? "text/css" :
    extname(safePath) === ".js" ? "text/javascript" :
    "text/html";
  try {
    send(res, 200, await readFile(safePath, "utf8"), type);
  } catch {
    send(res, 404, "Not found", "text/plain");
  }
}

createServer(async (req, res) => {
  try {
    const url = new URL(req.url || "/", `http://${req.headers.host}`);
    if (url.pathname.startsWith("/api/")) return await handleApi(req, res, url.pathname);
    return await handleStatic(req, res, url.pathname);
  } catch (error) {
    send(res, 500, { error: error.message });
  }
}).listen(PORT, () => {
  console.log(`Ghostty Style Lab: http://localhost:${PORT}`);
});
