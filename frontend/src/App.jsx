import { getCurrentUser } from './features/getCurrentUser'
import Home from './pages/Home'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    getCurrentUser(dispatch)
  }, [dispatch])

  return <Home />
}

export default App