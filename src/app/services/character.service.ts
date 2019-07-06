import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { catch} from 'rxjs/operators';

@Injectable()
export class CharacterService {
    apiUrl = '/assets/data/characters.json';

    constructor(private http: HttpClient) { }

    public getCharacterDetails(): Observable<any> {
        return this.http.get("./assets/data/characters.json")
            .pipe(
                map((res: any) => res),
                // catch((error:any) => console.log(error))
            )


    }

    getUrl(url): Observable<any> {
        return this.http.get(url)
            .pipe(
                map((res: any) => res),
                // catch((error:any) => console.log(error))

            )
    }

    // getCharacters(): Observable<any> {
    //     return this.http.get(this.apiUrl)
    //         // .pipe(
    //         //     map((data: any) => {
    //         //         return data.result
    //         //     })
    //         // );
    // }


}