import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage'; // Путь к твоей главной
import Consultations from './components/consultations/Consultations.jsx';
import PersonalityPage from './components/consultations/PersonalityPage.jsx';
import DestinyPage from './components/consultations/DestinyPage.jsx';
import CompatibilityPage from './components/consultations/CompatibilityPage.jsx';
import TrianglePage from './components/consultations/TrianglePage.jsx';
import RelocationPage from './components/consultations/RelocationPage.jsx';
import EnergyCheckPage from './components/consultations/EnergyCheckPage.jsx';


function App() {
  return (
    <Router>
      <Routes>
        {/* Главная страница */}
        <Route path="/" element={<MainPage />} />
        
        {/* Страница консультаций */}
         <Route path="/consultations" element={<Consultations />} />
              <Route path="/personality" element={<PersonalityPage />} />
              <Route path="/destiny" element={<DestinyPage />} />
              <Route path="/compatibility" element={<CompatibilityPage />} />
              <Route path="/triangle" element={<TrianglePage />} />
              <Route path="/relocation" element={<RelocationPage />} />
              <Route path="/energy-check" element={<EnergyCheckPage />} />
        {/* Можно добавить 404 страницу */}
        <Route path="*" element={<div>Страница не найдена 404</div>} />
      </Routes>
    </Router>
  );
}

export default App;