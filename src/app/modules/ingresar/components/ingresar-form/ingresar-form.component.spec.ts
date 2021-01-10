import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarFormComponent } from './ingresar-form.component';

describe('IngresarFormComponent', () => {
  let component: IngresarFormComponent;
  let fixture: ComponentFixture<IngresarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
