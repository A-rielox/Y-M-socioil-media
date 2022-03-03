import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Landing, Register, Error /* ProtectedRoute  */ } from './pages';
// import {
//    AddRecipe,
//    AllRecipes,
//    Profile,
//    SharedLayout,
//    Stats,
// } from './pages/dashboard';

/* 


v36
r621


*/

function App() {
   return (
      <BrowserRouter>
         <nav>
            <Link to="/">&nbsp;&nbsp;&nbsp;Dashboard &nbsp;&nbsp;&nbsp;</Link>
            <Link to="/register">Register&nbsp;&nbsp;&nbsp;</Link>
            <Link to="/landing">Home</Link>
         </nav>

         <Routes>
            {/* <Route path="all-recipes" element={<AllRecipes />} /> */}
            {/* <Route path="add-recipe" element={<AddRecipe />} /> */}
            {/* <Route path="profile" element={<Profile />} /> */}

            <Route path="/" element={<div>Dashboard</div>} />
            <Route path="/register" element={<Register />} />

            <Route path="/landing" element={<Landing />} />

            <Route path="*" element={<Error />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
