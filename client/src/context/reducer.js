import { DISPLAY_ALERT, CLEAR_ALERT } from './actions';

const reducer = (state, action) => {
   if (action.type === DISPLAY_ALERT) {
      return {
         ...state,
         showAlert: true,
         alertText: 'Favor introducir todos los valores 🤦',
         alertType: 'danger',
      };
   }
   if (action.type === CLEAR_ALERT) {
      return {
         ...state,
         showAlert: false,
         alertText: '',
         alertType: '',
      };
   }

   throw new Error(`no such action :${action.type}`);
};
export default reducer;
