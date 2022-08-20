import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsereLivroComponent } from './insere-livro.component';

describe('InsereLivroComponent', () => {
  let component: InsereLivroComponent;
  let fixture: ComponentFixture<InsereLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsereLivroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsereLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
