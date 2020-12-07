const url = 'https://ap-gateway.mastercard.com/checkout/version/57/checkout.js';
const script = document.createElement('script');
script.src = url;
script.setAttribute('data-error', 'onMasterPayError');
script.setAttribute('data-cancel', 'onMasterPayCancel');

window.onMasterPayError = function (error) {
  debugger;
}

window.onMasterPayCancel = function (error) {
  debugger;
}

document.body.appendChild(script);