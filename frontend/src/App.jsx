import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { RequireAdmin } from './components/auth/require-admin'
import { RequireAuth } from './components/auth/require-auth'
import { DashboardPage } from './pages/dashboard/dashboard-page'
import { RouteContext } from './components/ui/route-context'
import './styles/workspaces.css'

const AssistantPage = lazy(() => import('./pages/assistant/assistant-page').then(module => ({ default: module.AssistantPage })))
const AuthPage = lazy(() => import('./pages/auth/auth-page').then(module => ({ default: module.AuthPage })))
const AdminPage = lazy(() => import('./pages/admin/admin-page').then(module => ({ default: module.AdminPage })))
const DictionaryPage = lazy(() => import('./pages/dictionary/dictionary-page').then(module => ({ default: module.DictionaryPage })))
const FlashcardsPage = lazy(() => import('./pages/flashcards/flashcards-page').then(module => ({ default: module.FlashcardsPage })))
const HandwritingPage = lazy(() => import('./pages/handwriting/handwriting-page').then(module => ({ default: module.HandwritingPage })))
const HiraganaPage = lazy(() => import('./pages/hiragana/hiragana-page').then(module => ({ default: module.HiraganaPage })))
const KatakanaPage = lazy(() => import('./pages/katakana/katakana-page').then(module => ({ default: module.KatakanaPage })))
const CulturePage = lazy(() => import('./pages/culture/culture-page').then(module => ({ default: module.CulturePage })))
const LessonDetailPage = lazy(() => import('./pages/lessons/lesson-detail-page').then(module => ({ default: module.LessonDetailPage })))
const LessonsPage = lazy(() => import('./pages/lessons/lessons-page').then(module => ({ default: module.LessonsPage })))
const ProfilePage = lazy(() => import('./pages/profile/profile-page').then(module => ({ default: module.ProfilePage })))

function App() {
  return (
    <>
    <RouteContext />
    <Suspense fallback={<main id="main-content" tabIndex={-1} aria-busy="true"><p role="status">Đang tải trang...</p></main>}>
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/hiragana" element={<HiraganaPage />} />
      <Route path="/katakana" element={<KatakanaPage />} />
      <Route
        path="/handwriting"
        element={(
          <RequireAuth>
            <HandwritingPage />
          </RequireAuth>
        )} 
      />
      <Route
        path="/lessons"
        element={(
          <RequireAuth>
            <Navigate to="/lessons/n5" replace />
          </RequireAuth>
        )}
      />
      <Route
        path="/lessons/:level"
        element={(
          <RequireAuth>
            <LessonsPage />
          </RequireAuth>
        )}
      />
      <Route
        path="/lessons/:level/:lessonNumber"
        element={(
          <RequireAuth>
            <LessonDetailPage />
          </RequireAuth>
        )}
      />
      <Route path="/dictionary" element={<DictionaryPage />} />
      <Route path="/directory" element={<DictionaryPage redirectToDictionary />} />
      <Route
        path="/flashcards"
        element={(
          <RequireAuth>
            <FlashcardsPage />
          </RequireAuth>
        )}
      />
      <Route
        path="/flashcards/:setId"
        element={(
          <RequireAuth>
            <FlashcardsPage />
          </RequireAuth>
        )}
      />
      <Route path="/culture" element={<CulturePage />} />
      <Route
        path="/assistant"
        element={(
          <RequireAuth>
            <AssistantPage />
          </RequireAuth>
        )}
      />
      <Route path="/auth" element={<AuthPage mode="login" />} />
      <Route path="/auth/register" element={<AuthPage mode="register" />} />
      <Route
        path="/profile"
        element={(
          <RequireAuth>
            <ProfilePage />
          </RequireAuth>
        )}
      />
      <Route
        path="/admin"
        element={(
          <RequireAdmin>
            <AdminPage />
          </RequireAdmin>
        )}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </Suspense>
    </>
  )
}

export default App
