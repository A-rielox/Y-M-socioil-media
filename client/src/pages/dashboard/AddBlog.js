import React from 'react';
import styled from 'styled-components';

import { Alert } from '../../components';

const AddBlog = () => {
   const isEditing = false;
   const showAlert = false;
   const isLoading = false;

   return (
      <Wrapper>
         <form className="form">
            <h3>{isEditing ? 'editar blog' : 'añadir blog'} </h3>
            {showAlert && <Alert />}

            <div className="form-center">
               {/*     */}

               <button
                  className="btn btn-block submit-btn"
                  type="submit"
                  onClick={() => console.log('click en enviar')}
                  disabled={isLoading}
               >
                  enviar
               </button>

               {/* este tiene q ir despues del submit button  */}
               <button
                  className="btn btn-block clear-btn"
                  // onClick={e => {
                  //    e.preventDefault();
                  //    clearValues();
                  // }}
                  onClick={() => console.log('click en limpiar')}
               >
                  limpiar
               </button>
            </div>
         </form>
      </Wrapper>
   );
};

export default AddBlog;

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
   /* .btn-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 1rem;
      align-self: flex-end;
      margin-top: 0.5rem;
      button {
         height: 35px;
      }
   } */
   .clear-btn {
      background: var(--grey-500);
   }
   .clear-btn:hover {
      background: var(--grey-700);
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
      .form {
         margin: 0 auto;
         /* border-radius: 0;
      box-shadow: none;
      padding: 0; */
         max-width: 80%;
         width: 100%;
      }

      .form-center {
         grid-template-columns: 1fr 1fr /* 1fr */;
      }
      .form-center button {
         margin-top: 0;
      }

      .btn-container {
         display: grid;
         grid-template-columns: 1fr;
         row-gap: 1rem;
         align-self: flex-end;
         /* margin-top: 0.5rem; */
         /* padding-top: 2rem; */
         button {
            height: 35px;
         }
      }
   }
`;
