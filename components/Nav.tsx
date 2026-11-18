export default function Nav() {
  return (
    <nav className="navbar" id="navbar">
      <div className="container">
        <a href="#home" className="logo">
          <span className="logo-text">Ragab</span>
          <span className="logo-accent">Ghazey</span>
        </a>
        <ul className="nav-links" id="navLinks">
          <li><a href="#home" data-translate="nav_home">الرئيسية</a></li>
          <li><a href="#services" data-translate="nav_services">الخدمات</a></li>
          <li><a href="#portfolio" data-translate="nav_portfolio">أعمالي</a></li>
          <li><a href="#process" data-translate="nav_process">إزاي بشتغل</a></li>
          <li><a href="#testimonials" data-translate="nav_testimonials">التقييمات</a></li>
          <li><a href="/cv/" data-translate="nav_cv">السيرة الذاتية</a></li>
          <li><a href="#contact" data-translate="nav_contact">تواصل معي</a></li>
        </ul>
        <button className="lang-switcher" id="langSwitcher" aria-label="Switch language">
          <i className="fas fa-globe"></i>
          <span>English</span>
        </button>
        <button className="nav-toggle" id="navToggle" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
