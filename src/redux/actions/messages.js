import { messagesApi } from 'utils/api';

const messagesActions = {
    setMessages: items => ({
        type: 'MESSAGES:SET_ITEMS',
        payload: items,
    }),
    addMessage: message => (dispatch, getState) => {
        const { dialogs } = getState(),
                { currentDialogId } = dialogs;
        
        if (currentDialogId === message.dialog._id) {
            dispatch({
                type: 'MESSAGES:ADD_MESSAGE',
                payload: message
            })
        }
    },
    setIsLoading: bool => ({
        type: 'MESSAGES:SET_IS_LOADING',
        payload: bool,
    }),
    fetchMessageSend: (text, dialogId) => dispatch => {
        messagesApi.send(text, dialogId)
                .then(data => {
                    console.log(data);
                })
    },
    fetchMessages: dialogId => dispatch => {
        dispatch(messagesActions.setIsLoading(true));

        messagesApi
            .getDialogById(dialogId)
            .then(({data}) => {
                dispatch(messagesActions.setMessages(data));
            })
            .catch(() => {
                dispatch(messagesActions.setIsLoading(false));
            })
    }
};

export default messagesActions;