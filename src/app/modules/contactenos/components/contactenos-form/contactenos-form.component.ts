import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contactenos-form',
  templateUrl: './contactenos-form.component.html',
  styleUrls: ['./contactenos-form.component.scss']
})
export class ContactenosFormComponent implements OnInit {

  ContactenosForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
