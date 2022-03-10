import { useState } from 'react';
import styled from 'styled-components';
import FormRow from './FormRow';
import InputSelect from './InputSelect';
import { oilsList } from './optionLists';

const initialState = {
   oil1: '',
   oil2: '',
   oil3: '',
   oil4: '',
   oil5: '',
   oil6: '',
   oil7: '',
};

function App() {
   const [values, setValues] = useState(initialState);
   const [numEnt, setNumEnt] = useState(1);

   const inputs = Array.from({ length: numEnt }, (_, index) => {
      return index + 1;
   });

   const changeStateValues = e => {
      const name = e.target.name;
      const value = e.target.value;

      setValues({ ...values, [name]: value });
   };

   let lista = [];
   for (const oil of Object.values(values)) {
      if (oil) {
         lista.push(oil);
      }
   }
   lista.splice(Number(numEnt));
   console.log(lista);

   return (
      <Wrapper>
         <form className="form">
            <div className="form-center">
               {/* numero inputs */}
               <FormRow
                  labelText="numero de aceites"
                  type="number"
                  name="search"
                  value={numEnt}
                  changeStateValues={e => setNumEnt(e.target.value)}
               ></FormRow>

               {inputs.map(num => {
                  return (
                     <InputSelect
                        labelText={`aceite ${num} : `}
                        key={num}
                        name={`oil${num}`}
                        value={values[num]}
                        changeStateValues={changeStateValues}
                        list={oilsList}
                     ></InputSelect>
                  );
               })}
            </div>
         </form>
      </Wrapper>
   );
}

export default App;

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
