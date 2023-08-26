import { TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { Location } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Title } from '@angular/platform-browser';

describe('HomeComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'DLENG Movies Website'`, () => {
    let pageTitle: Title = TestBed.inject(Title);
    setTimeout(() => {
      expect(pageTitle.getTitle()).toEqual('DLENG Movies Website');
    }, 500);
  });

  it('should navigate to the default path = ""', () => {
    const location: Location = TestBed.inject(Location);
    expect(location.path()).toBe('');
    console.log(location.path());
  });
});
