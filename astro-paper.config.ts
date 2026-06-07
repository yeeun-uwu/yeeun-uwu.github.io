import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://yeeun-uwu.github.io/",
    title: "Horoscape",
    description: "A timescape of code and the in-between",
    author: "Sasha",
    profile: "https://github.com/yeeun-uwu",
    ogImage: "default-og.jpg",
    lang: "ko",
    timezone: "Asia/Seoul",
    dir: "ltr",
    googleVerification: "Ekv_8CBgMCXsAFAsq1m1o3Q6PC48M-Y3V95rsmCd2vk",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/yeeun-uwu/yeeun-uwu.github.io/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/yeeun-uwu" },
    { name: "linkedin", url: "https://www.linkedin.com/in/yeeun-uwu/" },
    { name: "mail",     url: "mailto:yesilver@ewha.ac.kr" },
  ],
  shareLinks: [
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
  // 댓글(giscus): GitHub Discussions 기반. 활성화 방법
  //  1) repo를 public으로 두고, https://github.com/apps/giscus 설치
  //  2) repo Settings > Features > Discussions 켜기
  //  3) https://giscus.app 에서 repo 입력 → repoId / category / categoryId 발급
  //  4) 아래 값을 채우고 enabled를 true로 변경
  giscus: {
    enabled: true,
    repo: "yeeun-uwu/yeeun-uwu.github.io",
    repoId: "R_kgDOSxlcTQ",
    category: "Announcements",
    categoryId: "DIC_kwDOSxlcTc4C-rPU",
    mapping: "pathname",
    lang: "ko",
    lightTheme: "light",
    darkTheme: "dark",
  },
});