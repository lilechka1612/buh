const books = [
["Folklore", "Deutsch scherzhaft", "frank style", "/images/deutsch_scherzhaft.jpg","/books/No-book", "1"],
["Grimms Märchen", "Der Zwerg Nase", "frank style", "/images/der_zwerg_nase.jpg", "/books/Der-Zwerg-Nase", "4"],
["Grimms Märchen", "Die Geschichte von dem kleinen Muck", "frank style", "/images/kleinen_Muck.jpg", "/books/Kleinen-Muck", "4"],
["No name", "No book", "frank style", "/images/dornröschen.jpg", "/books/No-book", "1"],
["No name", "No book", "frank style", "/images/die-bremer-stadtmusikanten.jpg", "/books/No-book", "1"],
["Friedrich Dürrenmatt", "Der Richter und sein Henker", "frank style", "/images/der_richter.jpg", "/books/No-book", "1"],
["No name", "Meine schöne Mörderin", "frank style", "/images/meine.jpg", "/books/No-book", "1"],
["No name", "No book", "frank style", "/images/wait.jpg", "/books/No-book", "1"],
];

const titleName = "Books shelf";
const titlePlaceholder = document.getElementsByTagName('title');


titlePlaceholder[0].innerHTML = titleName;

function fixParam(t) {
  return t.replaceAll(' ', '_')
}

function booksGalery() {
  let bt = '';
  const booksShelf = document.getElementById('row_books');
  l = books.length;
  for (i = 0; i < l; i++) {
    let al = fixParam(books[i][0]) + '_' + fixParam(books[i][1]);
    let ref = "./html/book.html?autor="+fixParam(books[i][0])+"&name=" + fixParam(books[i][1])+ "&path=" + books[i][4] + "&count=" + books[i][5];
    bt += ` <div class="book_cover"><a href=${ref}><img src=${books[i][3]} alt=${al} width="160" height="240"><div class="desc">${books[i][1]}</div></a></div>`
  }
  booksShelf.innerHTML = bt;
}

booksGalery()

