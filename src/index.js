import downloadObserver from './js/downloadObserver';
import contentObserver from './js/contentObserver';
import apiService from './js/apiService';
import openModal from './js/modal';
import errorRequest from './js/notifyError';
import cardTpl from './templates/cardTpl.hbs';
import inputSearchTpl from './templates/inputSearch.hbs';
import imagesListTpl from './templates/imagesListTpl.hbs';
import './styles.css';

const body = document.body;
const input = inputSearchTpl();
body.insertAdjacentHTML('afterbegin', input);
const searchForm = document.querySelector('.search-form');

const list = imagesListTpl();
searchForm.insertAdjacentHTML('beforeend', list);
const imagesList = document.querySelector('.gallery')

searchForm.addEventListener('submit', onSearch)
imagesList.addEventListener('click', openModal)


function onSearch(event) { 
    event.preventDefault();

    const form = event.currentTarget;
    apiService.query = form.elements.query.value;

    imagesList.innerHTML = '';
    apiService.resetPage();

    if (form.elements.query.value === '') {
      errorRequest();
      return;
    }
    addContent();
    form.elements.query.value = '';
}

function addContent() { 
    apiService
        .fetchImages()
        .then(data => { 
        if (data.length === 0) { 
            errorRequest();
            return;
        }
        updateListImage(data)
        })
        .catch(error => console.log(error))
}

function updateListImage(data) { 
    const contentImage = cardTpl(data);
    imagesList.insertAdjacentHTML('beforeend', contentImage);
    contentObserver(addContent);
    downloadObserver();
}