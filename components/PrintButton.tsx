"use client";

export default function PrintButton() {
  return (
    <button className="btn btn-secondary" onClick={() => window.print()} aria-label="طباعة">
      <i className="fas fa-print"></i> <span data-translate="cv_btn_print">طباعة</span>
    </button>
  );
}
