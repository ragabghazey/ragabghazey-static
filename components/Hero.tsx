import { stats, skills } from "@/lib/data";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div className="container">
        <div className="hero-combined">
          <div className="hero-info">
            <p className="hero-subtitle">
              <span className="typing-text" data-translate="hero_greeting">مرحباً، أنا</span>
            </p>
            <h1 className="hero-title">
              <span data-translate="hero_name">رجب</span>{" "}
              <span className="gradient-text" data-translate="hero_name_accent">غازي</span>
            </h1>
            <p
              className="hero-description"
              data-translate="hero_specialization"
              dangerouslySetInnerHTML={{
                __html:
                  'مطور ويب متخصص في <span class="highlight">Django</span> و <span class="highlight">Web Scraping</span> و <span class="highlight">الأتمتة</span>',
              }}
            />
            <p className="hero-about" data-translate="hero_about">
              أبني منصات وأنظمة بيانات تشتغل في الإنتاج فعلاً — منصة بيع متعددة التجار عليها تجار حقيقيون،
              وتطبيق منشور على <strong>App Store</strong>، وقواعد بيانات توصل لـ
              <strong>150 ألف صنف</strong>. أشتغل من أول الفكرة لحد التشغيل على السيرفر، ومتابعة بعد التسليم.
            </p>

            <div className="hero-skills">
              {skills.map((skill) => (
                <div className="skill-tag" key={skill.name}>
                  <i className={skill.icon}></i> {skill.name}
                </div>
              ))}
            </div>

            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number" data-target={stats.clients}>{stats.clients}</span>+
                <span className="stat-label" data-translate="stat_clients">عميل سعيد</span>
              </div>
              <div className="stat">
                <span className="stat-number" data-target={stats.years}>{stats.years}</span>+
                <span className="stat-label" data-translate="stat_years">سنوات خبرة</span>
              </div>
              <div className="stat">
                <span className="stat-number" data-target={stats.projects}>{stats.projects}</span>+
                <span className="stat-label" data-translate="stat_projects">مشروع منجز</span>
              </div>
            </div>

            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                <i className="fas fa-paper-plane"></i>
                <span data-translate="btn_contact">ابدأ مشروع</span>
              </a>
              <a href="#portfolio" className="btn btn-secondary">
                <i className="fas fa-briefcase"></i>
                <span data-translate="btn_portfolio">شاهد أعمالي</span>
              </a>
              <a href="/cv/" className="btn btn-outline">
                <i className="fas fa-file-alt"></i>
                <span data-translate="btn_cv">السيرة الذاتية</span>
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-frame">
              <picture>
                <source
                  type="image/webp"
                  srcSet="/images/profile-280.webp 280w, /images/profile-560.webp 560w, /images/profile-840.webp 840w"
                  sizes="280px"
                />
                <img
                  src="/images/profile.jpg"
                  alt="رجب غازي - مطور ويب"
                  className="profile-image"
                  width="280"
                  height="280"
                  fetchPriority="high"
                />
              </picture>
              <div className="experience-badge">
                <span className="years">{stats.years}+</span>
                <span className="label" data-translate="stat_years">سنوات خبرة</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <a href="#services">
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </section>
  );
}
