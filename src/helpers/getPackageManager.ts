export type PackageManager = "npm" | "pnpm";

export const getPackageManager: () => PackageManager = () => {
  const userAgent = process.env.npm_config_user_agent;

  if (userAgent) {
    if (userAgent.startsWith("pnpm")) return "pnpm";
  }
  return "npm";
};
