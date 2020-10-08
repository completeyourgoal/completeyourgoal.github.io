var opr, a;
function numberkey(n) {
    var txt = document.getElementById('txt');

    var lastChar = txt.value.substring(txt.value.length-1);
    if(isOperator(n) && isOperator(lastChar)) {

        txt.value = txt.value.substring(0, txt.value.length - 1);
    }
    txt.value += n;
}

function isOperator(x) {

    if(x == '+' || x == '-' || x == '*' || x == '/' || x == '%') {
        return true;
    }
    return false;
}

function equal() {
    txt.value = eval(txt.value);
  
}
function percent(){
    var percentile =eval(txt.value) ;
    txt.value = percentile/100 ;
}
var bracket = '';
function bracketOf(){
    if (bracket == '' || bracket == ')')
    {
        document.getElementById('txt').value+="(";
        bracket ='(';
    } else {
       txt.value+=")";
       bracket = ')';
    }
}
function clearfunction() {
    document.getElementById('txt').value='';
    bracket = '';
}
function backSpace(){
    var txt = document.getElementById('txt');
   txt.value = txt.value.substring(0,txt.value.length-1);
 if(bracket==')'){
     bracket = '(';
 } else  if(bracket=='('){
     bracket = ')';
 }
}