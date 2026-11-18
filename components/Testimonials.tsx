import { testimonials, testimonialsCount } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="section-title">
          <span className="title-icon"><i className="fas fa-star"></i></span>
          <span data-translate="testimonials_title">آراء العملاء</span>
        </h2>
        <p className="section-subtitle">
          <span className="testimonial-count">{testimonialsCount}+</span>{" "}
          <span data-translate="testimonials_subtitle">تقييم إيجابي من عملاء محليين ودوليين</span>
        </p>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, i) => (
            <div className="testimonial-card" key={`${testimonial.name}-${i}`}>
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  <i className="fas fa-user-circle"></i>
                </div>
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  {testimonial.country && (
                    <span className="testimonial-country">{testimonial.country}</span>
                  )}
                  <div className="testimonial-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
