import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import { HomePage, PhaseOnePage, PhaseTwoPage, OtherEvidencePage } from './pages';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="phase-1" element={<PhaseOnePage />} />
          <Route path="phase-2" element={<PhaseTwoPage />} />
          <Route path="other-evidence" element={<OtherEvidencePage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
