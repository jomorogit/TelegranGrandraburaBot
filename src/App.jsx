import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage'; // Путь к твоей главной
import Consultations from './components/consultations/Consultations.jsx';
// Допустим, создадим пустые компоненты для примера


function App() {
  return (
    <Router>
      <Routes>
        {/* Главная страница */}
        <Route path="/" element={<MainPage />} />
        
        {/* Страница консультаций */}
         <Route path="/consultations" element={<Consultations />} />
        
        {/* Можно добавить 404 страницу */}
        <Route path="*" element={<div>Страница не найдена 404</div>} />
      </Routes>
    </Router>
  );
}

export default App;