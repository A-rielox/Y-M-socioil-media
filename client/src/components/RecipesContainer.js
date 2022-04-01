import { useAppContext } from '../context/appContext';
import Loading from './Loading';
import { useEffect, useState } from 'react';
import PageBtnContainer from './PageBtnContainer';
import Recipe from './Recipe';
import styled from 'styled-components';

import Modal from './modal/Modal';

const RecipesContainer = () => {
   // prettier-ignore
   const {
      getRecipes, recipes, isLoading, page, totalRecipes, search, searchOil,
      searchProblem, sort, numOfPages } = useAppContext();

   // ♏♏♏♏
   const [modalOpen, setModalOpen] = useState(false);
   const [recipeOpened, setRecipeOpened] = useState('');
   const close = () => setModalOpen(false);
   const open = recipeId => {
      console.log('MODAL MODAL ', recipeId);

      setModalOpen(true);

      const recipeSelected = recipes.filter(recipe => recipe._id === recipeId);

      setRecipeOpened(recipeSelected[0]);
      console.log(recipeOpened);
   };

   useEffect(() => {
      getRecipes();
   }, [search, searchOil, searchProblem, sort, page]);

   if (isLoading) {
      return <Loading center />;
   }

   if (recipes.length === 0) {
      return (
         <Wrapper>
            <h2>No encontramos recetitas 😳 ...</h2>
         </Wrapper>
      );
   }

   return (
      <Wrapper>
         <h5>
            {totalRecipes} receta{recipes.length > 1 && 's'} encontrada
            {recipes.length > 1 && 's'}
         </h5>

         <div className="recipes">
            {recipes.map(recipe => {
               return <Recipe key={recipe._id} {...recipe} openModal={open} />;
               // return <Recipe key={recipe._id} {...recipe} />;
            })}
         </div>

         {numOfPages > 1 && <PageBtnContainer />}

         {/* ♏♏♏♏                      👇 */}
         {modalOpen && recipeOpened && (
            <Modal
               modalOpen={modalOpen}
               handleClose={close}
               recipeOpened={recipeOpened}
            />
         )}
      </Wrapper>
   );
};

export default RecipesContainer;

// createdAt: "2022-03-06T18:43:51.211Z"
// createdBy: "62215237822281526699bee3"
// desc: "DESCRIPCION pepi"
// oil1: "Angelica" --> a 5
// oilsList: (3) ['Angelica', 'Cassia', 'Copaiba']
// problem1: "espalda" --> a 3
// problemsList: (2) ['espalda', 'pie']
// title: "TITULO pepi"
// updatedAt: "2022-03-06T18:43:51.211Z"
// _id: "622500e7d92400c2e34d395d"

const Wrapper = styled.section`
   margin-top: 4rem;
   h2 {
      text-transform: none;
   }
   & > h5 {
      font-weight: 700;
   }
   .recipes {
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 2rem;
   }
   @media (min-width: 992px) {
      .recipes {
         display: grid;
         grid-template-columns: 1fr 1fr;
         gap: 1rem;
      }
   }

   .backdrop {
      position: fixed;
      /* position: absolute; */
      top: 0;
      left: 0;
      height: 100vh;
      width: 100%;
      background: #0000008a;
      display: flex;
      align-items: center;
      justify-content: center;

      z-index: 100;
   }

   .modal {
      width: clamp(50%, 700px, 90%);
      height: min(50%, 300px);

      margin: auto;
      /* padding: 0 2rem; */
      /* border-radius: 12px; */
      display: flex;
      flex-direction: column;
      align-items: center;

      article {
         position: relative;
         -webkit-box-shadow: 9px 9px 22px 13px rgba(0, 0, 0, 0.43);
         box-shadow: 9px 9px 22px 13px rgba(0, 0, 0, 0.43);
      }

      article::before {
         content: '';
         position: absolute;
         background-color: var(--primary-100);
         /* border: 0.5rem solid var(--primary-100); */
         border-radius: 30px;
         width: 100%;
         height: 100%;
         top: -3.5rem;
         left: -3rem;
         z-index: -1;
      }

      article::after {
         content: '';
         position: absolute;
         background-color: var(--primary-500);
         /* border: 0.5rem solid var(--primary-500); */
         border-radius: 20px;
         width: 100%;
         height: 100%;
         bottom: -3.5rem;
         right: -3rem;
         z-index: -2;
      }
   }
`;

/* 
import { useAppContext } from '../context/appContext';
import Loading from './Loading';
import { useEffect } from 'react';
import PageBtnContainer from './PageBtnContainer';
import Recipe from './Recipe';
import styled from 'styled-components';

const RecipesContainer = () => {
   const {
      getRecipes,
      recipes,
      isLoading,
      page,
      totalRecipes,
      search,
      searchOil,
      searchProblem,
      sort,
      numOfPages,
   } = useAppContext();

   useEffect(() => {
      getRecipes();
   }, [search, searchOil, searchProblem, sort, page]);

   if (isLoading) {
      return <Loading center />;
   }

   if (recipes.length === 0) {
      return (
         <Wrapper>
            <h2>No encontramos recetitas 😳 ...</h2>
         </Wrapper>
      );
   }

   return (
      <Wrapper>
         <h5>
            {totalRecipes} receta{recipes.length > 1 && 's'} encontrada
            {recipes.length > 1 && 's'}
         </h5>

         <div className="recipes">
            {recipes.map(recipe => {
               return <Recipe key={recipe._id} {...recipe} />;
            })}
         </div>

         {numOfPages > 1 && <PageBtnContainer />}
      </Wrapper>
   );
};

export default RecipesContainer;

// createdAt: "2022-03-06T18:43:51.211Z"
// createdBy: "62215237822281526699bee3"
// desc: "DESCRIPCION pepi"
// oil1: "Angelica" --> a 5
// oilsList: (3) ['Angelica', 'Cassia', 'Copaiba']
// problem1: "espalda" --> a 3
// problemsList: (2) ['espalda', 'pie']
// title: "TITULO pepi"
// updatedAt: "2022-03-06T18:43:51.211Z"
// _id: "622500e7d92400c2e34d395d"

const Wrapper = styled.section`
   margin-top: 4rem;
   h2 {
      text-transform: none;
   }
   & > h5 {
      font-weight: 700;
   }
   .recipes {
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 2rem;
   }
   @media (min-width: 992px) {
      .recipes {
         display: grid;
         grid-template-columns: 1fr 1fr;
         gap: 1rem;
      }
   }
`;

*/
