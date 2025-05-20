import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateplayerPage } from './createplayer.page';

describe('CreateplayerPage', () => {
  let component: CreateplayerPage;
  let fixture: ComponentFixture<CreateplayerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateplayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
