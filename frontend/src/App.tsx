import { Route, Routes } from 'react-router-dom';
import { AppShell } from './components/AppShell';
import { Dashboard } from './pages/Dashboard';
import { GrammarPage, KanjiPage, VocabularyPage } from './pages/LibraryPages';
import { FlashcardsPage, ProgressPage, QuizPage, TutorPage } from './pages/PracticePages';
import { JlptPage, ListeningPage, ReadingPage, SettingsPage } from './pages/AdditionalPages';
import { ProfilePage } from './pages/ProfilePage';

export default function App() { return <AppShell><Routes>
  <Route path="/" element={<Dashboard/>}/><Route path="/vocabulary" element={<VocabularyPage/>}/><Route path="/kanji" element={<KanjiPage/>}/><Route path="/grammar" element={<GrammarPage/>}/><Route path="/flashcards" element={<FlashcardsPage/>}/><Route path="/quiz" element={<QuizPage/>}/><Route path="/tutor" element={<TutorPage/>}/><Route path="/progress" element={<ProgressPage/>}/><Route path="/listening" element={<ListeningPage/>}/><Route path="/reading" element={<ReadingPage/>}/><Route path="/jlpt" element={<JlptPage/>}/><Route path="/profile" element={<ProfilePage/>}/><Route path="/settings" element={<SettingsPage/>}/><Route path="*" element={<Dashboard/>}/>
</Routes></AppShell> }
