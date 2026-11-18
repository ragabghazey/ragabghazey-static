# رجب غازي — نسخة ثابتة (Next.js)

النسخة الثابتة من موقع [ragabghazey.com](https://ragabghazey.com) — تحويل كامل من Django إلى موقع ثابت يعمل على GitHub Pages بدون أي باك-اند أو قاعدة بيانات.

## التقنية

- **Next.js 15** (App Router) + **TypeScript**
- `output: "export"` → يولّد مجلد `out/` كامل بـ HTML/CSS/JS/صور/خطوط
- الترجمة (عربي/إنجليزي) تعمل بجافاسكريبت كما في الأصل (localStorage + data-translate)

## الصفحات

| الصفحة | المسار |
|---|---|
| الرئيسية | `/` |
| السيرة الذاتية | `/cv/` |
| دراسة حالة: طلبك | `/work/tallabak/` |
| دراسة حالة: منصة بيانات | `/work/data-platform/` |
| دراسة حالة: تكامل دفع وشحن | `/work/payments-shipping/` |
| خدمة منصات SaaS | `/services/saas/` |
| سياسة الخصوصية | `/privacy/` |
| 404 | `/404.html` |

## التشغيل محليًا

```bash
npm install
npm run dev        # تطوير
npm run build      # بناء ثابت → out/
```

## البناء

```bash
npm run build
```

يُنشئ مجلد `out/` الذي يحتوي على كل شيء جاهزًا للنشر.

## النشر

انظر [`DEPLOYMENT.md`](./DEPLOYMENT.md) و [`MIGRATION_REPORT.md`](./MIGRATION_REPORT.md).

## ملاحظة مهمة حول نموذج التواصل

النموذج الآن يرسل عبر [FormSubmit](https://formsubmit.co) إلى `contact@ragabghazey.com`.
**أول رسالة** ستصل معها رسالة تفعيل من FormSubmit — يجب الضغط على رابط التفعيل لتفعيل استقبال الرسائل.
