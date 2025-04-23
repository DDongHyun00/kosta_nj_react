import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const getMovies = async function () {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_cast=true&with_image=true`
    );
    const json = await response.json();
    console.log(json.data.movie);
    console.log(json.data.movie.genres);
    console.log(json.data.movie.cast);
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      <h2>{movie.title}</h2>
      {/* Movie 의 detail 정보 - cast , image , titie, 좋아요, 평점, genres ... */}
      <div>제목 : {movie.title}</div>
      <img src={movie.large_cover_image} alt="cover_image" />
      <div>평점 : {movie.rating}</div>
      <div>좋아요 : {movie.like_count}</div>
      <div>
        {movie.genres?.map((genre, index) => (
          <p key={index}>{genre}</p>
        ))}
      </div>
      <div>
        {movie.cast?.map((char, index) => (
          <p key={index}>{char.name}</p>
        ))}
      </div>
    </>
  );
}

export default Detail;
