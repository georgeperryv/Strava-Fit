import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import "./global.css";

const chakraTheme = extendTheme({
  styles: { global: { img: { maxWidth: "unset" } } },
  colors: {
    gray: {
      50: "#f7fafc",
      100: "#edf2f7",
      200: "#e2e8f0",
      300: "#ccd6e1",
      400: "#a0aec0",
      500: "#718096",
      600: "#4a5568",
      700: "#2c3748",
      800: "#1a202c",
      900: "#171923",
    },
    grey: {
      50: "#f2f2f2",
      100: "#d9d8d8",
      200: "#c0bebe",
      300: "#a7a5a5",
      400: "#8e8b8b",
      500: "#817e7e",
      600: "#747171",
      700: "#5a5858",
      800: "#413f3f",
      900: "#272626",
    },
    stravaorange: {
      50: "#fdeee8",
      100: "#f8cbba",
      200: "#f3a98b",
      300: "#ee865d",
      400: "#ea642f",
      500: "#e75218",
      600: "#d04a15",
      700: "#a23a11",
      800: "#74290c",
      900: "#451907",
    },
  },
});
const emotionCache = createCache({
  key: "emotion-cache",
  prepend: true,
});

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <BrowserRouter>
    <CacheProvider value={emotionCache}>
      <ChakraProvider theme={chakraTheme}>
        <App />
      </ChakraProvider>
    </CacheProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
