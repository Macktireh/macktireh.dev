import { SITE } from "@src/consts";
import { useTranslations, type LangType } from "@src/i18n/utils";
import type { CV } from "@src/helpers/types";

export function getCVData(lang: LangType): CV {
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
        category: "Python / Django / FastAPI / Flask",
        projects: [
          {
            name: "Ollaix",
            title: t("cv.projects.ollaix.title"),
            description: t("cv.projects.ollaix.description"),
            demo: "https://ollaix.macktireh.dev",
            github: "https://github.com/Macktireh/ollaix",
            image:
              "https://raw.githubusercontent.com/Macktireh/ollaix-ui/refs/heads/main/public/chatbot.png",
          },
          {
            name: "Mackdin",
            title: t("cv.projects.mackdin.title"),
            description: t("cv.projects.mackdin.description"),
            demo: "https://mackdin.onrender.com",
            github: "https://github.com/Macktireh/mackdin",
            image:
              "https://raw.githubusercontent.com/Macktireh/mackdin/1a1407277666e1a702c9f334bdf704a9c2c2f78d/static/home/svg/linkedin-cust.svg",
          },
          {
            name: "EasyCardBackend",
            title: t("cv.projects.easycard.title"),
            description: t("cv.projects.easycard.description"),
            demo: "https://easy-card-api.onrender.com",
            github: "https://github.com/Macktireh/EasyCardGUIDesktop",
            image:
              "https://raw.githubusercontent.com/Macktireh/EasyCardGUIDesktop/refs/heads/main/assets/images/logo1.png",
          },
        ],
      },
      {
        category: "TypeScript / React / React Native & Expo / Tailwind",
        projects: [
          {
            name: "Ollaix UI",
            title: t("cv.projects.ollaix-ui.title"),
            description: t("cv.projects.ollaix-ui.description"),
            demo: "https://ollaix.macktireh.dev",
            github: "https://github.com/Macktireh/ollaix-ui",
            image:
              "https://raw.githubusercontent.com/Macktireh/ollaix-ui/refs/heads/main/public/chatbot.png",
          },
          {
            name: "Twitter Clone",
            title: t("cv.projects.twitter.title"),
            description: t("cv.projects.twitter.description"),
            demo: "https://twitter.macktireh.dev",
            github: "https://github.com/Macktireh/clone-twitter-frontend",
            image:
              "https://raw.githubusercontent.com/Macktireh/clone-twitter-frontend/refs/heads/main/public/static/img/logo192.png",
          },
          {
            name: "MeteoX",
            title: t("cv.projects.meteox.title"),
            description: t("cv.projects.meteox.description"),
            github: "https://github.com/Macktireh/MeteoX",
            demo: null,
            image:
              "https://raw.githubusercontent.com/Macktireh/MeteoX/refs/heads/main/assets/images/weather.png",
          },
        ],
      },
      {
        category: "DevOps / CI/CD / Docker",
        projects: [
          {
            name: t("cv.skills.containerization"),
            title: t("cv.projects.dockerisation"),
            description: t("cv.projects.dockerisation"),
            github: null,
            demo: null,
            image: "https://skillicons.dev/icons?i=docker",
          },
          {
            name: "CI/CD",
            title: t("cv.projects.cicd"),
            description: t("cv.projects.cicd"),
            github: null,
            demo: null,
            image: "https://skillicons.dev/icons?i=githubactions",
          },
          {
            name: "Packaging",
            title: t("cv.projects.packaging"),
            description: t("cv.projects.packaging"),
            github: null,
            demo: null,
            image: "https://skillicons.dev/icons?i=ipfs",
          },
        ],
      },
    ],
    experiences: [
      {
        company: "Atos @ FDJ United",
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
    openSource: [
      {
        name: "SimpleSocialAuthLib",
        description: t("cv.opensource.description"),
        pypi: "https://pypi.org/project/SimpleSocialAuthLib",
        github: "https://github.com/Macktireh/SimpleSocialAuthLib",
      },
    ],
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
