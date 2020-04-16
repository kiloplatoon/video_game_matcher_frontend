import React from 'react';
import { Chat, Channel, ChannelList, Window } from 'stream-chat-react';
import { ChannelHeader, MessageList } from 'stream-chat-react';
import { MessageInput, Thread } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

import 'stream-chat-react/dist/css/index.css';


const userID = localStorage.getItem("current_user")


// custom channel preview component
// class MyChannelPreview extends React.Component {
//   render() {
//     const { setActiveChannel, channel } = this.props;
//     console.log(this.props)
//     const unreadCount = channel.countUnread();

//     return (
//       <div className="channel_preview">
//         <ButtonGroup>
//         <Button variant="outline-primary"  onClick={(e) => setActiveChannel(channel, e)} block>
//           {/* {console.log(channel.data)} */}
//           {/* {console.log(channel)} */}
//           {channel.data.id}
//           <br/>
//         <span>
//           Unread messages: {unreadCount}
//         </span>
//         </Button>
//         </ButtonGroup>
//       </div>
//     );
//   }
// }





function Messages() {

  if (userID) {
    
    const chatClient = new StreamChat('wsmv73rq7u6d');
    chatClient.setUser(
      {
        id: userID,
        name: userID,
        image: ''
      },
      localStorage.getItem("stream_token"),
    );
    const channel = chatClient.channel('messaging', 'Testing', {
      members: ['danieltolczyk', 'fake'],
      name: "This is more testing"
    })
    const filters = { type: 'messaging', members: { $in: [userID] } };
    const sort = { last_message_at: -1 };
    const channels = chatClient.queryChannels(filters, sort);
    console.log(channel)
    return (
      <div className='container'>

        <Chat client={chatClient} theme={'messaging light'}>
          <ChannelList
          filters={filters}
          sort={sort}
          // Preview={MyChannelPreview}
          />
          <Channel >
            <Window>
              <ChannelHeader />
              <MessageList />
              <MessageInput />
            </Window>
            <Thread />
          </Channel>
        </Chat>
      </div>
    )
  }
  return (
    <h1>Chat Did Not Load</h1>
  )
}

export default Messages;
