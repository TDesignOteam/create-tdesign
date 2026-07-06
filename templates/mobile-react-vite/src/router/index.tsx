import { Route, Routes } from 'react-router'
import App from '@/App'
import Home from '@/pages/Home'

const routes = (
  <Routes>
    <Route element={<App />}>
      <Route index element={<Home />} />
    </Route>
  </Routes>
)

export default routes
