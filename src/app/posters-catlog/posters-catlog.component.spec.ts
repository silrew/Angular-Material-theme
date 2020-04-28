import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostersCatlogComponent } from './posters-catlog.component';

describe('PostersCatlogComponent', () => {
  let component: PostersCatlogComponent;
  let fixture: ComponentFixture<PostersCatlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostersCatlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostersCatlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
