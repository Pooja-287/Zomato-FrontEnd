import { useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';


function MealTypeList(){
  //instance of navigate
  let navigate = useNavigate();

  let [mealList, setMealList] = useState([]); //mealList=> [] #1

  let getMenuListFromServer = async()=>{
    let url='http://localhost:3000/api/get-MealType-list';
    let { data } = await axios.get(url); //#3
    // console.log(data.meal_types);

    setMealList(data.meal_types); // #4[...data.meal_types] => recreate a memory
  }; 
  console.log(mealList);

  useEffect(() => {
    getMenuListFromServer(); //#2
  }, []);


    return<>
          {/* #2 */}
       <section className="quick-search">
            <h1 className ="quick-search-title">Quick Searches</h1>
            <p className = "quick-search-desc">Discover restaurants by type of meal</p>
            <section className="quick-search-items">
            {
                mealList.map((meal,index)=> {
                  return(
              <section key={meal._id} className=" quick-search-item"
                onClick={() => navigate('/quick-search/' + meal.meal_type)}
              >
               
                <section className="quick-search-item-image">
                <img
                 src={"/Images/" + meal.image }
                 alt=""
                 className='image-item'
                 /> 
               </section>
                <div className="quick-search-item-desc">
                    <p className='text-navy'>{meal.name}</p>
                    <span className='small text-muted' >{meal.content}</span>
                </div>
                </section>
            
                ) 
              })

            } 
        </section>
        </section>
    </>
}

export default MealTypeList;




