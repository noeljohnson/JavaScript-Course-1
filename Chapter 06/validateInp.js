//GTG

function validatePhoneNum(phoneNum){
  let regExp = /^(\+\d{1,3})? ?(\(\d{2,5}\)|\d{2,5}) ?\d{3} ?\d{0,7} ?((x|xtn|extn|pax|ext|pbx|extension)?\.? ?\d{2,5})?$/;
  return(regExp.test(phoneNum));
}

function validatePostalCode(postCode){
  let regExp = /^(\d{5}(-\d{4})?|[a-z]{1,2}\d{1,2}[a-z]? ?\d[a-z]{2})$/i;
  return(regExp.test(postCode));
}

function validateEmail(email){
  let regExp = /^[^\[\]<>\(\)@\x00-\x20\\]+@(([a-z]|#\d+)([a-z\d-]|#\d+)*([a-z\d|#\d+])\.)+([a-z]{2,4})$/i;
  return(regExp.test(email));
}
//TYJC
