import axios from "axios";

const apiKey = "keyOw2loIpqsFxCW8";
const apiUri = `https://api.airtable.com/v0/apppWiSUDpifZ2BL5`;

const Api = axios.create({
    baseURL: apiUri
});

Api.defaults.headers.common["authorization"] = `Bearer ${apiKey}`;
export default Api;
