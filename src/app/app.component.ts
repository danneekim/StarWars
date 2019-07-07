import { Component } from '@angular/core';
import { CharacterService } from './services/character.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StarWarsApp';
  charactersJSON$ = {};
  characterInfo$;
  films = <any>[];
  filmsLoaded: boolean = false;

  constructor( private characterService: CharacterService ){}

  ngOnInit(){
    this.getCharacters();
  }

  getCharacters(){
    this.characterService.getCharacterDetails().subscribe(
      (data) => {
        this.charactersJSON$=data;
        console.log(this.charactersJSON$);
      }
  )}


  getCharacterInfo(url){
    console.log(url);
    this.characterService.getUrl(url).subscribe(
      (data) => {
        this.characterInfo$ = data;
        console.log(this.characterInfo$)
        this.characterInfo$.films.forEach(filmUrl => {
          // console.log(film)
          this.getMovies(filmUrl);
        });
      }
    )
  }

  getMovies(url){
    this.films = [];
    this.characterService.getUrl(url).subscribe(
      (data) => {
        this.films.push(data);
      },
      (error) => {
        console.log(error)
      },
      () => {
        console.log(this.films)
      })
  }

}
