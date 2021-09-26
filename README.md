https://github.com/jus0k/scroll-hooks
이분 걸 참고하면서 만들었음

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
hero image는 특대 사이즈 배너 이미지 hero header라고 하기도 함.

vw와 vh는 스크롤포함 값 %는 스크롤 제외
height: 100%할 때 기준값 없으면 적용 안 됨
