import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import fs from "node:fs";
import path from "node:path";

export default defineConfig(({ mode }) => {

  const dir = path.resolve("src/clients");

  const ids = fs.readdirSync(dir).filter((f) =>
    f.endsWith(".ts")).map((f) => f.replace(/\.ts$/, "")
    );

  const isClientMode = ids.includes(mode);

  if (!isClientMode && mode !== "development" && mode !== "production") {
    throw new Error(`Client "${mode}" not found in src/clients/. Available: ${ids.join(", ")}`);
  }

  const id = isClientMode ? mode : process.env.VITE_CLIENT || ids[0];

  if (!ids.includes(id)) throw new Error(`Client "${id}" not found. Available: ${ids.join(", ")}`);
  
  console.log(`Client: ${id}`);

  return {
    base: "/tax-samadhan/",
    plugins: [
      react(),
      babel({ presets: [reactCompilerPreset()] }),
      tailwindcss()
    ],
    resolve: { alias: { "@client": path.join(dir, `${id}.ts`) } },
    build: { outDir: isClientMode ? `dist/${id}` : "dist" },
  }
})
