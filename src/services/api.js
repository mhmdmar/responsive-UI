import axios from "axios";

const apiKey = "keyOw2loIpqsFxCW8";
const apiUri = `https://api.airtable.com/v0/apppWiSUDpifZ2BL5`;

const api = axios.create({
    baseURL: apiUri
});

api.defaults.headers.common["authorization"] = `Bearer ${apiKey}`;
export default api;
