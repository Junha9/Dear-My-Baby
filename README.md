# Git

### <strong>PULL 하는 습관</strong>

## Commit

### <strong>All 영어, All 소문자</strong>

| 커밋 타입    | 리스트                                     |
| -------- | --------------------------------------- |
| feat     | 기능 (새로운 기능)                             |
| fix      | 버그 (버그 수정)                              |
| design   | CSS 등 사용자 UI 디자인 변경                     |
| refactor | 리팩토링                                    |
| style    | 스타일 (코드 형식, 세미콜론 추가 : 비즈니스 로직에 변경 없음)   |
| docs     | 문서 (문서 추가, 수정, 삭제)                      |
| test     | 테스트 (테스트 코드 추가, 수정, 삭제: 비즈니스 로직에 변경 없음) |
| chore    | 기타 변경사항 (빌드 스크립트 수정 등)                  |
| post     | 블로그 포스트 추가 (신규 포스트 작성 및 수정)             |
| rename   | 파일 혹은 폴더명을 수정하거나 옮기는 작업만 하는 경우          |
| remove   | 파일을 삭제하는 작업만 수행한 경우                     |

> 💡 _Commit Type_ : _Commit Content_
> 
> <strong>ex) feat : login form</strong>

# 🥪Branch

## Branch 종류

- master
  - develop에서 검증 다 된거 배포할 때
  - 배포 가능한 상태의 결과물
- develop
  - 구현한 기능을 병합하기 위한 브랜치
  - 통합 폴더의 기능
- feature
  - 개별 기능 구현 브랜치
  - 기능 개발 완료 시 삭제
  - 네이밍 규칙
    - feat/파트/기능
    - feat/fe/login
    - feat/be/login

## Merge ❔

- <strong>Merge 전에 rebase</strong>
- Merge Request은 Git lab을 통해 요청 및 수락
- Merge Request시
  - title : merge하려는 브랜치 이름
  - description : 비우기
  - 머지 후 브랜치 삭제
- <strong>Merge 시 2명 이상 같이 확인하기 !!!</strong>

# JIRA

- 단위
  - Epic
    - Story
    - Task
- Epic
  - 가장 큰 단위
  - 하나의 기능 및 제공되는 서비스 목록
  - 네이밍 규칙
    - 명사로 마무리
    - 맨 앞에 대괄호를 사용해 카테고리 설정(영어의 경우 대문자로)
  - Story point는 0
  - Epic Name과 Summary는 동일하게
  - 예시
    - [DEV] 사용자 API
    - [PLN] 기획
    - [DSN] 디자인
    - [TEST] 사용자 API
    - [STUDY] 학습
    - [ETC] 팀 기술 블로그
- Story
  - Epic과 관련한 개발 외적인 업무
  - 네이밍 규칙
    - 명사로 마무리
    - 맨 앞에 대괄호를 사용해 카테고리 설정(영어의 경우 대문자로)
  - 최대 Story point는 4
  - 예시
    - [공통] PPT 작성
    - [공통] 포팅 메뉴얼 작성
- Task
  - Epic 기능에 해당하는 개발 업무
  - 네이밍 규칙
    - 명사로 마무리
    - 맨 앞에 대괄호를 사용해 카테고리 설정(영어의 경우 대문자로)
    - 구체적인 구현 예정 기능 명시
  - 최대 Story point는 4
  - 예시
    - [BE] 사용자 조회 API
    - [FE] 마이페이지 D-day 연동
    - [공통] 프론트 백 연동
- 각 Story 완료 할때 마다 걸린 시간 댓글에 남기기 (story point 단위로)
  - 더 걸렸으면 + point (ex. +1)
  - 덜 걸렸으면 - point
  - 예상한 대로면 0
