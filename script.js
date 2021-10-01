this.pay = function () {
    var widget = new cp.CloudPayments();
    var data = {
        name: $('#name-fld').val(),
        lastName: $('#lastname-fld').val(),
        phone: $('#phone-fld').val()
    };

    var amount = parseFloat($('#sum-fld').val());
    var accountId = $('#email-fld').val();

    widget.pay('charge',
	{ // options
            //publicId: 'pk_bc1607517b817e2be8555d2a5d229',  //id из личного кабинета
            publicId: 'test_api_00000000000000000000001',
            description: 'Помощь фонду \'Дети в лете\'', //назначение
            amount: amount, //сумма
            currency: 'RUB', //валюта
            accountId: accountId, //идентификатор плательщика (необязательно)
            email: accountId,
            data: data
        },
        {
	    onSuccess: function (options) { // success
            //действие при успешной оплате
            },
	    onFail: function (reason, options) { // fail
            //действие при неуспешной оплате
            }
	}
    );
}; 
$('#checkout-btn').click(pay);   
