# Get FiA Documents

With the F1MV Public API, you can get all the FiA Documents of a specific year.

## How to get the Documents?

The path is the following one :

<code>https://api.multiviewer.app/api/v1/fia-documents/:year</code>

::: warning
You can't request  FiA Documents before 2019
:::

<CodeGroup>
  <CodeGroupItem title="Curl">

```bash:no-line-numbers
curl https://api.multiviewer.app/api/v1/fia-documents/:year
```

  </CodeGroupItem>

  <CodeGroupItem title="JS Fetch">

```js
const data = await (await fetch('https://api.multiviewer.app/api/v1/fia-documents/:year')).json()
```

  </CodeGroupItem>

  <CodeGroupItem title="JavaScript/TypeScript NPM_F1MV_API">

```js
// Import the module
const { getFIA_Documents } = require("npm_f1mv_api");

// Create an async function
(async () => {
    const data = await getFIA_Documents(:year);
})();
```

  </CodeGroupItem>
</CodeGroup>
