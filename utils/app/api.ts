import { Plugin, PluginID } from '@/types/plugin';

export const getEndpoint = (plugin: Plugin | null) => {
  if (!plugin) {
    return 'api/chat';
  }

  if (plugin.id === PluginID.GOOGLE_SEARCH) {
    return 'api/google';
  }

  if(plugin.id === PluginID.KNOWLEDGEDOC) {
    return 'https://ai02-api.chatgpt365.tech/api/admin/knowledgedoc/question';
  }

  return 'api/chat';
};
