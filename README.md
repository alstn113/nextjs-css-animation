추가적으로 해볼 것들 : 쇼핑몰같은 상단 메뉴바, 미디어쿼리

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

\_document.tsx에 폰트 넣기
참고로 오류가 발생해서 이거를 eslint.json에 넣어줌 // 11.1.3-canary.7에서는 된다는건지 정확히 모름.

      "rules": {
          "@next/next/no-document-import-in-page": "off"
        }

font 대부분 적용되는데 common 파일 꺼가 안되서 font-family : inherit 적용시킴

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
하면서 배운거

nextjs에서 window나 document를 사용할려면 componentDidMound(useEffect)안에서 사용해야함
hero image는 특대 사이즈 배너 이미지 hero header라고 하기도 함.

vw와 vh는 스크롤포함 값 %는 스크롤 제외
height: 100%할 때 기준값 없으면 적용 안 됨

width: fit-content로 ul사이즈 맞추기

이런 식으로 하면 스크롤 위로 갈 때만 보이게 가능함

            function Header() {
              const [isScroll, setIsScroll] = useState(false);
              const [lastYPos, setLastYPos] = useState(0);

              const handleScroll = useCallback(() => {
                const yPos = window.scrollY;
                const isScrollingUp = yPos > lastYPos;

                setIsScroll(isScrollingUp);
                setLastYPos(yPos);
              }, [lastYPos]);

              useEffect(() => {
                window.addEventListener('scroll', handleScroll);
                return () => {
                  window.removeEventListener('scroll', handleScroll);
                };
              }, [handleScroll]);
