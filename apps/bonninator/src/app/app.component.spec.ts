import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BonnieService } from './bonnie.service';

import { randNumber, randTextRange } from '@ngneat/falso';
import { Spy, createSpyFromClass, provideAutoSpy } from 'jest-auto-spies';

describe('AppComponent', () => {
  let component: AppComponent;
  let bonnieServiceSpy: Spy<BonnieService>;
  let router: Router;

  const mockActivatedRoute = {
    snapshot: {
      data: {
        title: randTextRange({ min: 1, max: 4 }),
        routes: {
          root: '../../',
        },
      },
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule
      ],
      providers: [
        AppComponent,
        {
          provide: ActivatedRoute,
          useValue: mockActivatedRoute
        },
        {
          provide: BonnieService,
          useValue: createSpyFromClass(BonnieService, {
            gettersToSpyOn: ['bonnieId'],
            settersToSpyOn: ['bonnieId'],
          }),
        },
        provideAutoSpy(Router),
      ],
    });

    component = TestBed.inject(AppComponent);
    bonnieServiceSpy = TestBed.inject<any>(BonnieService);
    router = TestBed.inject(Router);
  });

  it('should set the BonnieService bonnieId given it exists', () => {
    const bonnieId = randNumber({ min: 1 });
    bonnieServiceSpy.accessorSpies.setters.bonnieId.mockReturnValue(bonnieId);

    component.ngOnInit();

    expect(bonnieServiceSpy.bonnieId).toBe(bonnieId);
  });
});
