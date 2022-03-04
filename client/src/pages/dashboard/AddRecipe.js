import { FormRow, Alert, FormRowSelect } from '../../components';
import { useAppContext } from '../../context/appContext';
import styled from 'styled-components';

// los valores los pongo en el global ( y no en la pura pag como en el register ) xq para editar y agregar job voy a ocupar la misma pag ( y la diferencia en la pag la hago con el "isEditing" )
const AddRecipe = () => {
   const {
      isLoading,
      showAlert,
      displayAlert,
      position,
      company,
      jobLocation,
      // jobType,
      // jobTypeOptions,
      // status,
      // statusOptions,
      handleChange,
      // clearValues,
      // createJob,
      isEditing,
      // editJob,
   } = useAppContext();

   // PRIMERO CAMBIO TODO EN EL STATE ( LOS DATOS DEL JOB ), Y LUEGO LO MANDO

   const handleJobInput = e => {
      const name = e.target.name;
      const value = e.target.value;

      handleChange({ name, value });
   };

   // al picarle a editar ( en Job.js ) ==> se meten los valores de ese trabajo en el state y se manda a la pag de crear-job con estos valores pre-llenados, aqui se editan y se manda el patch a la DB

   const handleSubmit = e => {
      e.preventDefault();

      // como sea lo pruebo en la API
      if (!position || !company || !jobLocation) {
         displayAlert();
         return;
      }

      if (isEditing) {
         // editJob();
         return;
      }

      // lo manda a crear con los valores q tiene en el state
      // createJob();
   };

   return (
      <Wrapper>
         <form className="form">
            <h3>{/* isEditing */ false ? 'edit job' : 'add job'} </h3>
            {showAlert && <Alert />}

            {/* position */}
            <div className="form-center">
               <FormRow
                  type="text"
                  name="position"
                  value={position}
                  handleChange={handleJobInput}
               />
               {/* company */}
               <FormRow
                  type="text"
                  name="company"
                  value={company}
                  handleChange={handleJobInput}
               />
               {/* location */}
               <FormRow
                  type="text"
                  labelText="Job location"
                  name="jobLocation"
                  value={jobLocation}
                  handleChange={handleJobInput}
               />

               {/* job status */}
               {/* <FormRowSelect
                  name="status"
                  value={status}
                  handleChange={handleJobInput}
                  list={statusOptions}
               /> */}

               {/* job type */}
               {/* <FormRowSelect
                  labelText="job type"
                  name="jobType"
                  value={jobType}
                  handleChange={handleJobInput}
                  list={jobTypeOptions}
               /> */}

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
