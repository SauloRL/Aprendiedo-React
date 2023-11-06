
import { lazy } from "react"
import SearchPage from "../pages/Search.jsx"
const LazyAboutPage = lazy(() => import('../pages/About.jsx'))
export const appRoutes = [
  {
    path: '/:lang/about',
    Component: LazyAboutPage
  },
  {
    path: '/search/:query',
      Component: SearchPage
  }
]
