# Vue.js Section 3： Todo List

[gh-pages](https://hedgehogkucc.github.io/vuetodolist/)

## 完成 addTodo() 和 添加 @keyup.enter

[GitHub](https://github.com/HedgehogKUCC/vuetodolist/commit/1a93dce40c4d05d757f5e50a24c5cd28518ae614)：紀錄這 commit 所學到的技術。

[Math.floor](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)：函式會回傳無條件捨去後的最大整數。

[Date.now()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date/now)：方法回傳自 1970/01/01 00:00:00 UTC 起經過的毫秒數。

[trim()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)：方法會從一個字符串的兩端刪除空白字符。

[JS 中如何判断 null](https://blog.xuite.net/dizzy03/murmur/46782052-%5B%E8%BD%89%5D%5BJavascript%5D+JS+%E4%B8%AD%E5%A6%82%E4%BD%95%E5%88%A4%E6%96%AD%EF%BC%8Dnull)：在 DOM 應用中，一般只需要用 `!value` 来判断就可以了。

<br>

## 完成頁籤過濾功能

[GitHub](https://github.com/HedgehogKUCC/vuetodolist/commit/920e4b32e1a92ee4eaea7189862c004168fd0516)：紀錄這 commit 所學到的技術。

[七種陣列方法](https://wcc723.github.io/javascript/2017/06/29/es6-native-array/)：`filter()`、`find()`、`forEach()`、`map()`、`every()`、`some()`、`reduce()`

`filter()`：會回傳一個陣列，其條件是 return 後方為 true 的物件，很適合用在搜尋符合條件的資料。

`forEach()`：不會額外回傳值，只單純執行每個陣列內的物件或值。

```js
computed: {
  filterTodos() {
    if (this.visibility === 'all') {

      return this.todos;

    } else if (this.visibility === 'processing') {

      // ============== 1.將這段簡化 ================
      let newTodos = [];
      this.todos.forEach(item => {
        if (!item.completed) newTodos.push(item);
      });
      // =========================================

      return newTodos;
      
    } else if (this.visibility === 'completed') {

      // ============== 2.將這段簡化 ================
      let newTodos = [];
      this.todos.forEach(item => {
        if (item.completed) newTodos.push(item);
      });
      // =========================================

      return newTodos;
    }
  }
},
```

```js
// 1. 簡化後
let newTodos = this.todos.filter(item => item.completed === false);

// 2. 簡化後
let newTodos = this.todos.filter(item => item.completed === true);
```

<br>

## 調整刪除項目細節

[GitHub](https://github.com/HedgehogKUCC/vuetodolist/commit/2d558ae42dea52d46fff81f6b9226f8ebe7fa801)：紀錄這 commit 所學到的技術。

[findIndex](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)：依據條件尋找陣列中符合的元素，並返回其 index（索引）。如果沒有符合的對象，將返回 -1 。

因為原本的寫法會造成細節錯誤

```js
this.todos.splice(key, 1);
```

<br>

所以將其修改為用 `item.id` 去比對 todos 每一筆 id，就可以找到正確的索引。

```js
removeTodo(item) {

  let newIndex = '';

  this.todos.forEach((e, i) => {
    if (item.id === e.id) newIndex = i;
  });

  this.todos.splice(newIndex, 1);
}
```

<br>

簡化後

```js
let newIndex = this.todos.findIndex(e => item.id === e.id);

this.todos.splice(newIndex, 1);
```

<br>

## 完成 localStorage 功能

[GitHub](https://github.com/HedgehogKUCC/vuetodolist/commit/48b6b6bc62374712ee32ee58e24667c683860518)：紀錄這 commit 所學到的技術。

[JSON.parse](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)：會把一個 JSON 字串 轉換成 JavaScript 的數值或是物件。

[JSON.stringify](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)：會將 JavaScript 的數值或是物件，轉換成 JSON 字串。

<br>

如果 `localStorage.getItem` 沒有資料就會使用**空陣列**

```js
todos: JSON.parse(localStorage.getItem('listData')) || []
```

<br>

這三個方法都有去改變到 todos，所以要將改變後的 todos 在存到 localStorage 中！

```js
addTodo()
removeTodo()
clearAllTask()
```

```js
localStorage.setItem('listData', JSON.stringify(this.todos));
```

<br>

## Vue

[Event Handling](https://vuejs.org/v2/guide/events.html)

`@keyup.esc`：按下鍵盤的 ESC

`@keyup.enter`：按下鍵盤的 ENTER

`@dblclick`：滑鼠雙點擊