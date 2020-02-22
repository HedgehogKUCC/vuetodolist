import '../scss/index.scss';
import '@babel/polyfill';

var app = new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todos: [
      {
        id: '777',
        title: 'Hello World',
        completed: false,
      }
    ],
  },
  methods: {
    addTodo() {
      let value = this.newTodo.trim();
      let timestamp = Math.floor(Date.now());
      if (!value) return;
      this.todos.push({
        id: timestamp,
        title: value,
        completed: false,
      });
      this.newTodo = '';
    },
    removeTodo(key) {
      this.todos.splice(key, 1);
    },
  },
});