import { process } from "@/lib/data";

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="container">
        <h2 className="section-title">
          <span className="title-icon"><i className="fas fa-route"></i></span>
          <span data-translate="process_title">إزاي بشتغل</span>
        </h2>
        <p className="section-subtitle" data-translate="process_subtitle">
          من أول رسالة لحد التشغيل — خطوات واضحة ومواعيد معروفة
        </p>
        <ol className="process-steps">
          {process.map((step, i) => (
            <li className="process-step" key={step.title}>
              <span className="process-num">{i + 1}</span>
              <div className="process-body">
                <h3 data-translate={`process${i + 1}_title`}>{step.title}</h3>
                <p data-translate={`process${i + 1}_desc`}>{step.description}</p>
                <span className="process-duration">
                  <i className="fas fa-clock"></i>
                  <span data-translate={`process${i + 1}_duration`}>{step.duration}</span>
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
