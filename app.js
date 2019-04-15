var app = new Vue({
  el: '#app',
  data: {
    cards: null,
    tableHeaders: null,
    apiUrl: 'http://127.0.0.1:5000',
    show: null,
    form: {
      cardId: '',
      creationDate: '',
      description: '',
      name: '',
      photoUrl: '',
    },
    formComplete: false,
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
    setFormComplete: function() {
      if (Object.values(this.form).includes('')) {
        this.formComplete = false;
      } else {
        this.formComplete = true;
      }
    },
    postPostcard: function() {
      this.setFormComplete();
      if (this.formComplete) {
        var bodyFormData = new FormData();
        bodyFormData.set('cardId', this.form.cardId);
        bodyFormData.set('creationDate', this.form.creationDate);
        bodyFormData.set('description', this.form.description);
        bodyFormData.set('name', this.form.name);
        bodyFormData.set('photoUrl', this.form.photoUrl);

        axios.post(this.apiUrl + '/postcard', bodyFormData);
      }
    },
  },
  created: function() {
    axios.get(this.apiUrl + '/postcards').then(response => {
      this.setCards(response);
      this.setTableHeaders(this.cards);
    });
  },
});
