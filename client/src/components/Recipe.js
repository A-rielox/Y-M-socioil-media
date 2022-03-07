import { FaCalendarAlt } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { BsFillDropletFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/appContext';

import moment from 'moment';
import RecipeInfo from './RecipeInfo';
import styled from 'styled-components';

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

const Recipe = ({ _id, oilsList, problemsList, title, desc, createdAt }) => {
   const {
      /* setEditJob, deleteJob */
   } = useAppContext();

   let date = moment(createdAt);
   date = date.format('MMM Do, YYYY');

   return (
      <Wrapper>
         <header>
            <div className="info">
               <h5>{title}</h5>

               <ul className="ulListProblem">
                  {problemsList.map((problem, index) => {
                     return (
                        <li key={index}>
                           <ImCross className="icon" />
                           {problem}
                        </li>
                     );
                  })}
               </ul>
            </div>
         </header>

         <div className="content">
            <div className="content-center">
               <ul className="ulListOil">
                  {oilsList.map((oil, index) => {
                     return (
                        <li key={index}>
                           <BsFillDropletFill className="icon" />
                           {oil}
                        </li>
                     );
                  })}
               </ul>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Necessitatibus quis, earum ipsa eveniet nulla ab placeat alias
                  maiores obcaecati autem!
               </p>
            </div>

            <footer>
               <div className="actions">
                  <Link
                     // to="/add-job"
                     to="/all-recipes"
                     // onClick={() => setEditJob(_id)}
                     onClick={() => console.log('editar')}
                     className="btn edit-btn"
                  >
                     autor 👍
                  </Link>
                  {/* <button
                     type="button"
                     className="btn delete-btn"
                     // onClick={() => deleteJob(_id)}
                     onClick={() => console.log('borrar')}
                  >
                     nivel
                  </button> */}
                  {/* <div className={`status ${status}`}>{status}</div> */}
                  <button type="button" className={`btn status silver`}>
                     silver
                  </button>
               </div>

               <RecipeInfo icon={<FaCalendarAlt />} text={date} />
            </footer>
         </div>
      </Wrapper>
   );
};

export default Recipe;

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
   .star {
      background: #b500ff;
      color: black;
   }
   .senior {
      background: #c900c9;
      color: black;
   }
   .executive {
      color: black;
      background: #d70000;
   }
   .silver {
      color: white;
      background: #a10000;
   }
   .gold {
      color: black;
      background: #f3ff00;
   }
   .platinum {
      color: black;
      background: #00f900;
   }
   .diamond {
      color: white;
      background: #058210;
   }
   .crown {
      color: black;
      background: #3f15d0;
   }
   .royal {
      color: black;
      background: #6500a3;
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
      width: 100px;
      height: 30px;
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
