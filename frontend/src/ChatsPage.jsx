import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div style={{height: '100vh'}}>
            <PrettyChatWindow projectId='53044e84-f801-4ac8-9360-b8e2991d0400'
                              username={props.user.username}
                              secret={props.user.secret}
                              style={{height: '100%'}}/>
        </div>
    )
}

export default ChatsPage