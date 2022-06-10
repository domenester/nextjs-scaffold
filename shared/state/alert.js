import {
  StateMachineProvider,
  createStore,
  useStateMachine,
} from 'little-state-machine';

createStore({
  alert: {
    open: false,
    message: '',
    severity: 'success'
  },
});

export const AlertProvider = StateMachineProvider
export const useAlert =  () => useStateMachine({
  updateAlert: (state, payload) => ({
    ...state,
    alert: {
      ...state.alert,
      ...payload
    },
  }),
})