import { LogoBig } from '../components';
import { Link } from 'react-router-dom';

import fondo from '../assets/images/fondo2.svg';
import styled from 'styled-components';

const Landing = () => {
   return (
      <Wrapper>
         <nav>
            <LogoBig />
         </nav>

         <div className="container page">
            <div className="info">
               <h1>
                  soci<span>oil</span> media
               </h1>
               <p>
                  Tus recetas, posts y el estilo de vida que estabas buscando.
               </p>

               <Link to="/register" className="btn btn-hero">
                  Login / Registro
               </Link>
            </div>

            <img
               src={fondo}
               alt="fondo de la página"
               className="img main-img"
            />
         </div>
      </Wrapper>
   );
};

export default Landing;

const Wrapper = styled.main`
   nav {
      width: var(--fluid-width);
      max-width: var(--max-width);
      margin: 0 auto;
      height: var(--nav-height);
      display: flex;
      align-items: center;
   }
   .page {
      min-height: calc(100vh - var(--nav-height));
      display: grid;
      align-items: center;
      margin-top: -3rem;
   }
   h1 {
      font-weight: 700;
      span {
         color: var(--primary-500);
      }
   }
   p {
      color: var(--grey-600);
   }
   .main-img {
      display: none;
   }
   .logo {
      max-width: 25vh;
      position: absolute;
      top: 10vh;
   }
   @media (min-width: 992px) {
      .page {
         grid-template-columns: 1fr 1fr;
         column-gap: 3rem;
      }
      .main-img {
         display: block;
      }
   }
`;
