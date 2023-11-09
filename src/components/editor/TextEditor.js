import React, { useMemo } from 'react';
import { Stack } from '@chakra-ui/react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { CustomHistoryActions } from './plugins/CustomHistoryActions';
import { CustomTextActions } from './plugins/CustomTextActions';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { CustomAlignActions } from './plugins/CustomAlignActions';
import { CustomOnChangePlugin } from './plugins/CustomOnChangePlugin';

import './styles.css';

export const TextEditor = () => {
  const CustomContent = useMemo(() => {
    return (
      <ContentEditable
        style={{
          border: '1px solid gray',
          borderRadius: '2px',
          borderColor: 'borderColor',
          outline: 'none',

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
    theme: {
      text: {
        bold: 'text-bold',
        italic: 'text-italic',
        underline: 'text-underline',
        code: 'text-code',
        highlight: 'text-highlight',
      },
    },
    onError: e => {
      console.log('ERROR:', e);
    },
  };

  return (
    <LexicalComposer initialConfig={lexicalConfig}>
      <CustomOnChangePlugin />
      <HistoryPlugin />
      <Stack p="2">
        <Stack direction="row" gap="4" justifyContent="space-between">
          <Stack direction="row" gap="4">
            <Stack gap="2" direction="row" alignItems="center">
              <CustomTextActions />
            </Stack>
            <Stack gap="2" direction="row" alignItems="center">
              <CustomAlignActions />
            </Stack>
          </Stack>
          <CustomHistoryActions />
        </Stack>
        <Stack>
          <RichTextPlugin
            contentEditable={CustomContent}
            ErrorBoundary={LexicalErrorBoundary}
          />
        </Stack>
      </Stack>
    </LexicalComposer>
  );
};
