import {
  MantineProvider,
  ColorScheme,
  ColorSchemeProvider,
} from "@mantine/core";
import { useState } from "react";
import Router from "./router/Router";
function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme }}
      >
        <Router />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
