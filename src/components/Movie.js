// movie를 render

import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";
/*movie component는 state를 필요로 하지 않음-->class component일 필요 X*/

//각 영화 데이터를 클릭할 시 상세 페이지로 이동. 경로는 pathname, 값은 state를 통해서 넘겨줌
function Movie({id,year, title, summary, poster,genres}){
    return(
        <div className = "movie">
        <Link 
          to = {{
            pathname : `/movie/${id}`,
            state : { //클릭 시 detail로 이동하고 state정보를 모두 넘겨준다.
                year, // year:year
                title,
                summary,
                poster,
                genres
            } // 이거지우면 state가 없다고 인식되어서 home으로 리다이렉션댐
          }}// 여기까지 실제 이동하는 경로 이 이후로부터 하이퍼링크들
         >    
            <img src = {poster} alt = {title} title = {title}/>
            <div className = "movie_data">
            <h3 className = "movie_title">{title}</h3>
            <h5 className = "movie_year">{year}</h5>
            <ul className="movie_genres">{genres.map((genre,index) => (<li key = {index} className ="genres_genre">{genre}</li> ))}</ul>
            <p className = "movie_summary">{summary.slice(0,140)}...</p> 
            
         </div>
         </Link>
         </div>
         );
         /*(genre,index) --> 리액트는 element가 많은 경우 key를 주어야 한다. 
         index는 movies를 map메소드를 이용해 돌면서 각각의 요소의 고유한 인덱스 번호로 key={index}를 주어 각 요소마다 고유한 key를 생성해 줌.*/
                }
 
// 내가 원하는 값이 맞는지 확인하는 용도
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;