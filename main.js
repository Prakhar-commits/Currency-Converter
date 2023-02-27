document.addEventListener("DOMContentLoaded" , ()=>{
    
    document.querySelector("#currency-converter").addEventListener("submit" , (event)=>{
        event.preventDefault();

        const{target:{ from, to , amount}} = event;

        let headers = new Headers();
        headers.append("apikey", "4G2gni2roLvR15gHl7jrweT7IByofx4h");

        const requestOptions = {
            method : "GET",
            headers,
        }

        fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.valueAsNumber}`, requestOptions)
        .then(response => response.json())
        .then(data =>{
            let {info , date , query: { to }  , result } = data;
            document.querySelector(".Result").textContent = `As per the Convertion rate : ${info.rate} on ${date} => converted value in ${to} is ${result}`
        })
        
    })
})