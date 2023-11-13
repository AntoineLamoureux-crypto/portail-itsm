import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
  $getSelection,
  $isRangeSelection,
  COMMAND_PRIORITY_LOW,
  createCommand,
} from 'lexical';
import { $setBlocksType } from '@lexical/selection';
import { TextNode } from 'lexical';

export const $createColorNode = () => new TextNode();

export const FORMAT_COLOR_COMMAND = createCommand('format_color_command');

export const CustomColorPlugin = () => {
  const [editor] = useLexicalComposerContext();

  if (!editor.hasNode(TextNode)) {
    throw new Error('ColorPluging: "ColorNode" not registered on editor');
  }
  editor.registerCommand(
    FORMAT_COLOR_COMMAND,
    payload => {
      console.log(payload);
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, $createColorNode);
      }
      return true;
    },
    COMMAND_PRIORITY_LOW
  );

  return null;
};
