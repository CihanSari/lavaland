import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LavaGameFinishComponent } from './lava-game-finish.component';

describe('LavaGameFinishComponent', () => {
  let component: LavaGameFinishComponent;
  let fixture: ComponentFixture<LavaGameFinishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LavaGameFinishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LavaGameFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
