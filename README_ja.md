# 概要

Angular 6.1.0以上で使用できる`KeyValuePipe`の実行サンプルです。  
`KeyValuePipe`は連想配列やMapを`{key, value}`形式の配列に変換します。

# 動作環境  

* Node.js 8.x  
* Angular 6.1.x  

# 動作確認  

## 1. サンプルのダウンロード

```
git clone git@github.com:yasu-s/ng-keyvaluepipe-sample.git
```

## 2. パッケージインストール  

```
cd ng-keyvaluepipe-sample
npm install
```

## 3. サンプルの起動  

```
npm start
```

# サンプルソース

## src/app/app.component.ts

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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

## src/app/app.component.html

```html
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
```

## 実行結果

![browser](https://user-images.githubusercontent.com/2668146/43353348-1df19dce-9271-11e8-9e77-362040b87126.png)
