# دليل النشر على GitHub Pages مع النطاق ragabghazey.com

## 1. ارفع الكود على GitHub

أنشئ مستودعًا جديدًا (أو استخدم المستودع الحالي) وارفع هذا المشروع إلى فرع `main`:

```bash
git init
git add .
git commit -m "Static Next.js version of ragabghazey.com"
git branch -M main
git remote add origin https://github.com/<USERNAME>/<REPO>.git
git push -u origin main
```

## 2. فعّل GitHub Pages

في المستودع على GitHub:

1. **Settings → Pages**
2. تحت **Build and deployment**:
   - **Source**: `GitHub Actions` (مُعدّ مسبقًا عبر `.github/workflows/deploy.yml`)
3. احفظ. عند أول push، سيعمل الـ Workflow تلقائيًا ويبني وينشر الموقع.

> ملاحظة: إذا ظهر خيار **Custom domain**، لا تكتب النطاق الآن — سيُضاف تلقائيًا من ملف `CNAME`.

## 3. إعداد DNS للنطاق

النطاق `ragabghazey.com` يجب أن يشير إلى GitHub Pages.

### السجل الرئيسي (Apex domain)

أضف هذه السجلات `A` عند مزوّد النطاق (DigitalOcean / GoDaddy / Namecheap …):

```
@  A  185.199.108.153
@  A  185.199.109.153
@  A  185.199.110.153
@  A  185.199.111.153
```

### نطاق www (اختياري)

```
www  CNAME  <USERNAME>.github.io
```

## 4. تفعيل النطاق المخصص

بعد أول نشر ناجح:

1. **Settings → Pages → Custom domain**
2. اكتب `ragabghazey.com`
3. اضغط **Save**
4. انتظر حتى يصبح **DNS check** أخضر (قد يستغرق حتى 24 ساعة)

## 5. التحديث المستمر

أي push إلى فرع `main` سيعيد البناء والنشر تلقائيًا.

## 6. تفعيل نموذج التواصل (مرة واحدة)

1. أرسل رسالة تجريبية من النموذج.
2. افتح بريد `contact@ragabghazey.com` — ستجد رسالة من FormSubmit.
3. اضغط زر التفعيل. بعدها تصل كل الرسائل مباشرة إلى البريد.

## ملاحظات أمان

- لا يحتوي المشروع على أي أسرار أو مفاتيح أو بيانات حساسة.
- رقم واتساب `201036861414` مضمّن لأنه رقم تواصل عام مخصص لاستقبال العملاء.
