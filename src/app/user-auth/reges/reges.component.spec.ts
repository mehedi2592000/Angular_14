import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegesComponent } from './reges.component';

describe('RegesComponent', () => {
  let component: RegesComponent;
  let fixture: ComponentFixture<RegesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
