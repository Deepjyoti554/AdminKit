import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentRow1Component } from './content-row1.component';

describe('ContentRow1Component', () => {
  let component: ContentRow1Component;
  let fixture: ComponentFixture<ContentRow1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentRow1Component]
    });
    fixture = TestBed.createComponent(ContentRow1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
