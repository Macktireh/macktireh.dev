import { SITE } from "@src/consts";
import { useTranslations, type LangType } from "@src/i18n/utils";

export function getCVData(lang: LangType) {
  const t = useTranslations(lang);
  return {
    personal: {
      name: SITE.author,
      title: t("cv.title"),
      email: "mack.abdisoubaneh@gmail.com",
      website: "macktireh.dev",
      linkedin: SITE.linkedinUrl,
      github: SITE.githubUrl,
      articles: `/${lang}/posts`,
    },
    about: t("cv.about"),
    skills: [
      {
        category: "Python / Django / Litestar / Flask",
        projects: [
          {
            name: "Ollaix",
            description: t("cv.projects.ollaix"),
            demo: "https://ollaix.macktireh.dev",
            github: "https://github.com/Macktireh/ollaix",
            image:
              "https://raw.githubusercontent.com/Macktireh/ollaix-ui/refs/heads/main/public/chatbot.png",
          },
          {
            name: "Twitter Clone (backend)",
            description: t("cv.projects.twitter-backend"),
            demo: "https://twitter.macktireh.dev",
            github: "https://github.com/Macktireh/clone-twitter-backend",
            image:
              "https://raw.githubusercontent.com/Macktireh/clone-twitter-frontend/refs/heads/main/public/static/img/logo192.png",
          },
          {
            name: "Mackdin",
            description: t("cv.projects.mackdin"),
            demo: "https://mackdin.onrender.com",
            github: "https://github.com/Macktireh/mackdin",
            image:
              "https://raw.githubusercontent.com/Macktireh/mackdin/1a1407277666e1a702c9f334bdf704a9c2c2f78d/static/home/svg/linkedin-cust.svg",
          },
          {
            name: "EasyCardBackend",
            description: t("cv.projects.easycard-backend"),
            demo: "https://easy-card-api.onrender.com",
            github: "https://github.com/Macktireh/EasyCardBackend",
            image:
              "https://raw.githubusercontent.com/Macktireh/EasyCardGUIDesktop/refs/heads/main/assets/images/logo1.png",
          },
        ],
      },
      {
        category: "React / TypeScript / Tailwind",
        projects: [
          {
            name: "Ollaix UI",
            description: t("cv.projects.ollaix-ui"),
            demo: "https://ollaix.macktireh.dev",
            github: "https://github.com/Macktireh/ollaix-ui",
            image:
              "https://raw.githubusercontent.com/Macktireh/ollaix-ui/refs/heads/main/public/chatbot.png",
          },
          {
            name: "Twitter Clone (frontend)",
            description: t("cv.projects.twitter-frontend"),
            demo: "https://twitter.macktireh.dev",
            github: "https://github.com/Macktireh/clone-twitter-frontend",
            image:
              "https://raw.githubusercontent.com/Macktireh/clone-twitter-frontend/refs/heads/main/public/static/img/logo192.png",
          },
        ],
      },
      {
        category: "React Native (Expo)",
        projects: [
          {
            name: "MeteoX",
            description: t("cv.projects.meteox"),
            github: "https://github.com/Macktireh/MeteoX",
            image:
              "https://raw.githubusercontent.com/Macktireh/MeteoX/refs/heads/main/assets/images/weather.png",
          },
        ],
      },
      {
        category: t("cv.skills.desktop"),
        projects: [
          {
            name: "EasyCardGUI Desktop",
            description: t("cv.projects.easycard-desktop"),
            github: "https://github.com/Macktireh/EasyCardGUIDesktop",
            image:
              "https://raw.githubusercontent.com/Macktireh/EasyCardGUIDesktop/refs/heads/main/assets/images/logo1.png",
          },
        ],
      },
    ],
    experiences: [
      {
        company: "Atos @ FDJ",
        position: t("cv.experiences.fdj.position"),
        period: t("cv.experiences.fdj.period"),
        description: t("cv.experiences.fdj.description"),
        logo: "/images/fdj.png",
      },
      {
        company: "Atos @ TotalEnergies",
        position: t("cv.experiences.total.position"),
        period: t("cv.experiences.total.period"),
        description: t("cv.experiences.total.description"),
        logo: "/images/totalenergies.png",
      },
    ],
    openSource: {
      name: "SimpleSocialAuthLib",
      description: t("cv.opensource.description"),
      pypi: "https://pypi.org/project/SimpleSocialAuthLib",
      github: "https://github.com/Macktireh/SimpleSocialAuthLib",
    },
    education: [
      {
        degree: t("cv.education.powerbi.title"),
        institution: "Microsoft",
        year: "2025",
        logo: "/images/powerbi.png",
        type: "certification",
      },
      {
        degree: t("cv.education.master.title"),
        institution: t("cv.education.master.institution"),
        year: "2020",
        logo: "/images/ubs.png",
        type: "degree",
      },
    ],
  };
}
