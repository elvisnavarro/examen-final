import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactenosFormComponent } from './contactenos-form.component';

describe('ContactenosFormComponent', () => {
  let component: ContactenosFormComponent;
  let fixture: ComponentFixture<ContactenosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactenosFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactenosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
