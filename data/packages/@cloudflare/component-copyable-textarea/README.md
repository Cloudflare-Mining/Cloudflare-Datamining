# @cloudflare/component-copyable-textarea

> Cloudflare Copyable Textarea Component

## Installation
Installation with yarn is recommended

```sh

$ yarn add @cloudflare/component-copyable-textarea

```

## Usage
CopyableTextarea has option to use self-defined text and ids for translation component.

```jsx
import React from 'react';
import { CopyableTextarea } from '../../src';

class CopyableTextareaComponent extends React.Component {
  render() {
    return (
      <>
        <CopyableTextarea
          name="copyable-textarea-example"
          value="Some nice text that needs to be copied"
        />
        // passing self-defined id(s) for translation
        <CopyableTextarea
          name="copyable-textarea-example"
          value="Some nice text that needs to be copied"
          clickToCopyTextId = 'api.click_to_copy'
          copiedTextToClipboardTextId = 'api.copied_to_clipboard'
          pressCommandOrCtrlCToCopyTextId = 'api.copy_failed'
        />
        // passing self-defined translation fallback messages
        <CopyableTextarea
          name="copyable-textarea-example"
          value="Some nice text that needs to be copied"
          clickToCopyTextId = 'api.click_to_copy'
          copiedTextToClipboardTextId = 'api.copied_to_clipboard'
          pressCommandOrCtrlCToCopyTextId = 'api.copy_failed'
          clickToCopyText = 'Click to copy API token'
          copiedTextToClipboardText = 'API tokens copied to clipboard'
          pressCommandOrCtrlCToCopyText = 'Failed to copy API token'
        />
      </>
    );
  }
}

export default CopyableTextareaComponent;

```


