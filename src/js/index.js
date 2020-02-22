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
    visibility: 'all',
    cacheTodo: {},
    cacheTitle: '',
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
    removeTodo(item) {
      // let newIndex = '';
      // this.todos.forEach((e, i) => {
      //   if (item.id === e.id) newIndex = i;
      // });
      let newIndex = this.todos.findIndex(e => item.id === e.id);
      this.todos.splice(newIndex, 1);
    },
    editTodo(item) {
      this.cacheTodo = item;
      this.cacheTitle = item.title;
    },
    cancelEdit() {
      this.cacheTodo = {};
    },
    doneEdit(item) {
      item.title = this.cacheTitle;
      this.cacheTitle = '';
      this.cacheTodo = {};
    },
    clearAllTask() {
      this.todos = [];
    }
  },
  computed: {
    filterTodos() {
      if (this.visibility === 'all') {
        return this.todos;
      } else if (this.visibility === 'processing') {
        // let newTodos = [];
        // this.todos.forEach(item => {
        //   if (!item.completed) newTodos.push(item);
        // });
        // return newTodos;
        let newTodos = this.todos.filter(item => item.completed === false);
        return newTodos;
      } else if (this.visibility === 'completed') {
        // let newTodos = [];
        // this.todos.forEach(item => {
        //   if (item.completed) newTodos.push(item);
        // });
        // return newTodos;
        let newTodos = this.todos.filter(item => item.completed === true);
        return newTodos;
      }
    },
    filterUncompleted() {
      let newTodos = this.todos.filter(item => item.completed === false);
      return newTodos.length;
    }
  },
});