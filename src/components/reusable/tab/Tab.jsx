import React from 'react';
import { Divider, Stack, useStyleConfig } from '@chakra-ui/react';
import TabHeader from './TabHeader';

export default function Tab({
  children,
  title,
  subTitle,
  icon,
  topRightContent,
  topLeftContent,
  tabH,
}) {
  const styles = useStyleConfig('Tab');
  return (
    <Stack
      h={tabH ? tabH : 'fit-content'}
      __css={styles}
      borderColor="borderColor"
      borderWidth="1px"
      bg="tabBg"
      overflow="clip"
      gap="0"
    >
      {title && (
        <Stack borderRadius="default">
          <Stack
            pt="15px"
            px="22px"
            direction="row"
            justifyContent="space-between"
            h="fit-content"
          >
            {topLeftContent}
            <TabHeader title={title} subTitle={subTitle} icon={icon} />
            {topRightContent}
          </Stack>
          <Divider borderColor="borderColor" />
        </Stack>
      )}
      <Stack
        h="100%"
        borderRadius="default"
        overflowY="auto"
        css={{
          '&::-webkit-scrollbar': {
            width: '2px',
          },
          '&::-webkit-scrollbar-track': {
            width: '10px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'gray',
            borderRadius: '5px',
          },
        }}
      >
        {children}
      </Stack>
    </Stack>
  );
}
