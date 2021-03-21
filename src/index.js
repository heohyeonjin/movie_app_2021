import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; //같은 폴더 내에 있을 경우 ./뒤에 파일 명 작성

ReactDOM.render(
    <React.StrictMode>
        <App />
        </React.StrictMode>,
         document.getElementById('root')); 
