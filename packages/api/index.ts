import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({
  headers: { "Content-Type": "application/json" },
});

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    toast.error(err.message, {
      className:
        "!bg-white dark:!bg-slate-700 !rounded-lg !text-green-500 !text-rose-600 dark:!text-rose-500",
      progressClassName: "!bg-rose-300 dark:!bg-rose-600",
      icon: false,
    });

    return Promise.reject(err);
  }
);

export default api;
