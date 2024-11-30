export type PackageManager = "npm" | "pnpm" | "yarn";

export const getPackageManager: () => PackageManager = () => {
  const userAgent = process.env.npm_config_user_agent;

  if (userAgent) {
    if (userAgent.startsWith("pnpm")) return "pnpm";
    if (userAgent.startsWith("yarn")) return "yarn"
  }
  return "npm";
};
