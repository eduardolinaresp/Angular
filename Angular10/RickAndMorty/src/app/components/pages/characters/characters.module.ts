import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CharactersListComponent } from '@characters/characters-list/characters-list.component';
import { CharactersDetailsComponent } from '@characters/characters-details/characters-details.component';
/*import { CharactersComponent } from '@characters/character.components'; */

const myComponents = [
  CharactersDetailsComponent,
  CharactersListComponent,
 /* CharactersComponent*/
];


@NgModule({
  declarations: [...myComponents],
  imports: [CommonModule ],
  exports: [...myComponents],
})
export class CharactersModule { }
