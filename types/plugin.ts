import { KeyValuePair } from './data';

export interface Plugin {
  id: PluginID;
  name: PluginName;
  requiredKeys: KeyValuePair[];
}

export interface PluginKey {
  pluginId: PluginID;
  requiredKeys: KeyValuePair[];
}

export enum PluginID {
  GOOGLE_SEARCH = 'google-search',
  KNOWLEDGEDOC = 'knowledgedoc'
}

export enum PluginName {
  GOOGLE_SEARCH = 'Google Search',
  KNOWLEDGEDOC = 'knowledgedoc'
}

export const Plugins: Record<PluginID, Plugin> = {
  [PluginID.GOOGLE_SEARCH]: {
    id: PluginID.GOOGLE_SEARCH,
    name: PluginName.GOOGLE_SEARCH,
    requiredKeys: [
      {
        key: 'GOOGLE_API_KEY',
        value: '',
      },
      {
        key: 'GOOGLE_CSE_ID',
        value: '',
      },
    ],
  },
  [PluginID.KNOWLEDGEDOC]: {
    id: PluginID.KNOWLEDGEDOC,
    name: PluginName.KNOWLEDGEDOC,
    requiredKeys:[
      {
        key: 'QUERY_PARAMS',
        value: {
          chatExtends: {
            chunkOverLap: 1,
            wikiPromptTpl: '请将以下内容作为已知信息：\n<wikicontent>\n请根据以上内容回答用户的问题。\n问题:<wikiquestion>\n回答:',
            wikiFilterScore: 65,
            temperature: 0.5
          },
          topN: 3,
          fileIds: [],
          messages: [
            {role: 'user', content: ''}
          ]
        }
      }
    ]
  }
};

export const PluginList = Object.values(Plugins);
