# Get Circuit Data

With the F1MV Public API, you can get data about a specific circuit. For that you will need one thing :

* The circuitId

## How to get the circuitID

Here are the steps to get the circuit ID :

* Open MultiViewer
* Open the (Replay) Live Timing of the wanted circuit
* Then call the API

<CodeGroup>
  <CodeGroupItem title="Curl">

```bash:no-line-numbers
curl http://localhost:10101/api/v2/live-timing/state/SessionInfo
```

  </CodeGroupItem>

  <CodeGroupItem title="JS Fetch">

```js
const data = await (await fetch('http://localhost:10101/api/v2/live-timing/state/SessionInfo')).json()
```

  </CodeGroupItem>

  <CodeGroupItem title="JavaScript NPM_F1MV_API">

```js
// Import the module
const { LiveTimingAPIV2 } = require("npm_f1mv_api");

// Create an async function
(async () => {
    const config = {
        host: "localhost",
        port: 10101
    }

    const data = await LiveTimingAPIV2('SessionInfo');
})();
```

  </CodeGroupItem>

  <CodeGroupItem title="TypeScript NPM_F1MV_API">

```ts
// Import the module
import { LiveTimingAPIV2, Config } from "npm_f1mv_api";

// Create an async function
(async () => {
    const config: Config = {
        host: "localhost",
        port: 10101
    }

    const data = await LiveTimingAPIV2('SessionInfo');
})();
```

  </CodeGroupItem>
</CodeGroup>

* The circuitid is at the following data path

<code>data.Meeting.Circuit.Key</code>

::: details If you've used NPM_F1MV_API ⬇️
<code>data.SessionInfo.Meeting.Circuit.Key</code>
:::

## How to get the CircuitData?

To get the CircuitData you need the [circuitId](#how-to-get-the-circuitid).

Then you can do the API call :

The path is the following one :

<code>https://api.multiviewer.app/api/v1/circuits/:circuitId/:year</code>

::: warning
You can't request a circuit data before 2018
:::

<CodeGroup>
  <CodeGroupItem title="Curl">

```bash:no-line-numbers
curl https://api.multiviewer.app/api/v1/circuits/:circuitId/:year
```

  </CodeGroupItem>

  <CodeGroupItem title="JS Fetch">

```js
const data = await (await fetch('https://api.multiviewer.app/api/v1/circuits/:circuitId/:year')).json()
```

  </CodeGroupItem>

  <CodeGroupItem title="JavaScript/TypeScript NPM_F1MV_API">

```js
// Import the module
const { getCircuitInfo } = require("npm_f1mv_api");

// Create an async function
(async () => {
    const data = await getCircuitInfo(':circuitId', :year);
})();
```

  </CodeGroupItem>
</CodeGroup>
