import api from "@/services/api";
import {WebResponse} from "@/services/shared";

const TABLE_NAME = "Tailor";
export const tableService = {
    async getTableItems() {
        try {
            const res = await api.get(`/${TABLE_NAME}`);
            const records = res.data?.records || null;
            return new WebResponse(records, null);
        } catch (error) {
            return new WebResponse(null, error);
        }
    }
};
