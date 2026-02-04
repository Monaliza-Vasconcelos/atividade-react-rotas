import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './Layout/Layout'
import { lazy, Suspense } from 'react'


const Home = lazy(() => import('./Pages/Home'))
const About = lazy(() => import('./Pages/About'))
const Contact = lazy(() => import('./Pages/Contact'))
const NotFound = lazy(() => import('./Pages/NotFound')) 

function App() {

  return (
      <BrowserRouter>
        <Suspense fallback={<p>Carregando página...</p>}>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='About' element={<About />} />
              <Route path='Contact' element={<Contact />} />
            </Route>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </Suspense>
      </BrowserRouter>
  )
}

export default App
