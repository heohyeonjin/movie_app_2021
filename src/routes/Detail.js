import React from "react";

class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state === undefined){
            history.push("/"); //자동적으로 home으로 돌아가게
        }
        //movie-deatil로 갈려면 클릭을 해야함. 클릭을 안하면 home으로 리다이렉트

    }
    //props: 상위 컴포넌트에서 하위 컴포넌트로 값을 전달.
    //prop가능한 이유 : Detail은 컴포넌트 Route에 있는 것이기 때문
    //네비게이션은 props가 없음.
    render(){
        const {location} = this.props;
        if(location.state){
            return <span>{location.state.title}</span>
        }
        else{
            return null;
        }
        

    }
}
//render()함수 호출 후 componentDidMount()호출

export default Detail;