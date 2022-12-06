import { Suspense } from 'react'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import TheFooter from './components/TheFooter'
import routes from '~react-pages'

export default function App() {
  return (
    <div
      font-sans
      p="x-4 y-10"
      text="center gray-700 dark:gray-200"
    >
      <Router>
        <Routes />
        <TheFooter />
      </Router>
    </div>
  )
}

function Routes() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {useRoutes(routes)}
    </Suspense>
  )
}
