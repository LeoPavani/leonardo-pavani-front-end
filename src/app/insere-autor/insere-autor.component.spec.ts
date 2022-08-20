import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsereAutorComponent } from './insere-autor.component';

describe('InsereAutorComponent', () => {
  let component: InsereAutorComponent;
  let fixture: ComponentFixture<InsereAutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsereAutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsereAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
