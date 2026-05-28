import { Toaster } from "@/components/ui/sonner";
import { persistor, rootStore } from "@/store/rootStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import "./index.css";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={rootStore}>
    <PersistGate persistor={persistor}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Toaster />

          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </PersistGate>
  </Provider>,
);
