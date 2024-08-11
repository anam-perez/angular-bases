import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor( private dbzService: DbzService ){}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter( id: string ): void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }


  // public characters: Character[] = [{
  //   name: 'Krillin',
  //   power: 1000
  // }, {
  //   name: 'Goku',
  //   power: 9500
  // }, {
  //   name: 'Vegeta',
  //   power: 7500
  // }];

  // onNewCharacter(character: Character):void {
  //   // console.log('MainPage');
  //   // console.log(character);

  //   this.characters.push(character);
  // }


  // onDeleteCharacter(index: number): void {
  //   this.characters.splice(index, 1);
  // }
}
