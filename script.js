this.pay = function () {
    var widget = new cp.CloudPayments();
    var data = {
        name: $('#name-fld').val(),
        lastName: $('#lastname-fld').val(),
        phone: $('#phone-fld').val()
    };

    var amount = parseFloat($('#sum-fld').val());
    var accountId = $('#email-fld').val();

    widget.charge({ // options
            publicId: 'pk_bc1607517b817e2be8555d2a5d229',  //id из личного кабинета
            description: 'Помощь фонду \'Дети в лете\'', //назначение
            amount: amount, //сумма
            currency: 'RUB', //валюта
            accountId: accountId, //идентификатор плательщика (необязательно)
            email: accountId,
            data: data
        },
        function (options) { // success
            //действие при успешной оплате
        },
        function (reason, options) { // fail
            //действие при неуспешной оплате
        });
}; 
$('#checkout-btn').click(pay);   
