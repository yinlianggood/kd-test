import { Conversation } from '@/types/chat';

import { ConversationComponent } from './Conversation';

interface Props {
  conversations: Conversation[];
}

export const Conversations = ({ conversations }: Props) => {
  const conversationsArr = conversations;
  conversationsArr.unshift(...conversationsArr.splice(conversationsArr.findIndex(i => i.name === '知识库全局问答'), 1))
  conversationsArr.unshift(...conversationsArr.splice(conversationsArr.findIndex(i => i.name === '模型问答'), 1))
  return (
    <div className="flex w-full flex-col gap-1">
      {conversationsArr
        .filter((conversationsArr) => !conversationsArr.folderId)
        .slice()
        .map((conversationsArr, index) => (
          <ConversationComponent key={index} conversation={conversationsArr} />
        ))}
    </div>
  );
};
