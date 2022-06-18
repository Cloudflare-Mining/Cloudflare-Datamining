import {
  InferableComponentEnhancerWithProps,
  HandleThunkActionCreator,
  ResolveThunks
} from 'react-redux';
import { Reducer } from 'redux';

/**
 * Get mapped PropTypes of selectors and action creators from `connect` HOC.
 *
 * @example
 * const connector = connect(mapDispatchToProps, actions);
 *
 * type TReduxProps = ConnectedProps<typeof connector>
 *
 * export default connector(Component);
 *
 * // in your prop types
 * interface ComponentProps extends TReduxProps {
 *   ... other props
 * }
 * class Component extends React.Component<ComponentProps> {...}
 */
export type ConnectedProps<
  Connect
> = Connect extends InferableComponentEnhancerWithProps<infer P, infer C>
  ? P
  : never;

/**
 * Get Redux state type from a reducer.
 *
 * @example
 * const rootReducer = combineReducers({
 *   stateA: reducerA,
 *   stateB: reducerB
 * });
 *
 * type ReduxState = ReducerState<typeof rootReducer>
 */
export type ReducerState<MaybeReducer> = MaybeReducer extends Reducer<
  infer State,
  infer Action
>
  ? State
  : never;

/**
 * Transforms action creator into a bound action creator.
 * redux-thunk middleware returns thunk's return value from dispatch call
 * https://github.com/reduxjs/redux-thunk#composition
 *
 * @example
 * interface ComponentProps { notifySuccess: MappedAction<typeof notifySuccess> }
 */
export type MappedAction<Action> = HandleThunkActionCreator<Action>;

/**
 * Transforms all action creators into bound action creators.
 * redux-thunk middleware returns thunk's return value from dispatch call
 * https://github.com/reduxjs/redux-thunk#composition
 *
 * @example
 *
 * // Goes into connect()
 * const mapStateToProps = ...
 *
 * // Goes into connect()
 * const actions = {
 *  notifySuccess,
 *  notifyError
 * }
 *
 * interface ComponentProps extends MappedActions<typeof actions>, ReturnValue<typeof mapStateToProps> {}
 */
export type MappedActions<Actions> = ResolveThunks<Actions>;
