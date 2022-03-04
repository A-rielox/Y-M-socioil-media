import { useState } from 'react';
import { FormRow, Alert } from '../../components';
import { useAppContext } from '../../context/appContext';
import styled from 'styled-components';

const Profile = () => {
   const { user, showAlert, displayAlert, updateUser, isLoading } =
      useAppContext();
   const [name, setName] = useState(user?.name);
   const [email, setEmail] = useState(user?.email);
   const [lastName, setLastName] = useState(user?.lastName);
   const [location, setLocation] = useState(user?.location);

   const handleSubmit = e => {
      e.preventDefault();

      if (!name || !email || !lastName || !location) {
         displayAlert();
         // 👇    ⭐⭐⭐ para q no siga con el updateUser
         return;
      }

      updateUser({ name, email, lastName, location });
   };

   return (
      <Wrapper>
         <form className="form" onSubmit={handleSubmit}>
            <h3>perfil </h3>
            {showAlert && <Alert />}

            {/* name */}
            <div className="form-center">
               <FormRow
                  labelText="nombre"
                  type="text"
                  name="name"
                  value={name}
                  handleChange={e => setName(e.target.value)}
               />
               <FormRow
                  labelText="apellido"
                  type="text"
                  name="lastName"
                  value={lastName}
                  handleChange={e => setLastName(e.target.value)}
               />
               <FormRow
                  labelText="correo"
                  type="email"
                  name="email"
                  value={email}
                  handleChange={e => setEmail(e.target.value)}
               />

               <FormRow
                  labelText="ubicación"
                  type="text"
                  name="location"
                  value={location}
                  handleChange={e => setLocation(e.target.value)}
               />

               <button
                  className="btn btn-block"
                  type="submit"
                  disabled={isLoading}
               >
                  {isLoading ? 'Actualizando...' : 'Guardar cambios'}
               </button>
            </div>
         </form>
      </Wrapper>
   );
};

export default Profile;

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
   .btn-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 1rem;
      align-self: flex-end;
      margin-top: 0.5rem;
      button {
         height: 35px;
      }
   }
   .clear-btn {
      background: var(--grey-500);
   }
   .clear-btn:hover {
      background: var(--black);
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
      .form-center {
         grid-template-columns: 1fr 1fr 1fr;
      }
      .form-center button {
         margin-top: 0;
      }
   }
`;
