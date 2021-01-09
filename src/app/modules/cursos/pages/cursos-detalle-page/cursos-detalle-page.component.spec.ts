import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosDetallePageComponent } from './cursos-detalle-page.component';

describe('CursosDetallePageComponent', () => {
  let component: CursosDetallePageComponent;
  let fixture: ComponentFixture<CursosDetallePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosDetallePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosDetallePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
