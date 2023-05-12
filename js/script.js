const inputs = document.querySelectorAll('form .field input');


inputs.forEach(input => {
     input.addEventListener('blur', validateInput);
     input.addEventListener('input', validateInput);
});


function validateInput(e) {
      //console.log(e.target.id);
      const states = ['valid', 'not-valid'];

      let classes;
 
      if(e.target.value.length === 0 ){
         
           classes = states[1];
      } else {
           classes = states[0];
      }
      if(classes === 'not-valid') {
        const errorDiv = document.createElement('div');
        errorDiv.appendChild(document.createTextNode('This field is mandatory'));
        
        console.log(errorDiv);
     
        e.target.parentElement.parentElement.insertBefore(errorDiv, e.target.parentElement.nextElementSibling);
   }
}