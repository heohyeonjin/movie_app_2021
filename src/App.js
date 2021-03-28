
/*라우터 생성 */

import React from "react";
import {HashRouter,Route} from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
function App(){
 return( <HashRouter>
          <Navigation />
           <Route path = "/" exact={true} component = {Home}/>
           <Route path = "/about" component = {About}/>
           <Route path = "/movie/:id" component = {Detail}/>
        </HashRouter>
 );
}
//HashRouter , BrowseRouter 선택
//<HashRouter> : Router 생성
//<Route path> : Router 안에 스크린을 넣는 것.
//--> 페이지에서 /About치면 해당 html 불러옴
export default App;
/*router : url을 가져다가 확인하고 라우터에게 명령한거에 따라서 컴포넌트를 불러옴 */
// /home/instruction하면 두개 다 렌더링함. --> exact = {true}추가 : 해당 path아니면 렌더링 안함
/*Navigation에서 Link를 사용하는데 Link를 사용할 때는 Router안에 있어야 해서 HashRouter안에 있다*/ 
/*exact = {true}는 /about했을 때 path = "/" , path = "/about"둘 다 렌더링 되는 것 방지*/