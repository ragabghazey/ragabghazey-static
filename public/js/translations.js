// Language Translations
const translations = {
    ar: {
        // Navigation
        nav_home: 'الرئيسية',
        nav_services: 'الخدمات',
        nav_portfolio: 'أعمالي',
        nav_testimonials: 'التقييمات',
        nav_cv: 'السيرة الذاتية',
        nav_contact: 'تواصل معي',
        
        // Hero Section
        hero_greeting: 'مرحباً، أنا',
        hero_name: 'رجب',
        hero_name_accent: 'غازي',
        hero_specialization: 'مطور ويب متخصص في <span class="highlight">Django</span> و <span class="highlight">Web Scraping</span> و <span class="highlight">الأتمتة</span>',
        hero_about: 'أبني منصات وأنظمة بيانات تشتغل في الإنتاج فعلاً — منصة بيع متعددة التجار عليها تجار حقيقيون، وتطبيق منشور على <strong>App Store</strong>، وقواعد بيانات توصل لـ<strong>150 ألف صنف</strong>. أشتغل من أول الفكرة لحد التشغيل على السيرفر، ومتابعة بعد التسليم.',
        stat_clients: 'عميل سعيد',
        stat_years: 'سنوات خبرة',
        stat_projects: 'مشروع منجز',
        btn_contact: 'ابدأ مشروع',
        btn_portfolio: 'شاهد أعمالي',
        btn_cv: 'السيرة الذاتية',
        
        // Services Section
        services_title: 'خدماتي',
        services_subtitle: 'حلول برمجية متكاملة تناسب احتياجاتك',
        
        service1_page: 'تفاصيل الخدمة',
        service1_title: 'منصات SaaS مخصصة',
        service1_desc: 'منتج متعدد العملاء بحسابات واشتراكات ولوحات تحكم وصلاحيات — من أول تسجيل العميل لحد الفوترة والتقارير.',
        service1_feature1: '<i class="fas fa-check"></i> حسابات وصلاحيات',
        service1_feature2: '<i class="fas fa-check"></i> اشتراكات وباقات',
        service1_feature3: '<i class="fas fa-check"></i> لوحات تحكم وتقارير',
        service1_feature4: '<i class="fas fa-check"></i> واجهات برمجية REST',
        service2_title: 'أتمتة العمليات',
        service2_desc: 'تحويل الشغل اليدوي المتكرر إلى أنظمة تشتغل لوحدها: جدولة، إشعارات، تقارير دورية، وربط بين أدواتك الحالية.',
        service2_feature1: '<i class="fas fa-check"></i> مهام مجدولة',
        service2_feature2: '<i class="fas fa-check"></i> إشعارات واتساب وتيليجرام',
        service2_feature3: '<i class="fas fa-check"></i> تقارير تلقائية',
        service2_feature4: '<i class="fas fa-check"></i> مراقبة وتنبيه',
        service3_title: 'استخراج ومعالجة البيانات',
        service3_desc: 'بناء قواعد بيانات من مصادر منتشرة: استخراج على نطاق واسع، تنظيف وتوحيد، إزالة تكرار، وتسليم جاهز للاستخدام.',
        service3_feature1: '<i class="fas fa-check"></i> استخراج بمئات الآلاف',
        service3_feature2: '<i class="fas fa-check"></i> تنظيف وتوحيد',
        service3_feature3: '<i class="fas fa-check"></i> إزالة التكرار',
        service3_feature4: '<i class="fas fa-check"></i> تصدير أو واجهة برمجية',
        service4_title: 'أنظمة التجارة الإلكترونية',
        service4_desc: 'متاجر وأنظمة طلبات ومخزون مبنية على طريقة بيعك الفعلية — بما فيها البيع عبر واتساب وتتبّع الطلبات.',
        service4_feature1: '<i class="fas fa-check"></i> كتالوج ومخزون',
        service4_feature2: '<i class="fas fa-check"></i> طلبات وتتبّع',
        service4_feature3: '<i class="fas fa-check"></i> بيع عبر واتساب',
        service4_feature4: '<i class="fas fa-check"></i> لوحة للتاجر',
        service5_title: 'تكامل الأنظمة',
        service5_desc: 'ربط نظامك ببوابات الدفع وشركات الشحن والخدمات الخارجية، وبناء واجهات برمجية تربط أنظمتك ببعضها.',
        service5_feature1: '<i class="fas fa-check"></i> بوابات دفع',
        service5_feature2: '<i class="fas fa-check"></i> شركات شحن',
        service5_feature3: '<i class="fas fa-check"></i> واجهات طرف ثالث',
        service5_feature4: '<i class="fas fa-check"></i> Webhooks',
        process1_title: 'الفهم',
        process1_desc: 'نتكلم عن نشاطك والمشكلة اللي بتحلّها، والمخرجات المتوقعة، وأي قيود عندك.',
        process1_duration: 'نفس اليوم',
        process2_title: 'التصميم التقني',
        process2_desc: 'أحدد بنية النظام وقاعدة البيانات والتكاملات، وتستلم نطاق عمل مكتوب بسعر ومدة.',
        process2_duration: 'خلال 24 ساعة',
        process3_title: 'التنفيذ',
        process3_desc: 'بناء على مراحل، تشوف نتيجة شغّالة من أول مرحلة وتعلّق عليها بدل ما تستنى للآخر.',
        process3_duration: 'حسب حجم المشروع',
        process4_title: 'الاختبار',
        process4_desc: 'اختبار الوظائف والتكاملات وسلوك النظام تحت الضغط، وسد الثغرات قبل ما يشوفه عميلك.',
        process4_duration: 'قبل كل تسليم',
        process5_title: 'النشر والتشغيل',
        process5_desc: 'رفع على السيرفر وضبط النسخ الاحتياطي والشهادات والمراقبة، وشرح التشغيل لفريقك.',
        process5_duration: 'ضمن التسليم',
        process6_title: 'المتابعة',
        process6_desc: 'إصلاح أي مشكلة بعد الإطلاق وتطوير النظام مع نمو نشاطك.',
        process6_duration: 'دعم بعد التسليم',
        why_title: 'ليه تشتغل معايا',
        why_subtitle: 'كل نقطة تحت تقدر تتأكد منها بنفسك من نفس الصفحة',
        why1_title: 'أنظمة في الإنتاج مش نماذج',
        why1_desc: 'منصة شغالة بتجار حقيقيين وتطبيق منشور على App Store — تقدر تفتحهم دلوقتي من الروابط تحت.',
        why2_title: 'خبرة بيانات ضخمة',
        why2_desc: 'قواعد بيانات بـ150 و135 و26 ألف صنف، مبنية بمعدل حظر صفر وقابلة للاستئناف بعد أي انقطاع.',
        why3_title: 'ملكية تقنية كاملة',
        why3_desc: 'من بنية النظام للكود للسيرفر والنشر والمراقبة — مش محتاج تجيب حد تاني يشغّل اللي بنيته.',
        why4_title: 'نطاق عمل مكتوب',
        why4_desc: 'تعرف إيه اللي هيتنفذ وإيه اللي مش داخل وبكام وفي أد إيه، قبل ما أبدأ.',
        why5_title: 'كود تملكه وتكمّل عليه',
        why5_desc: 'تستلم الكود كامل مع شرح التشغيل، وأي مطور بعدي يقدر يكمّل. مش بربط حد بيا.',
        why6_title: 'عربي وإنجليزي',
        why6_desc: 'شغل مع عملاء في الخليج ومصر وخارج المنطقة — تواصل وتسليم ومتابعة بأي من اللغتين.',
        // Portfolio Section
        portfolio_title: 'أعمالي',
        portfolio_subtitle: 'نماذج من المشاريع التي أنجزتها',
        filter_all: 'الكل',
        filter_scraping: 'Web Scraping',
        filter_automation: 'أتمتة',
        filter_web: 'مواقع',
        filter_apps: 'تطبيقات',
        
        project1_title: 'طلبك — منصة بيع عبر واتساب',
        project1_desc: 'منصة SaaS متعددة التجار: متجر لكل تاجر، إدارة طلبات ومخزون، إشعارات واتساب تلقائية، اشتراكات وباقات، ولوحة إدارة مركزية. شغالة بتجار حقيقيين.',
        project1_link: 'زيارة المنصة',
        project1_case: 'دراسة الحالة',
        project2_title: 'القرآن الكريم — تطبيق منشور',
        project2_desc: 'مصحف كامل بواجهة عربية وروسية، تلاوات صوتية، عمل بدون إنترنت، ومكتبة كتب. منشور على App Store ويعمل كتطبيق ويب PWA.',
        project2_link: 'على App Store',
        project3_title: 'قاعدة بيانات دوائية — 135 ألف صنف',
        project3_desc: 'دمج مصدرين عامّين في قاعدة واحدة موحّدة تشمل المادة الفعالة والأسعار والأشكال الدوائية، مع معالجة التكرار واختلاف التسميات.',
        project4_case: 'دراسة الحالة',
        project4_title: 'كتالوج متجر عالمي — 150 ألف منتج',
        project4_desc: 'سكربر قابل للاستئناف بعد الانقطاع، بمعدل حظر صفر عبر التحكم في وتيرة الطلبات بدل الاعتماد على البروكسيات.',
        project5_case: 'دراسة الحالة',
        project5_title: 'تكامل دفع وشحن لمنصة شحن',
        project5_desc: 'ربط بوابة دفع تدعم Apple Pay وتكامل مع شركات شحن متعددة لإصدار بوالص الشحن وتتبّعها آلياً من داخل النظام.',
        project6_title: 'تطبيق توصيل متعدد المتاجر',
        project6_desc: 'واجهة متجر سريعة مع لوحة تحكم للتجار وتتبّع الطلبات، تخدم فروعاً يزيد كتالوج أحدها عن 5 آلاف صنف.',
        project7_title: 'كتالوج بقالة — 26 ألف صنف بالباركود',
        project7_desc: 'استخراج كتالوج سلاسل سوبرماركت كامل بالباركود والأسعار والتصنيفات، جاهز للربط بأنظمة نقاط البيع والمخزون.',
        project8_title: 'دليل صناعي — 10,567 منشأة',
        project8_desc: 'استخراج دليل مصانع كامل ببيانات التواصل والنشاط، مع تنظيف الأرقام وإزالة التكرار وتصدير جاهز للاستخدام.',
        project9_title: 'قاعدة بيانات شركات ومكاتب خدمات',
        project9_desc: 'بحث منهجي على مستوى المدن والأحياء لتغطية أوسع من البحث العام، مُنفّذ على أربع مراحل قابلة للاستئناف مع تجميع النتائج وتنقيتها.',
        project10_title: 'استخراج بيانات خرائط جوجل',
        project10_desc: 'جمع بيانات الأنشطة التجارية حسب المدينة والحي والتصنيف، مع استئناف تلقائي وتصدير CSV.',
        project11_title: 'مراقبة مواقع وشهادات SSL',
        project11_desc: 'فحص دوري كل 15 دقيقة لتوافر المواقع وصلاحية الشهادات، مع تنبيه فوري بالبريد عند التوقف أو قرب انتهاء الشهادة وإشعار عند التعافي.',
        project12_title: 'بوت تنبيهات فورية على تيليجرام',
        project12_desc: 'مراقبة صفحة أو مصدر بيانات على مدار الساعة وإرسال إشعار تيليجرام في نفس اللحظة التي يتغيّر فيها المحتوى.',
        project13_title: 'أتمتة تنظيف وتوحيد بيانات',
        project13_desc: 'معالجة ملفات ضخمة لتوحيد صيغ أرقام الهواتف والعناوين، وكشف التكرار عبر مصادر مختلفة، وإخراج تقرير بالسجلات المكررة.',
        project14_title: 'لوحة بحث وإدارة بيانات',
        project14_desc: 'واجهة بحث سريعة فوق قاعدة بيانات كبيرة مع فلاتر متعددة وتصدير النتائج، وصلاحيات مستخدمين ولوحة تحكم للإدارة.',
        // Testimonials Section
        testimonials_title: 'آراء العملاء',
        testimonials_subtitle: 'تقييم إيجابي من عملاء محليين ودوليين',
        
        stack_subtitle: 'الأدوات اللي بشتغل بيها من الفكرة لحد التشغيل',
        stack1_title: 'الخادم وقواعد البيانات',
        stack2_title: 'الواجهات',
        stack3_title: 'البيانات والأتمتة',
        stack4_title: 'التشغيل والنشر',
        nav_process: 'إزاي بشتغل',
        process_title: 'إزاي بشتغل',
        process_subtitle: 'من أول رسالة لحد التشغيل — خطوات واضحة ومواعيد معروفة',
        faq_title: 'أسئلة شائعة',
        faq_subtitle: 'الأسئلة اللي بتتسأل قبل بداية أي مشروع',
        faq1_q: 'المشروع بياخد قد إيه؟',
        faq1_a: 'سكربت استخراج بيانات بسيط من يومين لأسبوع. موقع أو لوحة تحكم من أسبوعين لشهر. منصة كاملة بمستخدمين ولوحات إدارة شهر فأكثر. بعد ما نتكلم عن التفاصيل بتستلم مدة محددة مكتوبة، مش تقدير مفتوح.',
        faq2_q: 'بتشتغل بأي طريقة في الدفع؟',
        faq2_a: 'مقدم عند البدء والباقي عند التسليم، وفي المشاريع الكبيرة بنقسمها على مراحل كل مرحلة ليها دفعة. بنتفق على ده مكتوب قبل ما أبدأ.',
        faq3_q: 'هل الكود بيبقى ملكي؟',
        faq3_a: 'أيوه. بتستلم الكود كامل مع شرح التشغيل، وتقدر تكمّل عليه مع أي مطور بعد كده. مش بربط حد بيا.',
        faq4_q: 'لو المشروع فيه تعديلات بعد التسليم؟',
        faq4_a: 'التعديلات اللي جوه نطاق العمل المتفق عليه مجانية. أي إضافة جديدة برّه النطاق بنتفق عليها على حدة.',
        faq5_q: 'بتشتغل مع عملاء برّه مصر؟',
        faq5_a: 'أيوه، أغلب شغلي مع عملاء في الخليج وخارج المنطقة العربية. التواصل بالعربي أو الإنجليزي، والتسليم والمتابعة كلها أونلاين.',
        faq6_q: 'هل استخراج البيانات ده قانوني؟',
        faq6_a: 'بشتغل على البيانات المتاحة للعموم وباحترام شروط استخدام المصدر ومعدلات الطلب المعقولة. لو مشروع فيه شبهة مخالفة بقولك من الأول بدل ما نمشي فيه.',
        // Contact Section
        contact_title: 'تواصل معي',
        contact_subtitle: 'لديك مشروع أو استفسار؟ تواصل معي الآن!',
        contact_email: 'البريد الإلكتروني',
        contact_email_desc: 'للاستفسارات المفصلة',
        form_name: 'الاسم',
        form_name_placeholder: 'اكتب اسمك',
        form_email: 'البريد الإلكتروني',
        form_email_placeholder: 'اكتب بريدك الإلكتروني',
        
        form_company: 'الشركة / النشاط',
        form_whatsapp: 'واتساب',
        form_whatsapp_placeholder: 'مع مفتاح الدولة',
        form_company_placeholder: 'اسم شركتك أو نشاطك',
        form_optional: '(اختياري)',
        form_project_type: 'نوع المشروع',
        form_choose: 'اختر…',
        form_type_saas: 'منصة SaaS',
        form_type_web: 'تطبيق ويب',
        form_type_ecommerce: 'متجر إلكتروني',
        form_type_automation: 'أتمتة',
        form_type_scraping: 'استخراج بيانات',
        form_type_integration: 'تكامل أنظمة',
        form_type_other: 'غير ذلك',
        form_budget: 'الميزانية التقريبية',
        form_not_sure: 'لسه مش محدد',
        form_budget1: 'أقل من $500',
        form_budget2: '$500 – $1,500',
        form_budget3: '$1,500 – $5,000',
        form_budget4: 'أكثر من $5,000',
        form_message: 'احكيلي عن المشروع',
        form_message_placeholder: 'إيه المشكلة اللي عايز تحلّها؟ ومين هيستخدم النظام؟',
        form_submit: 'ابدأ مشروع',
        // Footer
        footer_desc: 'مطور ويب متخصص في استخراج البيانات والأتمتة',
        footer_links: 'روابط سريعة',
        footer_privacy: 'سياسة الخصوصية',
        footer_copyright: '© 2026 رجب غازي. جميع الحقوق محفوظة.',
        
        // Language
        lang_switch: 'English',
        
        // CV Page - Sidebar
        cv_name: 'رجب غازي',
        cv_title: 'مطور ويب',
        cv_sidebar_contact: 'التواصل',
        cv_sidebar_skills: 'المهارات الأساسية',
        cv_sidebar_languages: 'اللغات',
        cv_lang_arabic: 'العربية',
        cv_lang_arabic_level: 'اللغة الأم',
        cv_lang_english: 'الإنجليزية',
        cv_lang_english_level: 'متقدم',
        
        // CV Page - Header
        cv_header_tagline: 'مطور ويب متخصص في Django و Web Scraping والأتمتة',
        cv_stat_years: 'سنوات خبرة',
        cv_stat_clients: 'عميل',
        cv_stat_projects: 'مشروع',
        cv_stat_satisfaction: 'رضا العملاء',
        
        // CV Page - Sections
        cv_about_title: 'نبذة عني',
        cv_about_text: 'مطور ويب بخبرة تزيد عن 7 سنوات في تطوير تطبيقات الويب وأتمتة العمليات واستخراج البيانات. متخصص في بناء حلول برمجية متكاملة باستخدام <strong>Django</strong> و <strong>Next.js</strong> مع التركيز على الجودة والأداء والأمان. عملت مع أكثر من 100 عميل من مختلف أنحاء العالم العربي والغربي، وحققت نسبة رضا 100% على منصات العمل الحر. أتميز بالقدرة على فهم متطلبات العميل وتحويلها إلى حلول تقنية فعالة.',
        cv_experience_title: 'الخبرة العملية',
        cv_exp1_title: 'مطور برمجيات مستقل',
        cv_exp1_company: 'فريلانسر',
        cv_exp1_date: '2019 - الآن',
        cv_exp1_item1: 'تطوير أكثر من 150 مشروع في مجالات Web Scraping والأتمتة وتطوير الويب',
        cv_exp1_item2: 'بناء تطبيقات ويب متكاملة باستخدام Django و Django REST Framework',
        cv_exp1_item3: 'تصميم وتنفيذ أنظمة استخراج بيانات من مواقع متعددة ومعقدة',
        cv_exp1_item4: 'إنشاء بوتات تيليجرام وأنظمة أتمتة للعمليات التجارية',
        cv_exp1_item5: 'تحقيق تقييم 100% إيجابي من أكثر من 100 عميل',
        cv_exp2_title: 'مطور Python',
        cv_exp2_company: 'مشاريع حرة وتعلم ذاتي',
        cv_exp2_date: '2015 - 2019',
        cv_exp2_item1: 'تعلم وإتقان لغة Python وأطر العمل المختلفة',
        cv_exp2_item2: 'بناء أدوات أتمتة ومعالجة بيانات',
        cv_exp2_item3: 'تطوير سكربتات web scraping باستخدام BeautifulSoup و Scrapy',
        cv_exp2_item4: 'العمل على مشاريع شخصية لتطوير المهارات',
        cv_education_title: 'التعليم',
        cv_university: 'جامعة الأزهر',
        cv_degree: 'بكالوريوس - تخرج 2015',
        cv_tech_title: 'التقنيات والأدوات',
        
        // CV Page - Buttons
        cv_btn_download: 'تحميل PDF',
        cv_btn_print: 'طباعة',
        cv_btn_back: 'العودة للموقع',
    },
    en: {
        // Navigation
        nav_home: 'Home',
        nav_services: 'Services',
        nav_portfolio: 'Portfolio',
        nav_testimonials: 'Testimonials',
        nav_cv: 'Resume',
        nav_contact: 'Contact',
        
        // Hero Section
        hero_greeting: 'Hello, I\'m',
        hero_name: 'Ragab',
        hero_name_accent: 'Ghazey',
        hero_specialization: 'Web developer specialising in <span class="highlight">Django</span>, <span class="highlight">Web Scraping</span> and <span class="highlight">automation</span>',
        hero_about: 'I build platforms and data systems that actually run in production — a multi-merchant sales platform with real merchants on it, an app published on the <strong>App Store</strong>, and datasets reaching <strong>150,000 items</strong>. I work from the first idea through to deployment on the server, with follow-up after delivery.',
        stat_clients: 'Happy Clients',
        stat_years: 'Years Experience',
        stat_projects: 'Projects Completed',
        btn_contact: 'Start a project',
        btn_portfolio: 'View Portfolio',
        btn_cv: 'Resume',
        
        // Services Section
        services_title: 'My Services',
        services_subtitle: 'Comprehensive software solutions tailored to your needs',
        
        service1_page: 'Service details',
        service1_title: 'Custom SaaS Platforms',
        service1_desc: 'A multi-tenant product with accounts, subscriptions, dashboards and permissions — from sign-up through to billing and reporting.',
        service1_feature1: '<i class="fas fa-check"></i> Accounts & permissions',
        service1_feature2: '<i class="fas fa-check"></i> Subscriptions & plans',
        service1_feature3: '<i class="fas fa-check"></i> Dashboards & reporting',
        service1_feature4: '<i class="fas fa-check"></i> REST APIs',
        service2_title: 'Business Automation',
        service2_desc: 'Turning repetitive manual work into systems that run themselves: scheduling, notifications, recurring reports, and glue between the tools you already use.',
        service2_feature1: '<i class="fas fa-check"></i> Scheduled jobs',
        service2_feature2: '<i class="fas fa-check"></i> WhatsApp & Telegram alerts',
        service2_feature3: '<i class="fas fa-check"></i> Automated reports',
        service2_feature4: '<i class="fas fa-check"></i> Monitoring & alerting',
        service3_title: 'Data Extraction & Processing',
        service3_desc: 'Building databases out of scattered sources: large-scale extraction, cleaning and normalisation, deduplication, delivered ready to use.',
        service3_feature1: '<i class="fas fa-check"></i> Hundreds of thousands of records',
        service3_feature2: '<i class="fas fa-check"></i> Cleaning & normalisation',
        service3_feature3: '<i class="fas fa-check"></i> Deduplication',
        service3_feature4: '<i class="fas fa-check"></i> Export or API',
        service4_title: 'E-commerce & Order Systems',
        service4_desc: 'Stores, order and inventory systems built around how you actually sell — including selling over WhatsApp and order tracking.',
        service4_feature1: '<i class="fas fa-check"></i> Catalog & inventory',
        service4_feature2: '<i class="fas fa-check"></i> Orders & tracking',
        service4_feature3: '<i class="fas fa-check"></i> Selling over WhatsApp',
        service4_feature4: '<i class="fas fa-check"></i> Merchant dashboard',
        service5_title: 'System Integration',
        service5_desc: 'Connecting your system to payment gateways, shipping carriers and third-party services, and building the APIs that tie your systems together.',
        service5_feature1: '<i class="fas fa-check"></i> Payment gateways',
        service5_feature2: '<i class="fas fa-check"></i> Shipping carriers',
        service5_feature3: '<i class="fas fa-check"></i> Third-party APIs',
        service5_feature4: '<i class="fas fa-check"></i> Webhooks',
        process1_title: 'Discovery',
        process1_desc: 'We talk through your business, the problem being solved, the expected deliverables and any constraints.',
        process1_duration: 'Same day',
        process2_title: 'Architecture',
        process2_desc: 'I define the system structure, database and integrations, and you get a written scope with a price and a deadline.',
        process2_duration: 'Within 24 hours',
        process3_title: 'Development',
        process3_desc: 'Built in milestones — you see something working from the first one and comment on it, rather than waiting until the end.',
        process3_duration: 'Depends on scope',
        process4_title: 'Testing',
        process4_desc: 'Functionality, integrations and behaviour under load are tested, and gaps closed before your customers meet them.',
        process4_duration: 'Before every handover',
        process5_title: 'Deployment',
        process5_desc: 'Deployed to the server with backups, certificates and monitoring configured, and the operation explained to your team.',
        process5_duration: 'Included',
        process6_title: 'Support',
        process6_desc: 'Fixes after launch, and development as your business grows.',
        process6_duration: 'Post-delivery',
        why_title: 'Why Work With Me',
        why_subtitle: 'Every point below is something you can verify on this page',
        why1_title: 'Production systems, not demos',
        why1_desc: 'A platform running with real merchants and an app published on the App Store — both openable right now from the links below.',
        why2_title: 'Large-data experience',
        why2_desc: 'Databases of 150,000, 135,000 and 26,000 records, built at a zero block rate and resumable after any interruption.',
        why3_title: 'Full technical ownership',
        why3_desc: 'Architecture, code, server, deployment and monitoring — you do not need a second person to run what I built.',
        why4_title: 'A written scope',
        why4_desc: 'You know what will be built, what will not, at what price and in what time, before I start.',
        why5_title: 'Code you own',
        why5_desc: 'You receive the full source with setup instructions, and any developer can continue from it. I do not lock clients in.',
        why6_title: 'Arabic and English',
        why6_desc: 'Clients across the Gulf, Egypt and beyond — communication, delivery and support in either language.',
        // Portfolio Section
        portfolio_title: 'My Portfolio',
        portfolio_subtitle: 'Samples of projects I\'ve completed',
        filter_all: 'All',
        filter_scraping: 'Web Scraping',
        filter_automation: 'Automation',
        filter_web: 'Websites',
        filter_apps: 'Mobile Apps',
        
        project1_title: 'Tallabak — WhatsApp Commerce Platform',
        project1_desc: 'Multi-merchant SaaS: a storefront per merchant, order and inventory management, automated WhatsApp notifications, subscription plans and a central admin panel. Live with real merchants.',
        project1_link: 'Visit platform',
        project1_case: 'Case study',
        project2_title: 'Quran Kareem — Published App',
        project2_desc: 'Full mushaf with Arabic and Russian interfaces, audio recitations, offline mode and a book library. Published on the App Store and running as a PWA.',
        project2_link: 'On the App Store',
        project3_title: 'Pharmaceutical Database — 135K Items',
        project3_desc: 'Two public sources merged into one dataset covering active ingredients, prices and dosage forms, with deduplication and name normalisation.',
        project4_case: 'دراسة الحالة',
        project4_case: 'Case study',
        project4_title: 'Global Store Catalog — 150K Products',
        project4_desc: 'A resumable scraper with a zero block rate, achieved by pacing requests rather than relying on proxies.',
        project5_case: 'دراسة الحالة',
        project5_case: 'Case study',
        project5_title: 'Payment & Shipping Integration',
        project5_desc: 'A payment gateway with Apple Pay support, plus multi-carrier shipping integration that issues and tracks waybills from inside the system.',
        project6_title: 'Multi-Vendor Delivery App',
        project6_desc: 'A fast storefront with a vendor dashboard and order tracking, serving branches whose largest catalog exceeds 5,000 items.',
        project7_title: 'Grocery Catalog — 26K Barcoded Items',
        project7_desc: 'A full supermarket-chain catalog extracted with barcodes, prices and categories, ready to feed POS and inventory systems.',
        project8_title: 'Industrial Directory — 10,567 Facilities',
        project8_desc: 'A full factory directory extracted with contact and activity data, cleaned of duplicates and exported ready to use.',
        project9_title: 'Business Services Directory',
        project9_desc: 'A systematic city and district level sweep for far wider coverage than a plain search, run as four resumable stages with merged, cleaned output.',
        project10_title: 'Google Maps Data Extraction',
        project10_desc: 'Business data collected by city, district and category, with automatic resume and CSV export.',
        project11_title: 'Uptime & SSL Certificate Monitoring',
        project11_desc: 'A check every 15 minutes for site availability and certificate validity, with an immediate email alert on downtime or near expiry, and a recovery notice.',
        project12_title: 'Instant Telegram Alert Bot',
        project12_desc: 'Round-the-clock monitoring of a page or data source, sending a Telegram notification the moment the content changes.',
        project13_title: 'Data Cleaning & Normalisation',
        project13_desc: 'Large files processed to normalise phone and address formats, detect duplicates across sources, and produce a report of the duplicate records.',
        project14_title: 'Search & Data Management Dashboard',
        project14_desc: 'A fast search interface over a large database with multiple filters and result export, plus user permissions and an admin panel.',
        // Testimonials Section
        testimonials_title: 'Client Reviews',
        testimonials_subtitle: 'positive reviews from local and international clients',
        
        stack_subtitle: 'What I build with, from idea to running system',
        stack1_title: 'Backend & Databases',
        stack2_title: 'Frontend',
        stack3_title: 'Data & Automation',
        stack4_title: 'Deployment & Ops',
        nav_process: 'How I Work',
        process_title: 'How I Work',
        process_subtitle: 'From the first message to a running system, with clear steps and known timings',
        faq_title: 'Frequently Asked',
        faq_subtitle: 'The questions that come up before every project',
        faq1_q: 'How long does a project take?',
        faq1_a: 'A simple scraper: two days to a week. A site or dashboard: two weeks to a month. A full platform with users and admin panels: a month or more. Once we discuss the details you get a fixed written timeline, not an open estimate.',
        faq2_q: 'How do payments work?',
        faq2_a: 'A deposit to start and the balance on delivery; larger projects are split into stages, each with its own payment. It is agreed in writing before I begin.',
        faq3_q: 'Do I own the code?',
        faq3_a: 'Yes. You receive the full source with setup instructions, and any developer can continue from it. I do not lock clients in.',
        faq4_q: 'What about changes after delivery?',
        faq4_a: 'Changes within the agreed scope are free. Anything genuinely new is quoted separately.',
        faq5_q: 'Do you work with clients outside Egypt?',
        faq5_a: 'Yes, most of my work is with clients in the Gulf and beyond. Arabic or English, delivered and supported entirely online.',
        faq6_q: 'Is web scraping legal?',
        faq6_a: 'I work with publicly available data, respecting each source’s terms of use and sensible request rates. If a project looks like it crosses a line, I say so up front rather than taking it on.',
        // Contact Section
        contact_title: 'Contact Me',
        contact_subtitle: 'Have a project or inquiry? Contact me now!',
        contact_email: 'Email',
        contact_email_desc: 'For detailed inquiries',
        form_name: 'Name',
        form_name_placeholder: 'Enter your name',
        form_email: 'Email',
        form_email_placeholder: 'Enter your email',
        
        form_company: 'Company / business',
        form_whatsapp: 'WhatsApp',
        form_whatsapp_placeholder: 'With country code',
        form_company_placeholder: 'Your company or business name',
        form_optional: '(optional)',
        form_project_type: 'Project type',
        form_choose: 'Choose…',
        form_type_saas: 'SaaS platform',
        form_type_web: 'Web application',
        form_type_ecommerce: 'E-commerce',
        form_type_automation: 'Automation',
        form_type_scraping: 'Web scraping',
        form_type_integration: 'System integration',
        form_type_other: 'Something else',
        form_budget: 'Approximate budget',
        form_not_sure: 'Not sure yet',
        form_budget1: 'Under $500',
        form_budget2: '$500 – $1,500',
        form_budget3: '$1,500 – $5,000',
        form_budget4: 'Over $5,000',
        form_message: 'Tell me about the project',
        form_message_placeholder: 'What problem are you solving, and who will use the system?',
        form_submit: 'Start a project',
        // Footer
        footer_desc: 'Web Developer specializing in data extraction and automation',
        footer_links: 'Quick Links',
        footer_privacy: 'Privacy Policy',
        footer_copyright: '© 2026 Ragab Ghazey. All rights reserved.',
        
        // Language
        lang_switch: 'العربية',
        
        // CV Page - Sidebar
        cv_name: 'Ragab Ghazey',
        cv_title: 'Web Developer',
        cv_sidebar_contact: 'Contact',
        cv_sidebar_skills: 'Core Skills',
        cv_sidebar_languages: 'Languages',
        cv_lang_arabic: 'Arabic',
        cv_lang_arabic_level: 'Native',
        cv_lang_english: 'English',
        cv_lang_english_level: 'Advanced',
        
        // CV Page - Header
        cv_header_tagline: 'Web Developer specializing in Django, Web Scraping & Automation',
        cv_stat_years: 'Years Experience',
        cv_stat_clients: 'Clients',
        cv_stat_projects: 'Projects',
        cv_stat_satisfaction: 'Client Satisfaction',
        
        // CV Page - Sections
        cv_about_title: 'About Me',
        cv_about_text: 'Web developer with over 7 years of experience in web application development, process automation, and data extraction. Specialized in building comprehensive software solutions using <strong>Django</strong> and <strong>Next.js</strong> with a focus on quality, performance, and security. I have worked with over 100 clients from across the Arab world and the West, achieving a 100% satisfaction rate on freelance platforms. I excel at understanding client requirements and transforming them into effective technical solutions.',
        cv_experience_title: 'Work Experience',
        cv_exp1_title: 'Freelance Software Developer',
        cv_exp1_company: 'Freelancer',
        cv_exp1_date: '2019 - Present',
        cv_exp1_item1: 'Developed over 150 projects in Web Scraping, Automation, and Web Development',
        cv_exp1_item2: 'Built complete web applications using Django and Django REST Framework',
        cv_exp1_item3: 'Designed and implemented data extraction systems from multiple complex websites',
        cv_exp1_item4: 'Created Telegram bots and business process automation systems',
        cv_exp1_item5: 'Achieved 100% positive reviews from over 100 clients',
        cv_exp2_title: 'Python Developer',
        cv_exp2_company: 'Freelance Projects & Self-Learning',
        cv_exp2_date: '2015 - 2019',
        cv_exp2_item1: 'Learned and mastered Python and various frameworks',
        cv_exp2_item2: 'Built automation and data processing tools',
        cv_exp2_item3: 'Developed web scraping scripts using BeautifulSoup and Scrapy',
        cv_exp2_item4: 'Worked on personal projects to develop skills',
        cv_education_title: 'Education',
        cv_university: 'Al-Azhar University',
        cv_degree: 'Bachelor\'s Degree - Graduated 2015',
        cv_tech_title: 'Technologies & Tools',
        
        // CV Page - Buttons
        cv_btn_download: 'Download PDF',
        cv_btn_print: 'Print',
        cv_btn_back: 'Back to Site',
    }
};

// Language Manager
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('lang') || 'ar';
        this.init();
    }
    
    init() {
        this.applyLanguage(this.currentLang);
        this.setupSwitcher();
    }
    
    setupSwitcher() {
        const switcher = document.getElementById('langSwitcher');
        if (switcher) {
            switcher.addEventListener('click', () => this.toggleLanguage());
        }
    }
    
    toggleLanguage() {
        this.currentLang = this.currentLang === 'ar' ? 'en' : 'ar';
        localStorage.setItem('lang', this.currentLang);
        this.applyLanguage(this.currentLang);
    }
    
    applyLanguage(lang) {
        const html = document.documentElement;
        
        // Set direction and lang attribute
        html.setAttribute('lang', lang);
        html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        
        // Update body class for CSS
        document.body.classList.remove('lang-ar', 'lang-en');
        document.body.classList.add(`lang-${lang}`);
        
        // Translate all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            if (translations[lang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][key];
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });
        
        // Update language switcher text
        const switcher = document.getElementById('langSwitcher');
        if (switcher) {
            const switcherText = switcher.querySelector('span') || switcher;
            switcherText.textContent = translations[lang].lang_switch;
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.langManager = new LanguageManager();
});
