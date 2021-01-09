import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarPageComponent } from './ingresar-page.component';

describe('IngresarPageComponent', () => {
  let component: IngresarPageComponent;
  let fixture: ComponentFixture<IngresarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
