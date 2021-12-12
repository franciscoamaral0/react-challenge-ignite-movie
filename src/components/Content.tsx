import { MovieCard } from "./MovieCard"
import {MovieProps} from '../App'

interface Props {
  movies: MovieProps[],
  selectedGenre: string
}


export function Content({movies, selectedGenre }: Props) {
  
  
  return( 
    <div className="container">
    <header>
      <span className="category">Categoria:<span> {selectedGenre}</span></span>
    </header>

    <main>
      <div className="movies-list">
        {movies.map((movie: any) => (
          <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  </div>
  )






}