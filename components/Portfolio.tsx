import { projects } from "@/lib/data";

const caseStudyUrls: Record<string, string> = {
  case_tallabak: "/work/tallabak/",
  case_data_platform: "/work/data-platform/",
  case_payments_shipping: "/work/payments-shipping/",
};

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="section-title">
          <span className="title-icon"><i className="fas fa-briefcase"></i></span>
          <span data-translate="portfolio_title">أعمالي</span>
        </h2>
        <p className="section-subtitle" data-translate="portfolio_subtitle">
          نماذج من المشاريع التي أنجزتها
        </p>
        <div className="portfolio-filters">
          <button className="filter-btn active" data-filter="all" data-translate="filter_all">الكل</button>
          <button className="filter-btn" data-filter="scraping">Web Scraping</button>
          <button className="filter-btn" data-filter="automation" data-translate="filter_automation">أتمتة</button>
          <button className="filter-btn" data-filter="web" data-translate="filter_web">مواقع</button>
          <button className="filter-btn" data-filter="apps" data-translate="filter_apps">تطبيقات</button>
        </div>
        <div className="portfolio-grid">
          {projects.map((project, i) => (
            <div className="portfolio-item" data-category={project.category} key={project.title}>
              <div className="portfolio-card">
                {project.image ? (
                  <div className="portfolio-shot">
                    <img src={project.image} alt={project.title} loading="lazy" width="1200" height="750" />
                  </div>
                ) : (
                  <div className="portfolio-icon">
                    <i className={project.icon}></i>
                  </div>
                )}
                <div className="portfolio-content">
                  <h4 className="portfolio-title" data-translate={`project${i + 1}_title`}>{project.title}</h4>
                  <p className="portfolio-desc" data-translate={`project${i + 1}_desc`}>{project.description}</p>
                  <div className="portfolio-tags">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="portfolio-actions">
                    {project.caseStudy && project.caseLabel && (
                      <a className="portfolio-link portfolio-case" href={caseStudyUrls[project.caseStudy]}>
                        <i className="fas fa-book-open"></i>
                        <span data-translate={`project${i + 1}_case`}>{project.caseLabel}</span>
                      </a>
                    )}
                    {project.link && project.linkLabel && (
                      <a className="portfolio-link" href={project.link} target="_blank" rel="noopener">
                        <i className="fas fa-arrow-up-right-from-square"></i>
                        <span data-translate={`project${i + 1}_link`}>{project.linkLabel}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
