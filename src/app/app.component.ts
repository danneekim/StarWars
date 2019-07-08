import { Component, Input } from '@angular/core';
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

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.characterService.getCharacterDetails().subscribe(
      (data) => {
        this.charactersJSON$ = data;
        console.log(this.charactersJSON$);
      }
    )
  }

  asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array)
    }
  }

  getCharacterInfo(url, name) {
    this.films = [];
    var temp = [];
    console.log(url);

    if (url === "https://swapi.co/api/people/unknown/") {
      //make API call to people API to get the list of films for Obi-Wan Kenobi
      this.characterService.getObiWanKenobi().subscribe(
        async data => {
          let obiWanObject = data.results.find(obj => obj.name === 'Obi-Wan Kenobi');
          const start = async () => {
            await this.asyncForEach(obiWanObject.films, async (film) => {
              temp.push(await this.getMovies(film));
            });
          }
          await start();
          this.films = temp;
        }
      )
    }
    else if (name !== 'Obi-wan Kenobi') {  
      this.characterService.getUrl(url).subscribe(
        async data => {
         this.characterInfo$ = data;
 
         const start = async () => {
           await this.asyncForEach(this.characterInfo$.films, async (film) => {
             temp.push(await this.getMovies(film));
           });
         }
         await start();
         this.films = temp;
       }
     )
    }
  }

  getMovies(url) {
    return new Promise(resolve => {
      let films = {};
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