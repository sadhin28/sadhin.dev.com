import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
function App() {

  return (
    <>
     <div className='bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white'>
       <Navbar></Navbar>
       <Hero></Hero>
       <About></About>
     </div>
    </>
  )
}

export default App
