const login = document.querySelector('.login');
const search = document.getElementById('search-button');
const f = document.getElementById('search-form');
const q = document.getElementById('query')
const google = 'https://www.google.com/search?q=site%3A+';
const site = 'http://127.0.0.1:5506/pages/auction-page-all-items.html';

//declaring the function that submit the search

const submitted = (event) =>{
    event.preventDefault();
    const url = google + site + '+' + q.value;
    const win = window.open(url , '_blank');
    // win.focus();
    
}

// search.addEventListener('submit', submitted);
f.addEventListener('submit', submitted)
alert('how are you')
// login.style.display = '';
const sign_in_btn = document.querySelector('.sign_in');
const signIn = () =>{
    const more = document.querySelector('.container h2');
    const details = document.querySelector('#details');
    const login = document.querySelector('.login');
    const sign_in_btn = document.querySelector('.sign_in');
    sign_in_btn.style.display = 'none';
    login.style.display = 'flex';
    details.style.display = 'none'
    more.style.display = 'none'
};
sign_in_btn.addEventListener('click',signIn);
