import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DoaPage from './pages/DoaPage';
import IqroPage from './pages/IqroPage';
import StoryPage from './pages/StoryPage';
import InteractiveZonePage from './pages/InteractiveZonePage';
import TajwidPage from './pages/TajwidPage';
import JuzAmmaPage from './pages/JuzAmmaPage';
import CaptureButton from './components/CaptureButton';

export default function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doa" element={<DoaPage />} />
          <Route path="/iqro" element={<IqroPage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/interactive" element={<InteractiveZonePage />} />
          <Route path="/tajwid" element={<TajwidPage />} />
          <Route path="/juz-amma" element={<JuzAmmaPage />} />
        </Routes>
      </HashRouter>
      <CaptureButton />
    </>
  );
}
