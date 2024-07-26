  const urlParams = new URLSearchParams(window.location.search);
  const autor = urlParams.get('autor');
  const name = urlParams.get('name');
  const path = urlParams.get('path');
  const count = urlParams.get('count');
  const cap = document.getElementById('caption')
  const page = document.getElementById('page')
  const titl = document.getElementsByTagName('title')
//  const pagArrea = pag(count);
  //  console.log(path)

  titl[0].innerHTML = unfixParam(name) + " " + unfixParam(autor);
  cap.innerHTML = "<h1>" + unfixParam(name) + "</h1> <h2>✧&emsp;    " + unfixParam(autor) + "&emsp;  ✧  </h2>"

  function unfixParam(t) {
    return t.replaceAll('_', ' ');
  }

  fetch(path + "/Chapter01.html")
    .then(response => response.text())
    .then(data => {
      page.innerHTML = data;
    })
    .catch(error => {
      console.error('Error fetching content:', error);
    });

//  console.log(pagArea)
