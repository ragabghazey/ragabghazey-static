// Central content extracted from the original Django project (views.py and
// templates). Kept in one place so a change lands once instead of drifting
// between pages — the same reason the original kept these in views.py.

export const stats = {
  clients: 100,
  years: 7,
  projects: 150,
  satisfaction: 100,
};

export interface Skill {
  name: string;
  icon: string;
}

export const skills: Skill[] = [
  { name: "Django", icon: "fab fa-python" },
  { name: "Python", icon: "fab fa-python" },
  { name: "Web Scraping", icon: "fas fa-spider" },
  { name: "Next.js", icon: "fab fa-react" },
  { name: "PostgreSQL", icon: "fas fa-database" },
  { name: "Docker", icon: "fab fa-docker" },
  { name: "Automation", icon: "fas fa-robot" },
];

export interface TechGroup {
  group: string;
  icon: string;
  items: string[];
}

export const techStack: TechGroup[] = [
  { group: "الخادم وقواعد البيانات", icon: "fas fa-server", items: ["Django", "Django REST", "Python", "PostgreSQL", "Redis", "REST APIs"] },
  { group: "الواجهات", icon: "fas fa-code", items: ["Next.js", "React", "JavaScript", "Tailwind CSS", "HTML/CSS"] },
  { group: "البيانات والأتمتة", icon: "fas fa-spider", items: ["Web Scraping", "Selenium", "Playwright", "Pandas", "Cron", "Telegram Bots"] },
  { group: "التشغيل والنشر", icon: "fab fa-docker", items: ["Docker", "nginx", "Linux", "Git", "Gunicorn", "Let's Encrypt"] },
];

export interface Service {
  title: string;
  icon: string;
  description: string;
  features: string[];
  page?: string;
  pageLabel?: string;
}

export const services: Service[] = [
  {
    title: "منصات SaaS مخصصة",
    icon: "fas fa-layer-group",
    description: "منتج متعدد العملاء بحسابات واشتراكات ولوحات تحكم وصلاحيات — من أول تسجيل العميل لحد الفوترة والتقارير.",
    features: ["حسابات وصلاحيات", "اشتراكات وباقات", "لوحات تحكم وتقارير", "واجهات برمجية REST"],
    page: "service_saas",
    pageLabel: "تفاصيل الخدمة",
  },
  {
    title: "أتمتة العمليات",
    icon: "fas fa-robot",
    description: "تحويل الشغل اليدوي المتكرر إلى أنظمة تشتغل لوحدها: جدولة، إشعارات، تقارير دورية، وربط بين أدواتك الحالية.",
    features: ["مهام مجدولة", "إشعارات واتساب وتيليجرام", "تقارير تلقائية", "مراقبة وتنبيه"],
  },
  {
    title: "استخراج ومعالجة البيانات",
    icon: "fas fa-database",
    description: "بناء قواعد بيانات من مصادر منتشرة: استخراج على نطاق واسع، تنظيف وتوحيد، إزالة تكرار، وتسليم جاهز للاستخدام.",
    features: ["استخراج بمئات الآلاف", "تنظيف وتوحيد", "إزالة التكرار", "تصدير أو واجهة برمجية"],
  },
  {
    title: "أنظمة التجارة الإلكترونية",
    icon: "fas fa-cart-shopping",
    description: "متاجر وأنظمة طلبات ومخزون مبنية على طريقة بيعك الفعلية — بما فيها البيع عبر واتساب وتتبّع الطلبات.",
    features: ["كتالوج ومخزون", "طلبات وتتبّع", "بيع عبر واتساب", "لوحة للتاجر"],
  },
  {
    title: "تكامل الأنظمة",
    icon: "fas fa-plug",
    description: "ربط نظامك ببوابات الدفع وشركات الشحن والخدمات الخارجية، وبناء واجهات برمجية تربط أنظمتك ببعضها.",
    features: ["بوابات دفع", "شركات شحن", "واجهات طرف ثالث", "Webhooks"],
  },
];

export interface ProcessStep {
  icon: string;
  title: string;
  description: string;
  duration: string;
}

export const process: ProcessStep[] = [
  { icon: "fas fa-comments", title: "الفهم", description: "نتكلم عن نشاطك والمشكلة اللي بتحلّها، والمخرجات المتوقعة، وأي قيود عندك.", duration: "نفس اليوم" },
  { icon: "fas fa-sitemap", title: "التصميم التقني", description: "أحدد بنية النظام وقاعدة البيانات والتكاملات، وتستلم نطاق عمل مكتوب بسعر ومدة.", duration: "خلال 24 ساعة" },
  { icon: "fas fa-code", title: "التنفيذ", description: "بناء على مراحل، تشوف نتيجة شغّالة من أول مرحلة وتعلّق عليها بدل ما تستنى للآخر.", duration: "حسب حجم المشروع" },
  { icon: "fas fa-vial", title: "الاختبار", description: "اختبار الوظائف والتكاملات وسلوك النظام تحت الضغط، وسد الثغرات قبل ما يشوفه عميلك.", duration: "قبل كل تسليم" },
  { icon: "fas fa-rocket", title: "النشر والتشغيل", description: "رفع على السيرفر وضبط النسخ الاحتياطي والشهادات والمراقبة، وشرح التشغيل لفريقك.", duration: "ضمن التسليم" },
  { icon: "fas fa-life-ring", title: "المتابعة", description: "إصلاح أي مشكلة بعد الإطلاق وتطوير النظام مع نمو نشاطك.", duration: "دعم بعد التسليم" },
];

export interface WhyItem {
  icon: string;
  title: string;
  description: string;
}

export const whyMe: WhyItem[] = [
  { icon: "fas fa-server", title: "أنظمة في الإنتاج مش نماذج", description: "منصة شغالة بتجار حقيقيين وتطبيق منشور على App Store — تقدر تفتحهم دلوقتي من الروابط تحت." },
  { icon: "fas fa-chart-line", title: "خبرة بيانات ضخمة", description: "قواعد بيانات بـ150 و135 و26 ألف صنف، مبنية بمعدل حظر صفر وقابلة للاستئناف بعد أي انقطاع." },
  { icon: "fas fa-cubes", title: "ملكية تقنية كاملة", description: "من بنية النظام للكود للسيرفر والنشر والمراقبة — مش محتاج تجيب حد تاني يشغّل اللي بنيته." },
  { icon: "fas fa-file-contract", title: "نطاق عمل مكتوب", description: "تعرف إيه اللي هيتنفذ وإيه اللي مش داخل وبكام وفي أد إيه، قبل ما أبدأ." },
  { icon: "fas fa-code-branch", title: "كود تملكه وتكمّل عليه", description: "تستلم الكود كامل مع شرح التشغيل، وأي مطور بعدي يقدر يكمّل. مش بربط حد بيا." },
  { icon: "fas fa-globe", title: "عربي وإنجليزي", description: "شغل مع عملاء في الخليج ومصر وخارج المنطقة — تواصل وتسليم ومتابعة بأي من اللغتين." },
];

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  { question: "المشروع بياخد قد إيه؟", answer: "سكربت استخراج بيانات بسيط من يومين لأسبوع. موقع أو لوحة تحكم من أسبوعين لشهر. منصة كاملة بمستخدمين ولوحات إدارة شهر فأكثر. بعد ما نتكلم عن التفاصيل بتستلم مدة محددة مكتوبة، مش تقدير مفتوح." },
  { question: "بتشتغل بأي طريقة في الدفع؟", answer: "مقدم عند البدء والباقي عند التسليم، وفي المشاريع الكبيرة بنقسمها على مراحل كل مرحلة ليها دفعة. بنتفق على ده مكتوب قبل ما أبدأ." },
  { question: "هل الكود بيبقى ملكي؟", answer: "أيوه. بتستلم الكود كامل مع شرح التشغيل، وتقدر تكمّل عليه مع أي مطور بعد كده. مش بربط حد بيا." },
  { question: "لو المشروع فيه تعديلات بعد التسليم؟", answer: "التعديلات اللي جوه نطاق العمل المتفق عليه مجانية. أي إضافة جديدة برّه النطاق بنتفق عليها على حدة." },
  { question: "بتشتغل مع عملاء برّه مصر؟", answer: "أيوه، أغلب شغلي مع عملاء في الخليج وخارج المنطقة العربية. التواصل بالعربي أو الإنجليزي، والتسليم والمتابعة كلها أونلاين." },
  { question: "هل استخراج البيانات ده قانوني؟", answer: "بشتغل على البيانات المتاحة للعموم وباحترام شروط استخدام المصدر ومعدلات الطلب المعقولة. لو مشروع فيه شبهة مخالفة بقولك من الأول بدل ما نمشي فيه." },
];

export interface Project {
  title: string;
  description: string;
  category: string;
  icon: string;
  image?: string;
  link?: string;
  linkLabel?: string;
  caseStudy?: string;
  caseLabel?: string;
  tags: string[];
}

export const projects: Project[] = [
  { title: "طلبك — منصة بيع عبر واتساب", description: "منصة SaaS متعددة التجار: متجر لكل تاجر، إدارة طلبات ومخزون، إشعارات واتساب تلقائية، اشتراكات وباقات، ولوحة إدارة مركزية. شغالة بتجار حقيقيين.", category: "web", icon: "fas fa-store", image: "/images/projects/tallabak.webp", link: "https://tallabak.com", linkLabel: "زيارة المنصة", caseStudy: "case_tallabak", caseLabel: "دراسة الحالة", tags: ["Django", "PostgreSQL", "Redis", "Docker", "WhatsApp API"] },
  { title: "القرآن الكريم — تطبيق منشور", description: "مصحف كامل بواجهة عربية وروسية، تلاوات صوتية، عمل بدون إنترنت، ومكتبة كتب. منشور على App Store ويعمل كتطبيق ويب PWA.", category: "apps", icon: "fas fa-book-open", image: "/images/projects/qurankareem.webp", link: "https://apps.apple.com/eg/app/id6796484376", linkLabel: "على App Store", tags: ["PWA", "Capacitor", "iOS", "Supabase", "Offline-first"] },
  { title: "قاعدة بيانات دوائية — 135 ألف صنف", description: "دمج مصدرين عامّين في قاعدة واحدة موحّدة تشمل المادة الفعالة والأسعار والأشكال الدوائية، مع معالجة التكرار واختلاف التسميات.", category: "scraping", icon: "fas fa-capsules", tags: ["Python", "REST APIs", "Data Merging"] },
  { title: "كتالوج متجر عالمي — 150 ألف منتج", description: "سكربر قابل للاستئناف بعد الانقطاع، بمعدل حظر صفر عبر التحكم في وتيرة الطلبات بدل الاعتماد على البروكسيات.", category: "scraping", icon: "fas fa-boxes-stacked", caseStudy: "case_data_platform", caseLabel: "دراسة الحالة", tags: ["Python", "Rate Limiting", "Resumable"] },
  { title: "تكامل دفع وشحن لمنصة شحن", description: "ربط بوابة دفع تدعم Apple Pay وتكامل مع شركات شحن متعددة لإصدار بوالص الشحن وتتبّعها آلياً من داخل النظام.", category: "web", icon: "fas fa-truck-fast", caseStudy: "case_payments_shipping", caseLabel: "دراسة الحالة", tags: ["Apple Pay", "REST APIs", "Oracle APEX"] },
  { title: "تطبيق توصيل متعدد المتاجر", description: "واجهة متجر سريعة مع لوحة تحكم للتجار وتتبّع الطلبات، تخدم فروعاً يزيد كتالوج أحدها عن 5 آلاف صنف.", category: "web", icon: "fas fa-motorcycle", tags: ["Django", "Next.js", "PostgreSQL"] },
  { title: "كتالوج بقالة — 26 ألف صنف بالباركود", description: "استخراج كتالوج سلاسل سوبرماركت كامل بالباركود والأسعار والتصنيفات، جاهز للربط بأنظمة نقاط البيع والمخزون.", category: "scraping", icon: "fas fa-barcode", tags: ["Python", "GraphQL", "Barcodes"] },
  { title: "دليل صناعي — 10,567 منشأة", description: "استخراج دليل مصانع كامل ببيانات التواصل والنشاط، مع تنظيف الأرقام وإزالة التكرار وتصدير جاهز للاستخدام.", category: "scraping", icon: "fas fa-industry", tags: ["Python", "Data Cleaning", "Excel"] },
  { title: "قاعدة بيانات شركات ومكاتب خدمات", description: "بحث منهجي على مستوى المدن والأحياء لتغطية أوسع من البحث العام، مُنفّذ على أربع مراحل قابلة للاستئناف مع تجميع النتائج وتنقيتها.", category: "scraping", icon: "fas fa-building-user", tags: ["Python", "Multi-stage", "Deduplication"] },
  { title: "استخراج بيانات خرائط جوجل", description: "جمع بيانات الأنشطة التجارية حسب المدينة والحي والتصنيف، مع استئناف تلقائي وتصدير CSV.", category: "scraping", icon: "fas fa-map-location-dot", tags: ["Python", "Selenium", "CSV"] },
  { title: "مراقبة مواقع وشهادات SSL", description: "فحص دوري كل 15 دقيقة لتوافر المواقع وصلاحية الشهادات، مع تنبيه فوري بالبريد عند التوقف أو قرب انتهاء الشهادة وإشعار عند التعافي.", category: "automation", icon: "fas fa-heart-pulse", tags: ["Bash", "Cron", "Email API"] },
  { title: "بوت تنبيهات فورية على تيليجرام", description: "مراقبة صفحة أو مصدر بيانات على مدار الساعة وإرسال إشعار تيليجرام في نفس اللحظة التي يتغيّر فيها المحتوى.", category: "automation", icon: "fab fa-telegram", tags: ["Python", "Telegram API", "Polling"] },
  { title: "أتمتة تنظيف وتوحيد بيانات", description: "معالجة ملفات ضخمة لتوحيد صيغ أرقام الهواتف والعناوين، وكشف التكرار عبر مصادر مختلفة، وإخراج تقرير بالسجلات المكررة.", category: "automation", icon: "fas fa-broom", tags: ["Python", "Pandas", "Excel"] },
  { title: "لوحة بحث وإدارة بيانات", description: "واجهة بحث سريعة فوق قاعدة بيانات كبيرة مع فلاتر متعددة وتصدير النتائج، وصلاحيات مستخدمين ولوحة تحكم للإدارة.", category: "web", icon: "fas fa-magnifying-glass-chart", tags: ["Django", "JavaScript", "PostgreSQL"] },
];

export interface Testimonial {
  name: string;
  text: string;
  country: string;
}

const khamsatTestimonials: Testimonial[] = [
  // السعودية 🇸🇦
  { name: "ابو عبدالله ع.", text: "ممتاز بارك الله فيك", country: "السعودية 🇸🇦" },
  { name: "Moayed S.", text: "جميل جدا تعاملت مع المهندس راغب وكان عند حسن الظن. بارك الله في علمك... شكرا يا باش مهندس من القلب لانك اهتميت بالمشروع والتفاصيل كما يجب", country: "السعودية 🇸🇦" },
  { name: "عبدالرحمن ا.", text: "أفضل خدمة حصلت عليها، دقة وسرعة واحترافية", country: "السعودية 🇸🇦" },
  { name: "مشاري ا.", text: "شخص محترم ومحترف في عمله، شكراً لك", country: "السعودية 🇸🇦" },
  { name: "Meshal A.", text: "Very professional and fast delivery", country: "السعودية 🇸🇦" },
  { name: "فهد ا.", text: "ممتاز في العمل وسريع في التسليم", country: "السعودية 🇸🇦" },
  { name: "Faisal A.", text: "Great communication and excellent work", country: "السعودية 🇸🇦" },
  { name: "بدر ا.", text: "ممتاز ومحترف وسريع في الإنجاز", country: "السعودية 🇸🇦" },
  { name: "خالد ص.", text: "شخص محترف وصادق في عمله", country: "السعودية 🇸🇦" },
  { name: "فيصل ع.", text: "أفضل شخص تعاملت معه، ممتاز في كل شيء", country: "السعودية 🇸🇦" },
  { name: "Khalid A.", text: "Excellent results, very happy", country: "السعودية 🇸🇦" },
  { name: "Moudhi A.", text: "Great service and support", country: "السعودية 🇸🇦" },
  { name: "Salim A.", text: "تعاون رائع ونتيجة ممتازة", country: "السعودية 🇸🇦" },
  { name: "عازم ا.", text: "ممتاز في كل شيء، أنصح به بشدة", country: "السعودية 🇸🇦" },
  { name: "Haya A.", text: "Very professional and patient", country: "السعودية 🇸🇦" },
  { name: "Kalid K.", text: "Great work quality and fast delivery", country: "السعودية 🇸🇦" },
  // الإمارات 🇦🇪
  { name: "Rhimi B.", text: "عمل ممتاز صراحة", country: "الإمارات 🇦🇪" },
  { name: "حسام أ.", text: "قمة في الاخلاق و التعامل المتميز، شخص صبور و هادئ و متفهم للهدف الرئيسي... كانت تجربة ممتازة جداً و أنصح بالتعامل معه.", country: "الإمارات 🇦🇪" },
  { name: "Rami K.", text: "ممتاز جداً، عمل احترافي ودقيق وسريع", country: "الإمارات 🇦🇪" },
  { name: "هيثم ب.", text: "شكراً جزيلاً على العمل الرائع والاحترافية العالية", country: "الإمارات 🇦🇪" },
  { name: "Salem O.", text: "تجربة رائعة، سأتعامل معه مجدداً بالتأكيد", country: "الإمارات 🇦🇪" },
  { name: "Mohammed A.", text: "عمل احترافي وتواصل ممتاز", country: "الإمارات 🇦🇪" },
  { name: "Ahmed A.", text: "تعامل ممتاز وعمل احترافي", country: "الإمارات 🇦🇪" },
  { name: "Yousef M.", text: "خدمة احترافية ونتائج ممتازة", country: "الإمارات 🇦🇪" },
  { name: "Maher A.", text: "Excellent work quality and great support", country: "الإمارات 🇦🇪" },
  { name: "Yaqoob A.", text: "Professional approach and timely delivery", country: "الإمارات 🇦🇪" },
  { name: "Mohsen A.", text: "Great experience, will work together again", country: "الإمارات 🇦🇪" },
  { name: "Manaf D.", text: "Best developer I have worked with", country: "الإمارات 🇦🇪" },
  { name: "Alhassi N.", text: "Very skilled and professional", country: "الإمارات 🇦🇪" },
  // الكويت 🇰🇼
  { name: "New V.", text: "متقن عمله ومحترف جدا انصح الجميع بالتعامل معاه", country: "الكويت 🇰🇼" },
  { name: "Alioo A.", text: "خدمة مميزة وتعامل راقي وشخص جدير بالثقة انصح الجميع بالتعامل معه", country: "الكويت 🇰🇼" },
  { name: "طموح ل.", text: "ممتاز ومحترف، أنصح الجميع بالتعامل معه", country: "الكويت 🇰🇼" },
  { name: "يزن ا.", text: "خدمة ممتازة وتعامل احترافي", country: "الأردن 🇯🇴" },
  { name: "Hussain R.", text: "أفضل من تعاملت معهم في هذا المجال", country: "الكويت 🇰🇼" },
  { name: "Zaid A.", text: "Very satisfied with the work, will hire again", country: "الكويت 🇰🇼" },
  { name: "Ashraf S.", text: "Professional and reliable, highly recommend", country: "الكويت 🇰🇼" },
  { name: "Smb S.", text: "عمل رائع وتعامل راقي جداً", country: "الكويت 🇰🇼" },
  { name: "Mohammed E.", text: "Best scraping service I have used", country: "الكويت 🇰🇼" },
  { name: "Baddai A.", text: "Highly skilled and professional", country: "الكويت 🇰🇼" },
  { name: "Shkawe S.", text: "Great work and amazing communication", country: "الكويت 🇰🇼" },
  { name: "Adel B.", text: "Excellent service, highly recommended", country: "الكويت 🇰🇼" },
  // قطر 🇶🇦
  { name: "Elias A.", text: "تعامل رائع وفي قمة الأخلاق وقام بعمل مالم يستطع غيره عمله بكل امانه، وبسعر أكثر من ممتاز... مثال على السرعه والدقه والاحترافية", country: "قطر 🇶🇦" },
  { name: "ريم ا.", text: "شخص محترف ودقيق في عمله، سلم العمل قبل الموعد", country: "قطر 🇶🇦" },
  { name: "عبد الحكيم ع.", text: "عمل رائع وجودة عالية وتعامل راقي", country: "قطر 🇶🇦" },
  { name: "Hamza A.", text: "Professional work and great communication", country: "قطر 🇶🇦" },
  { name: "Hussam ح.", text: "شخص محترم وعمله دقيق جداً", country: "قطر 🇶🇦" },
  { name: "Yaa B.", text: "Great work, highly recommended!", country: "قطر 🇶🇦" },
  { name: "Rami S.", text: "محترف ودقيق وسريع في التسليم", country: "قطر 🇶🇦" },
  { name: "Ahmed E.", text: "Excellent service and fast delivery", country: "قطر 🇶🇦" },
  { name: "الحاج ع.", text: "تجربة ممتازة وعمل احترافي", country: "قطر 🇶🇦" },
  { name: "Mahmoud K.", text: "Excellent work and great communication", country: "قطر 🇶🇦" },
  // مصر 🇪🇬
  { name: "هشام ب.", text: "اروع انسان و اطيب شخص تعاملت معه... ضل معي اكتر من 20 يوم و هو يعدلي عل المشروع و صابر معي احترافي في عمله و صبور.", country: "مصر 🇪🇬" },
  { name: "أحمد ا.", text: "تعامل راقي وعمل ممتاز ودقيق", country: "مصر 🇪🇬" },
  { name: "Hany E.", text: "Professional and trustworthy", country: "مصر 🇪🇬" },
  { name: "محمود ب.", text: "تعامل ممتاز ونتائج رائعة", country: "مصر 🇪🇬" },
  { name: "محمد أيمن ا.", text: "أفضل مبرمج تعاملت معه، محترف وصبور", country: "مصر 🇪🇬" },
  { name: "Sami E.", text: "عمل ممتاز وتواصل سريع", country: "مصر 🇪🇬" },
  // الجزائر 🇩🇿
  { name: "كريم ب.", text: "عمل ممتاز ومحترف جداً، أنصح بالتعامل معه", country: "الجزائر 🇩🇿" },
  // المغرب 🇲🇦
  { name: "يوسف م.", text: "خدمة رائعة وتعامل راقي، شكراً جزيلاً", country: "المغرب 🇲🇦" },
  // العراق 🇮🇶
  { name: "علي ح.", text: "عمل احترافي وتعامل راقي جداً", country: "العراق 🇮🇶" },
  { name: "حسين ك.", text: "ممتاز ودقيق في العمل، أنصح بالتعامل معه", country: "العراق 🇮🇶" },
];

const upworkTestimonials: Testimonial[] = [
  { name: "عميل دولي", text: "Great guy to work with. Understands what needs to be done and is highly efficient.", country: "فريلانسر" },
  { name: "عميل دولي", text: "Completed requested work on time. Communication was clear and timely.", country: "فريلانسر" },
  { name: "عميل دولي", text: "Ragab was very helpful, quick, responsive, and had no trouble comprehending my task and resolving it in a professional manner. He exceeded our expectation by delivering not only what we asked for but also additional insights.", country: "فريلانسر" },
];

const internationalTestimonials: Testimonial[] = [
  { name: "Tom B.", text: "Ragab delivered exceptional work on our Django project. His attention to detail and ability to handle complex requirements was impressive. Highly recommend for any Python/Django work!", country: "USA 🇺🇸" },
  { name: "Kate R.", text: "Outstanding Next.js developer! Built our e-commerce platform from scratch with excellent performance and clean code. Will definitely work with him again.", country: "UK 🇬🇧" },
  { name: "Mark L.", text: "Ragab scraped over 100,000 records for our market research. Delivered on time with perfect data quality. Best scraping service I have used!", country: "Canada 🇨🇦" },
  { name: "Anna K.", text: "Professional, reliable, and skilled developer. Our Django REST API was delivered with excellent documentation and clean architecture.", country: "Germany 🇩🇪" },
  { name: "Ben W.", text: "Fantastic experience! Ragab built our automation system that saves us hours every day. Great communication throughout the project.", country: "Australia 🇦🇺" },
  { name: "Claire D.", text: "Excellent full-stack developer. Built our complete SaaS platform with Django backend and Next.js frontend. Very professional!", country: "France 🇫🇷" },
  { name: "Omar K.", text: "Best developer in the region for web scraping and automation. Delivered complex project with ease. 5 stars all the way!", country: "UAE 🇦🇪" },
  { name: "Erik S.", text: "Ragab exceeded our expectations with the Next.js dashboard. Fast, responsive, and beautifully designed. Highly recommended!", country: "Sweden 🇸🇪" },
];

// Upwork first (featured), then Khamsat, then international — matching the
// original order before it shuffled them at render time.
export const testimonials: Testimonial[] = [
  ...upworkTestimonials,
  ...khamsatTestimonials,
  ...internationalTestimonials,
];

export const testimonialsCount = testimonials.length;

export const siteUrl = "https://ragabghazey.com";
export const contactEmail = "contact@ragabghazey.com";
export const whatsappNumber = "201036861414";
export const whatsappText = "مرحباً رجب، تواصلت معك من موقعك";
