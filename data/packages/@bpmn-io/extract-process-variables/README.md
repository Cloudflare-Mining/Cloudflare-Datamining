# extract-process-variables

[![CI](https://github.com/bpmn-io/extract-process-variables/actions/workflows/CI.yml/badge.svg)](https://github.com/bpmn-io/extract-process-variables/actions/workflows/CI.yml)

An util for [bpmn-js](https://github.com/bpmn-io/bpmn-js) to extract Camunda BPM [process variables](https://docs.camunda.org/manual/latest/user-guide/process-engine/variables/) from a BPMN 2.0 diagram.

## Installation

```sh
$ npm i --save @bpmn-io/extract-process-variables
```

## Usage

### Camunda Platform 7
Given [this example diagram](./test/fixtures/sub-process-own-scope.bpmn)

```js
import {
  getProcessVariables,
  getVariablesForScope,
} from '@bpmn-io/extract-process-variables';

// For Camunda Platform 8 diagrams, use the /zeebe submodule
// import {
//   getProcessVariables,
//   getVariablesForScope,
// } from '@bpmn-io/extract-process-variables/zeebe';

const canvas = modeler.get('canvas');

const rootElement = canvas.getRootElement();

const allVariables = getProcessVariables(rootElement.businessObject);
/*
  [
    {
      "name": "variable1",
      "origin": [ "Task_1" ],
      "scope": "Process_1"
    },
    {
      "name": "variable2",
      "origin": [ "Task_1" ],
      "scope": "Process_1"
    },
    {
      "name": "variable3",
      "origin": [ "Task_2" ],
      "scope": "SubProcess_1"
    }
  ]
*/

const scopeVariables = getVariablesForScope('Process_1', rootElement.businessObject);
/*
  [
    {
      "name": "variable1",
      "origin": [ "Task_1" ],
      "scope": "Process_1"
    },
    {
      "name": "variable2",
      "origin": [ "Task_1" ],
      "scope": "Process_1"
    }
  ]
*/
```

Note that `origin` and `scope` retrieves the full moddle element. The example outputs are reduced due to better readibility.

Note that [camunda-bpmn-moddle](https://github.com/camunda/camunda-bpmn-moddle) or [zeebe-bpmn-moddle](https://github.com/camunda-cloud/zeebe-bpmn-moddle) descriptors have to be installed.

## Properties support

### Camunda Platform 7
We are currently [extracting process variables](https://github.com/bpmn-io/extract-process-variables/tree/main/src/camunda-platform/extractors) from the following diagram properties
* `camunda:formField`
* `camunda:outputParameter`
* `camunda:out`
* `camunda:resultVariable`
* `camunda:errorCodeVariable`
* `camunda:errorMessageVariable`
* `camunda:escalationCodeVariable`

### Camunda Platform 8
We are currently [extracting process variables](https://github.com/bpmn-io/extract-process-variables/tree/main/src/zeebe/extractors) from the following diagram properties
* `zeebe:input`
* `zeebe:output`
* `zeebe:loopCharacteristics > inputElement`
* `zeebe:loopCharacteristics > outputCollection`
* `zeebe:calledDecision > resultVariable`

## See also

* [camunda-bpmn-moddle](https://github.com/camunda/camunda-bpmn-moddle)
* [Camunda BPM Process Variables Documentation](https://docs.camunda.org/manual/latest/user-guide/process-engine/variables/)
* [zeebe-bpmn-moddle](https://github.com/camunda-cloud/zeebe-bpmn-moddle)
* [Camunda Platform 8 Variables Documentation](https://docs.camunda.io/docs/components/concepts/variables)

## License

MIT
