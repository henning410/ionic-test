import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OsmMap2Page } from './osm-map2.page';

describe('OsmMap2Page', () => {
  let component: OsmMap2Page;
  let fixture: ComponentFixture<OsmMap2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OsmMap2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
