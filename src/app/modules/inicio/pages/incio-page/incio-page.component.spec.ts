import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncioPageComponent } from './incio-page.component';

describe('IncioPageComponent', () => {
  let component: IncioPageComponent;
  let fixture: ComponentFixture<IncioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncioPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
