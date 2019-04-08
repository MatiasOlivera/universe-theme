<template>
  <!-- https://devhints.io/vue -->

  <!-- Lists -->
  <li v-for="todo in todos">
    {{ todo.text }}
  </li>

  <!-- Events -->
  <button v-on:click="submit">Go</button>

  <!-- Data -->
  <h1 class="red">{{ msg }}</h1>
</template>

<script>
new Vue({
  data: {},
  props: ['size'],
  props: { size: Number },
  computed: {
    fullname() {
      return this.name + ' ' + this.lastName;
    }
  },
  methods: { go() {} },
  watch: { a(val, oldVal) {} },
  el: '#foo',
  template: '',
  replace: true, // replace element (default true)

  // lifecycle
  created() {},
  beforeCompile() {},
  compiled() {},
  ready() {}, // $el is inserted for the first time
  attached() {},
  detached() {},
  beforeDestroy() {},
  destroyed() {},

  // options
  directives: {},
  elementDirectives: {},
  filters: {},
  components: {},
  transitions: {},
  partials: {}
});
</script>