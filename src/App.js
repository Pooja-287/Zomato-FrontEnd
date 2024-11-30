
// // Import Home component
// import Header from './components/filter/Header';
// import Home from './components/home/Home';

// import FilterOption from './components/filter/FilterOption';

// function App() {
//   return (
//     <>
//     <main className = 'container-fluid'>
//      <Home/>
//      <Header/>
//      <FilterOption/>
//     </main>
//     </>
//   );
// }

// export default App;







import { Route, Routes,} from "react-router-dom";
import QuickSearch from "./components/filter/QuickSearch";
import Home from "./components/home/Home";
import Restaurant from "./components/restaurant/Restaurant";



function App() {
  return (
    <>
      <main className="container-fluid">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quick-search/:meal_id" element={<QuickSearch />} />
          <Route path="/restaurant/:id" element={<Restaurant/>} />
        
        </Routes>
        {/* <Home/>
        <QuickSearch/> */}
      </main>
    </>
  );
}

export default App;




