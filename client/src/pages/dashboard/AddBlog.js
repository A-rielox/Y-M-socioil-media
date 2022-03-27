import React, { useState } from 'react';
import styled from 'styled-components';

import { Alert, Editor } from '../../components';

const AddBlog = () => {
   const isEditing = false;
   const showAlert = false;
   const isLoading = false;

   const [content, setContent] = useState('');
   const testContent =
      '<h2>El titulazo</h2><p><img src="https://images.pexels.com/photos/161599/scent-sticks-fragrance-aromatic-161599.jpeg?cs=srgb&amp;dl=pexels-pixabay-161599.jpg&amp;fm=jpg" width="400px" style="width: 400px; height: 266px; display: block; margin-left: auto; margin-right: auto;"></p><p>Como dijo Gary</p><blockquote>Abundance for me</blockquote><p>Las props:</p><ul><li>2 gotas de limon</li><li>2 gotas sandalo</li></ul><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique neque sed a minima minus necessitatibus dolorem blanditiis inventore. Ducimus molestias excepturi repudiandae error repellendus sed qui sunt harum optio earum!</p>';

   console.log(content);

   return (
      <Wrapper>
         <form className="form">
            <h3>{isEditing ? 'editar blog' : 'añadir blog'} </h3>
            {showAlert && <Alert />}

            <div className="form-center">
               {/* <Editor initialValue="" setContent={setContent} /> */}
               <Editor initialValue={testContent} setContent={setContent} />

               <div className="btn-container">
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

               <div className="XXXXXX">{content}</div>
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

   .form-center {
      display: flex;
      flex-direction: column;
   }

   .jodit-react-container {
      width: 100%;

      p {
         margin-bottom: 0.5rem;
         max-width: 40em;
         color: #6e7785;
      }

      ul {
         list-style-type: disc;
         /* padding: 1rem; */
         margin-top: 0;
         padding-top: 0;
         padding-bottom: 0.5rem;
         padding-left: 2rem;
      }
   }

   .jodit-status-bar {
      visibility: collapse;
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
   }
   .clear-btn {
      background: var(--grey-500);
   }
   .clear-btn:hover {
      background: var(--grey-700);
   }

   @media (min-width: 1120px) {
      .form {
         margin: 0 auto;
         max-width: 740px;
      }

      .btn-container {
         row-gap: 1rem;

         button {
            height: auto;
            padding: 1rem 2.5rem;
         }
      }
   }
`;
