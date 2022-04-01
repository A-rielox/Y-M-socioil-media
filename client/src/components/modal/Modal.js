import { motion } from 'framer-motion';
import DisplayedRecipe from './DisplayedRecipe';
import Backdrop from './Backdrop';

const Modal = ({ handleClose, recipeOpened, layoutId }) => {
   console.log(recipeOpened);

   return (
      <Backdrop onClick={handleClose}>
         <motion.div
            layoutId={layoutId}
            onClick={e => e.stopPropagation()}
            className="modal"
         >
            <DisplayedRecipe
               // layoutId={layoutId}
               {...recipeOpened} /* openModal={open} */
            />
            <button onClick={handleClose}>Close</button>
         </motion.div>
      </Backdrop>
   );
};

export default Modal;
