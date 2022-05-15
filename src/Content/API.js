import Test from './Converter'

const Rate = (props) => {
    let myHeaders = new Headers();
    myHeaders.append("apikey", "wVJ6cO1yGi6SujUrTSBUMdmRxKD4CZSV");

    let requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

    /* let From = document.getElementById("result__rate").value();
    let To = document.getElementById("sale__rate").value();
    let Amount = document.getElementById("amount").value(); */

    /* let path = `"https://api.apilayer.com/exchangerates_data/convert?to=${props.value}&from=${props.valuee}&amount=${props.valueq}, ${'wVJ6cO1yGi6SujUrTSBUMdmRxKD4CZSV'}"`;
    console.log("url ----------- " + path);

    let Convert = () => {
        fetch(path, requestOptions)
            .then(response => response.text(path))
            .catch(error => console.log('error', error));
    }
    Convert(); */
    let path = `"https://api.apilayer.com/exchangerates_data/convert?to=${props.value}&from=${props.valuee}&amount=${props.valueq}"`;

    fetch(path, requestOptions)
        .then(response => response.text())
        .then(result => {<Test />})
        .catch(error => console.log('error', error));

    // fetch("https://api.apilayer.com/exchangerates_data/convert?to=props.valueefrom=props.value&amount=10", requestOptions)
    //     .then(response => response.text())
    //     .then(result => console.log(result))
    //     .catch(error => console.log('error', error));
    // return (
    //     <div>Hi</div>
    // )
}



export default Rate; 