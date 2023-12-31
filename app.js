console.log("Iniciando código");
//Primero que el form no se envie como haría por defecto
const myForm = document.getElementById("form");
myForm.addEventListener("submit", e => {
    e.preventDefault();
    console.log("Submited'nt")

    //Segundo definir variables que usaremos para validar el formulario
    const divAlert = document.getElementById("alertDiv");
    const cardNumber = document.getElementById("inputCardNumber");
    const cvcNumber = document.getElementById("inputCardCvc");
    const amountNumber = document.getElementById("inputAmount");
    const firstName = document.getElementById("inputFirstName");
    const lastName = document.getElementById("inputLastName");
    const cityName = document.getElementById("inputCity")
    const postalCodeNumber = document.getElementById("inputPostalCode");
    const stateName = document.getElementById("inputState");

    /*  No es necesario validar radios se asume que se selecionará 1. 
          const radioMasterCard = document.getElementById("masterCard");
        const radioAmericanCard = document.getElementById("americanCard");
        const radioVisa = document.getElementById("visaCard");
        const radioPaypal = document.getElementById("paypalMethod"); */

    //Hacer la alerta 
    divAlert.style.textAlign = "center";

    //Comenzar a validar
    //cardNumber
    if (cardNumber.value == "") {
        cardNumber.style.backgroundColor = "#FF9595";
        divAlert.style.backgroundColor = "#FF9595";
        divAlert.innerHTML = "<p>Some fields are missing</p>";
    }

    //cvcCardNumber
    if (cvcNumber.value == "") {
        cvcNumber.style.backgroundColor = "#FF9595";
        divAlert.style.backgroundColor = "#FF9595";
        divAlert.innerHTML = "<p>Some fields are missing</p>";
    }

    //amountNumber
    if (amountNumber.value == "") {
        amountNumber.style.backgroundColor = "#FF9595";
        divAlert.style.backgroundColor = "#FF9595";
        divAlert.innerHTML = "<p>Some fields are missing</p>";
    }

    //firstName
    if (/[^a-zA-Z0-9\s]/.test(firstName.value) || firstName.value =="") {
        firstName.style.backgroundColor = "#FF9595";
        divAlert.style.backgroundColor = "#FF9595";
        divAlert.innerHTML = "<p>Special characters are not allowed</p>";
    }

    //lastName
    if (/[^a-zA-Z0-9\s]/.test(lastName.value) || lastName.value =="") {
        lastName.style.backgroundColor = "#FF9595";
        divAlert.style.backgroundColor = "#FF9595";
        divAlert.innerHTML = "<p>Some fields are missing</p>";
    }

    //cityName
    if (/[^a-zA-Z0-9\s]/.test(cityName.value) || cityName.value == "") {
        cityName.style.backgroundColor = "#FF9595";
        divAlert.style.backgroundColor = "#FF9595";
        divAlert.innerHTML = "<p>Some fields are missing</p>";
    }

    //postalCodeNumber
    if (postalCodeNumber.value == "") {
        postalCodeNumber.style.backgroundColor = "#FF9595";
        divAlert.style.backgroundColor = "#FF9595";
        divAlert.innerHTML = "<p>Some fields are missing</p>";
    }

    //stateName
    if (stateName.value == "Select a state") {
        stateName.style.backgroundColor = "#FF9595";
        divAlert.style.backgroundColor = "#FF9595";
        divAlert.innerHTML = "<p>Some fields are missing</p>";
    }

    //cards
    /* if (
        !radioMasterCard.checked &&
        !radioAmericanCard.checked &&
        !radioVisa.checked &&
        !radioPaypal.checked
      ) {
        radioMasterCard.style.backgroundColor = "#FF9595";
        radioAmericanCard.style.backgroundColor = "#FF9595";
        radioVisa.style.backgroundColor = "#FF9595";
        radioPaypal.style.backgroundColor = "#FF9595";
        divalerta.style.backgroundColor = "#FF9595";
        divalerta.innerHTML = "<p>Some fields are missing</p>";
      } */


});