import { Component, OnInit } from "@angular/core";
 
@Component({
    selector: 'luke-skywalker',
    templateUrl: './luke-skywalker.component.html'
})

export class LukeSkyWalkerComponent implements OnInit {
    ngOnInit(): void {
        console.log('hi - Im luke skywalker')
    }
    
}