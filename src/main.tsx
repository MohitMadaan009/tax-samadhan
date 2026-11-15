import { createRoot } from "react-dom/client";
import "./index.css";
import client from "./lib/loadClient";
import { applyClient } from "./lib/applyClient";
import App from "./App";

applyClient(client);
createRoot(document.getElementById("root")!).render(<App client={client} />);
