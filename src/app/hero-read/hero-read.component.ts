import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';

@Component({
    selector: 'app-hero-read',
    templateUrl: './hero-read.component.html',
    styleUrls: ['./hero-read.component.css']
})

export class HeroReadComponent implements OnInit {

    title = 'Read Tasks';
    heroes = [
        new Hero(1, 'Windstorm'),
        new Hero(13, 'Bombasto'),
        new Hero(15, 'Magneta'),
        new Hero(20, 'Tornado')
    ];

    //myHero = this.heroes[0];

    constructor() {
    }

    ngOnInit() {
    }

}