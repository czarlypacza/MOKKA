



document.querySelector('#close-nav').addEventListener('click', function () {
    document.querySelector('.nav-toggle').click();
});

document.querySelector('.nav-toggle').addEventListener('click', function () {
    if (this.checked) {
        document.querySelector('.search-toggle').checked = false;
    }
});

document.querySelector('.search-toggle').addEventListener('click', function () {
    if (this.checked) {
        document.querySelector('.nav-toggle').checked = false;
    }
});

document.querySelector('.search-field>input').addEventListener('input', function () {
    if (this.value.length > 0) {
        console.log(this.value);
        document.querySelector('#search-results').classList.remove('search-results-noshow');
        document.querySelector('#search-results').classList.add('search-results-show');
    } else {
        document.querySelector('#search-results').classList.remove('search-results-show');
        document.querySelector('#search-results').classList.add('search-results-noshow');
    }
});

const categories = {
    'Herbata': ['Czarna', 'Biala', 'Zielona', 'Czerwona', 'Oolong', 'Żółta', 'Owocowa'],
    'Yerba': ['Argentyńska', 'Urugwajska', 'Paragwajska', 'Brazylijska', 'Owocowa'],
    'Kawa': ['Ziarnista', 'Mielona', 'Rozpuszczalna', 'Wszystko'],
    'Akcesoria': ['Herbata', 'Yerba', 'Kawa'],
};

const extra_categories = [
    'Blog',
    'O nas',
    'Forum',
];

const navItems = document.querySelectorAll('nav ul li.nav-option-more');
const nav = document.querySelector('nav');
const ul = document.querySelector('nav ul');

function nav_function() {
    const category = this.textContent;
    const subcategories = categories[category];
    const ul = this.parentElement;
    ul.innerHTML = '';
    subcategories.forEach(subcategory => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="#">${subcategory}</a><img src="../imgGlobal/Vector.svg" alt="arrow">`;
        ul.appendChild(li);
    });
    setTimeout(() => {
        nav.style.transform = 'translateX(0)';
    }, 100);
    setTimeout(() => {
        nav.style.transform = 'translateX(-100%)';
    }, 50);
    setTimeout(() => {
        nav.style.transform = '';
    }, 200);

    document.querySelector('.nav-title').removeChild(document.querySelector('.nav-title img'));
    document.querySelector('.nav-title').innerHTML = `<p>${category}</p><img src="../imgGlobal/Arrow-back.svg" id="close-nav" class="close-nav" alt="close">`;
    document.querySelector('#close-nav').addEventListener('click', function () {
        nav.style.transform = '';
        ul.innerHTML = '';
        Object.keys(categories).forEach(category => {
            const li = document.createElement('li');
            li.classList.add('nav-option-more');
            li.innerHTML = `<a href="#">${category}</a><img src="../imgGlobal/Vector.svg" alt="arrow">`;
            li.addEventListener('click', nav_function);
            ul.appendChild(li);
        });
        extra_categories.forEach(category => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="#">${category}</a>`;
            ul.appendChild(li);
        });
        document.querySelector('.nav-title').innerHTML = `<p>Kategorie</p><img src="../imgGlobal/Close_square.svg" id="close-nav" class="close-nav" alt="close">`;
        document.querySelector('#close-nav').addEventListener('click', function () {
            document.querySelector('.nav-toggle').click();
        });
    });
}

navItems.forEach(item => {
    item.addEventListener('click', nav_function);
});

// const back = document.querySelector('#close-nav');
        // back.addEventListener('click', function () {
        //     ul.innerHTML = '';
        //     Object.keys(categories).forEach(category => {
        //         const li = document.createElement('li');
        //         li.classList.add('nav-option-more');
        //         li.innerHTML = `<a href="#">${category}</a><img src="img/Vector.svg" alt="arrow">`;
        //         li.addEventListener('click', nav_function);
        //         ul.appendChild(li);
        //     });
        //     extra_categories.forEach(category => {
        //         const li = document.createElement('li');
        //         li.innerHTML = `<a href="#">${category}</a>`;
        //         ul.appendChild(li);
        //     });
        // });