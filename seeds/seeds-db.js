const db = require('../models');
const items = [
  {
    book_name: "Handmaid's Tale",
    author_name: "Margaret Atwood",
    price: 12.99,
    stock_quantity: 20,
    image: "dflksh"
  },
  {
    book_name: "The Passage",
    author_name: "Justin Cronin",
    price: 9.99,
    stock_quantity: 35,
    image: "fjdsl"
  },
  {
    book_name: "Lost in Space",
    author_name: "George O. Smith",
    price: 15.99,
    stock_quantity: 5,
    image: "hfsso"
  },
  {
    book_name: "River God",
    author_name: "Wilbur Smith",
    price: 11.99,
    stock_quantity: 25,
    image: "fsdh;fhs"
  },
  {
    book_name: "The Horse Goddess",
    author_name: "Morgan LLywelyn",
    price: 14.99,
    stock_quantity: 10,
    image: "jdf;las"
  },
  {
    book_name: "The Beholder's Eye",
    author_name: "Julie Czerneda",
    price: 11.99,
    stock_quantity: 20,
    image: "dflksh"
  },
  {
    book_name: "Dune",
    author_name: "Frank Herbert",
    price: 18.99,
    stock_quantity: 20,
    image: "dflksh"
  },
  {
    book_name: "Eragon",
    author_name: "Christopher Paolini",
    price: 12.99,
    stock_quantity: 30,
    image: "dflksh"
  }, 
  {
    book_name: "Harry Potter Volumes 1-7",
    author_name: "J.K. Rowling",
    price: 52.99,
    stock_quantity: 40,
    image: "dflksh"
  }, 
  {
    book_name: "Scar Night",
    author_name: "Alan Campbell",
    price: 9.99,
    stock_quantity: 20,
    image: "dflksh"
  },

];
db.sequelize.sync({ force: true }).then(function() {
  db.Product.bulkCreate(items)
    .then(function(rows) {
      console.log(`\n${rows.length} Rows Inserted`);
    })
    .catch(function(err) {
      console.log('\nError:', err);
    });
});