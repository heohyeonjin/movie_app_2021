/*ReactDom.render로 App을 index.html의 root에 렌더링함*/ 

import React from 'react'; //이 코드로 하여금 react는 jsx가 있는 component 사용 이해
import ReactDOM from 'react-dom';
import App from './App'; //같은 폴더 내에 있을 경우 ./뒤에 파일 명 작성

ReactDOM.render // 실제 DOM 내부에 App컴포넌트를 렌더링 하겠다.
(
    <React.StrictMode> /
        <App />
        </React.StrictMode>,
         document.getElementById('root')); 
         //StrictMode : 애플리케이션 내의 잠재적인 문제를 알아내기 위한 도구
