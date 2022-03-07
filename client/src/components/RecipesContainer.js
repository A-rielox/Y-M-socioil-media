import { useAppContext } from '../context/appContext';
import { useEffect } from 'react';
import Loading from './Loading';
import Recipe from './Recipe';
import PageBtnContainer from './PageBtnContainer';
import styled from 'styled-components';

const RecipesContainer = () => {
   const {
      getRecipes,
      recipes,
      isLoading,
      page,
      totalRecipes,
      // search,
      // searchStatus,
      // searchType,
      // sort,
      numOfPages,
   } = useAppContext();

   useEffect(
      () => {
         getRecipes();
      },
      [
         /* search, searchStatus, searchType, sort,  page */
      ]
   );

   console.log(recipes);
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
            {totalRecipes} receta{recipes.length > 1 && 's'} encontradas
         </h5>

         <div className="jobs">
            {recipes.map(recipe => {
               return <Recipe key={recipe._id} {...recipe} />;
               // return <h3 key={index}>receta</h3>;
            })}
         </div>

         {numOfPages > 1 && <PageBtnContainer />}
      </Wrapper>
   );
};

export default RecipesContainer;

const Wrapper = styled.section`
   margin-top: 4rem;
   h2 {
      text-transform: none;
   }
   & > h5 {
      font-weight: 700;
   }
   .jobs {
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 2rem;
   }
   @media (min-width: 992px) {
      .jobs {
         display: grid;
         grid-template-columns: 1fr 1fr;
         gap: 1rem;
      }
   }
`;