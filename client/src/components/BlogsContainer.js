// import { useAppContext } from '../context/appContext';
import Loading from './Loading';
// import { useEffect } from 'react';
// import PageBtnContainer from './PageBtnContainer';
import Blog from './Blog';
import styled from 'styled-components';

const BlogsContainer = () => {
   const isLoading = false;
   const blogs = [];
   const totalBlogs = 10;

   // const {
   // getRecipes,
   // recipes,
   // isLoading,
   // page,
   // totalRecipes,
   // search,
   // searchOil,
   // searchProblem,
   // sort,
   // numOfPages,
   // } = useAppContext();

   // useEffect(() => {
   // getRecipes();
   // }, [search, searchOil, searchProblem, sort, page]);

   if (isLoading) {
      return <Loading center />;
   }

   if (blogs.length === 0) {
      return (
         <Wrapper>
            <h2>No encontramos blogs 😳 ...</h2>
         </Wrapper>
      );
   }

   return (
      <Wrapper>
         <h5>
            {/* {totalRecipes} receta{recipes.length > 1 && 's'} encontrada */}
            {/* {recipes.length > 1 && 's'} */}
            {totalBlogs} receta{blogs.length > 1 && 's'} encontrados
            {blogs.length > 1 && 's'}
         </h5>

         <div className="recipes">
            {/* {recipes.map(recipe => {
               return <Recipe key={recipe._id} {...recipe} />;
            })} */}

            {blogs.map(recipe => {
               return <Blog key={recipe._id} {...recipe} />;
            })}
         </div>

         {/* {numOfPages > 1 && <PageBtnContainer />} */}
      </Wrapper>
   );
};

export default BlogsContainer;

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
