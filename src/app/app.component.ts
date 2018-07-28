import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  /** Associative array */
  keyValues = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
  };

  /** Map */
  map = new Map<string, string>([
    ['mapKey1', 'mapValue1'],
    ['mapKey2', 'mapValue2'],
    ['mapKey3', 'mapValue3'],
  ]);

}
