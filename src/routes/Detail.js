import React from "react";

class Detail extends React.Component //render하면 무조건 React.Component상속 받아야함
{
    componentDidMount(){
        const {location, history} = this.props; //location : 최근 경로 정보
        if(location.state === undefined){
            history.push("/"); //state가 없는경우 오류가 발생하므로 홈으로 리다이렉트
            //history : 리액트 라우트에 의해 전해지는 props중 url를 변경가능(리다이렉트를 하는 방법 중 하나)
        }
        //movie-detail로 갈려면 클릭을 해야함. 클릭을 안하면 home으로 리다이렉트

    }
    //props: 상위 컴포넌트에서 하위 컴포넌트로 값을 전달.
    //prop가능한 이유 : Detail은 컴포넌트 Route에 있는 것이기 때문
    //네비게이션은 props가 없음.
    render(){
        const {location} = this.props;
        if(location.state){
            return <li>
            {location.state.title}/

            {location.state.year}/

            {location.state.summary}
            </li>}
        else{
            return null;
        }
        

    }
}
//render()함수 호출 후 componentDidMount()호출

export default Detail;