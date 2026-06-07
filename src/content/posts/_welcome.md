---
author: yeeun
pubDatetime: 2026-06-05T00:00:00Z
modDatetime:
title: 블로그를 시작하며
featured: true
draft: false
tags:
  - others
description: Astro와 AstroPaper 테마로 만든 기술 블로그의 첫 글입니다.
---


이 블로그는 [Astro](https://astro.build/)와 [AstroPaper](https://github.com/satnaing/astro-paper) 테마로 만들었고, GitHub Pages로 배포됩니다.

## 앞으로 다룰 것들

- 공부하면서 정리한 개념과 메모
- 문제를 해결하며 얻은 경험
- 읽은 자료에 대한 생각

## 새 글 작성 방법

`src/content/posts/` 디렉터리에 `.md` 또는 `.mdx` 파일을 추가하면 됩니다. 파일 맨 위 frontmatter에 아래 항목을 채워 주세요.

```md
---
title: 글 제목
pubDatetime: 2026-06-05T00:00:00Z
description: 글 요약 (검색·미리보기에 사용됩니다)
tags:
  - 태그
---

여기에 본문을 작성합니다.
```

> 작성 중인 글은 frontmatter에 `draft: true`를 넣으면 배포에서 제외됩니다.

## 헤딩 레벨 미리보기

헤딩 스타일을 확인하기 위한 예시 섹션입니다. (h2는 볼드, h3~h6은 강조색 형광펜)

### h3 소제목

h3 아래 본문입니다. 위 제목에 형광펜이 칠해집니다.

#### h4 소제목

h4 아래 본문입니다.

##### h5 소제목

h5 아래 본문입니다.

###### h6 소제목

h6 아래 본문입니다.

천천히, 꾸준히 채워 나가겠습니다.
