### next.js(v13.5.3) + emotion(v11.11.1) template

next.js와 Emotion을 사용한 프로젝트 템플릿 입니다.
View와 Business logic을 처리하는 부분을 분리시켰으며, 각 파일에는 이에 대한 예시 코드가 있습니다.

pages 폴더에는 <Container /> 컴포넌트를 호출하여 View 역할을 하고있으며,
Container 파일 내에 전역으로 설정할 수 있는 비즈니스 로직을, 조금더 세부적인 로직은 그 내에 <Components /> 컴포넌트를 이용하여 구분합니다.

추후 다양한 라이브러리를 도입할 예정이며, 해당 프로젝트는 별도의 브랜치에서 관리할 예정입니다.

### 추후 도입 예정 목록 (2023.10.09)
- [x] Emotion
- [ ] react-query
- [ ] react-hook-form
