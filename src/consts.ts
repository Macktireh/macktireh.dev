// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

const AUTHOR_FIRST_NAME = 'Macktireh';
const AUTHOR_LAST_NAME = 'ABDI SOUBANEH';

export const SITE = {
  website: import.meta.env.PUBLIC_SITE_URL,
  authorFirstName: AUTHOR_FIRST_NAME,
  authorLastName: AUTHOR_LAST_NAME,
  author: `${AUTHOR_FIRST_NAME} ${AUTHOR_LAST_NAME}`,
  ogImageSite: "/images/og-site.png",
  ogImagePost: "./public/images/og-post.png",
  postsPaginationSize: 2,
  defaultLang: "en",
  languages: {
    en: "English",
    fr: "Français",
  },
  defaultTheme: "light",
  githubUrl: "https://github.com/macktireh",
  twitterUrl: "https://twitter.com/macktireh",
  linkedinUrl: "https://www.linkedin.com/in/macktireh/",
}
