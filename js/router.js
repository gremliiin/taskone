//используем самовызывающуюся функцию
(function() {
    //получаем все необходимые элементы
    let activeLink = document.querySelectorAll('.header__menu--link');
    let slider = document.getElementById('slider');
    let card = document.getElementById('card');
    let content = document.getElementById('content');
    let footer = document.getElementById('footer');

    //получаем проверочную переменную
    let isTouch = false;

    //создаем массивы для якорных элементов и их координат
    let elementsLinks = [];
    let offsetElement = [];

    //создаем функцию которая добаляет класс к ссылкам
    let setBorderBottom = (el) => {
        el.href === document.location.href ?
            el.className = 'header__menu--link activeLink' :
            el.className = 'header__menu--link';
    };

    //добавляем в массив элементы с якорными ссылками
    elementsLinks.push(slider);
    elementsLinks.push(card);
    elementsLinks.push(content);
    elementsLinks.push(footer);

    //вычисляем у элементов с якорными ссылками их координаты на странице
    for (let key of elementsLinks) {
        let bodyRect = document.body.getBoundingClientRect(),
            elemRect = key.getBoundingClientRect();
        //добаляем в массив координаты элемента    
        offsetElement.push(elemRect.top - bodyRect.top);
    }

    //по скроллу изменяем хэш ссылку в адресной строке
    window.addEventListener('scroll', function() {
        if (pageYOffset >= offsetElement[0] && pageYOffset <= (offsetElement[0] + 100) && isTouch === false) {
            document.location.hash = '#slider';
        } else if (pageYOffset >= offsetElement[1] && pageYOffset <= (offsetElement[1] + 100) && isTouch === false) {
            document.location.hash = '#card';
        } else if (pageYOffset >= offsetElement[2] && pageYOffset <= (offsetElement[2] + 100) && isTouch === false) {
            document.location.hash = '#content';
        } else if (pageYOffset >= (offsetElement[3] - 450) && pageYOffset <= offsetElement[3] && isTouch === false) {
            document.location.hash = '#footer';
        }

        for (let key of activeLink) {
            setBorderBottom(key);
        }
    });

    //переход по ссылкам и изменение хэш ссылки по клику
    for (let key of activeLink) {

        setBorderBottom(key);

        key.addEventListener('click', function() {
            isTouch = true;
            setTimeout(function() {
                isTouch = false;
            }, 1000);
            document.location.href = key.href;

            for (let key of activeLink) {
                setBorderBottom(key);
            }

        });
    };
})();