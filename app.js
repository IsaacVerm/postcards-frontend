var app = new Vue({
  el: '#app',
  data: {
    cards: null,
    tableHeaders: null,
    apiUrl: 'http://127.0.0.1:5000/postcards',
    show: null,
  },
  methods: {
    setCards: function(response) {
      this.cards = response.data['cards'];
    },
    setTableHeaders: function(cards) {
      this.tableHeaders = Object.keys(cards[0]); // all cards have the same headers so just pick one
    },
    setShow: function(component) {
      this.show = component;
    },
  },
  created: function() {
    axios.get(this.apiUrl).then(response => {
      this.setCards(response);
      this.setTableHeaders(this.cards);
    });
  },
});
