import React, { useMemo } from 'react';
import { Stack } from '@chakra-ui/react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { CustomOnChangePlugin } from './plugins/CustomOnChangePlugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table';
import { ListItemNode, ListNode } from '@lexical/list';
import { CodeHighlightNode, CodeNode } from '@lexical/code';
import { AutoLinkNode, LinkNode } from '@lexical/link';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import ExampleTheme from './ExampleTheme';
import ToolbarPlugin from './plugins/ToolbarPlugin';
import './styles.css';

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
          maxHeight: '300px',
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
    nodes: [
      HeadingNode,
      ListNode,
      ListItemNode,
      QuoteNode,
      CodeNode,
      CodeHighlightNode,
      TableNode,
      TableCellNode,
      TableRowNode,
      AutoLinkNode,
      LinkNode,
    ],
    theme: ExampleTheme,
    onError: e => {
      console.log('ERROR:', e);
    },
  };

  return (
    <LexicalComposer initialConfig={lexicalConfig}>
      <CustomOnChangePlugin />
      <HistoryPlugin />
      <Stack p="2" gap="2">
        <ToolbarPlugin />

        <AutoFocusPlugin />
        <ListPlugin />
        <LinkPlugin />
        <RichTextPlugin
          contentEditable={CustomContent}
          ErrorBoundary={LexicalErrorBoundary}
        />
      </Stack>
    </LexicalComposer>
  );
}
