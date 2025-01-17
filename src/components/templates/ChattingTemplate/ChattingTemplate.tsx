import styled, {css} from "styled-components";
import MainContent from "../MainContent/MainContent";
import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";
import TextInput from "../../elements/TextInput";
import CustomButton from "../../elements/Button/CustomButton";
import ChatMessage from "./ChatMessage";
import ChannelBox from "./ChannelBox";
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import {Box, CircularProgress, Divider, IconButton, Modal, TextareaAutosize, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import useChattingTemplate from "./useChattingTemplate";
import SimpleSave from "../SimpleSave";
import ModalModule from "../../modules/ModalModule";
import SimpleDelete from "../SimpleDelete";
import {DehazeRounded} from "@material-ui/icons";


function ChattingTemplate() {
  const {
    isChannelModal, setIsChannelModal,
    isDeleteChannelModal, setIsDeleteChannelModal,
    newChannelName, setNewChannelName,
    createNewChannel, channelList,
    handleClickChannel, selectedChannel,
    handleDelete, message, setMessage,
    handleSendMessage, messageHistory,
    scrollRef, channelBoxOpener, setChannelBoxOpener,retrieveChannels,
    innerWidth, messageHistoryRef, highEnd, messageHistorysRef,
    show, newList, update, isLoading, handleFocus
  } = useChattingTemplate();
  
  return (
    <MainContent
      title="ChatGPT"
      header={
        innerWidth < 1200 ? (
          <div>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={() => {setChannelBoxOpener(prev => !prev)}}
            >
              <DehazeRounded/>
            </IconButton>
          </div>
        ) : (
          <></>
        )
      }
      titleOnClick={() => {setChannelBoxOpener(prev => !prev)}}
    >
      <StyledChattingTemplate channelBoxOpener={channelBoxOpener}>
        <div className="channel-view">
          <Paper
            component="form"
            sx={{ p: '2px 2px', display: 'flex', alignItems: 'center', height : "2rem"}}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="search"
              onChange={(event: any) => {
                retrieveChannels(event.target.value)
              }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          <div className="channel-list">
            {channelList?.map(el => {
              return (
                <ChannelBox
                  key={el.id}
                  id={el.id}
                  title={el?.name}
                  lastestMessage={el?.lastestMessage}
                  onClick={handleClickChannel}
                  selectedChannel={selectedChannel}
                />
              )
            })}
          </div>
          <div className="footer">
            <CustomButton
              // onClick={() => setIsChannelModal(true)}
              onClick={createNewChannel}
            >
              New Channel
            </CustomButton>
            <CustomButton
              onClick={handleDelete}
            >
              Delete
            </CustomButton>
            
            {/* 생성 및 수정 모달 */}
            <ModalModule
              open={isChannelModal}
              onClose={() => setIsChannelModal(false)}
            >
              <SimpleSave
                title="New Channel"
                contents={newChannelName}
                onChange={(event : any) => {
                  setNewChannelName(event.target.value)
                }}
                onOk={createNewChannel}
                onCancel={() => setIsChannelModal(false)}
  
              />
            </ModalModule>
  
            {/* 삭제 모달 */}
              <ModalModule
                open={isDeleteChannelModal}
                onClose={() => setIsDeleteChannelModal(false)}
                
              >
                <SimpleDelete
                  onDelete={handleDelete}
                  onCancel={() => setIsDeleteChannelModal(false)}
                />
              </ModalModule>
          </div>
          
        </div>
        <div className="chat-view" onClick={() => {setChannelBoxOpener(false)}}>
          <div className="message-history" ref={scrollRef}>
            <div style={{
              width: "100%",
              height: "100%"
            }} />
            {selectedChannel ? messageHistory?.map((el, inx) => {
              return (
                <>
                  {el.userId === "ChatGPT" ? (
                    <ChatMessage key={inx} type={""} {...el}/>
                  ) : (
                    <>
                      {el.userId === "loading" ? (
                        <ChatMessage key={inx} type={"loading"} {...el}/>
                      ) : (
                        <ChatMessage key={inx} type={"me"} {...el}/>
                       )}
                   </>
                  )}
                  
                </>
              )
            }) : (
              <span className="default-message">Select Channel Please!</span>
            )}
            <div className="message-scroll-sensor" ref={messageHistoryRef}>
              {isLoading && (
                  <CircularProgress />
              )}
            </div>
            {selectedChannel ? (
              <>
                <hr />
                <span className="start-message"
                      onClick={() => {setChannelBoxOpener(prev => !prev)}}
                >
                  {channelList.filter(el => el.id === selectedChannel)?.[0]?.name}
                </span>
                
              </>
            ) : (
              <>
                <span/>
              </>
            )}
            <div  />
          </div>
          <div className="message-write">
            {/*<TextInput*/}
            {/*  value={message}*/}
            {/*  onChange={(event : any) => {*/}
            {/*    setMessage(event.target.value)*/}
            {/*  }}*/}
            {/*  onKeyPress={handleSendMessage}*/}
            {/*/>*/}
            <TextField
              value={message}
              multiline
              onChange={(event : any) => {
                event.preventDefault();
                setMessage(event.target.value);
              }}
              onKeyPress={handleSendMessage}
              disabled={!selectedChannel}
              onFocus={handleFocus}
              fullWidth
              maxRows={8}
              InputProps={{
                sx: {
                  padding: '10px',  // 원하는 padding 값으로 조절
                },
              }}
            />
            <div className="wrapper-send-button">
              <CustomButton
                onClick={handleSendMessage}
                disabled={!selectedChannel}
                styles={{
                  height: "100%",
                }}
              >
                전송
              </CustomButton>
            </div>
          </div>
        </div>
      </StyledChattingTemplate>
    </MainContent>
  )
  
}

export default ChattingTemplate;

const StyledChattingTemplate = styled.div<{channelBoxOpener : boolean}>`
  display: flex;
  gap: 1rem;
  height: 100%;
  textarea {
    width: 100%;
    min-height: 1rem;
  }
  .wrapper-send-button {
    height: 100%;
  }

  @media only screen and (min-width: 0px) and (max-width: 1199px) {
    .channel-view {
      width: 15rem;
      position: absolute;
      display: flex;
      flex-direction: column;
      transition-property: transform;
      transition-duration: 200ms;
      ${props => props.channelBoxOpener
        ? css `
          transform: translateX(0rem);
          opacity: 1;
          pointer-events: visible;
        ` : css `
          transform: translateX(-20rem);
          opacity: 1;
          pointer-events: visible;
      `}
      z-index: 9000;
      height: calc(100% - 3rem - 4px);
      
      background-color: white;
      border: 2px solid gray;
      //box-shadow: 1px 1px 1px gray;
      padding: 1rem 0.5rem;
      border-radius: 1rem 1rem 1rem 1rem;
      overflow-y: hidden;
      overflow-x: hidden;
      .channel-list {
        border: 1px solid gray;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
        height: inherit;
        overflow-y: auto;
        overflow-x: hidden;
        margin-bottom: 2rem;
      }

      .footer {
        display: flex;
        justify-content: space-between;
      }
    }
    .chat-view {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      background-color: white;
      padding: 0.5rem 0.5rem;
      border-radius: 1rem 1rem;
      align-items: center;
      border: 2px solid gray;
      //box-shadow: 1px 1px 1px gray;
      span {
        &:first-child {
          justify-content: center;
          color: gray;
        }
      }

      hr {
        width: 100%;
        border: 1px solid #cccccc;
      }

      .message-history {
        padding-right: 0.5rem;
        width: 100%;
        display: flex;
        flex-direction: column-reverse;
        gap: 1rem;
        overflow-y: auto;
        overflow-x: hidden;
        align-items: center;
        padding-bottom: 1rem;
        height: 20px;
        flex-grow: 1;
        border: 1px gray;
        span {
          &:first-child {
            margin-bottom: -1rem;
          }

          &:hover {
            cursor: default;
          }
        }

        .default-message {
          &:hover {
            cursor: default;
          }
          cursor:default;
          align-items: center;
          margin-bottom: auto;
          margin-top: auto;
          user-select: none;
          color: gray;
        }

        .message-scroll-sensor {
          display: flex;
          justify-content: center;
          min-height: 2rem;
          width : 100%;
        }
      }

      .message-write {
        display: flex;
        align-items: center;
        width: 100%;
        margin: 1rem 0;
        .caIjNN { // textInput
          flex-grow: 1;
        }
      }
    }
  }
  
  @media only screen and (min-width: 1200px){
    .channel-view {
      display: flex;
      flex-direction: column;
      width: 18rem;
              //position: absolute;
      z-index: 10000;
      height: -webkit-fill-available;
      background-color: white;
      padding: 1rem 0.5rem;
      border-radius: 1rem 1rem 1rem 1rem;
      overflow-y: hidden;
      overflow-x: hidden;
      border: 2px solid gray;
      //box-shadow: 1px 1px 1px gray;
      .channel-list {
        border: 1px solid gray;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
        height: 1rem;
        flex-grow: 1;
        overflow-y: auto;
        overflow-x: hidden;
        margin-bottom: 2rem;
      }

      .footer {
        display: flex;
        justify-content: space-between;
      }
    }

    .chat-view {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      background-color: white;
      padding: 0.5rem 0.5rem;
      border-radius: 1rem 1rem 1rem 1rem;
      align-items: center;
      border: 2px solid gray;
      //box-shadow: 1px 1px 1px gray;
      span {
        &:first-child {
          justify-content: center;
          color: gray;
        }
      }

      hr {
        width: 100%;
        border: 1px solid #cccccc;
      }

      .message-history {
        padding-right: 0.5rem;
        width: 100%;
        display: flex;
        flex-direction: column-reverse;
        gap: 1rem;
        overflow-y: auto;
        overflow-x: hidden;
        align-items: center;
        padding-bottom: 1rem;
        height: 20px;
        flex-grow: 1;

        span {
          &:first-child {
            margin-bottom: -1rem;
          }

          &:hover {
            cursor: pointer;
          }
        }

        .default-message {
          &:hover {
            cursor: default;
          }
          align-items: center;
          margin-bottom: auto;
          margin-top: auto;
          user-select: none;
          color: gray;
        }
        
        .message-scroll-sensor {
          display: flex;
          justify-content: center;
          min-height: 2rem;
          width : 100%;
        }
      }

      .message-write {
        display: flex;
        align-items: center;
        width: 100%;
        margin: 1rem 0;
        .caIjNN { // textInput
          flex-grow: 1;
        }
      }
    }
  }


`;