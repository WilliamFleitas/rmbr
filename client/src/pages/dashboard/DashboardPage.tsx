import { Outlet, Route, Routes } from 'react-router-dom'
import Remember from './components/Remember'

const DashboardLayout = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

const DashboardPage = () => (
  <Routes>
    <Route element={<DashboardLayout />}>
      <Route index element={<Remember />} />
      <Route path='/remember' element={<Remember />} />
      {/* <Route path='/chart' element={<SearchChart />} /> */}
    </Route>
  </Routes>
)

export default DashboardPage
