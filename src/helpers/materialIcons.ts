const FileIconsType = {
  ".astro": "astro",
  ".css": "css",
  ".html": "html",
  ".js": "javascript",
  ".jsx": "react",
  ".json": "json",
  ".md": "markdown",
  ".mdx": "mdx",
  ".py": "python",
  ".scss": "sass",
  ".ts": "typescript",
  ".tsx": "react_ts",
  ".vue": "vue",
  ".yaml": "yaml",
};

export type FileIconType = keyof typeof FileIconsType;

const FolderIconsType = {
  vscode: "vscode",
  api: "api",
  app: "app",
  apps: "apps",
  assets: "assets",
  components: "components",
  config: "config",
  data: "data",
  dist: "dist",
  docs: "docs",
  examples: "examples",
  fonts: "fonts",
  functions: "functions",
  hooks: "hooks",
  images: "images",
  lib: "lib",
  layouts: "layout",
  mocks: "mocks",
  pages: "views",
  public: "public",
  scripts: "scripts",
  services: "controller",
  src: "src",
  styles: "styles",
  tests: "tests",
  utils: "utils",
  views: "views",
};

export function getFileIconUri(ext: FileIconType | string) {
  if (FileIconsType[ext]) {
    return `https://raw.githubusercontent.com/material-extensions/vscode-material-icon-theme/7f6543ceb62a238b1e45b194563e72de0d2a41a1/icons/${FileIconsType[ext]}.svg`;
  }
  return `https://raw.githubusercontent.com/Macktireh/Media/d1d8a2a09883ba6b3e4deaab05e5d52f05709607/svg/file.svg`;
};

export function getFolderIconUrl(type: string, isOpen: boolean = false) {
  if (FolderIconsType[type]) {
    return `https://raw.githubusercontent.com/material-extensions/vscode-material-icon-theme/7f6543ceb62a238b1e45b194563e72de0d2a41a1/icons/folder-${
      FolderIconsType[type]
    }${isOpen ? "-open" : ""}.svg`;
  }
  return `https://raw.githubusercontent.com/Macktireh/Media/d1d8a2a09883ba6b3e4deaab05e5d52f05709607/svg/folder${
    isOpen ? "-open" : ""
  }.svg`;
};
