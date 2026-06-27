// Translations Object
const translations = {
  ar: {
    dir: "rtl",
    nav: {
      brand: "Wajda Tech",
      home: "الرئيسية",
      services: "خدماتنا",
      portfolio: "أعمالنا",
      contact: "اتصل بنا"
    },
    hero: {
      welcome: "نحن Wajda Tech",
      typing: [
        "تطوير المواقع الإلكترونية",
        "تطبيقات الهواتف الذكية",
        "تصميم واجهات المستخدم UI/UX",
        "مونتاج الفيديو الاحترافي",
        "حملات الإعلانات الممولة"
      ],
      description: "شريكك للنجاح الرقمي في الجزائر 🇩🇿. نقوم بتصميم وبناء حلول برمجية متكاملة: مواقع إلكترونية حديثة، تطبيقات هواتف مخصصة، أنظمة ذكية، تصاميم هوية بصرية إبداعية، مونتاج فيديو احترافي، وحملات إعلانية ممولة لتطوير أعمالك وضمان نموها.",
      btnEmail: "أرسل بريداً إلكترونياً",
      btnWhatsapp: "تحدث معنا على واتساب"
    },
    services: {
      title: "ما الذي يمكننا القيام به لأجلك",
      badge: "خدماتنا",
      description: "اكتشف الخدمات الرقمية المميزة التي تقدمها وجدة تيك، والمصممة لضمان نجاح ونمو عملك في السوق الرقمي.",
      webDev: {
        title: "تطوير المواقع والتطبيقات",
        desc: "نقوم بتصميم وبناء مواقع إئتلافية ديناميكية وتطبيقات هواتف مخصصة تناسب احتياجات عملك وتضمن أداءً عالياً."
      },
      design: {
        title: "التصميم وتجربة المستخدم UI/UX",
        desc: "نصمم واجهات مستخدم جميلة وعصرية وسهلة الاستخدام إلى جانب هويات بصرية وتصاميم جرافيك مميزة تجذب الانتباه."
      },
      video: {
        title: "مونتاج الفيديو الاحترافي",
        desc: "نقدم خدمات مونتاج الفيديو الاحترافي، والمؤثرات البصرية، وتعديل الألوان لإنتاج محتوى ترويجي جذاب ومؤثر."
      },
      ads: {
        title: "حملات الإعلانات الممولة",
        desc: "نقوم بإنشاء وإدارة وتحسين الحملات الإعلانية الممولة على منصات التواصل الاجتماعي لزيادة المبيعات والانتشار."
      }
    },
    work: {
      title: "أعمالنا ومشاريعنا",
      description: "تصفح المشاريع والحلول الرقمية التي تم تصميمها وتطويرها بنجاح بواسطة فريق وجدة تيك لمختلف العملاء.",
      filterAll: "كل المشاريع",
      filterWeb: "مواقع ويب",
      filterApp: "تطبيقات الهواتف",
      filterDesign: "التصميم والجرافيك",
      filterVideo: "مونتاج الفيديو",
      filterAI: "أتمتة الذكاء الاصطناعي",
      btnView: "زيارة الموقع",
      projects: {
        houcine: "متجر إلكتروني سريع ومتجاوب بالكامل لبيع الهواتف النقالة وإكسسواراتها، متاح لتجربة شراء سلسة وسريعة.",
        academy: "منصة تعليمية تفاعلية تقدم دروساً وفروضاً واختبارات لجميع الأطوار التعليمية في الجزائر.",
        afiidah: "موقع ويب تعريفي مميز لشركة Afiidah يقدم خدمات الشركة بأسلوب عصري وتجاوب كامل.",
        dawidoc: "تطبيق متكامل لحجز مواعيد الأطباء والبحث عن التخصصات الطبية وتسهيل التواصل في الجزائر.",
        linkus: "تصميم واجهة المستخدم وتجربة المستخدم (UI/UX) لتطبيق Linkus، مع التركيز على سهولة الاستخدام والمظهر العصري.",
        designSocial: "حزمة تصاميم احترافية لمنشورات مواقع التواصل الاجتماعي لزيادة التفاعل وإبراز الهوية البصرية.",
        designBranding: "تصميم هوية بصرية كاملة وتنسيقات تسويقية مبتكرة لتعزيز حضور العلامة التجارية.",
        designVisual: "تصميم بنرات ولوحات إعلانية مميزة وشعارات مخصصة تتناسب مع متطلبات السوق.",
        videoCommercial: "فيديو ترويجي إعلاني ديناميكي مع تأثيرات بصرية جذابة وتعديل ألوان سينمائي متناسق.",
        videoTafadis: "إعلان تجاري ترويجي مميز يتضمن مؤثرات صوتية احترافية، تعديل ألوان متناسق وإخراج عالي الجودة.",
        videoCake: "فيديو ترويجي قصير ومميز للمأكولات والحلويات مع انتقالات سلسة ومونتاج سينمائي جذاب.",
        videoYoutube: "مونتاج وتعديل محتوى يوتيوب بطريقة مشوقة مع إضافة نصوص، انتقالات وتأثيرات بصرية مميزة.",
        aiChatbot: "نظام رد ذكي متكامل مدعوم بالذكاء الاصطناعي لأتمتة خدمة العملاء والرد التلقائي السريع على الرسائل والاستفسارات."
      }
    },
    journey: {
      title: "مسيرتنا وخبراتنا",
      milestones: [
        {
          title: "البرمجة المتكاملة",
          subtitle: "تطوير المواقع والتطبيقات",
          desc: "نجحنا في تصميم وتطوير ونشر منصات ويب قوية وتطبيقات هواتف ذكية متكاملة لعملائنا في السوق الجزائري."
        },
        {
          title: "تصميم واجهات وتجربة المستخدم UI/UX",
          subtitle: "تصميم الهويات البصرية",
          desc: "نصمم واجهات عصرية للهواتف والمواقع، شعارات مخصصة، وحزم تصاميم جرافيك تعبر عن جوهر علامتك التجارية."
        },
        {
          title: "مونتاج الفيديو الاحترافي",
          subtitle: "صناعة المحتوى المرئي",
          desc: "ننتج فيديوهات ترويجية، إعلانات تجارية، موشن جرافيك، وتعديل محتوى يوتيوب بأسلوب يجذب المشاهد ويقنعه."
        },
        {
          title: "حملات الإعلانات الممولة",
          subtitle: "التسويق الرقمي والسوشيال ميديا",
          desc: "نساعدك في زيادة مبيعاتك عبر حملات تسويقية مستهدفة ومدروسة على فيسبوك، إنستغرام، غوغل وتيك توك."
        }
      ]
    },
    footer: "حقوق النشر © وجدة تيك. جميع الحقوق محفوظة."
  },
  fr: {
    dir: "ltr",
    nav: {
      brand: "Wajda Tech",
      home: "Accueil",
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact"
    },
    hero: {
      welcome: "Nous sommes Wajda Tech",
      typing: [
        "Développement de Sites Web",
        "Applications Mobiles",
        "Design d'interface UI/UX",
        "Montage Vidéo Professionnel",
        "Campagnes de Publicités Sponsorisées"
      ],
      description: "Votre partenaire pour le succès numérique en Algérie 🇩🇿. Nous concevons et développons des solutions logicielles intégrées : sites web modernes, applications mobiles sur mesure, systèmes intelligents, designs de marque créatifs, montage vidéo à fort impact et campagnes publicitaires sponsorisées pour booster votre activité.",
      btnEmail: "Envoyer un e-mail",
      btnWhatsapp: "Discuter sur WhatsApp"
    },
    services: {
      title: "Ce que nous pouvons faire pour vous",
      badge: "Services",
      description: "Découvrez les services numériques haut de gamme proposés par Wajda Tech, conçus pour assurer la réussite et la croissance de votre entreprise.",
      webDev: {
        title: "Développement Web & Mobile",
        desc: "Nous concevons et développons des sites web dynamiques et des applications mobiles sur mesure adaptées à vos besoins avec des performances optimales."
      },
      design: {
        title: "Design UI/UX & Graphique",
        desc: "Nous créons des interfaces utilisateur esthétiques, modernes et intuitives, ainsi que des identités visuelles professionnelles qui captent l'attention."
      },
      video: {
        title: "Montage Vidéo Professionnel",
        desc: "Nous fournissons des services de montage vidéo, de post-production et de motion design pour produire un contenu commercial attrayant et percutant."
      },
      ads: {
        title: "Campagnes de Publicités",
        desc: "Nous gérant et optimisons des campagnes publicitaires payantes sur les réseaux sociaux pour maximiser votre visibilité et vos ventes."
      }
    },
    work: {
      title: "Nos Projets & Réalisations",
      description: "Parcourez les projets et solutions numériques conçus et réalisés avec succès par l'équipe de Wajda Tech.",
      filterAll: "Tous les projets",
      filterWeb: "Sites Web",
      filterApp: "Applications",
      filterDesign: "Design UI/UX",
      filterVideo: "Montage Vidéo",
      filterAI: "Automation IA",
      btnView: "Voir le projet",
      projects: {
        houcine: "Une plateforme e-commerce rapide et entièrement responsive développée pour la vente en détail de téléphones mobiles et accessoires.",
        academy: "Une plateforme académique interactive proposant des cours, des quiz et des outils d'apprentissage en ligne pour les étudiants algériens.",
        afiidah: "Un site web d'entreprise haut de gamme présentant les services avec des mises en page dynamiques et une ergonomie moderne.",
        dawidoc: "Une application complète de prise de rendez-vous médicaux et de recherche de praticiens pour faciliter l'accès aux soins.",
        linkus: "Design d'interface et d'expérience utilisateur (UI/UX) pour l'application Linkus, axé sur l'accessibilité et la modernité.",
        designSocial: "Un pack de designs professionnels pour réseaux sociaux afin de booster l'engagement et l'identité visuelle de marque.",
        designBranding: "Identité visuelle complète et supports marketing créés pour renforcer la présence et la notoriété de la marque.",
        designVisual: "Bannières créatives, visuels publicitaires et concepts vectoriels adaptés à l'identité visuelle de l'entreprise.",
        videoCommercial: "Montage vidéo commercial dynamique intégrant des effets spéciaux haut de gamme et un étalonnage professionnel.",
        videoTafadis: "Montage publicitaire dynamique avec sound design professionnel, étalonnage des couleurs et titres percutants.",
        videoCake: "Vidéo promotionnelle courte pour la pâtisserie avec transitions fluides et montage culinaire soigné.",
        videoYoutube: "Production vidéo de qualité pour YouTube avec incrustations personnalisées, graphismes et égalisation audio.",
        aiChatbot: "Intégration d'agents conversationnels intelligents basés sur l'IA pour automatiser le support client 24/7."
      }
    },
    journey: {
      title: "Notre Parcours & Expérience",
      milestones: [
        {
          title: "Programmation Complète",
          subtitle: "Développement Web & Mobile",
          desc: "Nous concevons, développons et déployons des plateformes web robustes et des applications mobiles sur mesure avec un code propre."
        },
        {
          title: "Design UI/UX & Graphique Créatif",
          subtitle: "Identité Visuelle de Marque",
          desc: "Nous façonnons des identités numériques. Interfaces modernes, logos, chartes graphiques et visuels pour réseaux sociaux."
        },
        {
          title: "Montage Vidéo Professionnel",
          subtitle: "Production Média Créative",
          desc: "Nous réalisons des vidéos promotionnelles, des publicités et du motion design pour captiver et fidéliser votre audience."
        },
        {
          title: "Publicités Sponsorisées & Campagnes",
          subtitle: "Marketing & Acquisition client",
          desc: "Nous propulsons votre activité en ligne grâce à des campagnes ciblées et performantes sur Facebook, Instagram, Google et TikTok."
        }
      ]
    },
    footer: "Copyright © Wajda Tech. Tous droits réservés."
  },
  en: {
    dir: "ltr",
    nav: {
      brand: "Wajda Tech",
      home: "Home",
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact"
    },
    hero: {
      welcome: "We are Wajda Tech",
      typing: [
        "Web Development",
        "Mobile Applications",
        "UI/UX & Graphic Design",
        "Video Editing",
        "Sponsored Ads"
      ],
      description: "Your partner for digital success in Algeria 🇩🇿. We design and build integrated software solutions: modern websites, custom mobile applications, smart systems, creative branding designs, high-impact video editing, and sponsored advertising campaigns to elevate your business.",
      btnEmail: "Email Us",
      btnWhatsapp: "Chat on WhatsApp"
    },
    services: {
      title: "What We Can Do For You",
      badge: "Services",
      description: "Discover the premium digital services Wajda Tech offers, designed to ensure the success and growth of your business.",
      webDev: {
        title: "Web & App Development",
        desc: "We design and build dynamic, high-performance web applications and custom mobile applications tailored to your business needs."
      },
      design: {
        title: "UI/UX & Graphic Design",
        desc: "We craft beautiful, modern, and user-friendly user interfaces alongside professional branding designs that capture attention."
      },
      video: {
        title: "Professional Video Editing",
        desc: "We provide premium video editing, post-production, motion graphics, and content creation services to showcase your services."
      },
      ads: {
        title: "Sponsored Ads Campaigns",
        desc: "We set up, manage, and optimize high-converting sponsored advertising campaigns on social media to scale your sales."
      }
    },
    work: {
      title: "Our Work & Projects",
      description: "Browse through the projects and digital solutions successfully designed and built by the Wajda Tech team.",
      filterAll: "All Projects",
      filterWeb: "Websites",
      filterApp: "Mobile Apps",
      filterDesign: "UI/UX & Design",
      filterVideo: "Video Editing",
      filterAI: "AI Automation",
      btnView: "View Project",
      projects: {
        houcine: "A fast, fully responsive e-commerce platform developed for mobile phones and accessories retail. Optimized for high performance and seamless user checkout experience.",
        academy: "An interactive educational academy platform offering courses, quizzes, and live streaming tools for Algerian students.",
        afiidah: "A premium corporate website featuring dynamic layouts, services presentation, and optimized search presence.",
        dawidoc: "A comprehensive doctor booking and healthcare services application, offering easy slot reservation and physician lookups.",
        linkus: "User Interface and Experience design for Linkus, prioritizing seamless onboarding flows and modern layouts.",
        designSocial: "A high-impact social media post design package tailored to boost engagement and convey branding identity.",
        designBranding: "Visual branding identity assets created to establish a strong corporate profile for marketing channels.",
        designVisual: "Elegant marketing visuals, banner concepts, and custom vector layouts designed to fit brand aesthetics.",
        videoCommercial: "A premium marketing and promo video featuring cinematic grading, visual effects, and professional transitions.",
        videoTafadis: "A high-impact commercial promo ad edit incorporating dynamic sound design, color grading, and titles.",
        videoCake: "Cinematic marketing short-form video featuring smooth transitions and professional culinary visual editing.",
        videoYoutube: "Engaging and polished YouTube video production with custom overlays, zoom effects, and audio leveling.",
        aiChatbot: "Smart AI-powered chatbot integration engineered to automate corporate customer service and FAQ response streams."
      }
    },
    journey: {
      title: "Our Journey & Experience",
      milestones: [
        {
          title: "Comprehensive Programming",
          subtitle: "Web & App Development",
          desc: "We successfully design, develop, and deploy robust web platforms and custom mobile applications following SOLID principles."
        },
        {
          title: "Creative UI/UX & Graphic Design",
          subtitle: "Visual Brand Identity",
          desc: "We shape digital identities. Our designs include user-friendly interfaces, logos, and high-impact visual marketing assets."
        },
        {
          title: "Professional Video Editing",
          subtitle: "Creative Media Production",
          desc: "We edit engaging videos, advertisements, animations, and corporate reels using high-end post-production tools."
        },
        {
          title: "Sponsored Ads & Campaigns",
          subtitle: "Marketing & Sponsorship",
          desc: "We scale your business online by planning and running targeted, high-converting paid social media campaigns."
        }
      ]
    },
    footer: "Copyright © Wajda Tech. All rights reserved."
  }
};

// Projects configuration list
const getProjectsList = (t) => [
  {
    projectName: "Houcine Phone",
    category: "Web",
    date: t.work.filterWeb,
    image: "e-commerce.png",
    description: t.work.projects.houcine,
    projectUrl: "https://houcinephonedz.com/"
  },
  {
    projectName: "Elmoutafwiken Academy",
    category: "Web",
    date: t.work.filterWeb,
    image: "Academy.png",
    description: t.work.projects.academy,
    projectUrl: "https://elmoutafwiken.com/"
  },
  {
    projectName: "Afiidah",
    category: "Web",
    date: t.work.filterWeb,
    image: "afiidah.png",
    description: t.work.projects.afiidah,
    projectUrl: "https://afiidah.com/"
  },
  {
    projectName: "DawiDoc",
    category: "App",
    date: t.work.filterApp,
    image: "dawidoc.png",
    description: t.work.projects.dawidoc,
    projectUrl: "https://github.com/Mahdi-Boullouf/DawiDoc"
  },
  {
    projectName: "Linkus",
    category: "Design",
    date: t.work.filterDesign,
    image: "linkus.jpg",
    description: t.work.projects.linkus,
    projectUrl: "https://wa.me/213781040546"
  },
  {
    projectName: "All About Design - Social Media Pack",
    category: "Design",
    date: t.work.filterDesign,
    image: "design-social.jpg",
    description: t.work.projects.designSocial,
    projectUrl: "https://wa.me/213781040546"
  },
  {
    projectName: "All About Design - Corporate Branding",
    category: "Design",
    date: t.work.filterDesign,
    image: "design-branding.jpg",
    description: t.work.projects.designBranding,
    projectUrl: "https://wa.me/213781040546"
  },
  {
    projectName: "All About Design - Visual Identity",
    category: "Design",
    date: t.work.filterDesign,
    image: "design-visual.jpg",
    description: t.work.projects.designVisual,
    projectUrl: "https://wa.me/213781040546"
  },
  {
    projectName: "Commercial Promotion Video",
    category: "Video",
    date: t.work.filterVideo,
    image: "img-3571.mp4",
    description: t.work.projects.videoCommercial,
    projectUrl: "https://wa.me/213781040546"
  },
  {
    projectName: "Tafadis Video Ad",
    category: "Video",
    date: t.work.filterVideo,
    image: "tafadis.mp4",
    description: t.work.projects.videoTafadis,
    projectUrl: "https://wa.me/213781040546"
  },
  {
    projectName: "Cake Commercial Promo",
    category: "Video",
    date: t.work.filterVideo,
    image: "cake.mp4",
    description: t.work.projects.videoCake,
    projectUrl: "https://wa.me/213781040546"
  },
  {
    projectName: "YouTube Content Edit",
    category: "Video",
    date: t.work.filterVideo,
    image: "youtube.mp4",
    description: t.work.projects.videoYoutube,
    projectUrl: "https://wa.me/213781040546"
  },
  {
    projectName: "Wajda AI Assistant",
    category: "AI",
    date: t.work.filterAI,
    image: "ai-automation.jpg",
    description: t.work.projects.aiChatbot,
    projectUrl: "https://wa.me/213781040546"
  }
];

// App State
let currentLang = 'ar';
let currentFilter = 'All';
let typingTimeout = null;

// DOM Elements
const langSelect = document.getElementById('langSelect');
const typedTextEl = document.getElementById('typedText');
const projectsGrid = document.getElementById('projectsGrid');
const portfolioFilters = document.getElementById('portfolioFilters');
const timelineContainer = document.getElementById('timelineContainer');
const timelineTitle = document.getElementById('timelineTitle');

// Initial Setup
document.addEventListener('DOMContentLoaded', () => {
  // Sync state with DOM lang setting
  currentLang = langSelect.value;
  updateLanguage(currentLang);
  
  // Setup language selector event listener
  langSelect.addEventListener('change', (e) => {
    currentLang = e.target.value;
    updateLanguage(currentLang);
  });
});

// Update Language on the Page
function updateLanguage(lang) {
  const t = translations[lang];
  
  // Set document dir & lang properties
  document.documentElement.dir = t.dir;
  document.documentElement.lang = lang;
  document.body.setAttribute('dir', t.dir);

  // Update static text elements marked with [data-t]
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    const value = getObjectValueByPath(t, key);
    if (value) {
      if (el.tagName === 'A' && key === 'nav.contact') {
        el.textContent = value;
      } else {
        el.textContent = value;
      }
    }
  });

  // Specifically translate the timeline section title
  timelineTitle.textContent = t.journey.title;

  // Re-render variable blocks
  renderFilterButtons(t);
  renderProjects(t);
  renderTimeline(t);
  
  // Restart Typing Animation
  startTypingAnimation(t.hero.typing);
}

// Helper: Get value from nested object key path (e.g. "hero.welcome")
function getObjectValueByPath(obj, path) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

// Typing Animation Logic
function startTypingAnimation(strings) {
  if (typingTimeout) {
    clearTimeout(typingTimeout);
  }
  
  let stringIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  function type() {
    const currentString = strings[stringIndex];
    
    if (isDeleting) {
      // Remove character
      typedTextEl.textContent = currentString.substring(0, charIndex - 1);
      charIndex--;
    } else {
      // Add character
      typedTextEl.textContent = currentString.substring(0, charIndex + 1);
      charIndex++;
    }
    
    let typeSpeed = isDeleting ? 30 : 60;
    
    if (!isDeleting && charIndex === currentString.length) {
      // Wait at the end of typing
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      stringIndex = (stringIndex + 1) % strings.length;
      // Short pause before writing next string
      typeSpeed = 500;
    }
    
    typingTimeout = setTimeout(type, typeSpeed);
  }
  
  type();
}

// Render Project Category Filters
function renderFilterButtons(t) {
  const categories = [
    { key: 'All', label: t.work.filterAll },
    { key: 'Web', label: t.work.filterWeb },
    { key: 'App', label: t.work.filterApp },
    { key: 'Design', label: t.work.filterDesign },
    { key: 'Video', label: t.work.filterVideo },
    { key: 'AI', label: t.work.filterAI }
  ];
  
  portfolioFilters.innerHTML = '';
  
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = `filter-btn ${cat.key === currentFilter ? 'active' : ''}`;
    btn.textContent = cat.label;
    btn.addEventListener('click', () => {
      currentFilter = cat.key;
      // Re-add active class
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(t);
    });
    portfolioFilters.appendChild(btn);
  });
}

// Render Project Grid Cards
function renderProjects(t) {
  projectsGrid.innerHTML = '';
  
  const projects = getProjectsList(t);
  const filtered = projects.filter(p => currentFilter === 'All' || p.category === currentFilter);
  
  filtered.forEach(p => {
    const isVideo = p.image.endsWith('.mp4');
    const card = document.createElement('div');
    card.className = 'project-card';
    
    // Create Media Container
    let mediaHtml = '';
    if (isVideo) {
      mediaHtml = `
        <video controls loop muted playsinline>
          <source src="${p.image}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      `;
    } else {
      mediaHtml = `<img src="${p.image}" alt="${p.projectName}" loading="lazy">`;
    }
    
    card.innerHTML = `
      <div class="project-media-wrapper">
        ${mediaHtml}
      </div>
      <div class="project-details">
        <h3 class="project-title">${p.projectName}</h3>
        <p class="project-category">${p.date}</p>
        <p class="project-desc">${p.description}</p>
        <div class="project-actions">
          <a href="${p.projectUrl}" target="_blank" class="btn-project-link">
            <span>${t.work.btnView}</span>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 3.75H19.5C19.6989 3.75 19.8897 3.82902 20.0303 3.96967C20.171 4.11032 20.25 4.30109 20.25 4.5V15.75C20.25 15.9489 20.171 16.1397 20.0303 16.2803C19.8897 16.421 19.6989 16.5 19.5 16.5C19.3011 16.5 19.1103 16.421 18.9697 16.2803C18.829 16.1397 18.75 15.9489 18.75 15.75V6.31L5.03 20.03C4.88782 20.1625 4.69978 20.2346 4.50548 20.2312C4.31118 20.2277 4.12579 20.149 3.98838 20.0116C3.85096 19.8742 3.77225 19.6888 3.76882 19.4945C3.7654 19.3002 3.83752 19.1122 3.97 18.97L17.69 5.25H8.25C8.05109 5.25 7.86032 5.17098 7.71967 5.03033C7.57902 4.88968 7.5 4.69891 7.5 4.5C7.5 4.30109 7.57902 4.11032 7.71967 3.96967C7.86032 3.82902 8.05109 3.75 8.25 3.75Z"/>
            </svg>
          </a>
        </div>
      </div>
    `;
    
    projectsGrid.appendChild(card);
  });
}

// Render Milestone Timeline items
function renderTimeline(t) {
  timelineContainer.innerHTML = '';
  
  const milestones = t.journey.milestones;
  
  // Custom SVG work icons for milestones
  const icons = [
    // Coding/Dev
    `<svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
    // Palette/Design
    `<svg viewBox="0 0 24 24"><path d="M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22Z"/></svg>`,
    // Video Edit
    `<svg viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>`,
    // Ads Campaign
    `<svg viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/></svg>`
  ];
  
  milestones.forEach((m, idx) => {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    
    item.innerHTML = `
      <div class="timeline-icon">
        ${icons[idx % icons.length]}
      </div>
      <div class="timeline-content">
        <h3>${m.title}</h3>
        <p class="timeline-subtitle">${m.subtitle}</p>
        <p>${m.desc}</p>
      </div>
    `;
    
    timelineContainer.appendChild(item);
  });
}
