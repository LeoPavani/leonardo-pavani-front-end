import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaAutorComponent } from './edita-autor.component';

describe('EditaAutorComponent', () => {
  let component: EditaAutorComponent;
  let fixture: ComponentFixture<EditaAutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaAutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditaAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
