const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const expected_book = getBooks();

//first method what we will learn is map
//what map does is irrate over an array and then do the operations we tell to do and make another array and store what we tell to do
let titles_of_all__books = expected_book.map((el) => el.title);

// console.log(titles_of_all__books);

//another examples
const somedata = expected_book.map((el) => {
  return {
    title: el.title,
    author: el.author,
  };
});

// somedata;

//now we will learn filter method

// Filter the books to include only those that have "fantasy" in their genres
const book_with_movie = expected_book
  .filter((el) => {
    return el.genres.includes("fantasy");
  })
  // Further filter the books to include only those with more than 500 pages
  .filter((el) => {
    return el.pages > 500;
  })
  // Map the remaining books to an array containing only their titles
  .map((el) => {
    return el.title;
  });

// 'book_with_movie' will now be an array of titles of books
// that belong to the "fantasy" genre and have more than 500 pages.

book_with_movie;

//now we will learn reduce method
//it just itterated over the array and add the pages here
const sum_of_pages = expected_book.reduce((sum, el) => {
  return (sum = sum + el.pages);
}, 0);

sum_of_pages;

//now we will learn sort
//by slice we make a copy of the array and then just do out sorting
let arr = [3, 4, 1, 3, 5, 6, 3];
let asencing_arr = arr.slice().sort((a, b) => {
  return a - b;
});
asencing_arr;
let desending_arr = arr.slice().sort((a, b) => {
  return b - a;
});

desending_arr;

let book_sort_With_page = expected_book
  .slice()
  .sort((a, b) => {
    return a.pages - b.pages;
  })
  .map((el) => {
    return el.title;
  });
book_sort_With_page;

//now we will learn immutable array

let bookarr = [
  {
    name: "Harry",
    id: 1,
    page: 20,
  },
];

let newbook = {
  name: "alvi",
  id: 6,
  page: 1120,
};
//let add element to this

const add_bookarr = [...bookarr, newbook];
//delete something
const delete_bookarr = bookarr.filter((el) => {
  return el.id !== 6;
});
delete_bookarr;

//update
const update_bookarr = bookarr.map((el) => {
  el.id === 1 ? { ...el, page: 10 } : el;
});
update_bookarr;
