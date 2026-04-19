# TripPick

TripPick은 일본 여행 도시를 빠르게 탐색할 수 있는 포트폴리오용 MVP입니다.

이 버전은 **Japan-only** 범위로 아래 3개 도시를 제공합니다.
- Tokyo
- Osaka
- Fukuoka

## MVP 기능
- 홈 페이지 브랜딩 + 도시 카드
- 도시 상세 페이지
  - Flights 탭
  - Stays 탭
  - Food 탭
- Food 카드 정보
  - Category
  - Summary
  - Recommended menu
  - Rating
  - Location
  - 지도 이동용 placeholder 버튼 (Coming Soon)

## 기술 스택
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Mock data only (API 연동 없음)

## 로컬 실행
```bash
corepack enable
pnpm install
pnpm dev
```

브라우저에서 `http://localhost:3000` 접속.

## 기본 검증
```bash
pnpm lint
pnpm build
```

## 배포 관련 파일
- `.woodpecker.yml`
- `Dockerfile`
- `deploy/docker-compose.yml`

`whyfolio` 구조를 기준으로 `trip-pick` 이름에 맞춰 구성했습니다.
- 이미지: `192.168.1.101:5000/kuukan-app/trip-pick`
- 도메인: `trippick.kuukan.dev`

## 참고
실시간 항공/숙소/지도 API는 아직 연동하지 않은 starter 버전입니다.
