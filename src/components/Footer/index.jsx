import logo from '../../assets/images/abhinav-infratek-logo.png'
import developer from '../../assets/images/developer.jpg'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-grid">
        <img src={logo} alt="Abhinav Infratek logo" />
        <div>
          <strong>Abhinav Infratek</strong>
          <p>Engineers & Architects delivering construction, design, renovation, and infrastructure management.</p>
        </div>
        <a href="#home">Back to top</a>
      </div>
      <div className="section-shell developer-credit">
        <img src={developer} alt="Website developer" />
        <div>
          <span>Website developed by</span>
          <strong>Abhishek S Sangamad</strong>
        </div>
      </div>
    </footer>
  )
}

export default Footer

