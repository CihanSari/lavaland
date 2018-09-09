import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LavaLeaderboardComponent } from './lava-leaderboard.component';

describe('LavaLeaderboardComponent', () => {
  let component: LavaLeaderboardComponent;
  let fixture: ComponentFixture<LavaLeaderboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LavaLeaderboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LavaLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
