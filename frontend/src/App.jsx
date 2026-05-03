import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './features/auth/AuthContext'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import CalendarPage from './pages/CalendarPage'
import ProspectusExplorer from './pages/ProspectusExplorer'
import InsightsPage from './pages/InsightsPage'
import ProfessorPortal from './pages/ProfessorPortal'
import Layout from './components/Shared/Layout'

function PrivateRoute({ children, allowedRoles }) {
  const { user } = useAuth()
  if (!user) return <Navigate to="/login" replace />
  if (allowedRoles && !allowedRoles.includes(user.role)) return <Navigate to="/" replace />
  return children
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRoute><Layout /></PrivateRoute>}>
            <Route index element={<Dashboard />} />
            <Route path="calendar" element={<CalendarPage />} />
            <Route path="prospectus" element={<ProspectusExplorer />} />
            <Route path="insights" element={<InsightsPage />} />
            <Route
              path="professor-portal"
              element={
                <PrivateRoute allowedRoles={['Professor']}>
                  <ProfessorPortal />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
