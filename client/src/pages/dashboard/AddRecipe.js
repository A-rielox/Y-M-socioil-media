import { FormRow, Alert, FormRowSelect } from '../../components';
import { useAppContext } from '../../context/appContext';
import styled from 'styled-components';

// los valores los pongo en el global ( y no en la pura pag como en el register ) xq para editar y agregar receta voy a ocupar la misma pag ( y la diferencia en la pag la hago con el "isEditing" )
const AddRecipe = () => {
   const {
      isLoading,
      showAlert,
      displayAlert,
      title,
      desc,
      // jobLocation residencia actual desde perfil,
      oilsOptions,
      handleChange,
      isEditing,
      editRecipe,
      clearValues,
      createRecipe,
      oil1,
      oil2,
      oil3,
      oil4,
      oil5,
      problem1,
      problem2,
      problem3,
   } = useAppContext();
   // PRIMERO CAMBIO TODO EN EL STATE ( LOS DATOS DE LA RECETA ), Y LUEGO LO MANDO

   const handleRecipeInput = e => {
      const name = e.target.name;
      const value = e.target.value;

      handleChange({ name, value });
   };

   // al picarle a editar ( en Recipe.js ) ==> se meten los valores de ese trabajo en el state y se manda a la pag de crear-recipe con estos valores pre-llenados, aqui se editan y se manda el patch a la DB

   const handleSubmit = e => {
      e.preventDefault();

      // LISTAS -- oils y problems
      let oilsList = [oil1, oil2, oil3, oil4, oil5];
      let problemsList = [problem1, problem2, problem3];
      console.log(oilsList);
      console.log(problemsList);
      oilsList = oilsList.filter(oil => oil.length > 1);

      problemsList = problemsList.filter(problem => problem.length > 1);

      // como sea lo pruebo en la API y en la DB
      // prettier-ignore
      if (!title || !desc || oilsList.length === 0 || problemsList.length === 0) {
         displayAlert();
         return;
      }

      if (isEditing) {
         editRecipe({ oilsList, problemsList });
         return;
      }

      // lo manda a crear con los valores q tiene en el state
      createRecipe({ oilsList, problemsList });
   };

   //////////////////////
   //////////////////////
   // OILS

   //////////////////////
   //////////////////////
   // PROBLEMS

   return (
      <Wrapper>
         <form className="form">
            <h3>{isEditing ? 'editar recetita' : 'añadir recetita'} </h3>
            {showAlert && <Alert />}

            {/* position */}
            <div className="form-center">
               {/* title */}
               <FormRow
                  type="text"
                  labelText="Titulo"
                  name="title"
                  value={title}
                  handleChange={handleRecipeInput}
               />

               {/* description */}
               <FormRow
                  type="text"
                  labelText="Descripción"
                  name="desc"
                  value={desc}
                  handleChange={handleRecipeInput}
               />

               {/* ACEITES */}

               <FormRowSelect
                  labelText="aceitito 1"
                  key="oil1"
                  name="oil1"
                  value={oil1}
                  handleChange={handleRecipeInput}
                  list={oilsOptions}
               ></FormRowSelect>
               <FormRowSelect
                  labelText="aceitito 2"
                  key="oil2"
                  name="oil2"
                  value={oil2}
                  handleChange={handleRecipeInput}
                  list={oilsOptions}
               ></FormRowSelect>
               <FormRowSelect
                  labelText="aceitito 3"
                  key="oil3"
                  name="oil3"
                  value={oil3}
                  handleChange={handleRecipeInput}
                  list={oilsOptions}
               ></FormRowSelect>
               <FormRowSelect
                  labelText="aceitito 4"
                  key="oil4"
                  name="oil4"
                  value={oil4}
                  handleChange={handleRecipeInput}
                  list={oilsOptions}
               ></FormRowSelect>
               <FormRowSelect
                  labelText="aceitito 5"
                  key="oil5"
                  name="oil5"
                  value={oil5}
                  handleChange={handleRecipeInput}
                  list={oilsOptions}
               ></FormRowSelect>

               {/* PROBLEMS */}

               <FormRow
                  labelText="molestia 1"
                  key="problem1"
                  type="text"
                  name="problem1"
                  value={problem1}
                  handleChange={handleRecipeInput}
               ></FormRow>
               <FormRow
                  labelText="molestia 2"
                  key="problem2"
                  type="text"
                  name="problem2"
                  value={problem2}
                  handleChange={handleRecipeInput}
               ></FormRow>
               <FormRow
                  labelText="molestia 3"
                  key="problem3"
                  type="text"
                  name="problem3"
                  value={problem3}
                  handleChange={handleRecipeInput}
               ></FormRow>

               <div className="btn-container">
                  <button
                     className="btn btn-block submit-btn"
                     type="submit"
                     onClick={handleSubmit}
                     disabled={isLoading}
                  >
                     enviar
                  </button>

                  {/* este tiene q ir despues del submit button  */}
                  <button
                     className="btn btn-block clear-btn"
                     onClick={e => {
                        e.preventDefault();
                        clearValues();
                     }}
                  >
                     limpiar
                  </button>
               </div>
            </div>
         </form>
      </Wrapper>
   );
};

export default AddRecipe;

const Wrapper = styled.section`
   border-radius: var(--borderRadius);
   width: 100%;
   background: var(--white);
   padding: 3rem 2rem 4rem;
   box-shadow: var(--shadow-2);

   h3 {
      margin-top: 0;
   }
   .form {
      margin: 0;
      border-radius: 0;
      box-shadow: none;
      padding: 0;
      max-width: 100%;
      width: 100%;
   }
   .form-row {
      margin-bottom: 0;
   }
   .form-center {
      display: grid;
      row-gap: 0.5rem;
   }
   .form-center button {
      align-self: end;
      height: 35px;
      margin-top: 1rem;
   }
   .btn-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 1rem;
      align-self: flex-end;
      margin-top: 0.5rem;
      button {
         height: 35px;
      }
   }
   .clear-btn {
      background: var(--grey-500);
   }
   .clear-btn:hover {
      background: var(--black);
   }
   @media (min-width: 992px) {
      .form-center {
         grid-template-columns: 1fr 1fr;
         align-items: center;
         column-gap: 1rem;
      }
      .btn-container {
         margin-top: 0;
      }
   }
   @media (min-width: 1120px) {
      .form-center {
         grid-template-columns: 1fr 1fr 1fr;
      }
      .form-center button {
         margin-top: 0;
      }
   }
`;
