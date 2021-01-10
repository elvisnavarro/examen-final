import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ingresar-form',
  templateUrl: './ingresar-form.component.html',
  styleUrls: ['./ingresar-form.component.scss']
})
export class IngresarFormComponent implements OnInit {

  LoginForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
