import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes.tsx'
import { ThemeProvider } from './providers/theme-provider.tsx'
import { store } from './redux/store.ts'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
    <Provider store={store}>
    <RouterProvider router={Routes}></RouterProvider>
    </Provider>
    
    </ThemeProvider>
  </StrictMode>,
)
