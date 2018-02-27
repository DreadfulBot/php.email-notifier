require('../../../app/assets/css/main.scss');
import TcEmailNotifier from './partials/v2';
// import core from './partials/core'
// document.querySelector('#callback').innerHTML += '<p>test</p>';
// core();
import alertify from '../../../node_modules/alertifyjs/build/alertify.min'

alertify.defaults.glossary.title = "Уведомление";

let fields = [
    {
        titleTag: 'email',
        name: 'email',
        id: 'email',
        type: 'text',
        placeholder: 'Введите свой email',
        errorTag: 'Неправильный email',
        required: true,
        cssClass: 'class',
        onClick: () => { console.log('click'); },
        onFocus: null
    },
    {
        titleTag: 'tel',
        name: 'tel',
        id: 'tel',
        type: 'tel',
        placeholder: 'Введите свой телефон',
        errorTag: 'Неправильный телефон',
        required: true,
        cssClass: null,
        onClick: () => { console.log('tel clicked'); },
        onFocus: null
    },
    {
        titleTag: 'отправить',
        name: 'submit',
        id: 'submit',
        type: 'submit',
        placeholder: null,
        errorTag: null,
        required: null,
        cssClass: null,
        onClick: null,
        onFocus: null
    }
];

let options = {
    formId: 'callback',
    backendUrl: 'tc-email-notifier.php',
    isDebugMode: true,
    onSuccess: (message) => {  alertify.alert(message); },
    onError: (message) => {  alertify.alert(message); },
    addHiddenFields: true,
    addGeolocation: true,
    googleMapsApiKey: 'AIzaSyCq7dRy7lNE3jJq68lD-DuSuyxOwfaDPqE',
};

let t = new TcEmailNotifier(options, fields);