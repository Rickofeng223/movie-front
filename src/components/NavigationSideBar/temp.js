// // file of old nav just for ref
//
// <nav className={`navbar navbar-expand-lg navbar-dark bg-primary`}>
//     <div className={`container-fluid`}>
//         <Link className={`navbar-brand`} to={"/home"}>
//             Movie Group Project
//         </Link>
//         <button
//             className={`navbar-toggler`}
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarColor01"
//             aria-controls="navbarColor01"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//         >
//             <span className={`navbar-toggler-icon`}/>
//         </button>
//
//         <div className={`collapse navbar-collapse`} id="navbarColor01">
//             <ul className={`navbar-nav me-auto`}>
//                 <li className={`nav-item `}>
//                     <Link to={"/home"} className={`nav-link `}>
//                         Home
//                     </Link>
//                 </li>
//                 <li className={`nav-item`}>
//                     <Link className={`nav-link`} to="/home/profile">
//                         Profile
//                     </Link>
//                 </li>
//                 {(!user) && <li className={`nav-item`}>
//                     <Link className={`nav-link`} to="/login">
//                         Login
//                     </Link>
//                 </li>}
//             </ul>
//             <form className={`d-flex`}>
//                 <input
//                     className={`form-control me-sm-2`}
//                     type="text"
//                     placeholder="Search Movies"
//                     //ref={searchRef}
//                     onChange={(x) => setInputMovie(x.target.value)}
//                     value={inputMovie}
//                 />
//                 <Link to={`/home/search/${inputMovie}`}>
//                     <button
//                         className={`btn btn-secondary my-2 my-sm-0`}
//                         type="submit"
//                         onClick={handleSearch}
//                     >
//                         Search
//                     </button>
//                 </Link>
//             </form>
//         </div>
//     </div>
// </nav>
