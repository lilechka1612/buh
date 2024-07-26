const pagArrea = pag(count);

function displayNum(n) {
  if (n < 10) {
    return "0" + n;
  } else {
    return n;
  }
}

function pag(count) {
  ar = [];
  for (i = 1; i <= count; i++) {
    ar.push([i, path + "/Chapter" + displayNum(i) + ".html"]);
  }
  return ar;
}

function createPagination(array) {
  let pa = '<a href="Chapter01.html">&laquo;&laquo;</a>';
  const le = array.length;
  for (i = 0; i < le; i++) {
    let n = i + 1;
    pa += "<a href=" + array[i][1] + ">" + n + "</a>";
    q = "<a href=" + array[i][1] ;
  }
  pa += q + '>&raquo;&raquo;</a>';
  return pa;
}

function createPaginationLi(array) {
  let pa = '<ul><li><a href="Chapter01.html">&laquo;&laquo;</a></li>';
  const le = array.length;
  for (i = 0; i < le; i++) {
    let n = i + 1;
    pa += "<li><a href=" + array[i][1] + ">" + n + "</a></li>";
	q = "<li><a href=" + array[i][1] ;
  }
  pa += q + '>&raquo;&raquo;</a></li>';
  return pa
	
}



function fetchPage(i) {
  fetch(pagArrea[i - 1][1])
    .then(response => response.text())
    .then(data => {
      // Replace 'page' with the element you want to display the fetched content in
      document.getElementById('page').innerHTML = data;
    })
    .catch(error => {
      console.error("Error fetching content: ", error);
    });
	
}

document.addEventListener("DOMContentLoaded", function () {
  const paginationPlaceholder = document.getElementsByClassName('pagination')[0];
  paginationPlaceholder.innerHTML = createPaginationLi(pagArrea);

  const paginationItems = document.querySelectorAll('.pagination a');
  paginationItems.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent the default link behavior
      fetchPage(item.textContent);
      selectActivePage(item.textContent);
    });
  });
});

function selectActivePage(p) {
  const paginationItems = document.querySelectorAll('.pagination a');
  paginationItems.forEach(function(item) {
    if (item.textContent == p) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  })
}

selectActivePage(1);