import { GenreResponseProps } from '../App'
import {Button} from '../components/Button'

interface Props {
  genres: GenreResponseProps[];
  handleClickButton: (id: number) => void
  selectedGenreId?: number;
}

export function SideBar({genres, handleClickButton, selectedGenreId}: Props) {
  
  
return(


      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map((genre:GenreResponseProps) => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
)


}