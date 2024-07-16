new Vue({
    el: '#app',
    data: {
      buttonText: 'Перевернуть',
      items: []
    },
    methods: {
      reverseText() {
        this.buttonText = this.buttonText.split('').reverse().join('');
      },
      addItem() {
        this.items.push('Новый элемент списка');
      },
      removeItem(index) {
        this.items.splice(index, 1);
      }
    }
  });