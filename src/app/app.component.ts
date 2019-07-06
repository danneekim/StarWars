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
  films = [];
  


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
      // error => console.log(error));

  )}


  getCharacterInfo(url){
    console.log(url);
    this.characterService.getUrl(url).subscribe(
      (data) => {
        this.characterInfo$ = data;
        console.log(this.characterInfo$)
        this.characterInfo$.films.forEach(film => {
          // console.log(film)
          this.characterService.getUrl(film).subscribe(
            (data) => {
              // console.log(data);
              this.films.push(data);
              console.log(this.films)
            }
          )
        });
      }
    )
  }

}
