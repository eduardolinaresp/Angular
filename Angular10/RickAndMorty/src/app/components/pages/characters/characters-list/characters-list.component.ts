import { Component, OnInit } from '@angular/core';
import { Character } from '@shared/interfaces/character.interface';
import { CharacterService } from '@shared/services/character.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {

  characters: Character[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
