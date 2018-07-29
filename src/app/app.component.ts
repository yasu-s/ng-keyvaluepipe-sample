import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- using KeyValuePipe for Associative array -->
    <h3>keyValues loop</h3>
    <ul>
      <li *ngFor="let pair of keyValues | keyvalue">
        {{ pair.key }}: {{ pair.value }}
      </li>
    </ul>

    <!-- using KeyValuePipe for Map -->
    <h3>map loop</h3>
    <ul>
      <li *ngFor="let pair of map | keyvalue">
        {{ pair.key }}: {{ pair.value }}
      </li>
    </ul>
  `
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
