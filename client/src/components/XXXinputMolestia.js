import { useState } from 'react';
import styled from 'styled-components';
import FormRow from './FormRow';

const initialState = {
   molestia1: '',
   molestia2: '',
   molestia3: '',
   molestia4: '',
   molestia5: '',
   molestia6: '',
   molestia7: '',
};

function App() {
   const [values, setValues] = useState(initialState);
   const [numEnt, setNumEnt] = useState(1);

   const inputs = Array.from({ length: numEnt }, (_, index) => {
      return index + 1;
   });

   const handleChange = e => {
      const name = e.target.name;
      const value = e.target.value;

      setValues({ ...values, [name]: value.trim() });
   };

   let lista = [];
   for (const molestia of Object.values(values)) {
      if (molestia) {
         lista.push(molestia);
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
                  handleChange={e => setNumEnt(e.target.value)}
               ></FormRow>

               {inputs.map(num => {
                  return (
                     <FormRow
                        labelText={`molestia ${num} : `}
                        key={num}
                        type="text"
                        name={`molestia${num}`}
                        value={values[num]}
                        handleChange={handleChange}
                     ></FormRow>
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
