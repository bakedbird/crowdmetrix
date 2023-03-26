import { Api } from "@crowdmetrix/api";
import { FootfallImportRes } from "../types";

const importFootfall = (data: FormData) => {
  return Api.post<FootfallImportRes>("/import/footfall", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export default { importFootfall };
