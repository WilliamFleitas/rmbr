import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashboardPage from './pages/dashboard/DashboardPage'

const PUBLIC_URL = ''

const App = () => {
  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Routes>
        <Route path='/*' element={<DashboardPage />} />
        {/* <Route path="/news/*" element={<NewsPage />} /> */}
        <Route path='/dashboard/*' element={<DashboardPage />} />
        <Route
          path='*'
          element={
            <div>
              <h1>404 not found</h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
