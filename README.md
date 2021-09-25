npx create-next-app 이름 --ts

      npm i -D @types/node @types/react-dom ts-node

tsconfig.json 설정

eslint, prettier 설정

      npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-import
      npm i -D eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/parser @typescript-eslint/eslint-plugin

emotion 설정

      npm i @emotion/react @emotion/styled emotion-reset
      npm i -D @emotion/babel-plugin

\_app.tsx 설정
.babelrc 설정

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
nextjs에서 window나 document를 사용할려면 componentDidMound(useEffect)안에서 사용해야함

framer motion으로 바꾸기
