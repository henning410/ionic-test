import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from '../../explore-container/explore-container.component';

import { AddWallboxPage } from './addWallbox.page';

describe('AddWallboxPage', () => {
  let component: AddWallboxPage;
  let fixture: ComponentFixture<AddWallboxPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddWallboxPage, IonicModule, ExploreContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddWallboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
