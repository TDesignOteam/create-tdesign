import { createRoutesFromChildren, Route } from 'react-router'
import Home from '@/pages/Home'

const routes = createRoutesFromChildren(<Route path="/" Component={Home} />)

export default routes
