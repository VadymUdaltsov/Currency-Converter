
const Rate = (props) => {
    let myHeaders = new Headers();
    myHeaders.append("apikey", "wVJ6cO1yGi6SujUrTSBUMdmRxKD4CZSV");

    let requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

     /* let path = `https://api.apilayer.com/fixer/convert?to=${props.to}&from=${props.from}&amount=${props.amount}`;
      let convertSale = document.getElementById('newValue');
     fetch(path, requestOptions)
        .then(response => { return response.json()})
        .then(res => { convertSale.value = res.result});  */

        // Uncomment this part of code if u want to see, how API works.
}



export default Rate; 