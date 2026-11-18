import { contactEmail } from "@/lib/data";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">
          <span className="title-icon"><i className="fas fa-envelope"></i></span>
          <span data-translate="contact_title">تواصل معي</span>
        </h2>
        <p className="section-subtitle" data-translate="contact_subtitle">
          لديك مشروع أو استفسار؟ تواصل معي الآن!
        </p>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="info-details">
                <h4 data-translate="contact_email">البريد الإلكتروني</h4>
                <p data-translate="contact_email_desc">للاستفسارات المفصلة</p>
                <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
              </div>
            </div>
          </div>
          <form
            className="contact-form"
            id="contactForm"
            method="POST"
            action="https://formsubmit.co/contact@ragabghazey.com"
          >
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://ragabghazey.com/#contact" />
            <div className="hp-field" aria-hidden="true">
              <label htmlFor="website">لا تملأ هذا الحقل</label>
              <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
            </div>
            <div className="form-group">
              <label htmlFor="name" data-translate="form_name">الاسم</label>
              <input type="text" id="name" name="name" data-translate="form_name_placeholder" placeholder="اكتب اسمك" required />
            </div>
            <div className="form-group">
              <label htmlFor="email" data-translate="form_email">البريد الإلكتروني</label>
              <input type="email" id="email" name="email" data-translate="form_email_placeholder" placeholder="اكتب بريدك الإلكتروني" required />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="company" data-translate="form_company">
                  الشركة / النشاط <span className="optional" data-translate="form_optional">(اختياري)</span>
                </label>
                <input type="text" id="company" name="company" data-translate="form_company_placeholder" placeholder="اسم شركتك أو نشاطك" />
              </div>
              <div className="form-group">
                <label htmlFor="whatsapp" data-translate="form_whatsapp">
                  واتساب <span className="optional" data-translate="form_optional">(اختياري)</span>
                </label>
                <input type="tel" id="whatsapp" name="whatsapp" inputMode="tel" data-translate="form_whatsapp_placeholder" placeholder="مع مفتاح الدولة" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="project_type" data-translate="form_project_type">نوع المشروع</label>
                <select id="project_type" name="project_type">
                  <option value="" data-translate="form_choose">اختر…</option>
                  <option value="saas" data-translate="form_type_saas">منصة SaaS</option>
                  <option value="web" data-translate="form_type_web">تطبيق ويب</option>
                  <option value="ecommerce" data-translate="form_type_ecommerce">متجر إلكتروني</option>
                  <option value="automation" data-translate="form_type_automation">أتمتة</option>
                  <option value="scraping" data-translate="form_type_scraping">استخراج بيانات</option>
                  <option value="integration" data-translate="form_type_integration">تكامل أنظمة</option>
                  <option value="other" data-translate="form_type_other">غير ذلك</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="budget" data-translate="form_budget">
                  الميزانية التقريبية <span className="optional" data-translate="form_optional">(اختياري)</span>
                </label>
                <select id="budget" name="budget">
                  <option value="" data-translate="form_not_sure">لسه مش محدد</option>
                  <option value="<500" data-translate="form_budget1">أقل من $500</option>
                  <option value="500-1500" data-translate="form_budget2">$500 – $1,500</option>
                  <option value="1500-5000" data-translate="form_budget3">$1,500 – $5,000</option>
                  <option value="5000+" data-translate="form_budget4">أكثر من $5,000</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message" data-translate="form_message">احكيلي عن المشروع</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                data-translate="form_message_placeholder"
                placeholder="إيه المشكلة اللي عايز تحلّها؟ ومين هيستخدم النظام؟"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-full">
              <i className="fas fa-paper-plane"></i>
              <span data-translate="form_submit">ابدأ مشروع</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
