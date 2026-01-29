# 🔍 Search Snippet Library

A production-ready, self-contained TypeScript Web Component library providing both search and chat interfaces with streaming support. Zero dependencies, fully customizable, and framework-agnostic.

## ✨ Features

- **🎨 Fully Customizable** - 20+ CSS variables for complete theme control
- **⚡ Zero Dependencies** - Self-contained with everything bundled
- **📱 Responsive Design** - Works seamlessly on all devices
- **🎭 Framework Agnostic** - Native Web Components work everywhere
- **♿ Accessible** - WCAG 2.1 AA compliant with ARIA support
- **🚀 Streaming Support** - Real-time streaming responses with low latency
- **🌓 Dark Mode** - Automatic theme switching based on system preferences
- **📦 Tiny Bundle** - Optimized for minimal size (< 50KB gzipped)
- **🔒 Secure** - XSS protection with HTML sanitization
- **⚙️ TypeScript** - Full type definitions included

## 🚀 Quick Start

> **Note:** This library requires an active AI Search endpoint in your Cloudflare Dashboard. Make sure to enable and configure your AI Search service before using these components.

### Installation

```bash
npm install @cloudflare/ai-search-snippet
# or
yarn add @cloudflare/ai-search-snippet
```

### Basic Usage

> **Note:** Replace `<hash>` with your Cloudflare AI Search endpoint hash (you can find it in the Cloudflare Dashboard).

```html
<!-- Import the library -->
<script
  type="module"
  src="https:/<hash>/search.ai.cloudflare.com/search-snippet.es.js"
></script>

<!-- Search bar with results -->
<search-bar-snippet
  api-url="https:/<hash>/search.ai.cloudflare.com/"
  placeholder="Search..."
  max-results="10"
>
</search-bar-snippet>

<!-- Modal search (opens with Cmd/Ctrl+K) -->
<search-modal-snippet
  api-url="https:/<hash>/search.ai.cloudflare.com/"
  placeholder="Search documentation..."
  max-results="10"
>
</search-modal-snippet>

<!-- Floating chat bubble -->
<chat-bubble-snippet
  api-url="https:/<hash>/search.ai.cloudflare.com/"
  placeholder="Type a message..."
>
</chat-bubble-snippet>

<!-- Full-page chat with history -->
<chat-page-snippet
  api-url="https:/<hash>/search.ai.cloudflare.com/"
  placeholder="Type a message..."
>
</chat-page-snippet>
```

## 📖 API Reference

### Components

The library provides four Web Components:

| Component            | Tag                      | Description                           |
| -------------------- | ------------------------ | ------------------------------------- |
| `SearchBarSnippet`   | `<search-bar-snippet>`   | Search input with results dropdown    |
| `SearchModalSnippet` | `<search-modal-snippet>` | Modal search with Cmd/Ctrl+K shortcut |
| `ChatBubbleSnippet`  | `<chat-bubble-snippet>`  | Floating chat bubble overlay          |
| `ChatPageSnippet`    | `<chat-page-snippet>`    | Full-page chat with session history   |

### Common Attributes

These attributes are available on all components:

| Attribute       | Type                          | Default                 | Description                    |
| --------------- | ----------------------------- | ----------------------- | ------------------------------ |
| `api-url`       | string                        | `http://localhost:3000` | API endpoint URL               |
| `placeholder`   | string                        | Component-specific      | Input placeholder text         |
| `theme`         | `'light' \| 'dark' \| 'auto'` | `'auto'`                | Color scheme                   |
| `hide-branding` | boolean                       | `false`                 | Hide the "Powered by" branding |

### Search Components Attributes

Additional attributes for `<search-bar-snippet>` and `<search-modal-snippet>`:

| Attribute     | Type   | Default | Description                          |
| ------------- | ------ | ------- | ------------------------------------ |
| `max-results` | number | `10`    | Maximum search results to display    |
| `debounce-ms` | number | `300`   | Input debounce delay in milliseconds |

### Modal-Specific Attributes

Additional attributes for `<search-modal-snippet>`:

| Attribute      | Type    | Default | Description                                |
| -------------- | ------- | ------- | ------------------------------------------ |
| `shortcut`     | string  | `'k'`   | Keyboard shortcut key (with Cmd/Ctrl)      |
| `use-meta-key` | boolean | `true`  | Use meta key (Cmd on Mac, Ctrl on Windows) |

### JavaScript API

#### Search Bar (`<search-bar-snippet>`)

```typescript
const searchBar = document.querySelector("search-bar-snippet");

// Perform a search programmatically
searchBar.search("query");
```

#### Search Modal (`<search-modal-snippet>`)

```typescript
const modal = document.querySelector("search-modal-snippet");

modal.open(); // Open the modal
modal.close(); // Close the modal
modal.toggle(); // Toggle open/closed
modal.search("query"); // Open and search
const results = modal.getResults(); // Get current results
const isOpen = modal.isModalOpen(); // Check if open
```

#### Chat Bubble (`<chat-bubble-snippet>`)

```typescript
const chatBubble = document.querySelector("chat-bubble-snippet");

await chatBubble.sendMessage("Hello!"); // Send a message
const messages = chatBubble.getMessages(); // Get message history
chatBubble.clearChat(); // Clear chat history
```

#### Chat Page (`<chat-page-snippet>`)

```typescript
const chatPage = document.querySelector("chat-page-snippet");

await chatPage.sendMessage("Hello!"); // Send a message
const messages = chatPage.getMessages(); // Get message history
chatPage.clearChat(); // Clear current chat
const sessions = chatPage.getSessions(); // Get all chat sessions
const current = chatPage.getCurrentSession(); // Get current session
```

### Events

#### Common Events (all components)

```javascript
const component = document.querySelector("search-bar-snippet");

component.addEventListener("ready", () => {
  console.log("Component ready");
});

component.addEventListener("error", (e) => {
  console.error("Error:", e.detail.error);
});
```

#### Modal-Specific Events

```javascript
const modal = document.querySelector("search-modal-snippet");

modal.addEventListener("open", () => {
  console.log("Modal opened");
});

modal.addEventListener("close", () => {
  console.log("Modal closed");
});

modal.addEventListener("result-select", (e) => {
  console.log("Selected result:", e.detail.result);
});
```

#### Chat Events

```javascript
const chat = document.querySelector("chat-bubble-snippet");

chat.addEventListener("message", (e) => {
  console.log("New message:", e.detail.message);
});
```

## 🎨 Customization

### CSS Variables

Customize the appearance using CSS variables:

```css
search-bar-snippet,
search-modal-snippet,
chat-bubble-snippet,
chat-page-snippet {
  /* ========== COLORS ========== */
  /* Primary */
  --search-snippet-primary-color: #2563eb;
  --search-snippet-primary-hover: #0f51dfff;

  /* Background & Surface */
  --search-snippet-background: #ffffff;
  --search-snippet-surface: #f8f9fa;
  --search-snippet-hover-background: #f1f3f5;

  /* Text */
  --search-snippet-text-color: #212529;
  --search-snippet-text-secondary: #6c757d;

  /* Border & Focus */
  --search-snippet-border-color: #dee2e6;
  --search-snippet-focus-ring: #0066cc40;

  /* Status Colors */
  --search-snippet-error-color: #dc3545;
  --search-snippet-error-background: #f8d7da;
  --search-snippet-success-color: #28a745;
  --search-snippet-success-background: #d4edda;
  --search-snippet-warning-color: #ffc107;
  --search-snippet-warning-background: #fff3cd;

  /* Message Colors */
  --search-snippet-user-message-bg: #0066cc;
  --search-snippet-user-message-text: #ffffff;
  --search-snippet-assistant-message-bg: #f1f3f5;
  --search-snippet-assistant-message-text: #212529;
  --search-snippet-system-message-bg: #fff3cd;
  --search-snippet-system-message-text: #856404;

  /* ========== TYPOGRAPHY ========== */
  --search-snippet-font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue",
    Arial, sans-serif;
  --search-snippet-font-family-mono:
    "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
  --search-snippet-font-size-base: 14px;
  --search-snippet-font-size-sm: 12px;
  --search-snippet-font-size-lg: 16px;
  --search-snippet-font-size-xl: 18px;
  --search-snippet-line-height: 1.5;
  --search-snippet-font-weight-normal: 400;
  --search-snippet-font-weight-medium: 500;
  --search-snippet-font-weight-bold: 600;

  /* ========== SPACING ========== */
  --search-snippet-spacing-xs: 4px;
  --search-snippet-spacing-sm: 8px;
  --search-snippet-spacing-md: 12px;
  --search-snippet-spacing-lg: 16px;
  --search-snippet-spacing-xl: 24px;
  --search-snippet-spacing-xxl: 32px;

  /* ========== SIZING ========== */
  --search-snippet-width: 100%;
  --search-snippet-max-width: 100%;
  --search-snippet-min-width: 320px;
  --search-snippet-max-height: 600px;
  --search-snippet-input-height: 44px;
  --search-snippet-button-height: 36px;
  --search-snippet-icon-size: 20px;
  --search-snippet-icon-margin-left: 6px;

  /* ========== BORDER ========== */
  --search-snippet-border-width: 1px;
  --search-snippet-border-radius: 18px;

  /* ========== SHADOWS ========== */
  --search-snippet-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --search-snippet-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  --search-snippet-shadow-md: 0 4px 12px rgba(0, 0, 0, 0.15);
  --search-snippet-shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.2);
  --search-snippet-shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  --search-snippet-result-item-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  /* ========== ANIMATION ========== */
  --search-snippet-transition-fast: 150ms ease;
  --search-snippet-transition: 200ms ease;
  --search-snippet-transition-slow: 300ms ease;
  --search-snippet-animation-duration: 0.2s;

  /* ========== Z-INDEX ========== */
  --search-snippet-z-dropdown: 1000;
  --search-snippet-z-modal: 1050;
  --search-snippet-z-popover: 1060;
  --search-snippet-z-tooltip: 1070;

  /* ========== CHAT BUBBLE SPECIFIC ========== */
  --chat-bubble-button-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  --chat-bubble-window-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  --chat-bubble-button-size: 60px;
  --chat-bubble-button-radius: 50%;
  --chat-bubble-button-icon-size: 28px;
  --chat-bubble-button-icon-color: white;
  --chat-bubble-button-bottom: 20px;
  --chat-bubble-button-right: 20px;
  --chat-bubble-button-z-index: 9999;
  --chat-bubble-position: fixed;
}
```

### Theme Examples

**Dark Theme:**

```css
search-bar-snippet {
  --search-snippet-primary-color: #4dabf7;
  --search-snippet-background: #1a1b1e;
  --search-snippet-text-color: #c1c2c5;
  --search-snippet-border-color: #373a40;
}
```

**Custom Brand:**

```css
chat-bubble-snippet {
  --search-snippet-primary-color: #667eea;
  --search-snippet-primary-hover: #5568d3;
  --search-snippet-border-radius: 12px;
  --search-snippet-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
}
```

## 🔧 Advanced Usage

### TypeScript

```typescript
import {
  SearchBarSnippet,
  SearchModalSnippet,
  ChatBubbleSnippet,
  ChatPageSnippet,
  type SearchSnippetProps,
} from "@cloudflare/ai-search-snippet";

// Type-safe usage
const searchBar = document.createElement(
  "search-bar-snippet",
) as SearchBarSnippet;
searchBar.setAttribute("api-url", "https://api.example.com");
searchBar.setAttribute("max-results", "10");

const chatBubble = document.createElement(
  "chat-bubble-snippet",
) as ChatBubbleSnippet;
chatBubble.setAttribute("api-url", "https://api.example.com");
await chatBubble.sendMessage("Hello, world!");
```

### React Integration

```tsx
import { useEffect, useRef } from "react";
import "@cloudflare/ai-search-snippet";

function ChatWidget() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const chat = ref.current;

    const handleMessage = (e: CustomEvent) => {
      console.log("Message:", e.detail);
    };

    chat?.addEventListener("message", handleMessage as EventListener);

    return () => {
      chat?.removeEventListener("message", handleMessage as EventListener);
    };
  }, []);

  return (
    <chat-bubble-snippet
      ref={ref}
      api-url="https://api.example.com"
      placeholder="Ask a question..."
    />
  );
}
```

### Vue Integration

```vue
<template>
  <chat-bubble-snippet
    :api-url="apiUrl"
    placeholder="Ask a question..."
    @message="handleMessage"
    @error="handleError"
  />
</template>

<script setup>
import { ref } from "vue";
import "@cloudflare/ai-search-snippet";

const apiUrl = ref("https://api.example.com");

const handleMessage = (event) => {
  console.log("Message:", event.detail.message);
};

const handleError = (event) => {
  console.error("Error:", event.detail.error);
};
</script>
```

## 🏗️ Development

### Build from Source

```bash
# Install dependencies
npm install

# Development mode with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint and format
npm run lint
npm run format
```

### Project Structure

```
nlweb-cl-snippet/
├── src/
│   ├── api/
│   │   ├── index.ts              # Base Client abstract class
│   │   └── ai-search.ts          # AISearchClient with streaming
│   ├── components/
│   │   ├── search-bar-snippet.ts   # Search input with results
│   │   ├── search-modal-snippet.ts # Modal search with Cmd/Ctrl+K
│   │   ├── chat-bubble-snippet.ts  # Floating chat bubble
│   │   ├── chat-page-snippet.ts    # Full-page chat with history
│   │   └── chat-view.ts            # Shared chat interface
│   ├── styles/
│   │   ├── theme.ts              # Base styles & CSS variables
│   │   ├── search.ts             # Search-specific styles
│   │   └── chat.ts               # Chat-specific styles
│   ├── types/
│   │   └── index.ts              # TypeScript definitions
│   ├── utils/
│   │   └── index.ts              # Utility functions
│   └── main.ts                   # Entry point
├── dist/                          # Build output
├── index.html                     # Demo page
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 📝 API Server Requirements

The component expects the API server to implement the following endpoints:

### Search Endpoint

**POST** `/search`

Request:

```json
{
  "query": "search query",
  "max_results": 10,
  "filters": {}
}
```

Response:

```json
{
  "results": [
    {
      "id": "result-1",
      "title": "Result Title",
      "snippet": "Result description...",
      "url": "https://example.com",
      "metadata": {}
    }
  ],
  "total": 42
}
```

### Chat Endpoint (Streaming)

**POST** `/ask`

Request:

```json
{
  "query": "user message",
  "generate_mode": "summarize",
  "prev": [
    {
      "role": "user",
      "content": "previous message",
      "timestamp": 1234567890
    }
  ]
}
```

Response: Streaming text chunks via ReadableStream

## 🧪 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

MIT License - see LICENSE file for details

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🐛 Bug Reports

If you discover any bugs, please create an issue on GitHub with:

- Description of the bug
- Steps to reproduce
- Expected behavior
- Actual behavior
- Browser and version

## 📮 Support

For questions and support, please open a GitHub issue.

---

Built with TypeScript, Web Components, and ❤️
