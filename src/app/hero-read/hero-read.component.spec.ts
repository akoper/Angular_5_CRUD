import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroReadComponent } from './hero-read.component';

describe('HeroReadComponent', () => {
  let component: HeroReadComponent;
  let fixture: ComponentFixture<HeroReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
