import type { Metadata } from "next";
import { stats } from "@/lib/data";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "السيرة الذاتية",
  description: "السيرة الذاتية - رجب غازي - مطور ويب متخصص في Django و Web Scraping",
  alternates: { canonical: "https://ragabghazey.com/cv/" },
  openGraph: {
    type: "profile",
    url: "https://ragabghazey.com/cv/",
    title: "السيرة الذاتية | رجب غازي",
    description: "مطور ويب متخصص في Django و Web Scraping والأتمتة — الخبرات والمهارات والمشاريع.",
    images: [{ url: "https://ragabghazey.com/images/og-image.png", width: 1200, height: 630 }],
  },
};

export default function CvPage() {
  return (
    <>
      <link rel="stylesheet" href="/css/cv.css" />

      <button className="lang-switcher" id="langSwitcher" aria-label="Switch language">
        <i className="fas fa-globe"></i>
        <span>English</span>
      </button>

      <div className="cv-wrapper">
        <aside className="sidebar">
          <div className="profile-section">
            <div className="profile-image">
              <picture>
                <source srcSet="/images/profile-280.webp" type="image/webp" />
                <img src="/images/profile.jpg" alt="رجب غازي" />
              </picture>
            </div>
            <h1 className="profile-name" data-translate="cv_name">رجب غازي</h1>
            <p className="profile-title" data-translate="cv_title">مطور ويب</p>
          </div>

          <div className="sidebar-section">
            <h3 data-translate="cv_sidebar_contact">التواصل</h3>
            <div className="contact-item">
              <a href="/whatsapp/" target="_blank" aria-label="واتساب"><i className="fab fa-whatsapp"></i></a>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <a href="mailto:contact@ragabghazey.com">contact@ragabghazey.com</a>
            </div>
            <div className="contact-item">
              <i className="fas fa-globe"></i>
              <a href="https://ragabghazey.com" target="_blank">ragabghazey.com</a>
            </div>
          </div>

          <div className="sidebar-section">
            <h3 data-translate="cv_sidebar_skills">المهارات الأساسية</h3>
            <ul className="expertise-list">
              <li><i className="fab fa-python"></i> Python · Django · DRF</li>
              <li><i className="fas fa-spider"></i> Web Scraping · Selenium · Playwright</li>
              <li><i className="fas fa-robot"></i> الأتمتة والمهام المجدولة</li>
              <li><i className="fas fa-database"></i> PostgreSQL · Redis</li>
              <li><i className="fab fa-react"></i> Next.js · React · JavaScript</li>
              <li><i className="fab fa-docker"></i> Docker · nginx · Linux</li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h3 data-translate="cv_sidebar_languages">اللغات</h3>
            <div className="language-item">
              <span data-translate="cv_lang_arabic">العربية</span>
              <span style={{ color: "var(--accent)" }} data-translate="cv_lang_arabic_level">اللغة الأم</span>
            </div>
            <div className="language-item">
              <span data-translate="cv_lang_english">الإنجليزية</span>
              <span style={{ color: "var(--primary-light)" }} data-translate="cv_lang_english_level">متقدم</span>
            </div>
          </div>
        </aside>

        <main className="main-content">
          <header className="cv-header">
            <h1 data-translate="cv_name">رجب غازي</h1>
            <p className="tagline" data-translate="cv_header_tagline">مطور ويب متخصص في Django و Web Scraping والأتمتة</p>

            <div className="stats-row">
              <div className="stat-item">
                <div className="stat-icon"><i className="fas fa-calendar-alt"></i></div>
                <div className="stat-info">
                  <div className="number">{stats.years}+</div>
                  <div className="label" data-translate="cv_stat_years">سنوات خبرة</div>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon"><i className="fas fa-users"></i></div>
                <div className="stat-info">
                  <div className="number">{stats.clients}+</div>
                  <div className="label" data-translate="cv_stat_clients">عميل</div>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon"><i className="fas fa-project-diagram"></i></div>
                <div className="stat-info">
                  <div className="number">{stats.projects}+</div>
                  <div className="label" data-translate="cv_stat_projects">مشروع</div>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon"><i className="fas fa-star"></i></div>
                <div className="stat-info">
                  <div className="number">{stats.satisfaction}%</div>
                  <div className="label" data-translate="cv_stat_satisfaction">رضا العملاء</div>
                </div>
              </div>
            </div>
          </header>

          <section className="section">
            <h2 className="section-title">
              <i className="fas fa-user"></i>
              <span data-translate="cv_about_title">نبذة عني</span>
            </h2>
            <p
              className="about-text"
              data-translate="cv_about_text"
              dangerouslySetInnerHTML={{
                __html:
                  "مطور ويب بخبرة تزيد عن 7 سنوات في تطوير تطبيقات الويب وأتمتة العمليات واستخراج البيانات. متخصص في بناء حلول برمجية متكاملة باستخدام <strong>Django</strong> و <strong>Next.js</strong> مع التركيز على الجودة والأداء والأمان. عملت مع أكثر من 100 عميل من مختلف أنحاء العالم العربي والغربي، وحققت نسبة رضا 100% على منصات العمل الحر. أتميز بالقدرة على فهم متطلبات العميل وتحويلها إلى حلول تقنية فعالة.",
              }}
            />
          </section>

          <section className="section">
            <h2 className="section-title">
              <i className="fas fa-briefcase"></i>
              <span data-translate="cv_experience_title">الخبرة العملية</span>
            </h2>

            <div className="experience-card">
              <div className="exp-header">
                <div>
                  <h3 className="exp-title" data-translate="cv_exp1_title">مطور برمجيات مستقل</h3>
                  <p className="exp-company">
                    <i className="fas fa-building"></i>
                    <span data-translate="cv_exp1_company">فريلانسر</span>
                  </p>
                </div>
                <span className="exp-date" data-translate="cv_exp1_date">2019 - الآن</span>
              </div>
              <div className="exp-description">
                <ul>
                  <li data-translate="cv_exp1_item1">تطوير أكثر من 150 مشروع في مجالات Web Scraping والأتمتة وتطوير الويب</li>
                  <li data-translate="cv_exp1_item2">بناء تطبيقات ويب متكاملة باستخدام Django و Django REST Framework</li>
                  <li data-translate="cv_exp1_item3">تصميم وتنفيذ أنظمة استخراج بيانات من مواقع متعددة ومعقدة</li>
                  <li data-translate="cv_exp1_item4">إنشاء بوتات تيليجرام وأنظمة أتمتة للعمليات التجارية</li>
                  <li data-translate="cv_exp1_item5">تحقيق تقييم 100% إيجابي من أكثر من 100 عميل</li>
                </ul>
              </div>
            </div>

            <div className="experience-card">
              <div className="exp-header">
                <div>
                  <h3 className="exp-title" data-translate="cv_exp2_title">مطور Python</h3>
                  <p className="exp-company">
                    <i className="fas fa-laptop-code"></i>
                    <span data-translate="cv_exp2_company">مشاريع حرة وتعلم ذاتي</span>
                  </p>
                </div>
                <span className="exp-date" data-translate="cv_exp2_date">2015 - 2019</span>
              </div>
              <div className="exp-description">
                <ul>
                  <li data-translate="cv_exp2_item1">تعلم وإتقان لغة Python وأطر العمل المختلفة</li>
                  <li data-translate="cv_exp2_item2">بناء أدوات أتمتة ومعالجة بيانات</li>
                  <li data-translate="cv_exp2_item3">تطوير سكربتات web scraping باستخدام BeautifulSoup و Scrapy</li>
                  <li data-translate="cv_exp2_item4">العمل على مشاريع شخصية لتطوير المهارات</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">
              <i className="fas fa-graduation-cap"></i>
              <span data-translate="cv_education_title">التعليم</span>
            </h2>
            <div className="education-card">
              <div className="edu-icon">
                <i className="fas fa-university"></i>
              </div>
              <div className="edu-details">
                <h4 data-translate="cv_university">جامعة الأزهر</h4>
                <p data-translate="cv_degree">بكالوريوس - تخرج 2015</p>
              </div>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">
              <i className="fas fa-code"></i>
              <span data-translate="cv_tech_title">التقنيات والأدوات</span>
            </h2>
            <div className="tech-grid">
              <div className="tech-item"><i className="fab fa-python"></i><span>Python</span></div>
              <div className="tech-item"><i className="fas fa-cube"></i><span>Django</span></div>
              <div className="tech-item"><i className="fab fa-react"></i><span>Next.js</span></div>
              <div className="tech-item"><i className="fab fa-js"></i><span>JavaScript</span></div>
              <div className="tech-item"><i className="fas fa-spider"></i><span>Scrapy</span></div>
              <div className="tech-item"><i className="fas fa-robot"></i><span>Selenium</span></div>
              <div className="tech-item"><i className="fas fa-database"></i><span>PostgreSQL</span></div>
              <div className="tech-item"><i className="fab fa-docker"></i><span>Docker</span></div>
              <div className="tech-item"><i className="fab fa-git-alt"></i><span>Git</span></div>
              <div className="tech-item"><i className="fab fa-linux"></i><span>Linux</span></div>
              <div className="tech-item"><i className="fas fa-server"></i><span>REST APIs</span></div>
              <div className="tech-item"><i className="fab fa-telegram"></i><span>Telegram Bots</span></div>
            </div>
          </section>
        </main>
      </div>

      <div className="action-buttons">
        <a className="btn btn-primary" href="/cv/ragab-ghazey-cv.pdf" download="ragab-ghazey-cv.pdf">
          <i className="fas fa-download"></i> <span data-translate="cv_btn_download">تحميل PDF</span>
        </a>
        <PrintButton />
        <a href="/" className="btn btn-secondary">
          <i className="fas fa-arrow-right"></i> <span data-translate="cv_btn_back">العودة للموقع</span>
        </a>
      </div>

      <script src="/js/translations.js"></script>
    </>
  );
}

