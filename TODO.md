# VS Code Easy Log Adder - 개발 체크리스트

## 1단계: 기본 프로젝트 설정 및 명령어 등록
- [ ] `package.json`: `vscode-easy-log-adder.addEmptyLog` 명령어를 등록하고, `activationEvents`에 이 명령어를 추가하여 확장이 활성화되도록 설정.
- [ ] `src/extension.ts`: 등록된 `addEmptyLog` 명령어에 대한 핸들러 함수를 기본 형태로 구현.

## 2단계: 핵심 로직 구현 - console.log 삽입
- [ ] `src/extension.ts`: 현재 활성화된 에디터에서 커서의 위치 정보를 가져오는 기능 구현.
- [ ] `src/extension.ts`: 커서가 위치한 라인의 코드를 분석하는 기능 구현.
- [ ] `src/extension.ts`: 아래의 조건에 따라 `console.log();` 구문을 삽입하는 로직 구현.
    - **IF** 코드가 이미 블록(`{...}`) 안에 있는 경우: 커서가 있는 라인의 바로 윗줄에 `console.log();` 삽입.
    - **ELSE IF** 코드가 `if`, `for`, `while` 등의 제어문 바로 다음에 오는 단일 라인 문(single-line statement)인 경우:
        - [ ] 해당 단일 라인 문을 중괄호 `{}`로 감싸서 블록으로 변환.
        - [ ] 변환된 블록 내부, 즉 원래 코드의 윗줄에 `console.log();` 삽입.
- [ ] `src/extension.ts`: `console.log()` 삽입 후, 커서를 괄호 `()` 안으로 자동으로 이동시키는 기능 구현.

## 3단계: 편의 기능 추가
- [ ] `package.json`: `contributes` 섹션에 `keybindings`를 추가하여 `Alt+L` 단축키를 `addEmptyLog` 명령어에 바인딩.
- [ ] `package.json`: `contributes` 섹션에 `menus`를 추가하여 에디터의 마우스 우클릭 컨텍스트 메뉴에 "Add Empty console.log Here" 항목 추가.

## 4단계: 테스트 및 문서화
- [ ] 다양한 코드 상황(일반 코드, if/for/while 단일 라인, 중첩된 코드 등)에서 기능이 올바르게 동작하는지 수동으로 테스트.
- [ ] `README.md` 파일에 확장의 기능, 사용법(단축키, 메뉴), 데모 GIF 등을 상세하게 작성.
- [ ] `package.json`의 `displayName`, `description`, `categories` 등 게시를 위한 정보들을 최종 검토 및 수정.

## 5단계: 배포
- [ ] `vsce` (Visual Studio Code Extensions) 패키징 및 배포 도구를 사용하여 확장을 패키징.
- [ ] Visual Studio Marketplace에 확장 게시.
