import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OsmMapPage } from './osm-map.page';

describe('OsmMapPage', () => {
  let component: OsmMapPage;
  let fixture: ComponentFixture<OsmMapPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OsmMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
