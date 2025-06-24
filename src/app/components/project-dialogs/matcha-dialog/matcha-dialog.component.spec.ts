import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchaDialogComponent } from './matcha-dialog.component';

describe('MatchaDialogComponent', () => {
  let component: MatchaDialogComponent;
  let fixture: ComponentFixture<MatchaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchaDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
