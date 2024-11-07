import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabWorkoutsPage } from './tab-workouts.page';

describe('TabWorkoutsPage', () => {
  let component: TabWorkoutsPage;
  let fixture: ComponentFixture<TabWorkoutsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabWorkoutsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
