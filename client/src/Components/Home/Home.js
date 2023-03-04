import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Home.css";
import {
  getAllRecipes,
  getRecipesByDiet,
  getRecipesOrdered,
} from "../../Redux/Actions";
import Pages from "../Paging/Pages";
import Receta from "../Recipe/Recipe";
import Filter from "../Filter/Filter";
import Ordering from "../Ordering/Ordering";
import Loader from "../Loader/Loader";

const Home = (props) => {
  const [indexPage, setIndexPage] = useState(0);
  const [currRecipe, setCurrRecipe] = useState([]);
  const [currDiet, setCurrDiet] = useState("allDiets");
  const [order, setOrder] = useState({
    typeOrder: "",
    wayOrder: "asc",
  });
  const [numCallOrder, setNumCallOrder] = useState(0);

  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  let until = indexPage * 9 + 9;

  // ---------------------------------MANEJADORES DE EVENTO-------------------------------------
  props.inputEvent(setIndexPage);
  const nextPageHandler = () => {
    until < recipes.length && setIndexPage((index) => index + 1);
  };
  const prevPageHandler = () => {
    indexPage > 0 && setIndexPage((index) => index - 1);
  };
  const handlerChangeFilter = (e) => {
    const value = e.target.value;
    setIndexPage((index) => (index = 0));
    setCurrDiet((diet) => (diet = value));
    dispatch(getRecipesByDiet(value));
  };
  const handlerChangeOrder = (obj) => {
    setOrder((o) => (o = obj));
    setNumCallOrder((n) => n + 1);
  };
  // -----------------------------------------------------------------------------------------------
  useEffect(() => {
    if (!recipes.length) {
      dispatch(getAllRecipes());
    }
    Array.isArray(recipes) &&
      setCurrRecipe(() => recipes.slice(indexPage * 9, until));
    if (numCallOrder > 0) {
      if (order.typeOrder) {
        dispatch(getRecipesOrdered(recipes, order));
      } else if (!order.typeOrder) {
        if (currDiet === "allDiets") {
          dispatch(getAllRecipes());
        } else {
          dispatch(getRecipesByDiet(currDiet));
        }
      }
      setNumCallOrder((n) => (n = 0));
    }
  }, [indexPage, recipes, dispatch, until, currDiet, order, numCallOrder]);

  // *********************************************************************************

  return (
    <div className="containerHome">
      {!recipes.length && <Loader />}
      <hr className="hr" />

      {/* <h1 className='title'>Destacadas</h1> */}
      <div className="contentRecipesAndFilter">
        <div className="containOrderFilter">
          <Filter handlerCh={(e) => handlerChangeFilter(e)} />
          <Ordering changeOrder={handlerChangeOrder} />
        </div>
        <div className="contentRecipesAndPaging">
          <div className="divPages">
            <Pages
              handlerNext={nextPageHandler}
              handlerPrev={prevPageHandler}
              index={indexPage}
            />
          </div>
          <div className="contentRecipes">
            {Array.isArray(recipes)
              ? currRecipe.map((r, i) => {
                  return (
                    <Receta
                      name={r.name}
                      img={r.image}
                      diets={r.diets}
                      id={r.id}
                      key={i}
                    />
                  );
                })
              : recipes}
          </div>
          <div className="divPages">
            <Pages
              handlerNext={nextPageHandler}
              handlerPrev={prevPageHandler}
              index={indexPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
