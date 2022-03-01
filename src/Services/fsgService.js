import axios from "axios";

const baseEndpoint = "https://stage-api.foundersportgroup.com/v1";
const apiKey = 'CMitchell-Gyo5F7Yo1I'  //Normally I wouldn't store this here. I would put it in the middleware after hashing it encryting it in some fasion.

// const proxy = require('http-proxy-middleware');



const getInventory = () => {

    const config = {
        method: "GET",
        url: `${baseEndpoint}/Inventory`,
        withCredentials: false,
        crossdomain: true,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "*",
            "x-api-key": apiKey
        }
    };

    // app.listen(3000);
    return axios(config);


}




export {getInventory};
