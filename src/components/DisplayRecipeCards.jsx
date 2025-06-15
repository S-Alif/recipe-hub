import RecipeCard from "./cards/RecipeCard.jsx";
import {Link} from "react-router";

const DisplayRecipeCards = ({ recipes = [] }) => {
    return (
        <>
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-3"
            >
                {recipes.map((recipe, index) => (<RecipeCard item={recipe} key={index}/>))}
                {
                    recipes.length == 0 &&
                    <p className={"fw-bold"} style={{fontSize: "1.2rem"}}>No Recipe found</p>
                }
            </div>
            {
                recipes.length > 0 &&
                <div className={"text-center pt-3"}>
                    <Link to={"/recipe-list"} className={"btn link bg-green"}>See more</Link>
                </div>
            }
        </>)
}

export default DisplayRecipeCards