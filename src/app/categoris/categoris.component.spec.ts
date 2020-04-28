import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorisComponent } from './categoris.component';

describe('CategorisComponent', () => {
  let component: CategorisComponent;
  let fixture: ComponentFixture<CategorisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
