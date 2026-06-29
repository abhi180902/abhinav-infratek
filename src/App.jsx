import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './pages/About'
import AdminLogin from './pages/admin/AdminLogin'
import AdminDashboard from './pages/admin/AdminDashboard'

function Website() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <div className="quick-actions email-only" aria-label="Quick contact action"><a href="mailto:prasadsangamad162@gmail.com" aria-label="Email">Mail</a></div>
    </>
  )
}

function App() {
  const path = window.location.pathname
  if (path === '/admin/login') return <AdminLogin />
  if (path.startsWith('/admin/dashboard')) return <AdminDashboard />
  return <Website />
}

export default App



