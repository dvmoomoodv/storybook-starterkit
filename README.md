# React Storybook Monorepo

이 프로젝트는 React를 사용하는 애플리케이션에서 공통 UI 컴포넌트와 Storybook을 구성하는 방법을 보여줍니다. `pnpm`을 사용하여 workspace를 관리합니다.

## 설치 및 설정

### 1. pnpm 설치

먼저 `pnpm`을 설치합니다.

```bash
npm install -g pnpm
```


### 2. 프로젝트 클론 및 의존성 설치

프로젝트를 클론한 후 의존성을 설치합니다.

```bash
git clone https://github.com/dvmoomoodv/react-tailwind-storybook-demo.git
cd react-tailwind-storybook-demo
pnpm install
```

## Storybook 사용 방법

### 1. Storybook 실행

다음 명령어를 실행하여 Storybook을 시작합니다.

```bash
cd storybook/react-storybook
pnpm storybook
```

이 명령어는 Storybook 개발 서버를 시작하고 기본 브라우저에서 Storybook 인터페이스를 엽니다.

### 2. Storybook 빌드

다음 명령어를 실행하여 Storybook을 정적 웹사이트로 빌드합니다.

```bash
cd storybook/react-storybook
pnpm build-storybook
```

이 명령어는 `storybook-static` 디렉토리에 빌드된 Storybook 파일들을 생성합니다.

## 프로젝트 구조

```
react-tailwind-storybook-demo/
├── pnpm-workspace.yaml
├── ui/
│   └── react-tailwind/
│       ├── src/
│       │   ├── styles.css
│       │   └── Button.jsx
│       ├── package.json
│       ├── tailwind.config.js
│       └── postcss.config.js
└── storybook/
    └── react-storybook/
        ├── src/
        │   ├── components/
        │   │   └── Button.stories.jsx
        │   ├── examples/
        │   │   └── Example.stories.jsx
        ├── .storybook/
        │   ├── main.js
        │   └── preview.js
        ├── package.json
        └── vite.config.js
```

- **ui/**: 공통 UI 컴포넌트 패키지
  - **react-tailwind/**: React용 공통 UI 컴포넌트와 Tailwind CSS 설정
- **storybook/**: Storybook 설정
  - **react-storybook/**: React 애플리케이션의 Storybook 설정

## 환경 변수

프로젝트는 Node.js 버전 21.1.0 이상에서 실행됩니다. Node.js 버전을 지정하기 위해 `package.json` 파일에 다음과 같이 명시되어 있습니다:

```json
"engines": {
  "node": ">=21.1.0"
}
```
