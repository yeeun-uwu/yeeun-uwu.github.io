# CLAUDE.md — 작업 지침

이 저장소는 **Astro 6 + [AstroPaper](https://github.com/satnaing/astro-paper) 테마**로 만든 한국어 기술 블로그(`yeeun's blog`)이며 GitHub Pages로 배포된다. 이 문서는 Claude(및 다른 에이전트)가 이 블로그를 도울 때 따르는 기준이다.

## 핵심 원칙

- **설정은 `astro-paper.config.ts`에서만** 바꾼다. `src/config.ts`는 기본값을 채워 해석하는 파일이니 **직접 수정 금지**(읽기 전용으로 취급).
- 콘텐츠 본문은 **한국어**, UI 문자열은 영어이며 `src/i18n/lang/en.ts`에서 관리한다.
- 비밀값/토큰을 커밋하지 않는다. Google 인증 등은 이미 config에 있는 공개 메타값이다.
- **커밋에 에이전트를 공동 작업자로 추가하지 않는다.** 커밋 메시지에 `Co-Authored-By: Claude ...` 같은 트레일러를 넣지 말 것.

## 글 작성

- 위치: `src/content/posts/` 에 `.md` 또는 `.mdx` 추가 (파일명이 `_`로 시작하면 무시됨).
- frontmatter 템플릿:

  ```md
  ---
  title: 글 제목
  pubDatetime: 2026-06-07T00:00:00Z
  modDatetime:
  description: 글 요약 (검색·미리보기·OG에 사용)
  tags:
    - 태그
  draft: false
  ---
  ```

  - `modDatetime:`는 **빈 키로 남겨 둔다.** 글을 수정해 커밋하면 pre-commit 훅이 현재 시각으로 자동 채운다(아래 참고). 스키마상 빈 값 허용됨.
  - `draft: true`면 빌드에서 제외된다.
  - `pubDatetime`을 현재보다 미래로 두면 예약 글로 처리되어 발행되지 않는다(여유 시간은 `posts.scheduledPostMargin`).
  - `featured: true`로 홈 상단 노출, `hideEditPost: true`로 해당 글의 "Edit" 링크 숨김.

## 명령어

- `pnpm dev` — 로컬 서버 (http://localhost:4321)
- `pnpm build` — 프로덕션 빌드 + Pagefind 검색 색인 (배포 전 통과 필수)
- `pnpm lint` / `pnpm format` (`pnpm format:check`)
- 배포: `main`에 push → GitHub Actions가 자동 빌드·배포. PR에는 CI(lint/format/build)가 돈다.

## 활성화된 기능

- **댓글 (giscus)** — `astro-paper.config.ts`의 `giscus` 블록으로 on/off. 현재 `enabled: false`(플레이스홀더). 켜는 법: ① repo public 확인 → ② [giscus 앱](https://github.com/apps/giscus) 설치 → ③ repo Settings에서 Discussions 활성화 → ④ [giscus.app](https://giscus.app)에서 `repoId`·`categoryId` 발급 → ⑤ config에 입력하고 `enabled: true`. 구현은 `src/components/Comments.astro`(React 없이 바닐라, 라이트/다크 테마 동기화).
- **LaTeX 수식** — 인라인 `$...$`, 블록 `$$...$$`. (`remark-math` + `rehype-katex`, KaTeX CSS는 `Layout.astro`에서 번들 import.)
- **수정일 자동 갱신** — `.husky/pre-commit`이 발행 글(`draft: false`) 수정 시 `modDatetime`을 갱신한다. husky는 `pnpm install` 시 `prepare` 스크립트로 자동 설치되며, Windows에서는 Git 동봉 sh로 동작한다.

## 테마 / 폰트

- 색 토큰: `src/styles/theme.css` ("Astral 허니" 라이트/다크). 타이포 규칙: `src/styles/typography.css`(본문 wrapper는 `.app-prose`).
- 폰트: Galmuri11(본문 UI) + NeoDunggeunmo Code(코드), CDN으로 `Layout.astro`에서 로드. `--font-app` / `--font-code` 토큰.

## 주의 — `docs/` 가이드는 구버전 기준

`docs/` 의 AstroPaper 가이드들은 **이전 버전** 기준이라 현재 v6 구조와 다르다. 실제 코드 구조를 우선한다:

| 문서 표기 | 현재 실제 |
|---|---|
| `src/layouts/PostDetails.astro` | `src/pages/posts/[...slug]/index.astro` |
| `src/content/config.ts` | `src/content.config.ts` |
| `src/components/Datetime.tsx` | `src/components/Datetime.astro` |
| `@config` / `SITE` | `@/config` (`astro-paper.config.ts`) |
| `.prose` | `.app-prose` |
| `markdown.remarkPlugins` 직접 | `markdown.processor = unified({ remarkPlugins, rehypePlugins })` |
