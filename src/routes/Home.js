/*영화를 보여주는 페이지*/
//영화리스트 api와 통신하여 해당 데이터를 movie component로 만들어 줌
import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css"
class Home extends React.Component{
  //state안은 바꿀 데이터
  state = {
    isLoading : true, //mount되자마자 isLoading은 기본적으로 true
    movies : []
  };

getMovies = async () => {
  // const movies.data.data.movies = await axios(“ “); movies.data.data.movies
  const{data:{data : {movies}}
  } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
  //this.setState({movies:movies}) 앞에 movies는 setState의 movies이고 뒤에는 axios에서 온 movies임 
  this.setState({movies, isLoading : false});  //단축해서 사용 가능
}
//setState : state를 set할때 react에서 외부 상태에 의존하지 않는 좋은 방법
//async : 이 함수는 비동기이다(기다려야 한다) await, axios가 끝날때 까지 기다렸다가 계속 함.
/*render 하면 호출되는 life cycle method */ 
  componentDidMount() //API로 부터 data fetching이 완료되면 movie render????
  {
    this.getMovies();
  }
  //component생성 시 constructor -> componentWillMount -> render -> componentDidMount순으로 진행됨
  render(){
  //render : 데이터를 입력받아 화면에 표시할 내용을 반환
    const { isLoading, movies } = this.state; //ES6이랑 관련,isLoading대신에 this.state.isLoading써도 되지만 바람직X
    //movie배열 요소를 mv를 통해 Movie함수에 전달한다.
    return (
          <section className = "container"> 
            {isLoading ? ( // class내에 있으므로 혼란스러울 수도있으므로 className이 적절
            <div className = "loader">
              <span className = "loader_test">Loading...</span> 
            </div>
            ):(
              <div className = "movies">{
              movies.map(mv =>(
                <Movie  key = {mv.key} //각각 child는 유일한 key prop를 가져야 함
                        id={mv.id} 
                        year={mv.year} 
                        title={mv.title} 
                        summary={mv.summary}
                        poster={mv.medium_cover_image} //poster
                        genres = {mv.genres}
                />
                ))} 
              </div>
            )}
  </section>
    );
  }
}
//loading이 완료되면 movie클래스에 map=>을 통하여 여러가지 값을 props로 Movie에 넘겨줌
//map : function을 취해서 그 function을 array의 각 item에 적용
// mv는 object, movies 배열을 Movie 함수에 각각 매칭. mv는 movies의 인자라 생각.
export default Home;
 
 