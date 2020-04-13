import React from 'react';
import { Chat, Channel, ChannelList, Window } from 'stream-chat-react';
import { ChannelHeader, MessageList } from 'stream-chat-react';
import { MessageInput, Thread } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

import 'stream-chat-react/dist/css/index.css';


const userID = localStorage.getItem("current_user")


// custom channel preview component
class MyChannelPreview extends React.Component {
  render() {
    const { setActiveChannel, channel } = this.props;
    const unreadCount = channel.countUnread();

    return (
      <div className="channel_preview">
        <a href="#" onClick={(e) => setActiveChannel(channel, e)}>
          {channel.data.name}
        </a>

        <span>
          Unread messages: {unreadCount}
        </span>
      </div>
    );
  }
}



// const channel = chatClient.channel('messaging', 'Test', {
//   members: ['danieltolczyk', 'fake'],
// })


function Messages() {

  if (userID) {
    const chatClient = new StreamChat('wsmv73rq7u6d');
    chatClient.setUser(
      {
        id: userID,
        name: userID,
        image: 'https://getstream.io/random_svg/'
      },
      localStorage.getItem("stream_token"),
    );
    const filters = { type: 'messaging', members: { $in: [userID] } };
    const sort = { last_message_at: -1 };
    const channels = chatClient.queryChannels(filters, sort);

    return (
      <Chat client={chatClient} theme={'messaging light'}>
        <ChannelList
          filters={filters}
          sort={sort}
          Preview={MyChannelPreview}
        />
        <Channel>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </Chat>
    )
  }
  return (
    <h1>Chat Did Not Load</h1>
  )
}

export default Messages;
