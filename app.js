var app = new Vue({
  el: '#app',
  data: { cards: null, tableHeaders: null },
  methods: {
    getPostcards: function() {
      axios.get('http://127.0.0.1:5000/postcards').then(response => {
        this.cards = response.data['cards'];
      });
    },
    setTableHeaders: function() {
      this.tableHeaders = Object.keys(this.cards[0]);
    },
  },
  created: function() {
    console.log('lol');
    axios.get('http://127.0.0.1:5000/postcards').then(response => {
      this.cards = response.data['cards'];
      this.tableHeaders = Object.keys(this.cards[0]);
    });
  },
});
