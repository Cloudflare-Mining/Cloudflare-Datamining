# GRiM (Generate Redux in Memory)

## Table of contents

* [What is GRiM?](#what-is-grim)
* [Background](#background)
* [Action Lifecyle](#action-lifecyle)
  + [About Action Types](#about-action-types)  
* [Usage](#usage)
  + [makeActionCreator](#makeactioncreator)
    * [templateUrls, methods, and action creator parameters](#templateUrls-methods-and-action-creator-parameters)
    * [Further Action Configuration](#further-action-configuration)
      + [apiFetch](#apifetch)
      + [on(phase, (action, ...)) => action)](#onphase-action---action)
  + [makeReducer](makereducer)
    * [Further Reducer Configuration](#further-reducer-configuration)
      + [modifyInitialState(state => state)](#modifyinitialstatestate--state)
      + [on(phase, (state, ...)) => state)](#onphase-state---state)
* [Dependencies](#dependencies)
  + [Seamless-immutable](#seamless-immutable)
  + [Redux-thunk](#redux-thunk)
* [Normalization](#normalization)
  + [Why Normalize](#why-normalize)
  + [Rules](#rules)
    * [Aliases](#aliases)
    * [Normalizing Child Properties](#normalizing-child-properties)
    * [Normalizing by properties other than the id](#normalizing-by-properties-other-than-the-id)
  + [Functions](#functions)
    * [getNormalizerMiddleware(rules, callback)](#getnormalizermiddlewarerules-callback)
    * [normalizationReducer(state, action)](#normalizationreducerstate-action)
    * [createSelector(rules, entitiesSelector, entityType, selector)](#createselectorrules-entitiesselector-entitytype-selector)
   
## What is GRiM?

GRiM is small library to reduce the boiler plate involved in making Redux 
action creators, and reducers. It's specifically intended for actions
which retrieve remote restful data, and provides normalization support.

Action creators and reducers can be created with a single line of code. E.g.

```javascript
export fetchItem = makeActionCreator('item', 'get', '/parent/(parentId)/item/(itemId)'); 
export itemReducer = makeReducer('item');
```

## Background

We had a lot Redux code at Cloudflare, the bulk of which of which was nearly
identical. Very little of it was hand written - most was generated from a
simple block of json and the resultant actions and reducers etc. were written 
out. (This was GRiM's predecessor Grod - Generate Redux on Disk). The theory 
initially was that people might want to manually edit the generated code, but 
this never came to passed, and there were a few disadvantages:

* any changes to the generator would result in a vast number of files being
changed
* having to manually run the process to generate the code was awkward.

It was a perfectly workable solution, one that saved a lot of time,
but that that no-one was entirely happy with.

Here's a truncated example of the sort of code that would be generated:

```javascript
// CRUD actions for 'item'

import * as ActionTypes from '../constants/ActionTypes';
import * as api from '../api/itemApi';

function createItemRequest() {
  return {
    type: ActionTypes.CREATE_ITEM
  };
}

function createItemSuccess(response) {
  return {
    type: ActionTypes.CREATE_ITEM_SUCCESS,
    result: response.body.result,
    reduxKey: 'item',
    method: 'POST'
  };
}

function createItemFailure(error) {
  return {
    type: ActionTypes.CREATE_ITEM_FAILURE,
    errors: error.body && error.body.errors
  };
}

export function createItem(parentId, item, callback, options) {
  return function(dispatch) {
    dispatch(createItemRequest());
    return api.createItem(parentId, item, (error, response) => {
      if (response) {
        dispatch(createItemSuccess(response));
        if (callback) {
          callback(null, response.body.result);
        }
      } else {
        dispatch(createItemFailure(error));
        if (callback) {
          callback(error.body && error.body.errors);
        }
      }
    }, options);
  };
}

//
// For the sake of brevity, the nearly identical methods for GET, PUT, PATCH 
// and DELETE haved been omitted.
//
```

```javascript
//  Reducer for 'item'

import * as ActionTypes from '../constants/ActionTypes';
import { static as Immutable } from 'seamless-immutable';

const initialState = Immutable.from({
  data: undefined,
  errors: null,
  isRequesting: false,
  isErrored: false
});

export default function itemReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CREATE_ITEM:
    case ActionTypes.SAVE_ITEM:
    case ActionTypes.PATCH_ITEM:
    case ActionTypes.GET_ITEM:
    case ActionTypes.DELETE_ITEM:
      return Immutable.merge(state, {
        isRequesting: true,
        isErrored: false,
        errors: null
      });

    case ActionTypes.CREATE_ITEM_SUCCESS:
    case ActionTypes.SAVE_ITEM_SUCCESS:
    case ActionTypes.PATCH_ITEM_SUCCESS:
    case ActionTypes.GET_ITEM_SUCCESS:
    case ActionTypes.DELETE_ITEM_SUCCESS:
      return Immutable.merge(state, {
        data: action.result,
        isRequesting: false,
        isErrored: false
      });

    case ActionTypes.CREATE_ITEM_FAILURE:
    case ActionTypes.SAVE_ITEM_FAILURE:
    case ActionTypes.PATCH_ITEM_FAILURE:
    case ActionTypes.GET_ITEM_FAILURE:
    case ActionTypes.DELETE_ITEM_FAILURE:
      return Immutable.merge(state, {
        isRequesting: false,
        isErrored: true,
        errors: action.errors
      });

    case ActionTypes.RATELIMIT_BOOTSTRAP:
      return Immutable.merge(state, {
        data: action.result,
        isRequesting: false,
        isErrored: false,
        errors: null
      });

    case ActionTypes.RESET_TO_INITIAL_STATE:
      const { includes, excludes } = action;
      if (includes) {
        if (includes.indexOf('item') !== -1) {
          return initialState;
        }
      } else if (!excludes || excludes.indexOf('item') === -1) {
        return initialState;
      }

    default:
      return state;
  }
}


// Api functions:

import * as http from 'cf-util-http';

export function createItem(parentId, item, callback, options = {}) {
  const apiOptions = Object.assign({}, {
    body: item
  }, options);
  http.post('/parent/' + parentId + '/rate_limits', apiOptions, callback);
}

export function saveItem(parentId, item, callback, options = {}) {
  const apiOptions = Object.assign({}, {
    body: item
  }, options);
  http.put('/parent/' + parentId + '/item/' + item.id, apiOptions, callback);
}

export function patchItem(parentId, item, callback, options = {}) {
  const apiOptions = Object.assign({}, {
    body: item
  }, options);
  http.patch('/parent/' + parentId + '/item/' + item.id, apiOptions, callback);
}

export function fetchItem(parentId, itemId, callback, options = {}) {
  const apiOptions = Object.assign({}, null, options);
  http.get('/parent/' + parentId + '/item/' + itemId, apiOptions, callback);
}

export function deleteItem(parentId, item, callback, options = {}) {
  const apiOptions = Object.assign({}, null, options);
  http.del('/parent/' + parentId + '/item/' + item.id, apiOptions, callback);
}

```

And this is what we have now with GRiM:

```javascript
// Crud actions for 'item'
export fetchItem = makeActionCreator('item', 'get', '/parent/(parentId)/item/(itemId)');
export createItem = makeActionCreator('item', 'post', '/parent/(parentId)/item');
export saveItem =  makeActionCreator('item', 'put', '/parent/(parentId)/item/[item.id]');
export patchItem =  makeActionCreator('item', 'patch', '/parent/(parentId)/item/[item.id]');
export deleteItem =  makeActionCreator('item', 'delete', '/parent/(parentId)/item/[item.id]');

// Reducer for 'item' 
export itemReducer = makeReducer('item');

```

It's important to note that although the boilerplate has been abstracted away,
GRiM's action creators still produce normal Redux actions, in Flux Standard Action 
format.

## Action lifecycle

As you can see from the original generated code above, executing one of  GRiM's 
action creators begins a sequence of events that will produce two of three 
possible actions.

* A start action is dispatched
* An http request is made for a remote resource
* If the request succeeds a success event is dispatched
* if the request fails, an error event is dispatched

```javascript
const getThing = makeActionCreator('thing', 'get', '/thing');

const action = getThing();

// Start action
{
  type: 'thing.start'
  meta: {
    entityType: 'thing',
    method: 'get' 
  }
}

// Start action if request to /thing succeeds
{
  type: 'thing.success',
  payload: {}, // Api response
  meta: {
    entityType: 'thing',
    method: 'get' 
  }
}

// Error action if request to /thing errors
{
  type: 'thing.error',
  payload: {}, // Api Error response 
  error: true,
  meta: {
    entityType: 'thing',
    method: 'get' 
  }
}

```

### About action types

From the example actions above, you can see that the type property of an action
depends solely on the type parameter that was passed to makeActionCreator and 
the phase of the action (e.g. 'start', 'success' or 'error').

This means that if several action creators share the same key, they will 
generate the action types, regardless of whether they are GET, POST, PUT etc.
requests. The method is added to the `meta` property of action and actions
and reducers can be further customized (see below)

This works well for the restful API's we use at Cloudflare which in which
POST, PUT and PATCH methods all return the full representation of the object.
If you're not using using a restful API, GRiM may not be the best tool for you.

## Usage

GRiM exposes two functions, `makeActionCreator` and `makeReducer`

### makeActionCreator

`const action = makeActionCreator(entityType, method, templateUrl, options)`

`makeActionCreator` is used to generate asynchronous restful actions.

Parameters:
* entityType: used to generate action types, and indicate the type of data that
the url returns
* method: the http method (lowercase). E.g. 'get', 'put', 'post' etc
* templateUrl: a string which indicates the url used to fetch the data, and also
the fields which will be mapped from the action's parameters. See below.
* options: options are passed to the various hooks (see below) and can be used
to enable debugging information

#### templateUrls, methods, and action creator parameters

The named parameters are those required by an action creator.  They're derived
from the template url and the http method. If you pass { debug: true } in the
options, makeActionCreator will log the named parameters the action expects.

A get method for basic template url results in an action which has no named
parameters.

```javascript
const action = makeActionCreator('item', 'get', '/foo/bar');
action();

// get request is made to '/foo/bar';
```

A get method for template url in which parts are delineated by parentheses
results in an action where the contents of each set of parentheses are added to
the named parameters, and are replaced when the action is called.

```javascript
const action = makeActionCreator('item', 'get', '/foo/(fooId)/bar/(barId)');
action('abc', 123);

// get request is made to '/foo/abc/bar/123'
```

The contents of the parentheses are evaluated and replaced

```javascript
const action = makeActionCreator('item', 'get',
'/foo/(item.parentId)/bar/(item.id)');
action({ parentId: 'abc', id: 123 });

// get request is made to '/foo/abc/bar/123'
```

For put, patch, and post methods, the previous rules apply, except an additional
parameter is required. This is a javascript object which will be sent as a the
request body. The body is always the last of the named parameters. 

```javascript
const action = makeActionCreator('item', 'post', '/foo/bar');
action({ value: 1 });

// { value: 1 } is the body posted to '/foo/bar';
```
```
const action = makeActionCreator('item', 'post', '/foo/(fooId)/bar/(barId)');
action('abc', 123, {value: 2});

// { value: 2 } is the body posted to '/foo/abc/bar/123'
```

For methods that require a body, [] syntax can also be used to substitute a
value from the object being sent as the body.

```javascript
const action = makeActionCreator('item', 'patch', '/foo/(fooId)/bar/[id]');
action('abc', { id: 123 });

// { id: 123 } is posted to '/foo/abc/bar/123'
```

#### Further action configuration

Actions, as well as being functions, also have methods which allow additional,
optional, configuration.

The available methods are:
* apiFetch
* on 

##### apiFetch

By default the fetch api is used to make http requests. apiFetch can be used to
change or modify this behaviour. Given the limited browser support for fetch,
this is recommended.

```javascript
const action = makeActionCreator('item', 'get', '/item').apiFetch(
  (method, url, body, ...restArgs) => Promise;  
)

// restArgs is array of any parameters that were passed to the action, beyond
// thme named parameters.
```

##### on(phase, (action, ...)) => action)

`on` is used to hook into action creation and enables actions to be customised.
It requires two parameters:
* phase: one of four values corresponding to the action that's been created -
`start`, `success`, `error` and `all`.
* function: the function that will be executed. The parameters passed to the
function depend on the action that's been created

All functions passed to `on` must return an action object. 

`on('start', (startAction, namedParams, restArgs, options) => action)`
* startAction - the start action that's just been created.
* namedParams - an object mapping from the templateUrl's named parameters to
their values.
* restArgs - an array of the remaining arguments (those after the named
parameters) that were passed to the action.
* options - the options object that was passed to `makeActionCreator`

`on('success', (successAction, namedParams, restArgs, options, response) => action)`
* successAction - the success action that's just been created.
* namedParams - an object mapping from the templateUrl's named parameters to
their values.
* restArgs - an array of the remaining arguments (those after the named
parameters) that were passed to the action.
* options - the options object that was passed to `makeActionCreator`.
* response - the response from the api call.

`on('error', (errorAction, namedParams, restArgs, options, error) => action`
* errorAction - the error action that's just been created.
* namedParams - an object mapping from the named parameters to their values.
* restArgs - an array of the remaining arguments (those after the named
parameters) that were passed to the action.
* options - the options object that was passed to `makeActionCreator`
* error - the error that was thrown by the api fetch

`on('all', (action, namedParams, restArgs, options, [response])`
* action - that's just been created
* namedParams - an object mapping from the named parameters to their values.
* restArgs - an array of the arguments that were passed to the action.
* options - the options object that was passed to `makeActionCreator`
* response (optional) - dependant on the phase. Will be undefined for a start
action, the response for a success action, and the error for the error action.

Multiple functions can be added for each phase. They will be executed in the
order that they were added, and the action that's passed as the first parameter
to each is the result of the preceding call.

#### mock(function | value => payload)

The `mock` function allows the endpoint request to be bypassed and a predefined
response to be returned instead.

If a function passed to `mock`, when the action is dispatched the function is
executed with the same parameters as the action, and the return value is used as
the success action payload.

If the function returns `undefined`, the endpoint request will be made, so that
mocking can be performed selectively, depending on the action parameters.

If the function throws an exception, the value thrown is used as the payload of
the error action.

If an object or value is passed to `mock`, it will be used as the success action
payload whenever the action is dispatched.

```javascript
const action = makeAction('item', 'post', '/endpoint/(id)')
  .mock((id, value) => ({ id, value });

action('abcd', 'elephants');

// The action payload is { id: 'abcd', value: 'elephants' }
```

#### unmock()

This will clear the function passed to `mock`.

### makeReducer

`makeReducer(entityType, options)` is used to generate a reducer which process
actions created with the same type.

Parameters:
* entityType: used to determine which action types this reducer will process.
* options: options are passed to the various hooks. See below

#### Further reducer configuration

The reducer produced by calling this function also provides additional functions
that can be used for configuration. All these functions return the reducer and
can be chained.

* modifyInitialState
* on 

##### modifyInitialState(state => state)

Change the initial state of the reducer

##### on(phase, (state, ...)) => state)

Similarly to how action.on is used to modify actions, the reducer equivalent can
be used to modify state. The hook functions are called after the reducer has
processed the state, and can be used to return a new state.

It requires two parameters:
* phase: one of four values corresponding to the action that's been created -
`start`, `success`, `error`, `all` and `default`.
* function: the function that will be executed. The parameters passed to the
function depend on the phase

All functions passed to `on` must return the state. 

`on('start', (nextState, prevState, action, options)`
`on('success', (nextState, prevState, action, options)`
`on('error', (nextState, prevState, action, options)`
`on('all', (nextState, prevState, action, options)`

* nextState - the new state that was created after processing the action
* prevState - the state that existed prior to processing the action.
* action - the action that was processed by the reducer
* options - the options object that was passed to `makeReducer`

`start`, `success`, and `error` are executed when processing the respective 
actions,
`all` is executed for all of the above.

`on('default', (nextState, prevState, action, options)`
* state - the state
* action - the action that was received by the reducer
* options - the options object that was passed to `makeReducer`

The default case is executed when no other case matches the action type.

Multiple functions can be added for each phase. They will be executed in the
order that they were added, and the state that's passed as the first parameter
to each is the result of the preceding call.

## Dependencies

### Seamless-immutable

All the reducers created by GRiM use seamless-immutable to create immutable
results. This is not bundled with GRiM and must be included in your project.
See https://github.com/rtfeldman/seamless-immutable for details.

### Redux-thunk

The redux-thunk middleware must be installed in order to process the actions
created by GRiM

# Normalization

This library also includes an additional set of functions for dealing with 
normalization with Redux. 

## Why Normalize?

Normalization ensures that entities are only stored once in the state tree.
Individual reducers will record ids (or arrays of ids), rather than complete
objects. Combined with React, this means that any change to an individual entity
will be reflected wherever than entity is rendered.

Several functions are provided to deal with normalization.

* getNormalizerMiddleware: A function which creates Redux middleware which
normalizes the results of actions created by GRiM
* normalizationReducer: A reducer which stores normalized entities in the state
tree
* createSelector: Creates memoized selectors which return denormalized entities.

## Rules

The rules array specifies which entity types will be normalized. Each entry
requires at least an 'entityType' field, and other values describe how they are
normalized.

```javascript
const rules = [
  { entityType: 'normalizedType' },
  { entityType: 'aliasType', to: 'normalizedType' },
  { 
    entityType: 'nestedType',
    nestedProps: {
      prop1: 'normalizedType',
      prop2: 'normalizedType'
    }
  },
  { entityType: 'notIdType', idProp: 'otherId' }
];
```
 
An object with only an entityType field indicates that the object will be
normalized under that entityType. E.g. state.entities[entityType]. 

### Aliases

If the rule has a `to` property, the value of that property is used to look up
the actual entity type under which items will be normalized. It must resolve to
another entity type defined in the rules array. This allows entities controlled
by different sets of actions and reducers to be normalized to the same place in
the state tree. 

Typically it's used when an endpoint returns an array, to ensure that objects in
the array are normalized to the same place as individual items.

Note, aliases can't be used with any other configuration options, such as
`nestedProp` or `idProp`

### Normalizing child properties

If the rule value has a `nestedProps` property, it's value should be an object
whose keys denote the child properties to also be normalized. The values
indicate which entity type it will be normalized under.

In the example above, nestedType has two properties, 'prop1', and 'prop2', which
will be normalized under 'normalizedType'. The process is recursive, so that if
'normalizedType' also had properties to be normalized or denormalized, this will
be managed automatically.

Cyclic dependencies aren't handled, so I don't recommend you created any.
 
### Normalizing by properties other than the id

By default, it's assumed that objects will be normalized using their `id`
properties. This can be overridden by specifying a `idProp` property in the rule
configuration. In the example above, `nestedType` objects are normalized using
their name properties. 

## Functions
 
### getNormalizerMiddleware(rules, callback)
 
getNormalizerMiddleware creates a Redux middleware function which takes action
result properties and, if they are normalized, replaces them with their ids (or
arrays of ids). The normalized data is added to the action under an `entities`
property

The callback function is executed when entities are normalized. It's passed the
entityType and the original denormalized value. This is used for legacy
integration with older code at Cloudflare. It shouldn't be used otherwise. 
 
### normalizationReducer(state, action)

The normalizationReducer adds the normalized data created by the middleware to
the state tree. It also removes deleted data. 
 
### createSelector(rules, entitiesSelector, entityType, selector)
 
createSelector is a selector factory which simplifies working with normalized
entities. It creates memoized selectors which return denormalized objects. The
return value is recomputed when relevant parts of the state tree changes, making
it suitable for use with PureComponent. 

It's passed the following parameters:

* rules - the rules array which specifies which entities are normalized and how
* entitiesSelector - a selector function which is passed the state tree and
returns the part of the state tree where the normalized data is stored
* entityType - the type of the entity being selected
* selector - a selector function which returns the data from the state tree to
be denormalized.

The selector function can return either an id, an array of ids, or an object
whose property values are ids. Alternatively it can return an object with a data
property in one of the previous formats.

Note: Unlike getNormalizerMiddleware and normalizationReducer, createSelector is
almost completely independent of GRiM. Almost. With GRiM, api responses are
stored under a 'data' property, alongside a few other fields like
'isRequesting', and 'errors'. Rather than insisting the selector to point
directly to the data property, I instead first test if the result of the
selector is a data property and then denormalize that. In general I strongly
recommend that the selectors you pass to createSelector point directly to the
data you want to denormalize rather than the containing object that GRiM uses.

Usage:
```javascript    
const rules = {...};
const entitiesSelector = state => state.entities;
const itemSelector = state => state.path.to.the.normalized.item;
const itemEntitySelector = createSelector(rules, entitiesSelector, 'itemEntityType', itemSelector);
const denormalizedItem = itemEntitySelector(state);
```
