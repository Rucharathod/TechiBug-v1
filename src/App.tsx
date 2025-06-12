import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TerminalPage from './pages/TerminalPage';
import LanguagePage from './pages/LanguagePage';
import ProjectsPage from './pages/ProjectsPage';
import RoadmapPage from './pages/RoadmapPage';
import MentorsPage from './pages/MentorsPage';
import GamesPage from './pages/GamesPage';
import LessonPage from './pages/LessonPage';
import CurriculumPage from './pages/CurriculumPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/terminal" element={<TerminalPage />} />
        <Route path="/language/:languageId" element={<LanguagePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
        <Route path="/mentors" element={<MentorsPage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/lesson/:lessonId" element={<LessonPage />} />
        <Route path="/curriculum/javascript" element={<CurriculumPage />} />
      </Routes>
    </Layout>
  );
}

export default App;