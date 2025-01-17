import {SyntheticEvent, useCallback, useEffect, useState} from "react";
import {getAllDocuments} from "../../../endpoints/documents-endpoints";
import {DocumentDTO, PaginationDTO} from "../../../types/dto/documentsInfo.d";
import {useRecoilState, useRecoilValue} from "recoil";
import recoilCommonState from "../../../stores/recoil/recoilCommonState";
import {WritingContextProps} from "./WritingContext";

function useWritingContext(props : WritingContextProps) {
  const [page, setPage] = useState<any>(1);
  const [perPage, setPerPage] = useState<number>(6);
  const [totalContents, setTotalContents] = useState<number>(0);
  const [writings, setWritings] = useState<DocumentDTO[]>([]);
  const [message, setMessage] = useRecoilState(recoilCommonState.messageOpener)
  
  const getPaginationData = useCallback(async (props : PaginationDTO) => {
    const response = await getAllDocuments(props);
    setWritings(response.data.documentsDTO);
    setTotalContents(response.data.totalContents)
  }, [writings, page,totalContents, props.folderId, perPage]);
  
  useEffect(() => {
    getPaginationData({page : page, size : 6, folderId : props.folderId || "all"})
  }, [page, message, props.folderId]);
  
  // 클릭 시 글 보이게 하기
  const contentsOnClick = useCallback(() => {
  
  }, []);
  
  // 글 조회 실패 메세지
  const handleOnClose = useCallback((event: SyntheticEvent | Event, reasion?: string) => {
    if (reasion === 'clickaway') {
      return;
    }
    setMessage({isOpen : false, contents : ""});
  },[message]);
  
  return {
    getPaginationData,
    writings,
    page,
    setPage,
    totalContents,
    contentsOnClick,
    message,
    handleOnClose
  }
}

export default useWritingContext;