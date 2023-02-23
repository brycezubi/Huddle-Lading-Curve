const form = document.querySelector('.news__form');

form.addEventListener('submit', e=>{
  e.preventDefault()

  const email = form['email'].value

  if(email === ''){
    addError('email','Campo vacio');
  }else if(!isValid(email)){
    addError('email','Correo no Valido')
  }else{
    removeError();
  }

  
})


function addError(campo , mensaje){
  const small =  document.querySelector('small');
  small.innerText = mensaje;

}

function removeError(){
  const small =  document.querySelector('small');
  small.style.display = 'none';
}

function isValid(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

