import 'regenerator-runtime/runtime'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'

const reactRootId = 'root'
const rootElement = document.getElementById(reactRootId)
if (!rootElement) throw new Error('Failed to find the root element')
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
