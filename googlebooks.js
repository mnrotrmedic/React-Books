var mongoose = require("mongoose");

var Schema = mongoose.Schema;

/*At a minimum, books should have each of the following fields:

* `title` - Title of the book from the Google Books API

* `authors` - The books's author(s) as returned from the Google Books API

* `description` - The book's description as returned from the Google Books API

* `image` - The Book's thumbnail image as returned from the Google Books API

* `link` - The Book's information link as returned from the Google Books API*/

const BookSchema = new Schema({

    title: {
        type: String,
        trim: true
    },
    authors: [{
        type: String
    }],
    description: {
        type: String
    },
    image: {
        type: String
    },
    link: {
        type: String
    }
})