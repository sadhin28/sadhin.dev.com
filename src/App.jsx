import './App.css'
import About from './components/About'
import GitHubContributions from './components/Githubcontributions'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
function App() {

  return (
    <>
     <div className='bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white'>
       <Navbar></Navbar>
       <Hero></Hero>
       <About></About>
       <Skills></Skills>
       <GitHubContributions></GitHubContributions>
     </div>
    </>
  )
}

export default App
