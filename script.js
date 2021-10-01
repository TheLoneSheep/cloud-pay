var who_help= 'Пожертвование';
var email =  "";
var price_sel = 50;
var podp = 'Подписка.';
var number_cloud =1;

this.paySample = function () {
    var widget = new cp.CloudPayments();


    var receipt = {
        'Items': [
            {
                'label': 'Товар 1',
                'price': parseFloat($('#sum-fld').val()),
                'quantity': 1,
                'amount': parseFloat($('#sum-fld').val()),
                'vat': 0,
                'measurementUnit': 'шт',
                'PurveyorData': {
                    'Phone': '+79250002233'
                }
            }
        ],
        'email': 'm.vlasov@cloudpayments.ru',
        'phone': '89092223344'
    };

    var data = {
        "name": "Sasha",
        "lastName": "Grey",
        "phone": $('#phone-fld').val(),
        "myProp": "myVal",
        "cloudPayments": {
            "customerReceipt": receipt,
        }

    };

    var amount = parseFloat($('#sum-fld').val());
    var accountId = $('#email-fld').val();
    var currency = $('#currency-fld').val();
    var email = '';
    

    var subscribe = $('#subscr-fld').is(':checked'); //проверка

    if (subscribe) { //включаем подписку
        data.cloudPayments = {
            recurrent: {
                interval: 'Month',
                period: 1
            } //один раз в месяц начиная со следующего месяца
        }
    }
// if ($('#currency-fld').val == 'RUB')
// {$description = 'Пожертвование в фонд \'Дети в лете\'}

//  else
//  {$description:'Оплата на Тестовый 21'}

    widget.charge({ // options
            'publicId': (currency == 'RUB') ? 'pk_bc1607517b817e2be8555d2a5d229' : 'pk_a89d43ece867a72c69b976c4f2451', //id из личного кабинета 
            'description': (currency == 'RUB') ? 'Пожертвование в фонд \'Дети в лете\'' : 'Оплата на Тестовый 21',
            'amount': parseFloat($('#sum-fld').val()), //сумма
            'currency': currency, //валюта
            'invoiceId': number_cloud,
            'email': accountId,
            'accountId': accountId,//accountId, //идентификатор плательщика (обязательно для создания подписки)
            'skin': 'mini',
            'data': data
        },
        function() { //success
            //$('.checkout-result').text('Оплата успешно завершена');
            number_cloud++;
        },
        function () { // fail
            $('.checkout-result').text('Оплата не удалась'); //действие при неуспешной оплате
            
        });
    $('.btn btn-def').hide();
};

$('#checkout-btn').click(function (event) {
    event.preventDefault();
    paySample();
});

// jQuery(document).on('click', function(event){
//         event.preventDefault();
//       email = $('.email-fld').val();
//       price_sel =  $('.sum-fld').val();
//         paySample();
// });
