import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core'
import React, { useState } from 'react'
import Router from './router/Router'
import { NotificationsProvider } from '@mantine/notifications'
function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark')
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme }}>
        <NotificationsProvider position="bottom-right" zIndex={2077}>
          <Router />
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App
