import React, { useMemo } from 'react';
import { Stack } from '@chakra-ui/react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { CustomOnChangePlugin } from './plugins/CustomOnChangePlugin';
import { HeadingNode } from '@lexical/rich-text';
import { ListItemNode, ListNode } from '@lexical/list';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import ExampleTheme from './ExampleTheme';
import ToolbarPlugin from './plugins/ToolbarPlugin';
import './styles.css';

import { CustomColorPlugin } from './plugins/CustomColorPlugin';

export default function TextEditor() {
  const CustomContent = useMemo(() => {
    return (
      <ContentEditable
        style={{
          border: '1px solid gray',
          borderRadius: '2px',
          borderColor: 'borderColor',
          outline: 'none',
          height: 'fit-content',
          maxHeight: '200px',
          overflowY: 'auto',
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
      />
    );
  }, []);

  const lexicalConfig = {
    namespace: 'My Rich Text Editor',
    nodes: [HeadingNode, ListNode, ListItemNode],
    theme: ExampleTheme,
    onError: e => {
      console.log('ERROR:', e);
    },
  };

  return (
    <LexicalComposer initialConfig={lexicalConfig}>
      <CustomOnChangePlugin />
      <HistoryPlugin />
      <CustomColorPlugin />
      <Stack p="2" gap="2">
        <ToolbarPlugin />
        <ListPlugin />
        <RichTextPlugin
          contentEditable={CustomContent}
          ErrorBoundary={LexicalErrorBoundary}
        />
      </Stack>
    </LexicalComposer>
  );
}
