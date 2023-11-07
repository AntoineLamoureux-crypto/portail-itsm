import React, { useMemo } from 'react';
import { Stack } from '@chakra-ui/react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { HeadingNode } from '@lexical/rich-text';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { CustomHistoryActions } from './plugins/CustomHistoryActions';
import { CustomTextActions } from './plugins/CustomTextActions';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { CustomAlignActions } from './plugins/CustomAlignActions';
import { CustomOnChangePlugin } from './plugins/CustomOnChangePlugin';
import { CustomHeadingPlugin } from './plugins/CustomHeadingPlugin';
import './styles.css';
import { CustomHeadingActions } from './plugins/CustomHeadingActions';
import { CustomBannerActions } from './plugins/CustomBannerAction';
import { BannerNode } from './plugins/BannerNode';
import { CustomBannerPlugin } from './plugins/CustomBannerPlugin';

export const EditorV2 = () => {
  const CustomContent = useMemo(() => {
    return (
      <ContentEditable
        style={{
          border: '1px solid gray',
          borderRadius: '5px',
          maxWidth: '100%',
          height: 'fit-content',
        }}
      />
    );
  }, []);

  const lexicalConfig = {
    namespace: 'My Rich Text Editor',
    nodes: [HeadingNode, BannerNode],
    theme: {
      text: {
        bold: 'text-bold',
        italic: 'text-italic',
        underline: 'text-underline',
        code: 'text-code',
        highlight: 'text-highlight',
      },
      heading: {
        h1: 'text-5xl font-extrabold',
        h2: 'text-4xl font-bold dark:text-white',
        h3: 'text-3xl font-bold dark:text-white',
        h4: 'text-2xl font-bold dark:text-white',
        h5: 'text-xl font-bold dark:text-white',
      },
      banner: 'banner',
    },
    onError: e => {
      console.log('ERROR:', e);
    },
  };

  return (
    <LexicalComposer initialConfig={lexicalConfig}>
      <HistoryPlugin />
      <CustomOnChangePlugin />
      <CustomHeadingPlugin />
      <CustomBannerPlugin />
      <Stack gap="2" direction="column" p="2" w="500px">
        <Stack gap="2" direction="row" alignItems="center">
          <CustomHistoryActions />
          <CustomBannerActions />
          <CustomHeadingActions />
          <CustomTextActions />
          <CustomAlignActions />
        </Stack>
        <RichTextPlugin
          contentEditable={CustomContent}
          ErrorBoundary={LexicalErrorBoundary}
        />
      </Stack>
    </LexicalComposer>
  );
};
