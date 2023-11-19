import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const queryClient = new QueryClient();

import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fbc02d",
    },
    secondary: {
      main: "#33691e",
    },
    text: {
      primary: "#FFFFFF"
    }
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
