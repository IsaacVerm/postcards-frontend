var app = new Vue({
  el: '#app',
  data: { cards: [], show: true },
  mounted() {
    axios.get('http://127.0.0.1:5000/postcards').then(response => {
      this.cards = response.data['cards'];
    });
  },
});
