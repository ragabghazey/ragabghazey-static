import { services } from "@/lib/data";

const servicePages: Record<string, string> = {
  service_saas: "/services/saas/",
};

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">
          <span className="title-icon"><i className="fas fa-cogs"></i></span>
          <span data-translate="services_title">خدماتي</span>
        </h2>
        <p className="section-subtitle" data-translate="services_subtitle">
          حلول برمجية متكاملة تناسب احتياجاتك
        </p>
        <div className="services-grid">
          {services.map((service, i) => (
            <div className="service-card" key={service.title}>
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3 data-translate={`service${i + 1}_title`}>{service.title}</h3>
              <p data-translate={`service${i + 1}_desc`}>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, j) => (
                  <li key={feature} data-translate={`service${i + 1}_feature${j + 1}`}>
                    <i className="fas fa-check"></i> {feature}
                  </li>
                ))}
              </ul>
              {service.page && service.pageLabel && (
                <a className="service-link" href={servicePages[service.page]}>
                  <span data-translate={`service${i + 1}_page`}>{service.pageLabel}</span>
                  <i className="fas fa-arrow-left"></i>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
