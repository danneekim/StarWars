import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

@Injectable()
export class CharacterService {
    peopleURL = 'https://swapi.co/api/people/';
    apiUrl = '/assets/data/characters.json';

    constructor(private http: HttpClient) { }

    public getCharacterDetails(): Observable<any> {
        return this.http.get("./assets/data/characters.json")
            .pipe(
                map((res: any) => res),
                catchError((err:any) => throwError(err))
            )
    }

    getUrl(url): Observable<any[]> {
        return this.http.get(url)
            .pipe(
                map((res: any) => res),
                catchError((err:any) => throwError(err))
            )
    }
    
    getObiWanKenobi(): Observable<any> {
        return this.http.get(this.peopleURL)
        .pipe(
            map((res: any) => res),
            catchError((err:any) => throwError(err))
        )
    }

}