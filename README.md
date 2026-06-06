# yeeun's blog

[Astro](https://astro.build) + [AstroPaper](https://github.com/satnaing/astro-paper) 테마로 만든 기술 블로그입니다.

🔗 https://yeeun-uwu.github.io

## 글 작성

`src/content/posts/`에 `.md` / `.mdx` 파일을 추가합니다. frontmatter 예시:

```md
---
title: 글 제목
pubDatetime: 2026-06-05T00:00:00Z
description: 글 요약
tags:
  - 태그
---
```

> `pubDatetime`을 현재 시각보다 미래로 두면 예약 글로 처리되어 발행되지 않습니다.

## 로컬 실행

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # 프로덕션 빌드 + Pagefind 검색 색인
```

`main` 브랜치에 push하면 GitHub Actions가 자동으로 빌드·배포합니다.

## favicon 교체

현재 favicon은 기본 Astro 로고입니다. 바꾸려면 `public/favicon.svg`를 덮어쓰고,
필요하면 `public/favicon.ico`도 추가하세요. (`src/layouts/Layout.astro`가 두 파일을 모두 참조합니다.)

---

테마 사용법 참고 문서는 `docs/` 폴더에 보관되어 있습니다.
Theme: [AstroPaper](https://github.com/satnaing/astro-paper) (MIT) · by Sat Naing.
