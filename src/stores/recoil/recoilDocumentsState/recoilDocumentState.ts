import {atom, atomFamily} from "recoil";
import {recoilPersist} from "recoil-persist";
import {WRITING_INFO} from "./types.d";
import moment from "moment";
import {DocumentDTO} from "../../../types/dto/documentsInfo";
const { persistAtom } = recoilPersist()
export const recoilDocumentState = {
  writingInfo : atom<DocumentDTO>({
    key: `${WRITING_INFO}`,
    default : {
      id : "",
      titles : "",
      contents : "",
      contentsType : "markdown",
      created : moment().format(),
      initialUser : "",
      modified : moment().format(),
      modifiedUser : "",
    },
    // effects_UNSTABLE: [persistAtom]
  })
}