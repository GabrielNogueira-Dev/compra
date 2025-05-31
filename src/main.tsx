import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import { router } from './App'
import './index.css'

import { Toaster } from 'react-hot-toast'

import CartProvider from './contexts/CartContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
<CartProvider>
  <Toaster
  position="top-center"
  reverseOrder={false}
/>
 <RouterProvider router={router}/>

</CartProvider>
  </StrictMode>,
)
