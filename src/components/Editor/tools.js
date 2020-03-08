import Embed from '@editorjs/embed';
import Table from '@editorjs/table';
import List from '@editorjs/list';
import Warning from '@editorjs/warning';
import Code from '@editorjs/code';
import LinkTool from '@editorjs/link';
import Image from '@editorjs/image';
import Raw from '@editorjs/raw';
import Header from '@editorjs/header';
import Quote from '@editorjs/quote';
import Marker from '@editorjs/marker';
import CheckList from '@editorjs/checklist';
import Delimiter from '@editorjs/delimiter';
import InlineCode from '@editorjs/inline-code';
import SimpleImage from '@editorjs/simple-image';

export const EDITOR_JS_TOOLS = {
  embed: Embed,
  table: Table,
  marker: Marker,
  list: List,
  warning: Warning,
  code: Code,
  linkTool: LinkTool,
  image: Image,
  raw: Raw,
  header: Header,
  quote: Quote,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage
};

export const initialData = {
  time: 1556098174501,
  blocks: [
    {
      type: 'header',
      data: {
        text: 'Meet Your New Text Editor Built in React',
        level: 2
      }
    },
    {
      type: 'paragraph',
      data: {
        text:
          'Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.'
      }
    },
    {
      type: 'header',
      data: {
        text: 'Key features',
        level: 3
      }
    },
    {
      type: 'list',
      data: {
        style: 'unordered',
        items: [
          'It is a block-styled editor',
          'It returns clean data output in JSON',
          'Designed to be extendable and pluggable with a simple API'
        ]
      }
    },
    {
      type: 'header',
      data: {
        text: 'What does it mean «block-styled editor»',
        level: 3
      }
    },
    {
      type: 'paragraph',
      data: {
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium eros purus, id feugiat nibh pellentesque ac. Nunc semper libero vel libero lacinia, et efficitur neque pretium. Quisque lacus ex, fringilla ut cursus eget, blandit id libero. Aliquam vel dictum nisi. Pellentesque rhoncus velit a nisl aliquet, et malesuada purus luctus. Ut cursus faucibus sollicitudin. Duis at ex at est vehicula aliquet at ultricies lorem. Curabitur quis ex sagittis, posuere quam non, viverra tellus. Suspendisse potenti. Pellentesque velit nulla, pharetra sit amet leo id, porttitor rhoncus magna. Sed id tellus nec nunc finibus suscipit. Duis aliquet ornare odio non tristique. Morbi nibh arcu, commodo eget tincidunt ut, pretium sit amet diam.'
      }
    }
  ],
  version: '2.12.4'
};
