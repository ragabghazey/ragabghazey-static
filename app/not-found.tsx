import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الصفحة غير موجودة",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <div className="box">
        <div className="code">404</div>
        <h1>الصفحة دي مش موجودة</h1>
        <p>يمكن الرابط اتغيّر أو فيه حرف ناقص. تحت الروابط اللي غالباً بتدوّر عليها.</p>
        <div className="links">
          <a href="/" className="btn btn-primary">الصفحة الرئيسية</a>
          <a href="/#portfolio" className="btn btn-ghost">الأعمال</a>
          <a href="/cv/" className="btn btn-ghost">السيرة الذاتية</a>
          <a href="/#contact" className="btn btn-ghost">تواصل معي</a>
        </div>
      </div>
    </>
  );
}
