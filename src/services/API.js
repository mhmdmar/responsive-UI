import axios from "axios";

const apiKey = "keyOw2loIpqsFxCW8";
const apiUri = `https://api.airtable.com/v0/apppWiSUDpifZ2BL5`;

const API = axios.create({
    baseURL: apiUri
});

API.defaults.headers.common["authorization"] = `Bearer ${apiKey}`;
export default API;
