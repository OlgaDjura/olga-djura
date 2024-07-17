new Vue({
  el: '#app',
  data: {
      products: [
          { name: 'Товар 1', price: 1500 },
          { name: 'Товар 2', price: 900 },
          { name: 'Товар 3', price: 3000 },
          { name: 'Товар 4', price: 1200 },
          { name: 'Товар 5', price: 2000 }
      ]
  },
  methods: {
      sort(order) {
          if (order === 'ascending') {
              this.products.sort((a, b) => a.price - b.price);
          } else if (order === 'descending') {
              this.products.sort((a, b) => b.price - a.price);
          }
      }
  }
});