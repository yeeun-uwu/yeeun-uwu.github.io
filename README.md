# yeeun's blog

[Astro](https://astro.build) + [AstroPaper](https://github.com/satnaing/astro-paper) 테마로 만든 기술 블로그입니다.

https://yeeun-uwu.github.io

이 문서는 블로그를 운영하면서 **자주 건드리는 부분**을 정리한 안내서입니다.
어디를 고치면 무엇이 바뀌는지 영역별로 나눠 두었습니다.

---

## 1. 글 작성

`src/content/posts/` 에 `.md` 또는 `.mdx` 파일을 추가하면 글 한 편이 됩니다.
(파일명이 `_`로 시작하면 무시됩니다.)

### frontmatter 템플릿

파일 맨 위에 아래 블록을 넣고, 그 아래에 본문을 씁니다.

```md
---
title: 글 제목
pubDatetime: 2026-06-07T00:00:00Z
modDatetime:
description: 글 요약 (검색·미리보기·공유 카드에 쓰입니다)
tags:
  - 개발
draft: false
---

여기에 본문을 작성합니다.
```

| 항목          | 설명                                                              |
| ------------- | ----------------------------------------------------------------- |
| `title`       | 글 제목 (필수)                                                    |
| `pubDatetime` | 작성일 (필수). 현재보다 **미래로 두면 예약 발행**(시간 되면 공개) |
| `modDatetime` | 수정일. **비워 두세요** — 글을 고쳐 커밋하면 자동으로 채워집니다  |
| `description` | 한 줄 요약 (필수)                                                 |
| `tags`        | 분류용 태그. 여러 개 가능. 안 적으면 `others`로 분류              |
| `draft`       | `true`면 배포에서 제외 (작성 중인 글)                             |
| `featured`    | `true`면 홈 상단 "Featured"에 노출                                |

### 태그로 분류하기

별도 게시판/카테고리 메뉴는 없고, **태그**로 글을 나눕니다. 한글 태그도 됩니다.

- 태그를 달면 `/tags/<태그>` 목록 페이지가 자동으로 생기고, 상단 **Tags** 메뉴에 모입니다.
- 카테고리처럼 쓰려면 태그 이름을 미리 정해두고 일관되게 사용하세요.
  예: `개발`, `회고`, `TIL`, `CS`, `독서`.

### 수식 (LaTeX)

본문에서 인라인은 `$E = mc^2$`, 블록은 `$$ ... $$` 로 수식을 쓸 수 있습니다.

---

## 2. 직접 수정해도 되는 곳

| 바꾸고 싶은 것                         | 파일                                 |
| -------------------------------------- | ------------------------------------ |
| 블로그 제목·설명·작성자·소셜·공유·댓글 | `astro-paper.config.ts`              |
| 글 추가/수정                           | `src/content/posts/`                 |
| About(소개) 페이지 내용                | `src/content/pages/about.md`         |
| 색 테마(라이트/다크)                   | `src/styles/theme.css`               |
| 홈 화면 인사말·소개 문구               | `src/pages/index.astro` 의 `#hero`   |
| 파비콘                                 | `public/favicon.svg` (+ `.ico` 선택) |

### `astro-paper.config.ts` 에서 켜고 끄는 것들

- **`site`** — 제목, 설명, 작성자, URL 등 기본 정보
- **`features`** — 라이트/다크 모드, 검색, 아카이브, 글 "Edit" 링크 등 on/off
- **`socials`** — 헤더/푸터 소셜 링크 (현재 GitHub · LinkedIn · Mail)
- **`shareLinks`** — 글 하단 공유 버튼 (현재 X · Telegram · Mail)
- **`giscus`** — 댓글. 기본은 꺼짐. 켜는 법은 아래 4번 참고

---

## 3. 가급적 건드리지 않는 곳

이쪽은 사이트가 동작하는 코드라, 레이아웃을 바꾸려는 게 아니라면 그대로 두세요.

- `src/config.ts` — 설정을 해석하는 내부 파일. 설정 변경은 항상 `astro-paper.config.ts`에서.
- `src/components/`, `src/layouts/`, `src/utils/`, 그리고 `index.astro`·`about.md`를 뺀 `src/pages/`
- `astro.config.ts`, `package.json`, `.github/` 등 빌드·배포 설정

---

## 4. 댓글(giscus) 켜기

1. 저장소를 public으로 두고 [giscus 앱](https://github.com/apps/giscus)을 설치합니다.
2. 저장소 **Settings → General → Features**에서 **Discussions**를 켭니다.
3. [giscus.app](https://giscus.app) 에 저장소를 입력해 `repoId`, `categoryId`를 발급받습니다.
4. `astro-paper.config.ts` 의 `giscus` 블록에 값을 채우고 `enabled: true`로 바꿉니다.

---

## 5. 로컬 실행 / 배포

```bash
pnpm install
pnpm dev      # http://localhost:4321 에서 미리보기
pnpm build    # 프로덕션 빌드 + 검색 색인 (배포 전 점검용)
```

`main` 브랜치에 push하면 GitHub Actions가 자동으로 빌드·배포합니다.

> 글을 고쳐 커밋하면 pre-commit 훅이 해당 글의 `modDatetime`을 자동으로 갱신합니다.

---

테마 사용법 참고 문서는 `docs/` 폴더에 있습니다(원작자 문서라 일부는 현재 구조와 다를 수 있어요).
에이전트용 작업 규칙은 `CLAUDE.md`에 정리되어 있습니다.

Theme: [AstroPaper](https://github.com/satnaing/astro-paper) (MIT) · by Sat Naing.
