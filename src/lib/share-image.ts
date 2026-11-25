import shareAsset from "@/assets/einklang-compass-share.png.asset.json";

const imageUrl = new URL(shareAsset.url, "https://einklang.ai").href;

export const shareImageMeta = [
  { property: "og:image", content: imageUrl },
  { name: "twitter:image", content: imageUrl },
  { property: "og:image:width", content: "1200" },
  { property: "og:image:height", content: "630" },
  { property: "og:image:alt", content: "Einklang.AI dark-green compass logo" },
];