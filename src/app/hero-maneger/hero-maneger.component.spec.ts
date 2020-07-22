import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroManegerComponent } from './hero-maneger.component';

describe('HeroManegerComponent', () => {
  let component: HeroManegerComponent;
  let fixture: ComponentFixture<HeroManegerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroManegerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroManegerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
