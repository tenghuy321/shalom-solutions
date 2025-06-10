import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Events from "./pages/Events"
import ClientVoice from "./pages/ClientVoice"
import Career from "./pages/Career"
import Contact from "./pages/Contact"
import { useEffect, useState } from "react"
import Aos from "aos"
import Loading from "./components/Loading"
function App() {

  useEffect(() => {
    Aos.init({
      once: false,
      offset: -10,
    })
  }, [])

  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); 

    return () => clearTimeout(timer); 
  }, [location.pathname]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/events' element={<Events />} />
        <Route path='/client-voice' element={<ClientVoice />} />
        <Route path='/career' element={<Career />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </main>

  )
}

export default App
