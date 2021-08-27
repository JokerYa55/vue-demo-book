import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 9,
    bookList: [{ 'id': 1, 'isbn': '11111111', 'category': 'Фантастика', 'page': 110, 'title': 'Тайна двух океанов.', 'author': 'Г. Адамов', 'img': '/img/978-5-91878-455-6.jpg' },
    { 'id': 2, 'isbn': '11111112', 'category': 'Фантастика', 'page': 310, 'title': 'Крыса из нержавеющей стали.', 'author': 'Г. Гаррисон', 'img': '/img/978-5-91878-455-6.jpg' },
    { 'id': 3, 'isbn': '11111113', 'category': 'Фантастика', 'page': 410, 'title': 'Крыса из нержавеющей стали спасает мир.', 'author': 'Г. Гаррисон', 'img': '/img/978-5-91878-455-6.jpg' },
    { 'id': 4, 'isbn': '11111114', 'category': 'Фантастика', 'page': 230, 'title': 'Крыса из нержавеющей стали идет в армию.', 'author': 'Г. Гаррисон', 'img': '/img/978-5-91878-455-6.jpg' },
    { 'id': 5, 'isbn': '11111115', 'category': 'Фантастика', 'page': 430, 'title': 'Неукротимая планета.', 'author': 'Г. Гаррисон', 'img': '/img/978-5-91878-455-6.jpg' }],
    categoryList: ['Фантастика', 'Приключения', 'Наука', 'Детектив', 'История']

  },
  mutations: {
  },
  actions: {

  },
  modules: {
  }
})
