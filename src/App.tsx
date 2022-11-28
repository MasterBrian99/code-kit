import AppLayout from './layout/AppLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import DashboardScreen from './screens/DashboardScreen'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: <DashboardScreen />,
      },
    ],
  },
])
function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App
