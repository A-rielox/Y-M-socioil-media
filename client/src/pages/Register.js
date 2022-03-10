import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAppContext } from '../context/appContext';

import { LogoBig, FormRow, Alert } from '../components';
import styled from 'styled-components';

const initialState = {
   name: '',
   email: '',
   password: '',
   isMember: true,
};

function Register() {
   const { isLoading, showAlert, displayAlert, registerUser, user, loginUser } =
      useAppContext();

   const navigate = useNavigate();
   const [values, setValues] = useState(initialState);

   // global context and useNavigate later

   const handleChange = e => {
      const name = e.target.name;
      const value = e.target.value;

      setValues({ ...values, [name]: value });
   };

   const onSubmit = e => {
      e.preventDefault();
      const { name, email, password, isMember } = values;

      if (!email || !password || (!isMember && !name)) {
         displayAlert();

         return;
      }

      const currentUser = { name, email, password };

      if (isMember) {
         loginUser(currentUser);
      } else {
         registerUser(currentUser);
      }
   };

   useEffect(() => {
      if (user) {
         setTimeout(() => {
            navigate('/');
         }, 3000);
      }
   }, [user, navigate]);

   const toggleMember = () => {
      setValues({ ...values, isMember: !values.isMember });
   };

   return (
      <Wrapper className="full-page">
         <form className="form" onSubmit={onSubmit}>
            <LogoBig />
            {!values.isMember ? <h3>Registro</h3> : <h3>Login</h3>}
            {showAlert && (
               <Alert
                  alertType="danger"
                  alertText="favor introducir todos los datos"
               />
            )}

            {/* NOMBRE */}
            {!values.isMember && (
               <FormRow
                  type="text"
                  name="name"
                  value={values.name}
                  handleChange={handleChange}
                  labelText="Nombre"
               />
            )}

            {/* EMAIL */}
            <FormRow
               type="email"
               name="email"
               value={values.email}
               handleChange={handleChange}
            />

            {/* PASSWORD */}
            <FormRow
               type="password"
               name="password"
               value={values.password}
               handleChange={handleChange}
            />

            <button
               type="submit"
               className="btn btn-block"
               disabled={isLoading}
            >
               enviar
            </button>

            <p>
               {values.isMember ? 'Aún no te unes? ' : 'Ya eres miembro?'}

               <button
                  type="button"
                  onClick={toggleMember}
                  className="member-btn"
               >
                  {values.isMember ? 'Registro' : 'Login'}
               </button>
            </p>
         </form>
      </Wrapper>
   );
}

export default Register;

const Wrapper = styled.section`
   display: grid;
   align-items: center;
   .logo {
      width: 100%;
      display: block;
      margin: 0 auto;
      margin-bottom: 1.38rem;
   }
   .form {
      max-width: 400px;
      border-top: 5px solid var(--primary-500);
   }

   h3 {
      text-align: center;
   }
   p {
      margin: 0;
      margin-top: 1rem;
      text-align: center;
   }
   .btn {
      margin-top: 1rem;
   }
   .member-btn {
      background: transparent;
      border: transparent;
      color: var(--primary-500);
      cursor: pointer;
      letter-spacing: var(--letterSpacing);
   }
`;
