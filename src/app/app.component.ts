import { Component, Input } from '@angular/core';
import { CharacterService } from './services/character.service';

console.log('app.component');
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

  constructor(private characterService: CharacterService) { }

  /**
   * On initializing page get character data
   * from character.json
   */
  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.characterService.getCharacterDetails().subscribe(
      (data) => {
        this.charactersJSON$ = data;
      }
    )
  }

  asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array)
    }
  }

  /**
   * GET character data to access films
   * GET each film data and load into array
   * SET loaded films to variable to display
   * @param url  = url from character.json
   * @param name = name from character.json
   */
  getCharacterInfo(url, name) {
    this.films = [];
    let loadingFilms = [];
    this.characterService.getUrl(url).subscribe(
      async data => {
        this.characterInfo$ = data;

        const start = async () => {
          await this.asyncForEach(this.characterInfo$.films, async (film) => {
            loadingFilms.push(await this.getMovies(film));
          });
        }
        await start();
        this.films = loadingFilms;
      }
    )

  }

  getMovies(url) {
    return new Promise(resolve => {
      this.characterService.getUrl(url).subscribe(
        (data) => {
          resolve(data);
        },
        (error) => {
          console.log(error)
        },
        () => {
        })
    })
  }
}