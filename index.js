//Array de objetos con los datos de los libros
const books = [{
    "author": "Chinua Achebe",
    "country": "Nigeria",
    "imageLink": "./assets/images/chinuaAchebe.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    "pages": 209,
    "title": "Things Fall Apart",
    "year": 1958
  },
  {
    "author": "Hans Christian Andersen",
    "country": "Denmark",
    "imageLink": "/assets/images/hansChristianAndersen.jpg",
    "language": "Danish",
    "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
    "pages": 784,
    "title": "Fairy tales",
    "year": 1836
  },
  {
    "author": "Dante Alighieri",
    "country": "Italy",
    "imageLink": "/assets/images/theDivineComedy.jpg",
    "language": "Italian",
    "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
    "pages": 928,
    "title": "The Divine Comedy",
    "year": 1315
  },
  {
    "author": "Unknown",
    "country": "Sumer and Akkadian Empire",
    "imageLink": "/assets/images/theEpicOfGilgamesh.jpg",
    "language": "Akkadian",
    "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
    "pages": 160,
    "title": "The Epic Of Gilgamesh",
    "year": -1700
  },
  {
    "author": "Unknown",
    "country": "Achaemenid Empire",
    "imageLink": "/assets/images/theBookOfJob.jpg",
    "language": "Hebrew",
    "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
    "pages": 176,
    "title": "The Book Of Job",
    "year": -600
  }]

// -------------------------------------------------------------------------------------- fase-one
//Variable, elementos en html
const main = document.querySelector('.container');
const sectionArr = ['fase-one', 'fase-two'];

//iteración para crear los section
const createSections = (arr) => {
  for (let i=0; i<arr.length; i++) {
    const sectionTitle = document.createElement('h2');
    sectionTitle.innerHTML = sectionArr[i];
    main.appendChild(sectionTitle);
    
    const section = document.createElement('section');
    section.className = sectionArr[i];
    main.appendChild(section);
  }
}
createSections(sectionArr);


const faseOne = document.querySelector('.fase-one');

for (let i=0; i<books.length; i++) {
  // createCard(books, i);

  //Agregado de article en section one --> creación de la card
  const card = document.createElement('article');
  card.className = 'card';
  faseOne.appendChild(card);

  //Creación de contenido
  const authorP = document.createElement('p');
  const authorName = document.createTextNode(books[i].author);
  authorP.appendChild(authorName);
  card.appendChild(authorP);

  const countryP = document.createElement('p');
  const country = document.createTextNode(books[i].country);
  countryP.appendChild(country);
  card.appendChild(countryP);

  const imageImg = document.createElement('img');
  imageImg.setAttribute('src', books[i].imageLink);
  imageImg.className = 'image';
  card.appendChild(imageImg);
  
  const languageP = document.createElement('p');
  const language = document.createTextNode(books[i].language);
  languageP.appendChild(language);
  card.appendChild(languageP);

  const pagesP = document.createElement('p');
  const pages = document.createTextNode(books[i].pages);
  pagesP.appendChild(pages);
  card.appendChild(pagesP);

  const linkAncor = document.createElement('a');
  const link = document.createTextNode('Link');
  linkAncor.setAttribute('href', books[i].link)
  linkAncor.appendChild(link);
  card.appendChild(linkAncor);

  const titleH2 = document.createElement('h3');
  const title = document.createTextNode(books[i].title);
  titleH2.appendChild(title);
  card.appendChild(titleH2);

  const yearP = document.createElement('p');
  const year = document.createTextNode(books[i].year);
  yearP.appendChild(year);
  card.appendChild(yearP);
}

// -------------------------------------------------------------------------------------- fase-two
const faseTwo = document.querySelector('.fase-two');

for ( let index=0; index<books.length; index++) {

  const article = 
  `<article class="card">
    <p>${books[index].author}</p>
    <p>${books[index].country}</p>
    <img src="${books[index].imageLink}" class="image">
    <p>${books[index].language}</p>
    <p>${books[index].pages}</p>
    <a href="${books[index].link}">Link</a>
    <h3>${books[index].title}</h3>
    <p>${books[index].year}</p>
  </article>`;

  faseTwo.innerHTML += article;
}

// lo dejo comentado echale un vistazo:) que no sé si quedará bien , me voy a dormir guapi.No estes mucho rato más!!