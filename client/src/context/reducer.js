import { initialState } from './appContext';
import {
   DISPLAY_ALERT,
   CLEAR_ALERT,
   REGISTER_USER_BEGIN,
   REGISTER_USER_SUCCESS,
   REGISTER_USER_ERROR,
   LOGIN_USER_BEGIN,
   LOGIN_USER_SUCCESS,
   LOGIN_USER_ERROR,
   TOGGLE_SIDEBAR,
   LOGOUT_USER,
   UPDATE_USER_BEGIN,
   UPDATE_USER_SUCCESS,
   UPDATE_USER_ERROR,
} from './actions';

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

   //registro
   if (action.type === REGISTER_USER_BEGIN) {
      return {
         ...state,
         isLoading: true,
      };
   }
   if (action.type === REGISTER_USER_SUCCESS) {
      const { user, token, location } = action.payload;
      return {
         ...state,
         isLoading: false,
         user,
         token,
         userLocation: location,
         jobLocation: location,
         showAlert: true,
         alertType: 'success',
         alertText: 'Usuario creado 👍, redirigiendo ...',
      };
   }
   if (action.type === REGISTER_USER_ERROR) {
      const { msg } = action.payload;
      return {
         ...state,
         isLoading: false,
         showAlert: true,
         alertText: msg,
         alertType: 'danger',
      };
   }

   //login
   if (action.type === LOGIN_USER_BEGIN) {
      return {
         ...state,
         isLoading: true,
      };
   }
   if (action.type === LOGIN_USER_SUCCESS) {
      const { user, token, location } = action.payload;
      return {
         ...state,
         isLoading: false,
         user,
         token,
         userLocation: location,
         jobLocation: location,
         showAlert: true,
         alertType: 'success',
         alertText: 'Usuario ingresado 👍, redirigiendo ...',
      };
   }
   if (action.type === LOGIN_USER_ERROR) {
      const { msg } = action.payload;
      return {
         ...state,
         isLoading: false,
         showAlert: true,
         alertText: msg,
         alertType: 'danger',
      };
   }

   // toggle sidebar
   if (action.type === TOGGLE_SIDEBAR) {
      return {
         ...state,
         showSidebar: !state.showSidebar,
      };
   }

   // logout user
   if (action.type === LOGOUT_USER) {
      return {
         ...initialState,
         user: null,
         token: null,
         userLocation: '',
         jobLocation: '',
      };
   }

   // update user
   if (action.type === UPDATE_USER_BEGIN) {
      return { ...state, isLoading: true };
   }
   if (action.type === UPDATE_USER_SUCCESS) {
      const { user, token, location } = action.payload;

      return {
         ...state,
         isLoading: false,
         user,
         token,
         userLocation: location,
         jobLocation: location,
         showAlert: true,
         alertType: 'success',
         alertText: 'Usuario actualizado 👍',
      };
   }
   if (action.type === UPDATE_USER_ERROR) {
      const { msg } = action.payload;

      return {
         ...state,
         isLoading: false,
         showAlert: true,
         alertText: msg,
         alertType: 'danger',
      };
   }

   throw new Error(`no such action :${action.type}`);
};
export default reducer;
