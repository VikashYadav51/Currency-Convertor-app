let BASE_URL = `https://api.frankfurter.dev/v1/latest?base=`

let dropdowns = document.querySelector('.dropdown ').querySelectorAll('select');

let btn = document.querySelector(".btn")

const fromCurr = document.querySelector(".from select");

const toCurr = document.querySelector(".to select");

const messageUpdation = document.querySelector(".msg");


for(select of dropdowns){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode == 'USD'){
            newOption.selected = "selected";
        }

        if(select.name === 'to' && currCode === 'INR'){
            newOption.selected = 'selected'
        }
        
        select.append(newOption);
    }

    select.addEventListener('change', (evt) =>{
      updateFlag(evt.target);
    })
}


const updateFlag = (element)=>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img1 = element.parentElement.querySelector("img");
    img1.src = newSrc;
}

btn.addEventListener("click", async(evt) =>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amountVal = amount.value;

    if(amountVal === "" || amountVal < 1){
        amountVal = 0;
        amount.value = 0;
    }

    console.log(fromCurr, toCurr);
    const URL = `${BASE_URL}${fromCurr.value.toLowerCase()}&symbols=${toCurr.value.toLowerCase()}`

    let response =  await fetch(URL);
    let data = response.json();

    // console.log(data.base);

    data.then((res) =>{
         console.log(res.base[toCurr.value]);
        let exchangeRate = res.rates[toCurr.value];
        let totalExRate = (exchangeRate * amountVal).toFixed(2);
        messageUpdation.innerText = `${amountVal} ${fromCurr.value} = ${totalExRate} ${toCurr.value}`;
    }); 

});