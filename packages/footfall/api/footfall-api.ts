import api from "@crowdmetrix/api";
import { GetFootfallReq, GetFootfallRes } from "../types";

api.defaults.baseURL = "/api/footfall";

const getFootfall = (params: GetFootfallReq) => {
  return api.get<GetFootfallRes>("", { params });
};

export default { getFootfall };
