import { Route, Routes } from 'react-router'
import App from '@/App'
import Dependencies from '@/pages/Dependencies'
import Home from '@/pages/Home'

const routes = (
  <Routes>
    <Route element={<App />}>
      <Route index element={<Home />} />
      <Route path="dependencies" element={<Dependencies />} />
    </Route>
  </Routes>
)

export default routes
