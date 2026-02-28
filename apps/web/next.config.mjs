// @ts-check
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  // Next 16 Turbopack settings
  turbopack: {
    // Points to the 'rada' root folder
    root: path.resolve(__dirname, "../../"), 
  },
};

export default nextConfig;