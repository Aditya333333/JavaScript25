const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
   e.preventDefault()
   const height = parseInt(document.querySelector('#height').value)
   const weight = parseInt(document.querySelector('#weight').value)
   const results = document.querySelector('#results')
if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please valid height ${height}`
}if (weight === '' || height < 0 || isNaN(weight)) {
    results.innerHTML = `please valid weight ${weight}`
    
} else {
     const bmi = (weight / (( height*height )/10000)).toFixed(2)
     results.innerHTML = `<span>${bmi}</span>`

if (bmi < 18.6) {
    results.innerHTML = `<span>Underweight ${bmi}</span>`;
} else if (bmi >= 18.6 && bmi <= 24.9) {
    results.innerHTML = `<span>Normal Weight ${bmi}</span>`;
} else {
    results.innerHTML = `<span>Overweight ${bmi}</span>`;
}

}



})