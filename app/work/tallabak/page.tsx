import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "دراسة حالة: طلبك",
  description: "دراسة حالة طلبك — منصة SaaS متعددة التجار للبيع عبر واتساب: المشكلة والحل والنتائج.",
  alternates: { canonical: "https://ragabghazey.com/work/tallabak/" },
  openGraph: {
    type: "article",
    url: "https://ragabghazey.com/work/tallabak/",
    title: "دراسة حالة: طلبك — منصة بيع عبر واتساب",
    description: "من فوضى الطلبات في رسائل واتساب إلى منصة متعددة التجار بمتجر لكل تاجر ولوحة إدارة واشتراكات.",
    images: [{ url: "https://ragabghazey.com/images/og-image.png", width: 1200, height: 630 }],
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://ragabghazey.com/" },
    { "@type": "ListItem", position: 2, name: "الأعمال", item: "https://ragabghazey.com/#portfolio" },
    { "@type": "ListItem", position: 3, name: "دراسة حالة: طلبك" },
  ],
};

export default function CaseTallabakPage() {
  return (
    <>
      <link rel="stylesheet" href="/css/case-tallabak.css" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="wrap">
        <a href="/#portfolio" className="back">→ العودة للأعمال</a>

        <span className="eyebrow">دراسة حالة · منصة SaaS</span>
        <h1>طلبك — من فوضى الطلبات في واتساب إلى منصة بيع متكاملة</h1>
        <p className="lede">
          منصة متعددة التجار تدّي كل تاجر متجر بلينك خاص، وتحوّل الطلب إلى رسالة واتساب
          منظّمة بدل محادثة مبعثرة — مع لوحة إدارة واشتراكات وتتبّع طلبات.
        </p>

        <div className="cta-row">
          <a href="https://tallabak.com" target="_blank" rel="noopener" className="btn btn-primary">
            <i className="fas fa-external-link-alt"></i> زيارة المنصة
          </a>
          <a href="https://tallabak.com/store/burger-house/" target="_blank" rel="noopener" className="btn btn-ghost">
            <i className="fas fa-store"></i> جرّب متجر تجريبي
          </a>
        </div>

        <figure>
          <img src="/images/case/tallabak-home.webp" alt="الصفحة الرئيسية لمنصة طلبك" width="1000" height="703" loading="lazy" />
          <figcaption>الصفحة الرئيسية للمنصة</figcaption>
        </figure>

        <h2>المشكلة</h2>
        <p>
          التاجر الصغير في مصر والخليج بيبيع عبر واتساب: العميل يسأل عن المتاح، التاجر يبعت صور
          وأسعار، والطلب يتكتب وسط عشرات الرسائل. النتيجة المتكرّرة:
        </p>
        <ul>
          <li>طلبات بتضيع أو بتتنفّذ غلط لأن التفاصيل متفرّقة في المحادثة</li>
          <li>الأسعار بتتكرّر يدوياً مع كل عميل، وأي تغيير لازم يتبلّغ لكل حد</li>
          <li>مفيش سجل للطلبات ولا معرفة بالأكثر مبيعاً</li>
          <li>لما يخلص صنف، التاجر لازم يفتكر إنه يقول للعملاء</li>
        </ul>
        <p>
          والحلول الجاهزة الموجودة إما غالية على تاجر لسه بادئ، أو مبنية على تجربة شراء
          غربية بعيدة عن إن <b>واتساب هو قناة البيع الأساسية</b>.
        </p>

        <h2>الحل</h2>
        <p>بنيت منصة SaaS متعددة التجار — كل تاجر بيسجّل ويجهّز متجره في نفس اليوم:</p>
        <ul>
          <li><b>متجر بلينك خاص</b> لكل تاجر: كتالوج بصور وأسعار وتصنيفات وبحث</li>
          <li><b>الطلب يتحوّل لرسالة واتساب جاهزة</b> فيها المنتجات والكميات والإجمالي والعنوان — التاجر يستقبلها منظّمة على رقمه</li>
          <li><b>لوحة تحكم للتاجر</b>: إدارة المنتجات والمخزون والطلبات والعروض</li>
          <li><b>تتبّع طلب للعميل</b> بلينك بيوريه حالة طلبه</li>
          <li><b>اشتراكات وباقات</b> مع فترة تجربة، ولوحة إدارة مركزية للمنصة كلها</li>
        </ul>

        <figure>
          <img src="/images/case/tallabak-store.webp" alt="متجر تاجر داخل منصة طلبك" width="1000" height="703" loading="lazy" />
          <figcaption>متجر تاجر — كتالوج بتصنيفات وبحث وزر تواصل مباشر</figcaption>
        </figure>

        <h2>أصعب جزء: نقل تاجر شغّال بالفعل</h2>
        <p>
          أول تاجر حقيقي على المنصة كان عنده كتالوج قائم على منصة تانية. نقل الكتالوج مش
          مجرد استيراد ملف: الأصناف ليها متغيّرات (مقاسات وألوان)، وجزء منها ناقص أسعار.
        </p>
        <div className="callout">
          <b>القرار:</b> الأصناف اللي من غير سعر بتتستورد لكن <b>تفضل مخفية</b> عن العملاء
          لحد ما التاجر يحطّ سعرها — بدل ما نوقف الاستيراد كله أو نعرض منتجات بسعر صفر.
        </div>
        <div className="stats">
          <div className="stat"><div className="n">293</div><div className="l">منتج تم نقله</div></div>
          <div className="stat"><div className="n">122</div><div className="l">متغيّر (مقاس/لون)</div></div>
          <div className="stat"><div className="n">نفس اليوم</div><div className="l">مدة تجهيز المتجر</div></div>
        </div>

        <h2>التشغيل</h2>
        <p>المنصة شغّالة على سيرفر واحد بموارد محدودة، والاستقرار جه من الإعداد مش من حجم السيرفر:</p>
        <ul>
          <li>الخدمات في حاويات Docker منفصلة (تطبيق · قاعدة بيانات · كاش · nginx)</li>
          <li>شهادات SSL بتتجدّد تلقائياً، ومراقبة بتنبّه قبل انتهاء الشهادة بوقت كافٍ</li>
          <li>نسخ احتياطية يومية لقاعدة البيانات</li>
          <li>Redis للكاش والطوابير عشان الطلبات ما تتعطّلش وقت الضغط</li>
        </ul>

        <figure>
          <img src="/images/case/tallabak-pricing.webp" alt="باقات الاشتراك في منصة طلبك" width="1000" height="703" loading="lazy" />
          <figcaption>الباقات — مجانية للبداية، ثم اشتراك شهري أو سنوي</figcaption>
        </figure>

        <h2>المكدس التقني</h2>
        <div className="stack">
          <span className="chip">Django</span>
          <span className="chip">PostgreSQL</span>
          <span className="chip">Redis</span>
          <span className="chip">Docker</span>
          <span className="chip">nginx</span>
          <span className="chip">Let's Encrypt</span>
          <span className="chip">WhatsApp</span>
        </div>

        <div className="end">
          <p>عندك فكرة مشابهة أو محتاج منصة لنشاطك؟</p>
          <a href="/#contact" className="btn btn-primary">
            <i className="fas fa-paper-plane"></i> تواصل معي
          </a>
        </div>
      </div>
    </>
  );
}
