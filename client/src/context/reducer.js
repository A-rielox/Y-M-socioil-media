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
   HANDLE_CHANGE,
   CLEAR_VALUES,
   CREATE_RECIPE_BEGIN,
   CREATE_RECIPE_SUCCESS,
   CREATE_RECIPE_ERROR,
   GET_RECIPES_BEGIN,
   GET_RECIPES_SUCCESS,
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

   //
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

   //
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

   //
   if (action.type === TOGGLE_SIDEBAR) {
      return {
         ...state,
         showSidebar: !state.showSidebar,
      };
   }

   //
   if (action.type === LOGOUT_USER) {
      return {
         ...initialState,
         user: null,
         token: null,
         userLocation: '',
         jobLocation: '',
      };
   }

   //
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

   //
   if (action.type === HANDLE_CHANGE) {
      const { name, value } = action.payload;

      // poner page "return { ...state, page: 1, [name]: value }"
      return {
         ...state,
         [name]: value,
      };
   }

   //
   if (action.type === CLEAR_VALUES) {
      const initialState = {
         isEditing: false,
         editRecipeId: '',
         title: '',
         desc: '',
         problems: 'general',
         // oils: 'digize pal Adri',
         // para pasar a la lista
         oil1: '',
         oil2: '',
         oil3: '',
         oil4: '',
         oil5: '',
         problem1: '',
         problem2: '',
         problem3: '',
      };

      return { ...state, ...initialState };
   }

   //
   if (action.type === CREATE_RECIPE_BEGIN) {
      return { ...state, isLoading: true };
   }
   if (action.type === CREATE_RECIPE_SUCCESS) {
      return {
         ...state,
         isLoading: false,
         showAlert: true,
         alertType: 'success',
         alertText: 'Recetita creada!',
      };
   }
   if (action.type === CREATE_RECIPE_ERROR) {
      return {
         ...state,
         isLoading: false,
         showAlert: true,
         alertType: 'danger',
         alertText: action.payload.msg,
      };
   }

   //
   if (action.type === GET_RECIPES_BEGIN) {
      return { ...state, isLoading: true, showAlert: false };
   }
   if (action.type === GET_RECIPES_SUCCESS) {
      const { totalRecipes, numOfPages, recipes } = action.payload;

      return {
         ...state,
         isLoading: false,
         recipes,
         totalRecipes,
         numOfPages,
      };
   }

   throw new Error(`no such action :${action.type}`);
};
export default reducer;
