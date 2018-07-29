# Overview

An execution sample of `KeyValuePipe` which can be used with Angular 6.1.0 or higher.  
`KeyValuePipe` converts associative arrays and maps into arrays of the form `{key, value}`.

# System requirements  

* Node.js 8.x  
* Angular 6.1.x  

# Operation check  

## 1. Download Sample

```
git clone git@github.com:yasu-s/ng-keyvaluepipe-sample.git
```

## 2. Installing packages  

```
cd ng-keyvaluepipe-sample
npm install
```

## 3. Launch sample application  

```
npm start
```

## 4. Execution result

![browser](https://user-images.githubusercontent.com/2668146/43353348-1df19dce-9271-11e8-9e77-362040b87126.png)

# Sample source

## src/app/app.component.ts

```typescript
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
```

# Reference URL  

* https://angular.io/api/common/KeyValuePipe
