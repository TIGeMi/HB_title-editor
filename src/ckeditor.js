/**
 * @license Copyright (c) 2014-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import InlineEditor from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';

class TitleEditor extends InlineEditor {}

// Plugins to include in the build.
TitleEditor.builtinPlugins = [
  Bold,
  Essentials,
  Heading,
  Italic,
  Link,
  Paragraph,
];
TitleEditor.defaultConfig = {
  toolbar: {
    items: ["heading", "|", "bold", "italic", "link"],
  },
  language: "en",
  licenseKey: "",
};

export default TitleEditor;
