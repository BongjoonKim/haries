import request from "../services/request-response-service";
import {AxiosResponse} from "axios";
import {MessageHistoryDTO} from "../types/dto/messageHistoryDTO";

export async function createChannel(props : {channelName : string}) {
  console.log("props.channelName", props.channelName)
  return (await request.post("/chatting/channel", {channelName : props.channelName})) as AxiosResponse<any>;
}

export async function getChannels() {
  return (await request.get("/chatting/channels")) as AxiosResponse<any>;
}

export async function deleteChannel(props : {channelId : string}) {
 return (await request.delete(`/chatting/channel?channelId=${props.channelId}`)) as AxiosResponse<any>;
}

export async function createMessage(props: MessageHistoryDTO) {
  return (await request.post(`/chatting/message`, props)) as AxiosResponse<any>;
}

export async function getMessages(props: {channelId : string}) {
  return (await request.get(`/chatting/messages?channelId=${props.channelId}`)) as AxiosResponse<any>;
}