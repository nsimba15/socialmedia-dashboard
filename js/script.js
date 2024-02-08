
var body = document.querySelector('body'),
    togglebtn = body.querySelector('.toggle');  


    togglebtn.addEventListener('click', ()=>{
      body.classList.toggle('light')

      if(body.classList.contains('light')){

        document.querySelector('.mode').innerHTML = 'Light Mode'
      }else{

        document.querySelector('.mode').innerHTML = 'Dark Mode'

      }

    })