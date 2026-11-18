export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#home" className="logo">
              <span className="logo-text">Ragab</span>
              <span className="logo-accent">Ghazey</span>
            </a>
            <p data-translate="footer_desc">مطور ويب متخصص في استخراج البيانات والأتمتة</p>
          </div>
          <div className="footer-links">
            <h4 data-translate="footer_links">روابط سريعة</h4>
            <ul>
              <li><a href="#home" data-translate="nav_home">الرئيسية</a></li>
              <li><a href="#services" data-translate="nav_services">الخدمات</a></li>
              <li><a href="#portfolio" data-translate="nav_portfolio">أعمالي</a></li>
              <li><a href="#contact" data-translate="nav_contact">تواصل معي</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p data-translate="footer_copyright">&copy; 2026 رجب غازي. جميع الحقوق محفوظة.</p>
          <p className="footer-legal">
            <a href="/privacy/" data-translate="footer_privacy">سياسة الخصوصية</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
