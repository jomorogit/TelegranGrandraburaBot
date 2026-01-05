import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'; // ⚠️ Обрати внимание: тут больше нет Router или HashRouter
import WebApp from '@twa-dev/sdk';

// Импорты страниц
import MainPage from './components/MainPage'; 

// Консультации
import Consultations from './components/consultations/Consultations.jsx';
import PersonalityPage from './components/consultations/PersonalityPage.jsx';
import DestinyPage from './components/consultations/DestinyPage.jsx';
import CompatibilityPage from './components/consultations/CompatibilityPage.jsx';
import TrianglePage from './components/consultations/TrianglePage.jsx';
import RelocationPage from './components/consultations/RelocationPage.jsx';
import EnergyCheckPage from './components/consultations/EnergyCheckPage.jsx';

// Курсы
import CoursesPage from './components/courses/CoursesPage.jsx';
import SelfDiscoveryPage from './components/courses/SelfDiscoveryPage.jsx';
import DestinyCoursePage from './components/courses/DestinyCoursePage.jsx';
import AncestryPage from './components/courses/AncestryPage.jsx';
import FindLovePage from './components/courses/FindLovePage.jsx';
import CompatibilityCoursePage from './components/courses/CompatibilityCoursePage.jsx';
import BodyNumbersPage from './components/courses/BodyNumbersPage.jsx';
import TarotPage from './components/courses/TarotPage.jsx';

// Прогнозы
import NatalChartPage from './components/natalChartPage/NatalChartPage.jsx';
import SolarPage from './components/solarPage/SolarPage.jsx';
import YearForecastPage from './components/yearForecastPage/YearForecastPage.jsx';

function App() {

  useEffect(() => {
    // Инициализация Telegram Web App
    if (WebApp) {
      WebApp.ready();
      WebApp.expand();
    }
  }, []);

  return (
    // ⚠️ ВАЖНО: Мы убрали отсюда <Router>, так как он теперь в main.jsx
    <Routes>
        {/* Главная страница */}
        <Route path="/" element={<MainPage />} />
        
        {/* Раздел консультаций */}
        <Route path="/consultations" element={<Consultations />} />
        <Route path="/personality" element={<PersonalityPage />} />
        <Route path="/destiny" element={<DestinyPage />} />
        <Route path="/compatibility" element={<CompatibilityPage />} />
        <Route path="/triangle" element={<TrianglePage />} />
        <Route path="/relocation" element={<RelocationPage />} />
        <Route path="/energy-check" element={<EnergyCheckPage />} />

        {/* Раздел курсов */}
        <Route path="/courses-page" element={<CoursesPage />} />
        <Route path="/self-discovery" element={<SelfDiscoveryPage />} />
        <Route path="/destiny-course" element={<DestinyCoursePage />} />
        <Route path="/ancestry" element={<AncestryPage />} />
        <Route path="/find-love" element={<FindLovePage />} />
        <Route path="/compatibility-course" element={<CompatibilityCoursePage />} />
        <Route path="/body-numbers" element={<BodyNumbersPage />} />
        <Route path="/tarot" element={<TarotPage />} />

        {/* Раздел прогнозов */}
        <Route path="/natal-chart" element={<NatalChartPage />} />
        <Route path="/solar" element={<SolarPage />} />
        <Route path="/year-forecast" element={<YearForecastPage />} />

        {/* Страница 404 */}
        <Route path="*" element={<div style={{color: 'white', textAlign: 'center', marginTop: '20px'}}>Страница не найдена 404</div>} />
    </Routes>
  );
}

export default App;