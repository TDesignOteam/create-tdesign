import { createRoutesFromRoots, index, layout } from 'react-router'
import type { Route } from 'react-router'
import Home from '@/pages/Home'

const routes = createRoutesFromRoots([index(), layout('*', [])], ({ roots }) =>
  roots.map((root) => ({
    ...root,
    children: [{ path: '/', Component: Home }],
  })),
)

export default routes
