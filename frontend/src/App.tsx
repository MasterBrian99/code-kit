import { MantineProvider, Text } from '@mantine/core';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from './layout/MainLayout';
import DashboardScreen from './screens/main/DashboardScreen/DashboardScreen';
import HomeScreen from './screens/main/HomeScreen/HomeScreen';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <RouterProvider router={router} />;
    </MantineProvider>
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
