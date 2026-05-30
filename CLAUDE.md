# TaxMate Canada — Project Memory
Last updated: 2026-05-30

## 프로젝트 개요
- **사이트**: TaxMate Canada — 캐나다 프리랜서용 AI 세금 관리 도구
- **라이브 URL**: https://www.taxmatecanada.com
- **테마**: Radical Stealth Terminal (다크 테마, hazard-green #22c55e 강조색)

## 인프라
| 항목 | 값 |
|------|-----|
| GitHub | github.com/sungbinpark81/taxmatecanada |
| Vercel 프로젝트 | taxmatecanada-tr6t (tax-mate-s-projects 팀) |
| Vercel URL | taxmatecanada-tr6t.vercel.app |
| 도메인 등록 | Namecheap |
| DNS A Record | 76.76.21.21 |
| DNS CNAME (www) | cname.vercel-dns.com |

## API 키 (Vercel 환경변수에 저장됨 — 코드에 없음)
- `MAILCHIMP_API_KEY` — Mailchimp API (us12)
- `MAILCHIMP_LIST_ID` — c9e1990248
- `MAILCHIMP_DC` — us12
- `ANTHROPIC_API_KEY` — Claude API (claude-haiku-4-5)

## Mailchimp
- 계정 서버: gmail.us12
- u 파라미터: 33ae714a2c786736bfb9e4654
- List ID: c9e1990248
- eepurl 링크: http://eepurl.com/cISeSkaSDB

## Vercel 서버리스 함수
- `api/subscribe.js` — Mailchimp 구독 처리 (https 모듈, CommonJS)
- `api/chat.js` — Claude AI 채팅 (claude-haiku-4-5 모델)
- `vercel.json` — builds + routes 명시적 설정 (functions 방식 X, builds 방식 O)

## 사이트 주요 기능
1. **Early Access 모달** — 이름/이메일/역할 입력 → Mailchimp 자동 등록
2. **Claude AI 채팅** — /api/chat 호출 → 실시간 캐나다 세금 Q&A
3. **GST/HST 레이더** — 슬라이더로 매출 입력, $24K/$30K 경고
4. **세금 계산기** — 연소득별 온타리오 월별 세금 추정
5. **FAQ 아코디언** — 클릭 토글
6. **가격 구조** — Free/$0, Founder/$9, Pro/$19, Business/$39(예정)

## 배포 방법
```powershell
cd "C:\Users\sungb\OneDrive\Desktop\new ui taxmatecanada"
git add .
git commit -m "커밋 메시지"
git push
# → Vercel 자동 재배포 (약 30초)
```

## 사용자 정보
- GitHub 사용자명: sungbinpark81
- 이메일: sungbinpark81@gmail.com
- 언어: 한국어로 소통, 영어 코드/UI

## 주의사항
- `vercel.json`에서 `functions` 방식은 404 발생 → `builds` 방식만 사용
- API Key를 코드에 직접 넣으면 GitHub 푸시 차단됨 → 반드시 Vercel 환경변수 사용
- `taxmatecanada.com`은 구 `taxmate` 프로젝트에 연결돼 있었음 → 현재는 `taxmatecanada-tr6t`로 이전 완료
