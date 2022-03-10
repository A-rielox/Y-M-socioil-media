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
   SET_EDIT_RECIPE,
   DELETE_RECIPE_BEGIN,
   EDIT_RECIPE_BEGIN,
   EDIT_RECIPE_SUCCESS,
   EDIT_RECIPE_ERROR,
   CLEAR_FILTERS,
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
         // problems: 'general',
         // oils: 'digize pal Adri',
         // para pasar a la lista
         oilsList: [],
         problemsList: [],
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

      let tempRecipes = [...recipes];
      let list4Problems = tempRecipes.map(recipe => recipe.problemsList);
      list4Problems = [...new Set(list4Problems.flat())];
      console.log(list4Problems);

      return {
         ...state,
         isLoading: false,
         recipes,
         totalRecipes,
         numOfPages,
         list4Problems,
      };
   }

   //
   if (action.type === SET_EDIT_RECIPE) {
      const recipe = state.recipes.find(
         recipe => recipe._id === action.payload.id
      );

      // prettier-ignore
      const {
         _id,title,desc,oilsList,oil1,oil2,oil3,oil4,oil5,problemsList,problem1,problem2,problem3,
      } = recipe;

      // prettier-ignore
      return { ...state, isEditing: true, editRecipeId: _id, title, desc, oilsList, oil1, oil2, oil3, oil4, oil5, problemsList, problem1, problem2, problem3 };
   }
   //
   if (action.type === DELETE_RECIPE_BEGIN) {
      // en la fcn llamo a getRecipes() q va a poner isLoading:false
      return { ...state, isLoading: true };
   }

   //
   if (action.type === EDIT_RECIPE_BEGIN) {
      return { ...state, isLoading: true };
   }
   if (action.type === EDIT_RECIPE_SUCCESS) {
      return {
         ...state,
         isLoading: false,
         showAlert: true,
         alertType: 'success',
         alertText: 'Recetita editada 🐱!',
      };
   }
   if (action.type === EDIT_RECIPE_ERROR) {
      return {
         ...state,
         isLoading: false,
         showAlert: true,
         alertType: 'danger',
         alertText: action.payload.msg,
      };
   }

   //
   if (action.type === CLEAR_FILTERS) {
      return {
         ...state,
         search: '',
         searchOil: 'todos',
         searchProblem: 'todos',
         sort: 'recientes',
      };
   }

   throw new Error(`no such action :${action.type}`);
};
export default reducer;

// title:
// desc: "DESCRIPCION pepi"
// oilsList: (3) ['Angelica', 'Cassia', 'Copaiba']
// oil1: '',
// oil2: '',
// oil3: '',
// oil4: '',
// oil5: '',
// problemsList: (2) ['espalda', 'pie']
// problem1: '',
// problem2: '',
// problem3: '',
