import { whyMe } from "@/lib/data";

export default function WhyMe() {
  return (
    <section className="why" id="why">
      <div className="container">
        <h2 className="section-title">
          <span className="title-icon"><i className="fas fa-shield-halved"></i></span>
          <span data-translate="why_title">ليه تشتغل معايا</span>
        </h2>
        <p className="section-subtitle" data-translate="why_subtitle">
          كل نقطة تحت تقدر تتأكد منها بنفسك من نفس الصفحة
        </p>
        <div className="why-grid">
          {whyMe.map((item, i) => (
            <div className="why-card" key={item.title}>
              <i className={item.icon}></i>
              <h3 data-translate={`why${i + 1}_title`}>{item.title}</h3>
              <p data-translate={`why${i + 1}_desc`}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
