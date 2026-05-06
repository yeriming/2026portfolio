# 이예림 포트폴리오 웹사이트 스펙 문서
> Cursor에게 전달하는 개발 명세서입니다.

---

## 프로젝트 개요

- **목적:** 카이스트 산업디자인학과 석사 대학원 지원용 포트폴리오 웹사이트 (교수님 컨택용)
- **기술 스택:** Next.js 14 (App Router) + Tailwind CSS
- **호스팅:** Vercel
- **도메인:** 커스텀 도메인 (추후 연결)
- **언어:** 한국어/영어 혼용 (주요 텍스트는 영어 기준)

---

## 디자인 시스템

### 컬러
```
--color-primary: #00462A      /* 진초록 (포인트 컬러, C100 M0 Y80 K50) */
--color-primary-light: #006B40 /* 호버 상태 */
--color-primary-subtle: #E8F5EF /* 연한 배경용 */
--color-bg: #FFFFFF            /* 메인 배경 */
--color-text-primary: #1A1A1A  /* 본문 텍스트 */
--color-text-secondary: #6B6B6B /* 보조 텍스트 */
--color-border: #E5E5E5        /* 구분선 */
```

### 폰트
```
영문 헤딩: 'Playfair Display' (Google Fonts) — 세리프, 아카데믹하고 따뜻한 느낌
영문/한글 본문: 'Noto Sans KR' (Google Fonts) — 가독성 좋은 산세리프
코드/태그: 'IBM Plex Mono' (Google Fonts) — 태그, 날짜 등에 사용
```

### 레이아웃 원칙
- 화이트 베이스, 충분한 여백
- 포인트 컬러(진초록)는 링크, 강조 텍스트, 호버 상태, 태그에만 사용
- 사진 + 텍스트 좌우 배치 (About 섹션)
- 최대 너비: 1100px, 좌우 패딩: 24px

---

## 페이지 구조

### 글로벌 네비게이션 (모든 페이지 공통)
```
[이예림 / Yerim Lee]  ————————  About · Publications · Projects · Contact
```
- 좌측: 이름 (클릭 시 메인으로)
- 우측: 네비게이션 탭 4개
- 스크롤 시 상단 고정 (sticky), 배경 흰색 + 하단 얇은 border

---

## 페이지별 상세 명세

### 1. 메인 페이지 (`/`) — About Me

#### 1-1. 히어로 섹션
```
레이아웃: 좌측 프로필 카드 | 우측 소개 텍스트

[좌측]
- 프로필 사진 (정방형, border-radius: 12px)
- 이름: Yerim Lee / 이예림
- 직함: Researcher · Designer (진초록 컬러)
- 소속: Ewha Womans University · Content Convergence
- 소셜 링크 아이콘: Email, GitHub, LinkedIn
- 이메일: yerimisyerim@ewha.ac.kr

[우측]
- 타이핑 인터랙션 헤드라인:
  "I design [타이핑되는 단어]."
  단어 순환: "human-AI interaction" → "experiences that care" → "technology with humanity"
  → 진초록 컬러로 타이핑/삭제 반복 (typewriter effect, cursor 깜빡임)

- 소개 문단 (2~3줄):
  "I am a researcher and designer interested in making AI feel more human.
  My work spans HCI research, UX design, and AI systems —
  always grounded in the question of how technology can genuinely care for people."

- 현재 상태 뱃지:
  🟢 Applying to KAIST ID · Spring 2027
```

#### 1-2. 스크롤 섹션 (메인 페이지 내 개요, 클릭 불가)
스크롤을 내리면 아래 섹션들이 순서대로 등장. 각 섹션은 클릭 없이 개요만 나열.

**Publications 개요**
```
섹션 제목: Publications

- Le Petit Care: A Child-Attuned Design for Personalized ADHD Symptom Management Through AI-powered Extended Reality
  CHI EA '25 · ACM CHI 2025 Student Design Competition Finalist
  [doi 링크]

- MRI Intervention Tools for Pediatric Patients: A Scoping Review (COM-B Framework)
  Springer Nature · Pediatric Radiology · 투고 예정

- Theatrical Persona Framework: Applying Stanislavski-Adler Acting Theory to AI Persona Design
  한국디지털콘텐츠학회 · 투고 예정

- SophyBARA: Reviving Philosophical Discourse through Anthropomorphic Capybara Agents
  ACM DIS 2026 Demo · 투고
```

**Projects 개요**
```
섹션 제목: Selected Projects

5개 프로젝트를 카드 그리드(2열)로 나열
각 카드: 프로젝트명 + 한줄 설명 + 태그 + "View →" 링크
(클릭 시 /projects/[slug]로 이동)
```

**Education 개요**
```
섹션 제목: Education

- Ewha Womans University, B.S. in Content Convergence (2022.03 – 2027.02 예정)
  Double Major: Philosophy, Entrepreneurship / Minor: Psychology
  GPA: 3.94/4.3
  일주학술문화재단 31기 전액장학생

- Exchange Student, Freie Universität Berlin (2025.03 – 2025.08)
  HCI 전공 수업 수강
```

**Contact 개요**
```
섹션 제목: Contact

이메일 주소 + 링크드인 + 깃허브
짧은 문구: "Feel free to reach out for research collaborations or inquiries."
```

---

### 2. Publications 페이지 (`/publications`)

논문 목록을 연도 역순으로 나열.

각 항목 구조:
```
[연도] [학회/저널명] — [상태: Published / Under Review / Forthcoming]
제목 (볼드)
저자 (본인 이름 언더라인)
[DOI 링크] [PDF 링크] (있을 경우)
짧은 한줄 설명
```

---

### 3. Projects 페이지 (`/projects`)

5개 프로젝트 카드 그리드 (2열, 모바일 1열)

각 카드:
```
- 썸네일 이미지 (있을 경우) 또는 컬러 배경 플레이스홀더
- 프로젝트명
- 기간 (예: 2025.01 – 2025.04)
- 태그 (Research / UX Design / AI / XR 등)
- 한줄 설명
- "View Project →" (진초록)
```

클릭 시 개별 프로젝트 페이지로 이동.

#### 3-1. 프로젝트 개별 페이지 (`/projects/[slug]`)

5개 프로젝트:
- `/projects/le-petit-care`
- `/projects/vpt-robot`
- `/projects/samsung-hospital`
- `/projects/sophybara`
- `/projects/acting-theory`

각 프로젝트 페이지 구조:
```
1. 프로젝트명 + 기간 + 태그
2. 한줄 요약
3. 배경 / 문제 정의
4. 본인 역할
5. 과정 / 방법
6. 결과 / 성과
7. 핵심 이미지 / 스크린샷
8. 관련 논문 링크 (있을 경우)
9. ← Back to Projects
```

---

### 4. Contact 페이지 (`/contact`)

```
이메일: yerimisyerim@ewha.ac.kr
LinkedIn: [링크]
GitHub: [링크]

짧은 문구:
"I'm always open to discussing research, collaboration, or just a good conversation about design and AI.
Don't hesitate to reach out."
```

---

## 인터랙션 상세

### 타이핑 인터랙션 (히어로 섹션)
```javascript
// 순환할 단어 배열
const phrases = [
  "human-AI interaction",
  "experiences that care",
  "technology with humanity",
  "AI that feels human"
]

// 동작:
// 1. 단어가 한 글자씩 타이핑됨 (타이핑 속도: 80ms/글자)
// 2. 완성 후 1.5초 대기
// 3. 한 글자씩 삭제됨 (삭제 속도: 50ms/글자)
// 4. 다음 단어로 넘어감
// 커서: | 깜빡임 (진초록 컬러, 500ms 간격)
```

### 페이지 전환 애니메이션
- 페이지 진입 시 콘텐츠 fade-in + 약간의 translateY (20px → 0)
- duration: 0.4s, easing: ease-out

### 카드 호버
- 프로젝트 카드 호버 시: 미세한 위로 이동 (translateY: -4px) + 그림자 강화
- transition: 0.2s ease

### 링크 스타일
- 모든 링크 기본: 진초록 컬러, underline 없음
- 호버: underline 등장

---

## 추가 기능 (선택 구현)

### 페르소나 챗봇 (우선순위 낮음, 시간 여유 있을 때)
- 우측 하단 플로팅 버튼: 💬 "Chat with Yerim"
- 클릭 시 채팅 UI 팝업
- Anthropic API 연동 (claude-sonnet-4-20250514)
- 시스템 프롬프트: 이예림의 연구 관심사, 프로젝트, 지원 동기를 학습시킨 페르소나
- 교수님이 포트폴리오 방문 시 바로 질문할 수 있도록 설계

---

## 파일 구조 (Next.js App Router 기준)

```
portfolio/
├── app/
│   ├── layout.tsx          # 글로벌 레이아웃 (네비게이션 포함)
│   ├── page.tsx            # 메인 (About Me)
│   ├── publications/
│   │   └── page.tsx
│   ├── projects/
│   │   ├── page.tsx        # 프로젝트 목록
│   │   └── [slug]/
│   │       └── page.tsx    # 개별 프로젝트
│   └── contact/
│       └── page.tsx
├── components/
│   ├── Navigation.tsx
│   ├── TypewriterText.tsx  # 타이핑 인터랙션
│   ├── ProjectCard.tsx
│   ├── PublicationItem.tsx
│   └── ChatBot.tsx         # 챗봇 (선택)
├── data/
│   ├── projects.ts         # 프로젝트 데이터
│   └── publications.ts     # 논문 데이터
├── public/
│   └── images/
└── styles/
    └── globals.css
```

---

## 콘텐츠 데이터 (개발 시 하드코딩)

### 프로젝트 데이터
```typescript
// data/projects.ts

export const projects = [
  {
    slug: "le-petit-care",
    title: "Le Petit Care",
    period: "2025.01 – 2025.04",
    tags: ["Research", "UX Design", "XR", "AI"],
    summary: "AI-powered XR training program for children with ADHD",
    description: {
      background: "...",
      role: "...",
      process: "...",
      result: "ACM CHI 2025 Student Design Competition Finalist. Oral presentation in Yokohama."
    }
  },
  {
    slug: "vpt-robot",
    title: "Visual Perspective Taking with Social Robots",
    period: "2025.04 – 2025.07",
    tags: ["Research", "HCI", "Social Robot"],
    summary: "Investigating the role of eyes and beliefs in VPT toward humanoid robots",
    description: { ... }
  },
  {
    slug: "samsung-hospital",
    title: "Pediatric Robot Interaction Research",
    period: "2025.10 – Present",
    tags: ["Research", "UX Design", "AI", "Social Robot"],
    summary: "Scoping review and RCT study on robot interaction for pediatric MRI anxiety reduction",
    description: { ... }
  },
  {
    slug: "sophybara",
    title: "SophyBARA",
    period: "2026.08 – Present",
    tags: ["Research", "UX Design", "AI", "Philosophy"],
    summary: "RAG-based multi-agent philosophical debate system with anthropomorphic capybara agents",
    description: { ... }
  },
  {
    slug: "acting-theory",
    title: "Theatrical Persona Framework",
    period: "2026.03 – Present",
    tags: ["Research", "AI", "HCI"],
    summary: "Applying Stanislavski-Adler acting theory to AI persona design",
    description: { ... }
  }
]
```

---

## Cursor에게 전달할 첫 번째 프롬프트 (복사해서 사용)

```
Next.js 14 (App Router) + Tailwind CSS로 포트폴리오 웹사이트를 만들어줘.

[디자인 시스템]
- 배경: 흰색 (#FFFFFF)
- 포인트 컬러: 진초록 (#00462A)
- 헤딩 폰트: Playfair Display (Google Fonts, serif)
- 본문 폰트: Noto Sans KR (Google Fonts)
- 모노 폰트: IBM Plex Mono (태그, 날짜용)

[페이지 구조]
- / : About Me (메인, 히어로 + 스크롤 섹션)
- /publications : 논문 목록
- /projects : 프로젝트 카드 그리드
- /projects/[slug] : 개별 프로젝트 상세
- /contact : 연락처

[핵심 인터랙션]
히어로 섹션에 타이핑 인터랙션:
"I design [타이핑]."
순환 문구: "human-AI interaction" / "experiences that care" / "technology with humanity" / "AI that feels human"
진초록 컬러로 타이핑/삭제 반복, 커서 깜빡임 포함.

[글로벌 네비게이션]
좌측: 이름 "Yerim Lee" (홈 링크)
우측: About · Publications · Projects · Contact
스크롤 시 상단 sticky, 흰 배경 + 하단 얇은 border

[프로젝트 카드]
2열 그리드, 호버 시 translateY(-4px) + 그림자
각 카드: 제목, 기간, 태그(진초록 배지), 한줄 설명, "View →"

[기타]
- 페이지 진입 fade-in 애니메이션
- 모바일 반응형 필수
- Vercel 배포 가능한 구조

첨부된 spec 문서 참고해서 전체 구조 먼저 잡고, 메인 페이지부터 개발 시작해줘.
```

---

## 개발 순서 권장

1. Next.js 프로젝트 생성 + Tailwind 설정 + 폰트 설정
2. 글로벌 레이아웃 + 네비게이션
3. 메인 페이지 (히어로 + 타이핑 인터랙션)
4. 메인 페이지 스크롤 섹션 (Publications / Projects / Education / Contact 개요)
5. Publications 페이지
6. Projects 목록 페이지 + 개별 프로젝트 페이지
7. Contact 페이지
8. 반응형 점검
9. Vercel 배포 + 도메인 연결
10. 챗봇 기능 (시간 여유 있을 때)
