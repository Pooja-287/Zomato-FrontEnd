// import { useNavigate } from "react-router-dom";

// function RestaurantList(props) {
//   let {restaurantList} = props;
//   let navigate = useNavigate()
//   return (
//     <>
//       {/* <!-- search result --> */}
//       <div className="col-12 col-lg-8 col-md-7">
//         {restaurantList.length === 0?(<div
//         className="col-12 food-shadow p-4 mb-4"
//         >No restaurant Found 
//         </div>
//         ):(
//           <>
//    {
//      restaurantList.map((restaurants,index)=> {
// return (
//        <div
//          onClick={() => navigate('/restaurant/' + restaurants._id)}
//         key={index} 
//         className="col-12 food-shadow p-4 mb-4"
//         >
//           <div className="d-flex align-items-center">
//             <img 
//             src={"/images/" + restaurants.image }
//              className="food-item" alt=""
//                />
//             <div className="ms-5">
//               <p className="h4 fw-bold">{restaurants.name}</p>
//               <span className="fw-bold text-muted">FORT</span>
//               <p className="m-0 text-muted">
//                 <i
//                   className="fa fa-map-marker fa-2x text-danger"
//                   aria-hidden="true"
//                 ></i>
//               {restaurants.locality}, {restaurants.city}
//               </p>
//             </div>
//           </div>
//           <hr />
//           <div className="d-flex">
//             <div>
//               <p className="m-0">CUISINES:</p>
//               <p className="m-0">COST FOR TWO:</p>
//             </div>
//             <div className="ms-5">
//               <p className="m-0 fw-bold">
//                 {
//                   restaurants.cuisine.reduce((pValue, cValue) => {
//                   let value; 
//                   if (pValue === "" ){
//                   value = cValue.name;
//                   }else {
//                    value = pValue +', ' + cValue.name;
//                   }
//                     return value;
//                 }, "")
//               }
//               </p>
//               <p className="m-0 fw-bold">
//                 <i className="fa fa-inr" aria-hidden="true"></i> 
//                 {restaurants.min_price}
//               </p>
//             </div>
//           </div>
//         </div>
//   );})
// }
      
//         <div className="col-12 pagination d-flex justify-content-center">
//           <ul className="pages">
//             <li>&lt;</li>
//             <li className="active">1</li>
//             <li>2</li>
//             <li>3</li>
//             <li>4</li>
//             <li>&gt;</li>
//           </ul>
//         </div>
//         </>
//         )}
//       </div>
//     </>
//   );
// }

// export default RestaurantList;









import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "../common/Pagination"; // Import the Pagination component

function RestaurantList({ restaurantList }) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4; // Number of restaurants per page
  const navigate = useNavigate();

  // Calculate the index of the first and last restaurant on the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = restaurantList.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      {/* Search result */}
      <div className="col-12 col-lg-8 col-md-7">
        {restaurantList.length === 0 ? (
          <div className="col-12 food-shadow p-4 mb-4">
            No restaurant found
          </div>
        ) : (
          <>
            {currentPosts.map((restaurant, index) => {
              return (
                <div
                  onClick={() => navigate('/restaurant/' + restaurant._id)}
                  key={index}
                  className="col-12 food-shadow p-4 mb-4"
                >
                  <div className="d-flex align-items-center">
                    <img
                      src={"/images/" + restaurant.image}
                      className="food-item"
                      alt=""
                    />
                    <div className="ms-5">
                      <p className="h4 fw-bold">{restaurant.name}</p>
                      <span className="fw-bold text-muted">FORT</span>
                      <p className="m-0 text-muted">
                        <i
                          className="fa fa-map-marker fa-2x text-danger"
                          aria-hidden="true"
                        ></i>
                        {restaurant.locality}, {restaurant.city}
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex">
                    <div>
                      <p className="m-0">CUISINES:</p>
                      <p className="m-0">COST FOR TWO:</p>
                    </div>
                    <div className="ms-5">
                      <p className="m-0 fw-bold">
                        {
                          restaurant.cuisine.reduce((pValue, cValue) => {
                            let value;
                            if (pValue === "") {
                              value = cValue.name;
                            } else {
                              value = pValue + ", " + cValue.name;
                            }
                            return value;
                          }, "")
                        }
                      </p>
                      <p className="m-0 fw-bold">
                        <i className="fa fa-inr" aria-hidden="true"></i>
                        {restaurant.min_price}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Pagination */}
            <div className="col-12 pagination d-flex justify-content-center">
              <Pagination
                totalPosts={restaurantList.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default RestaurantList;
