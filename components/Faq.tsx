import { faqs } from "@/lib/data";

export default function Faq() {
  return (
    <section className="faq" id="faq">
      <div className="container">
        <h2 className="section-title">
          <span className="title-icon"><i className="fas fa-circle-question"></i></span>
          <span data-translate="faq_title">أسئلة شائعة</span>
        </h2>
        <p className="section-subtitle" data-translate="faq_subtitle">
          الأسئلة اللي بتتسأل قبل بداية أي مشروع
        </p>
        <div className="faq-list">
          {faqs.map((item, i) => (
            <details className="faq-item" key={item.question}>
              <summary data-translate={`faq${i + 1}_q`}>{item.question}</summary>
              <p data-translate={`faq${i + 1}_a`}>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
