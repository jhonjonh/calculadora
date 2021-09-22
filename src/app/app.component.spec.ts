import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CalculadoraModule } from './calculadora';
import { CalculadoraService } from './calculadora/services';

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      providers: [ CalculadoraService ],
      imports:[ CalculadoraModule ]
      
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
