import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-search',
  template: `
    <input
      #inputSearch
      autofocus
      type="text"
      class="form-control-lg"
      placeholder="Search......"
      (keyup)="onSearch(inputSearch.value)"
    />
  `,
  styles: ['input {width:100%}'],
})
export class FormSearchComponent implements OnInit {

  private _router: Router;

  constructor(router: Router) {
    this._router = router;

  }

  ngOnInit(): void {}

  onSearch(value: string) {
    if (value && value.length > 3) {
      this._router.navigate(['/character-list'], {
        queryParams: { q: value },
      });
    }
  }
}
