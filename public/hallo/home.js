const URL = location.origin; // root domain

function home() {
    window.location.assign(`${URL}/`);
}