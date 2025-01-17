import {widgetActions} from "../stores/reduxThunk/actions/widget.action";
import stores from "../stores/reduxThunk";

const showMessageBox = (params: messageItem) => {
    stores.dispatch(
        widgetActions.showMessageBox({
            ...params
        })
    )
}

// function clientMessage(params : {type: string; key: string}) {
//     try {
//         const locale: locale = 'ko';
//         import(`src/constants/messages/message-${locale}.const.json`).then(
//             message => {
//                 showMessageBox({
//                     text: message[params.type][params.key],
//                     visible: true
//                 })
//             }
//         )
//     } catch (error) {
//         serverMessage("fail to Show Error Messsage");
//     }
// }

function serverMessage(statusText: string) {
    if (statusText) {
        showMessageBox({
            text: statusText,
            visible: true
        })
    } else {
            showMessageBox({
            text: "fail_load",
            visible: true
        })
    }
}

const messageData = {
    serverMessage,
    showMessageBox
}
export default messageData;