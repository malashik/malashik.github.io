// 'use strict'

// $(function(){
//         //2. Получить элемент, к которому необходимо добавить маску
//         // $("#phoneMask").mask("+7(000)000-00-00", {
//         //         place    holder: "+7(___)___-__-__",
//         //         clearIfNotMatch: true
//         //       });
//         $("#phoneMask").mask("+375 (99) 999-99-99");
// });

$(document).ready(function(){
        $("#phoneMask").mask("+375 (99) 999-99-99");
        // $("#form").submit(function() { //устанавливаем событие отправки для формы с id=form
        //         var form_data = $(this).serialize(); //собераем все данные из формы
        //         $.ajax({
        //         type: "POST", //Метод отправки
        //         url: "send.php", //путь до php фаила отправителя
        //         data: form_data,
        //         success: function() {
        //                //код в этом блоке выполняется при успешной отправке сообщения
        //                alert("Ваше сообщение отпрвлено!");
        //         });
        // });
});
