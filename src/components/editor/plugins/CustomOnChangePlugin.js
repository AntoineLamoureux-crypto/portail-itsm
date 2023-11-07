import { useEffect } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

export const CustomOnChangePlugin = () => {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    return editor.registerUpdateListener(listener => {
      const stateAsJSON = listener.editorState.toJSON();
      console.log('CURRENT STATE', stateAsJSON);
    });
  }, [editor]);

  return null;
};
