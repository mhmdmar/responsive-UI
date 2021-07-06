import API from "@/services/API";
import {WebResponse} from "@/services/utils";

const TABLE_NAME = "Tailor";
export const tableService = {
    async getTableItems() {
        try {
            const res = await API.get(`/${TABLE_NAME}`);
            const records = res.data?.records || null;
            return new WebResponse(records, null);
        } catch (error) {
            return new WebResponse(null, error);
        }
    }
};
