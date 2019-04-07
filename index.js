// Vue.component('master-cards', {

// });

var app = new Vue({
  el: '#app',
  data: { cards: null },
  mounted() {
    var bodyFormData = new FormData();
    bodyFormData.set('cardId', 1);
    bodyFormData.set('photoUrl', 'www.photo.com/1');
    bodyFormData.set('name', 'A pretty postcard');
    bodyFormData.set('description', 'Look at how pretty it is.');
    bodyFormData.set('creationDate', '2018-01-05');
    axios.post('http://127.0.0.1:5000/postcard', bodyFormData).then(() => {
      axios.get('http://127.0.0.1:5000/postcards').then(response => (this.cards = response));
    });
  },
});
