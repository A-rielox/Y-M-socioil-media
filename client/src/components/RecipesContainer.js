import { useAppContext } from '../context/appContext';
import { useEffect } from 'react';
import Loading from './Loading';
// import Job from './Job';
// import PageBtnContainer from './PageBtnContainer';
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

   useEffect(() => {
      getRecipes();
   }, [/* search, searchStatus, searchType, sort, */ page]);

   console.log(recipes);

   if (isLoading) {
      return <Loading center />;
   }

   if (recipes.length === 0) {
      return (
         <Wrapper>
            <h2>No hay recetitas aún ...</h2>
         </Wrapper>
      );
   }

   return (
      <Wrapper>
         <h5>
            {totalRecipes} receta{recipes.length > 1 && 's'} encontradas
         </h5>

         <div className="jobs">
            {recipes.map((recipe, index) => {
               // return <Job key={job._id} {...job} />;
               return <h3 key={index}>receta</h3>;
            })}
         </div>

         {/* {numOfPages > 1 && <PageBtnContainer />} */}
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
