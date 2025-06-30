# PRD: VS Code Easy Log Adder

## 1. 개요
개발자가 디버깅 시 `console.log`와 같은 로그 구문을 더 빠르고 쉽게 추가할 수 있도록 돕는 VS Code 확장 프로그램

## 2. 타겟 사용자
VS Code를 사용하여 웹, Node.js 등 JavaScript/TypeScript 기반 프로젝트를 개발하는 모든 개발자

## 3. 해결하려는 문제점
- if else 문이나 for 문 등 내부에 single line statement 코드에 로그를 추가하기 위해서는 먼저 single line statement 를 블럭 코드로 전환해야 한다. 이 과정에서 많은 타이핑이 필요하다.
- 또한 console.log() 를 사용할 때마다 매번 타이핑이 길어진다.

## 4. 핵심 기능 (Features)
- **설명:** 사용자가 에디터에서 커서를 원하는 위치에 두고 명령을 실행하면, 빈 로그 구문이 바로 윗줄에 자동으로 추가됩니다.
- **실행 방법:**
    - 단축키 (기본적 단축 키 설정: `Alt+L`)
    - 마우스 우클릭 컨텍스트 메뉴 > "Add Empty console.log Here"
    - 명령어 팔레트 (Command Palette) > "Easy Log: Add Empty console.log Here"
- **동작:**
    - 커서가 single line statement 위에 있을 때에는 해당 코드를 블럭 코드로 전환하고, 빈 console.log 문장을 자동으로 상단에 삽입한다. 그 후에 커서의 위치를 괄호 안으로 이동시키는 작업을 수행한다.
    - 만약 이미 블럭 코드라면 블럭을 추가하는 작업은 생략하고 커서의 윗 라인에 빈 console.log 문장을 삽입하고 커서의 위치를 이동한다

## 5. 실행과 배포
- VS code 에서 설치 가능한 확장으로 배포한다
- 배포 전 로컬에서 테스트해 볼 수 있게 한다
