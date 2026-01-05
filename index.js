let URL = `https://api.frankfurter.dev/v1/latest?base=USD&symbols=inr`

let dropdowns = document.querySelector('.dropdown ').querySelectorAll('select');


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
}




