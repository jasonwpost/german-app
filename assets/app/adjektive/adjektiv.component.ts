import { Component } from '@angular/core';
import { Adjektiv } from './adjektiv.model';

@Component({
  selector: 'ger-akjetiv',
  templateUrl: 'adjektiv.component.html',
  styles: []
})
export class AdjektivComponent {
  starkDeklination: string[] = ['er', 'e', 'es', 'en'];
  schwacheDeklination: string[] = ['e', 'e', 'e', 'en'];

}
