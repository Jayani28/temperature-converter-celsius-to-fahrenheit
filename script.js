const convertFahrenheit = () =>{
   var celsius =  parseFloat(document.querySelector("#celsius").value);
   var fahRes = (1.8 * celsius) + 32;
   var a = fahRes.toFixed(2);
   document.querySelector("#celsius").value = celsius;
   document.querySelector("#fahrenheit").value = a;

}

const convertCelsius = () =>{
   var fahrenheit =  parseFloat(document.querySelector("#fahrenheit").value);
   var celsRes = (fahrenheit-32)/1.8;
   var b = celsRes.toFixed(2);
   document.querySelector("#celsius").value = b;
   document.querySelector("#fahrenheit").value = fahrenheit;

}

const reset = () =>{
   document.querySelector("#celsius").value = " ";
   document.querySelector("#fahrenheit").value = " ";

}
