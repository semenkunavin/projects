let open_modal = document.querySelectorAll('.open_modal');
let open_modal2 = document.querySelectorAll('.open_modal2');
let close_modal = document.getElementById('close_modal');
let close_modal2 = document.getElementById('close_modal2');
let modal = document.getElementById('modal');
let modal2 = document.getElementById('modal2');
let body = document.getElementsByTagName('body')[0];
for (let i = 0; i < open_modal.length; i++) {
    open_modal[i].onclick = function() { // клик на открытие
        modal.classList.add('modal_vis'); // добавляем видимость окна
        modal.classList.remove('bounceOutDown'); // удаляем эффект закрытия
        body.classList.add('body_block'); // убираем прокрутку
    };
}

close_modal.onclick = function() { // клик на закрытие
    modal.classList.add('bounceOutDown'); // добавляем эффект закрытия
    window.setTimeout(function() { // удаляем окно через полсекунды (чтобы увидеть эффект закрытия).
        modal.classList.remove('modal_vis'); 
        body.classList.remove('body_block'); // возвращаем прокрутку
    }, 500);
};

for (let i = 0; i < open_modal2.length; i++) {
    open_modal2[i].onclick = function() { // клик на открытие
        modal2.classList.add('modal_vis'); // добавляем видимость окна
        modal2.classList.remove('bounceOutDown'); // удаляем эффект закрытия
        body.classList.add('body_block'); // убираем прокрутку
    };
}

close_modal2.onclick = function() { // клик на закрытие
    modal2.classList.add('bounceOutDown'); // добавляем эффект закрытия
    window.setTimeout(function() { // удаляем окно через полсекунды (чтобы увидеть эффект закрытия).
        modal2.classList.remove('modal_vis'); 
        body.classList.remove('body_block'); // возвращаем прокрутку
    }, 500);
};