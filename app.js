var app = new Vue({
  el: '#app',
  data: {
    cards: null,
    cardFields: ['cardId', 'creationDate', 'description', 'name', 'photoUrl'],
    apiUrl: 'https://postcards-backend.herokuapp.com',
    showComponent: null,
    form: {
      cardId: '',
      creationDate: '',
      description: '',
      name: '',
      photoUrl: '',
    },
    formFilledIn: false,
    formErrors: null,
  },
  methods: {
    getCards: function() {
      axios.get(this.apiUrl + '/postcards').then(response => {
        this.cards = response.data['cards'];
      });
    },
    setShowComponent: function(component) {
      this.showComponent = component;
    },
    checkFormFilledIn: function() {
      if (Object.values(this.form).includes('')) {
        this.formFilledIn = false;
      } else {
        this.formFilledIn = true;
      }
    },
    postPostcard: function() {
      this.checkFormFilledIn();
      if (this.formFilledIn) {
        // create form data
        var bodyFormData = new FormData();
        bodyFormData.set('cardId', this.form.cardId);
        bodyFormData.set('creationDate', this.form.creationDate);
        bodyFormData.set('description', this.form.description);
        bodyFormData.set('name', this.form.name);
        bodyFormData.set('photoUrl', this.form.photoUrl);

        // send post request
        axios.post(this.apiUrl + '/postcard', bodyFormData).then(response => {
          console.log(response.data);
          if (response.status == 409) {
            // show description of error if a card with the same id already exists
            this.formErrors = response.data['errors']['description'];
          }
        });
      }
    },
  },
});
