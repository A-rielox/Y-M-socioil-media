import { useState } from 'react';
import { FormRow, Alert, FormRowSelect } from '../../components';
import { useAppContext } from '../../context/appContext';
import styled from 'styled-components';

const initialStateOils = {
   oil1: '',
   oil2: '',
   oil3: '',
   oil4: '',
   oil5: '',
   oil6: '',
   oil7: '',
};
const initialStateProblems = {
   problem1: '',
   problem2: '',
   problem3: '',
   problem4: '',
   problem5: '',
   problem6: '',
   problem7: '',
};

// los valores los pongo en el global ( y no en la pura pag como en el register ) xq para editar y agregar job voy a ocupar la misma pag ( y la diferencia en la pag la hago con el "isEditing" )
const AddRecipe = () => {
   const {
      isLoading,
      showAlert,
      displayAlert,
      title, // position
      desc, // company
      // jobLocation residencia actual desde perfil,
      problem, // jobType
      //jobTypeOptions
      oils, // status
      oilsOptions, // statusOptions
      // handleChange,
      // clearValues,
      // createJob,
      isEditing,
      // editJob,
   } = useAppContext();

   // PRIMERO CAMBIO TODO EN EL STATE ( LOS DATOS DE LA RECETA ), Y LUEGO LO MANDO

   const handleRecipeInput = e => {
      const name = e.target.name;
      const value = e.target.value;

      console.log(name, value);
      // handleChange({ name, value });
   };

   // al picarle a editar ( en Job.js ) ==> se meten los valores de ese trabajo en el state y se manda a la pag de crear-job con estos valores pre-llenados, aqui se editan y se manda el patch a la DB

   const handleSubmit = e => {
      e.preventDefault();

      // como sea lo pruebo en la API
      if (!title || !desc || !problem || !oils) {
         displayAlert();
         return;
      }

      console.log('receta creada 👏👏👏');

      // if (isEditing) {
      // editJob();
      //    return;
      // }

      // lo manda a crear con los valores q tiene en el state
      // createJob();
   };

   //////////////////////
   // OILS
   const [valuesOils, setValuesOils] = useState(initialStateOils);
   const [numEntOils, setNumEntOils] = useState(1);

   const inputsOils = Array.from({ length: numEntOils }, (_, index) => {
      return index + 1;
   });

   const handleChangeOils = e => {
      const name = e.target.name;
      const value = e.target.value;

      setValuesOils({ ...valuesOils, [name]: value.trim() });
   };

   let listOils = [];
   for (const oilValue of Object.values(valuesOils)) {
      if (oilValue) {
         listOils.push(oilValue);
      }
   }
   listOils.splice(Number(numEntOils));
   console.log(listOils);

   //////////////////////
   // PROBLEMS
   const [valuesProblems, setValuesProblems] = useState(initialStateProblems);
   const [numEntProbems, setNumEntProbems] = useState(1);

   const inputsProblems = Array.from({ length: numEntProbems }, (_, index) => {
      return index + 1;
   });

   const handleChangeProblems = e => {
      const name = e.target.name;
      const value = e.target.value;

      setValuesProblems({ ...valuesProblems, [name]: value.trim() });
   };

   let listaProblems = [];
   for (const molestia of Object.values(valuesProblems)) {
      if (molestia) {
         listaProblems.push(molestia);
      }
   }
   listaProblems.splice(Number(numEntProbems));
   console.log(listaProblems);

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

               {/* DINAMICOS */}

               {/* numero inputs OILS */}
               <FormRow
                  labelText="numero de aceites"
                  type="number"
                  name="_"
                  value={numEntOils}
                  handleChange={e => setNumEntOils(e.target.value)}
               ></FormRow>

               {inputsOils.map(num => {
                  return (
                     <FormRowSelect
                        labelText={`aceite ${num} : `}
                        key={num}
                        name={`oil${num}`}
                        value={valuesOils[num]}
                        handleChange={handleChangeOils}
                        list={oilsOptions}
                     ></FormRowSelect>
                  );
               })}

               {/* numero inputs PROBLEMS */}
               <FormRow
                  labelText="numero de problemas"
                  type="number"
                  name="_"
                  value={numEntProbems}
                  handleChange={e => setNumEntProbems(e.target.value)}
               ></FormRow>

               {inputsProblems.map(num => {
                  return (
                     <FormRow
                        labelText={`molestia ${num} : `}
                        key={num}
                        type="text"
                        name={`molestia${num}`}
                        value={valuesProblems[num]}
                        handleChange={handleChangeProblems}
                     ></FormRow>
                  );
               })}

               <div className="btn-container">
                  <button
                     className="btn btn-block submit-btn"
                     type="submit"
                     onClick={handleSubmit}
                     disabled={isLoading}
                  >
                     submit
                  </button>

                  {/* este tiene q ir despues del submit button  */}
                  <button
                     className="btn btn-block clear-btn"
                     onClick={e => {
                        e.preventDefault();
                        // clearValues();
                        console.log('limpiando');
                     }}
                  >
                     clear
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
