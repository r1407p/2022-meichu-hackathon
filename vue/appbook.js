const app = Vue.createApp({
  data() {
    return {
      url: 'https://www.thenetninja.co.uk',
      showBooks: true,
      books: [
        { title: 'name of the wind', author: 'patrick rothfuss', img: 'www.jpg',isFav:true },
        { title: 'the way of kings', author: 'brandon sanderson', img: 'assest/www.jpg',isFav:false },
        { title: 'the final empire', author: 'brandon sanderson', img: 'assest/www.jpg',isFav:true },
      ],
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks =  !this.showBooks
    },
    handleEventClick(book){
      book.isFav = !book.isFav

    },
  },
  computed:{
    filteredBooks(){
      return this.books.filter((book)=>book.isFav)
    }

  }
})

app.mount('#app')