import React from "react";
import ReactDOM from "react-dom/client";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { anvil, mainnet } from "wagmi/chains";

import "./index.css";

import App from "./App";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createConfig, http, WagmiProvider } from "wagmi";

const queryClient = new QueryClient();
export const config = createConfig(
  getDefaultConfig({
    appName: "smartContacts",
    chains: [mainnet],
    transports: {
      [mainnet.id]: http("http://localhost:8545"),
    },
    walletConnectProjectId:
      process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "",
  })
);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <ConnectKitProvider>
          <App />
        </ConnectKitProvider>
      </React.StrictMode>
    </QueryClientProvider>
  </WagmiProvider>
);
