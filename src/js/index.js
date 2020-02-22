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
      console.log('addTodo');
    }
  },
});