import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../../explore-container/explore-container.component';

import { WalletPage } from './wallet.page';

describe('WalletPage', () => {
  let component: WalletPage;
  let fixture: ComponentFixture<WalletPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WalletPage, IonicModule, ExploreContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WalletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
