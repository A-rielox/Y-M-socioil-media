import { FormRow, FormRowSelect } from '.';
import { useAppContext } from '../context/appContext';
import styled from 'styled-components';

const SearchContainer = () => {
   const {
      isLoading,
      list4Problems,
      oilsOptions,
      search,
      searchOil,
      searchProblem,
      sort,
      sortOptions,
      handleChange,
      clearFilters,
   } = useAppContext();

   const handleSearch = e => {
      if (isLoading) return;
      const name = e.target.name;
      const value = e.target.value;
      // la fcn q cambia dinámicamente los valores en el state
      handleChange({ name, value });
   };

   const handleSubmit = e => {
      e.preventDefault();
      clearFilters();
   };

   return (
      <Wrapper>
         <form className="form">
            <h4>Busqueda</h4>

            {/* search position */}
            <div className="form-center">
               <FormRow
                  labelText="en el titulo"
                  type="text"
                  name="search"
                  value={search}
                  handleChange={handleSearch}
               ></FormRow>

               {/* search by oil */}
               <FormRowSelect
                  labelText="que contenga el aceitito"
                  name="searchOil"
                  value={searchOil}
                  handleChange={handleSearch}
                  list={['todos', ...oilsOptions]}
               ></FormRowSelect>

               {/* search by problem */}
               <FormRowSelect
                  labelText="con problema"
                  name="searchProblem"
                  value={searchProblem}
                  handleChange={handleSearch}
                  list={['todos', ...list4Problems]}
               ></FormRowSelect>

               {/* sort */}
               <FormRowSelect
                  labelText="orden"
                  name="sort"
                  value={sort}
                  handleChange={handleSearch}
                  list={sortOptions}
               ></FormRowSelect>

               <button
                  className="btn btn-block btn-danger"
                  disabled={isLoading}
                  onClick={handleSubmit}
               >
                  limpiar filtros
               </button>
            </div>
         </form>
      </Wrapper>
   );
};

export default SearchContainer;

const Wrapper = styled.section`
   .form {
      width: 100%;
      max-width: 100%;
   }
   .form-input,
   .form-select,
   .btn-block {
      height: 35px;
   }
   .form-row {
      margin-bottom: 0;
   }
   .form-center {
      display: grid;
      grid-template-columns: 1fr;
      column-gap: 2rem;
      row-gap: 0.5rem;
   }
   h5 {
      font-weight: 700;
   }
   .btn-block {
      align-self: end;
      margin-top: 1rem;
   }
   @media (min-width: 768px) {
      .form-center {
         grid-template-columns: 1fr 1fr;
      }
   }
   @media (min-width: 992px) {
      .form-center {
         grid-template-columns: 1fr 1fr 1fr;
      }
      .btn-block {
         margin-top: 0;
      }
   }
`;
