import { Api } from "@crowdmetrix/api";
import { GetFootfallReq, GetFootfallRes } from "../types";

const getFootfall = (params: GetFootfallReq) => {
  return Api.get<GetFootfallRes>("/footfall", { params });
};

export default { getFootfall };
