import logo from '../../assets/images/abhinav-infratek-logo.png'

const links = ['Home', 'About', 'Services', 'Projects', 'Contact']

function Navbar() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Abhinav Infratek home">
        <img src={logo} alt="Abhinav Infratek logo" />
        <span><strong>Abhinav Infratek</strong><small>Engineers & Architects</small></span>
      </a>
      <nav aria-label="Primary navigation">
        {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>)}
      </nav>
      <a className="nav-cta" href="#contact">Get Estimate</a>
    </header>
  )
}

export default Navbar

