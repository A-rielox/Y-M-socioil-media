import { useEffect, useState } from 'react';
import Loading from './Loading';

import { FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import moment from 'moment';
import RecipeInfo from './RecipeInfo';
import styled from 'styled-components';

// category: "malestares"
// createdAt: "2022-03-28T03:30:41.586Z"
// createdBy: "622f5b68b8796847b28a315f"
// desc: "<h2>titulo 1</h2> ... 4 gotas de crema</li></ul>"
// title: "titulo desde front 1"
// updatedAt: "2022-03-28T03:30:41.586Z"
// __v: 0
// _id: "62412be1794a849b90d3ccb0"

const Blog = ({ _id, title, desc, category, createdAt, createdBy }) => {
   const { /* setEditRecipe, */ /* deleteRecipe, */ user /* authFetch */ } =
      useAppContext();

   // const [recipeUser, setRecipeUser] = useState(null);

   // useEffect(() => {
   // const fetchUser = async () => {
   // const {
   // data: { queryUser },
   // } = await authFetch.get(`/auth/getUser?userId=${createdBy}`);
   //
   // setRecipeUser(queryUser);
   // };
   //
   // fetchUser();
   // }, [_id]);

   // if (!recipeUser) {
   // return <Loading center />;
   // }

   // arreglo para class del color del nivel
   // let colorLevel = recipeUser.level.split(' ');
   // colorLevel = colorLevel[colorLevel.length - 1];

   // arreglo del string del nivel
   // const newStr = recipeUser.level.split(' ');
   // let levelToDisplay = [];
   // for (let i = 0; i < 3; i++) {
   // if (i === 0) {
   // levelToDisplay.push(newStr[i]);
   // } else if (i === 1) {
   // if (newStr[i]) {
   // levelToDisplay.push(` ${newStr[i][0]}.`);
   // }
   // } else if (i === 2) {
   // if (newStr[i]) {
   // levelToDisplay.push(` ${newStr[i][0]}.`);
   // }
   // }
   // }
   // levelToDisplay = levelToDisplay.join('');

   // arreglo para nombre a desplegar red red pendiente cortar a 1er nombre red red

   // fecha a despegar
   let date = moment(createdAt);
   date = date.format('MMM, YYYY');

   return (
      <Wrapper>
         <header>
            <div className="info">
               <h5>{title}</h5>

               <ul className="ulListProblem">
                  <li># {category}</li>
               </ul>
            </div>
         </header>

         <div className="content">
            <div className="content-center">{desc}</div>

            <footer>
               <div className="actions">
                  {user._id === createdBy ? (
                     <Link
                        to="/add-blog"
                        // onClick={() => setEditRecipe(_id)}
                        onClick={() => console.log('editar ', _id)}
                        className="btn edit-btn"
                     >
                        editar
                     </Link>
                  ) : (
                     <button type="button" className={`btn btn-user`}>
                        {/* {recipeUser.name} */}
                        nombre autor
                     </button>
                  )}
                  {user._id === createdBy ? (
                     <button
                        type="button"
                        className="btn delete-btn"
                        // onClick={() => deleteRecipe(_id)}
                        onClick={() => console.log('borrar ', _id)}
                     >
                        borrar
                     </button>
                  ) : (
                     <button
                        type="button"
                        // className={`btn status ${colorLevel}`}
                        className={`btn status platino`}
                     >
                        {/* {levelToDisplay} */}
                        nivel autor
                     </button>
                  )}

                  {/* <div className={`status ${status}`}>{status}</div> */}
               </div>

               <RecipeInfo icon={<FaCalendarAlt />} text={date} />
            </footer>
         </div>
      </Wrapper>
   );

   /* return (
      <Wrapper>
         <header>
            ...
         </header>

         <div className="content">
            <div className="content-center">
               ...
            </div>

            <footer>
               <div className="actions">
                  {user._id === createdBy ? (
                     <Link
                        to="/add-recipe"
                        onClick={() => setEditRecipe(_id)}
                        className="btn edit-btn"
                     >
                        editar
                     </Link>
                  ) : (
                     <button type="button" className={`btn btn-user`}>
                        {recipeUser.name}
                     </button>
                  )}
                  {user._id === createdBy ? (
                     <button
                        type="button"
                        className="btn delete-btn"
                        onClick={() => deleteRecipe(_id)}
                     >
                        borrar
                     </button>
                  ) : (
                     <button
                        type="button"
                        className={`btn status ${colorLevel}`}
                     >
                        {levelToDisplay}
                     </button>
                  )}

                  
               </div>

               <RecipeInfo icon={<FaCalendarAlt />} text={date} />
            </footer>
         </div>
      </Wrapper>
   ); */
};

export default Blog;

const Wrapper = styled.article`
   background: var(--white);
   border-radius: var(--borderRadius);
   display: grid;
   grid-template-rows: 100px auto;

   box-shadow: var(--shadow-2);

   header {
      padding: 1rem 1.5rem;
      border-bottom: 1px solid var(--grey-100);
      display: grid;
      align-items: center;
      height: 100px;
      h5 {
         letter-spacing: 0;
      }
   }

   .info {
      h5 {
         margin-bottom: 0.25rem;
      }
   }
   .ulListProblem {
      margin: 0 20px;
      display: flex;
      justify-content: space-between;
      text-transform: capitalize;

      li {
         list-style-type: none;
         margin-top: 0.5rem;
         display: flex;
         align-items: center;
      }

      .icon {
         font-size: 0.7rem;
         margin-right: 0.5rem;
         color: var(--red-dark);
      }
   }
   .ulListOil {
      margin: 0 20px;
      /* display: flex;
      justify-content: space-between; */
      text-transform: capitalize;

      li {
         list-style-type: none;
         margin-top: 0.5rem;
         display: flex;
         align-items: center;
      }

      .icon {
         font-size: 0.7rem;
         margin-right: 0.5rem;
         color: #dfb33b;
      }
   }

   /* 
   distribuidor silver
   star		#b500ff
   senior star	#c900c9
   executive	#d70000
   silver		#a10000
   gold		#f3ff00
   platinum	#00f900
   diamond		#058210
   crown diamond	#3f15d0
   r.c. diamond	#6500a3
   */

   .distribuidor {
      background: rgba(191, 191, 191, 0.3);
      color: var(--textColor);
   }

   .estrella {
      background: rgba(181, 0, 255, 0.3);
      color: var(--textColor);
   }
   .mayor {
      background: rgba(201, 0, 201, 0.3);
      color: var(--textColor);
   }
   .ejecutivo {
      color: var(--textColor);
      background: rgba(215, 0, 0, 0.3);
   }
   .plata {
      color: var(--textColor);
      background: rgba(161, 0, 0, 0.3);
   }
   .oro {
      color: var(--textColor);
      background: rgba(243, 255, 0, 0.3);
   }
   .platino {
      color: var(--textColor);
      background: rgba(0, 249, 0, 0.3);
   }
   .diamante {
      color: var(--textColor);
      background: rgba(5, 130, 16, 0.3);
   }
   .corona {
      color: var(--textColor);
      background: rgba(63, 21, 208, 0.3);
   }
   .real {
      color: var(--textColor);
      background: rgba(101, 0, 163, 0.3);
   }

   .content {
      padding: 1rem 1.5rem;
      display: grid;
      grid-template-rows: 1fr auto;
   }
   .content-center {
      display: grid;
      align-content: start;
      grid-template-columns: 1fr;
      row-gap: 0.5rem;
      border-bottom: 1px solid var(--grey-100);
      @media (min-width: 576px) {
         grid-template-columns: 1fr 1fr;
      }
      @media (min-width: 992px) {
         grid-template-columns: 1fr;

         .btn:first-child {
            margin-bottom: 10px;
         }
      }
      @media (min-width: 1120px) {
         grid-template-columns: 1fr 1fr;
      }
   }

   .status {
      border-radius: var(--borderRadius);
      text-transform: capitalize;
      letter-spacing: var(--letterSpacing);
      text-align: center;
      width: auto;
      height: 30px;
      font-size: 0.8rem;

      margin-left: 0.5rem;
   }

   .actions {
      .btn-user {
         font-size: 0.8rem;
         /* margin-left: 0.5rem; */
         font-weight: bold;
      }
   }

   footer {
      margin-top: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
   }
   .edit-btn,
   .delete-btn {
      letter-spacing: var(--letterSpacing);
      cursor: pointer;
      height: 30px;
      font-size: 0.8rem;
   }
   .edit-btn {
      color: var(--green-dark);
      background: var(--green-light);
      margin-right: 0.5rem;
   }
   .delete-btn {
      color: var(--red-dark);
      background: var(--red-light);
   }
   &:hover .actions {
      visibility: visible;
   }
`;
