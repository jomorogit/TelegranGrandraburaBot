import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// 1. Импортируем Router
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2. Оборачиваем App и указываем имя ТВОЕГО репозитория */}
    {/* Важно: имя должно быть точь-в-точь как на GitHub, без слеша в конце */}
    <BrowserRouter basename="/TelegranGrandraburaBot">
      <App />
    </BrowserRouter>
  </StrictMode>,
)