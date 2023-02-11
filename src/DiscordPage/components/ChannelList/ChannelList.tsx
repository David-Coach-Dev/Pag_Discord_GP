import { FC } from 'react';

import { ContainerCL, CategoryCL, AddCategoryIconCL, ChannelButton } from '@/DiscordPage';

export const ChannelList: FC = () => {
  return (
    <ContainerCL>
      <CategoryCL>
        <span>Channel Text</span>
        <AddCategoryIconCL />
      </CategoryCL>
        <ChannelButton channelName="canal1"/>
        <ChannelButton channelName="canal2"/>
        <ChannelButton channelName="canal3"/>
        <ChannelButton channelName="canal4"/>
        <ChannelButton channelName="canal5"/>
    </ContainerCL>
  );
}

