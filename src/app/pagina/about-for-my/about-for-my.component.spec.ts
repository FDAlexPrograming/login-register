import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutForMyComponent } from './about-for-my.component';

describe('AboutForMyComponent', () => {
  let component: AboutForMyComponent;
  let fixture: ComponentFixture<AboutForMyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutForMyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutForMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
