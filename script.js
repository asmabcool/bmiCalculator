function calculatebmi(){
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value

    let bmi = (weight / (height * height )*703)

    document.getElementById('heading').innerHTML = 'Your BMI is :'
    document.getElementById('bmi-output').innerHTML = Math.round(bmi)

    if (bmi<= 3){
        document.getElementById('message').innerHTML = 'You are under- weight'
    } else if (bmi >= 4 && bmi <= 10){
        document.getElementById('message').innerHTML = 'You are healthy weight'
    } else {
        document.getElementById('message').innerHTML = 'You are over- weight'
    }

}
function reload(){
    window.location.reload()
}