$(document).ready(function() {

    function getProducts () {
        $.get("/api/products/", function (data){
            console.log(data);
            if(data){
                for (let i=0; i<data.length; i++){
                    const books = $("<div class='col'>");
                    books.append("<p>" + data[i].book_name + "</p>");
                    books.append("<p>" + data[i].author_name + "</p>");
                    books.append("<img src='" + data[i].image+ "' alt='book cover'>")
                    books.append("<p>$" + data[i].price + "</p>");
                    books.append("<p>Stock: " + data[i].stock_quantity + "</p>");
                    books.append("<button type='button' class='btn btn-success'>Add to Cart</button>")
                    books.append("<button type='button' class='btn btn-danger'>Remove Item</button>")
                    books.append("<p>                                       </p>");

                    $("#product").append(books)
                }
            }
        })
    
    }

    getProducts()




})