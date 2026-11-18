# تقرير الهجرة: Django → Next.js ثابت

## 1. نظرة عامة

تم تحويل الموقع من Django (Python + SQLite + سيرفر) إلى موقع ثابت كامل مبني بـ Next.js (App Router + TypeScript) يعمل على GitHub Pages بدون أي باك-اند أو قاعدة بيانات أو وقت تشغيل Node.js.

- **المشروع الأصلي:** `/Users/ragabghazey/Desktop/ragabghazey` (لم يُمسّ)
- **المشروع الجديد:** `/Users/ragabghazey/ragabghazey-static`
- **الفرع:** مجلد مستقل منفصل تمامًا (الأصل محفوظ كما هو)

## 2. جدول تعيين الروابط (URL Mapping)

| رابط Django القديم | الرابط الثابت الجديد | الحالة |
|---|---|---|
| `/` | `/` | ✅ محوّل |
| `/cv/` | `/cv/` | ✅ محوّل |
| `/work/` (تحويل لـ `/#portfolio`) | `/work/` (تحويل JS) | ✅ محوّل |
| `/work/tallabak/` | `/work/tallabak/` | ✅ محوّل |
| `/work/data-platform/` | `/work/data-platform/` | ✅ محوّل |
| `/work/payments-shipping/` | `/work/payments-shipping/` | ✅ محوّل |
| `/services/saas/` | `/services/saas/` | ✅ محوّل |
| `/privacy/` | `/privacy/` | ✅ محوّل |
| `/whatsapp/` (تحويل لـ wa.me) | `/whatsapp/` (تحويل JS) | ✅ محوّل |
| `/contact/` (POST فقط) | `/contact/` (تحويل لـ `/#contact`) | ✅ محوّل |
| `/robots.txt` | `/robots.txt` | ✅ محوّل |
| `/sitemap.xml` | `/sitemap.xml` | ✅ محوّل |
| `/favicon.ico` | `/favicon.ico` | ✅ محوّل |
| 404 | `/404.html` | ✅ محوّل |
| 500 | — (لا يوجد سيرفر يخطئ) | ⚠️ لم يعد لازمًا |
| `/api/track/` (تتبّع الزيارات) | — | ❌ أُزيل (يتطلب باك-اند) |

## 3. الوظائف المحفوظة (Preserved)

- كل المحتوى النصي بالعربي والإنجليزي (الرئيسية، السيرة، دراسات الحالة، الخدمة، الخصوصية).
- الألوان والهوية البصرية والخط Cairo والاتجاه RTL.
- نظام الترجمة عربي/إنجليزي (localStorage + data-translate) — 374 عنصر مترجم في الرئيسية و79 في السيرة.
- كل الصور والأيقونات والخطوط (Font Awesome subset) وملف الـ PDF.
- 14 مشروع في قسم الأعمال + فلترة الفئات (JavaScript).
- 72 تقييم عميل (Khamsat + Upwork + دولي).
- الأنيميشن (عدادات، ظهور عند التمرير، تأثير الكتابة، فلتر الأعمال).
- SEO (titles, descriptions, canonical, Open Graph, Twitter Cards, JSON-LD، sitemap، robots).
- زر واتساب العائم.
- تحميل/طباعة السيرة.

## 4. الوظائف المستبدلة (Replaced)

| الوظيفة | الأصلي (Django) | الجديد (ثابت) |
|---|---|---|
| نموذج التواصل | POST → `/contact/` → حفظ DB + بريد Brevo + تنبيه Telegram | POST → **FormSubmit** → بريد `contact@ragabghazey.com` |
| حماية النموذج | CSRF + honeypot + توقيت + rate-limit | honeypot (عميل) + التحقق من البريد + FormSubmit spam protection |
| رابط واتساب | `/whatsapp/` (سيرفر) | `/whatsapp/` (تحويل JS) |

## 5. الوظائف غير المحفوظة (Unresolved)

| الوظيفة | السبب |
|---|---|
| تتبّع الزيارات والتحليلات (`/api/track/`) | يتطلب باك-اند وقاعدة بيانات. (هذا يجعل النسخة الثابتة أكثر خصوصية فعليًا.) |
| حفظ رسائل التواصل في قاعدة بيانات | لا توجد قاعدة بيانات. الرسائل تصل عبر البريد فقط. |
| تنبيهات Telegram عند رسالة جديدة | تتطلب باك-اند. |
| تحديد الدولة/المدينة من IP | يتطلب قاعدة بيانات GeoIP على الخادم. |
| صفحة 500 | لا يوجد سيرفر ليُنتج خطأ 500. |

## 6. حالة الأصول (Assets)

| الأصل | الحالة |
|---|---|
| CSS (style.css, icons.css) | ✅ منقول كما هو |
| CSS الداخلي (CV، دراسات الحالة، الخصوصية، 404) | ✅ مستخرج إلى ملفات CSS منفصلة |
| الصور (profile, projects, case, og, favicon) | ✅ منسوخة |
| الخطوط (Font Awesome subset) | ✅ منسوخة |
| السيرة PDF | ✅ منسوخة |
| JavaScript (main.js, translations.js) | ✅ منقول (مع تعديل نموذج التواصل) |
| analytics.js | ❌ أُزيل (لا باك-اند) |

## 7. حالة SEO

| العنصر | الحالة |
|---|---|
| عناوين صفحات فريدة | ✅ |
| Meta descriptions | ✅ |
| Canonical URLs | ✅ |
| Open Graph + Twitter Cards | ✅ |
| JSON-LD (Person, ProfessionalService, WebSite, Service, BreadcrumbList) | ✅ |
| sitemap.xml | ✅ |
| robots.txt | ✅ |
| favicon + apple-touch-icon | ✅ |
| hreflang / اللغة | ✅ (lang=ar dir=rtl، وتبديل ltr للإنجليزي) |
| alt للصور | ✅ |

## 8. نتائج الاختبار

```bash
npm install     # ✅ نجح
npm run build   # ✅ نجح — 13 صفحة ثابتة
```

فحص المخرجات `out/`:

| الفحص | النتيجة |
|---|---|
| كل الصفحات (200) | ✅ |
| 404 للصفحات غير الموجودة | ✅ |
| CSS / JS / صور / PDF | ✅ (200) |
| لا روابط `/static/` قديمة | ✅ |
| لا صيغة Django `{% %}` متبقية | ✅ |
| data-translate موجود | ✅ (374 في الرئيسية) |
| JSON-LD موجود | ✅ |

## 9. متطلبات يجب إجراؤها يدويًا بعد النشر

1. تفعيل FormSubmit (رسالة التفعيل الأولى).
2. تحديث DNS (سجلات A الأربعة) كما في `DEPLOYMENT.md`.
3. تفعيل النطاق المخصص في إعدادات GitHub Pages.
