/// <reference types="vite/client" />

// "@client" is aliased in vite.config.ts to src/clients/<mode>.ts
declare module "@client" {
  const client: import("./types").ClientConfig;
  export default client;
}
