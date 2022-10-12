import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from './layout/MainLayout';
import DashboardScreen from './screens/main/DashboardScreen/DashboardScreen';
import HomeScreen from './screens/main/HomeScreen/HomeScreen';
import theme from './theme/theme';

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{ ...theme, colorScheme }}>
        <RouterProvider router={router} />;
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <DashboardScreen />,
      },
      {
        path: 'game',
        element: <HomeScreen />,
      },
    ],
  },
]);
