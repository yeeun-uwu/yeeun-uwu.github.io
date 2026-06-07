# TODO

- [x] giscus 댓글 테마를 사이트 테마와 통일
  - 커스텀 giscus 테마 CSS 2개를 만들어 "Astral 허니" 라이트/다크 팔레트에 맞춤:
    `public/giscus/astral-light.css`, `public/giscus/astral-dark.css`.
  - `astro-paper.config.ts`의 `lightTheme`/`darkTheme`가 배포된 두 CSS의 URL을 가리킴.
  - 커스텀 테마는 공개 HTTPS URL에서만 렌더되므로, **배포 후** 라이브 글 페이지에서
    라이트↔다크 토글 시 댓글 색(배경/링크 보라/등록 버튼 골드)이 맞는지 눈으로 최종 확인.
