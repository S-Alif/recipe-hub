import {useParams} from "react-router";
import {useEffect, useState} from "react";
import useQueryParams from "../hooks/useQueryParams.jsx";
import apiHandler from "../utils/api-handler.js";
import SectionTitle from "../components/SectionTitle.jsx";
import DisplayRecipeCards from "../components/DisplayRecipeCards.jsx";
import Pagination from "../components/Pagination.jsx";
import apiRoutes from "../constants/api-constants.js";

const RecipeByMealType = () => {
    
    // get the tag
    const {mealType} = useParams()
    
    const [recipes, setRecipes] = useState([])
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(true)
    const limit = 8
    
    // search params
    const {page = "1", sort = "newest", setNewSearchParams} = useQueryParams()
    
    // fetch recipes
    const fetchRecipes = async () => {
        // add the params
        let sortingParams = ""
        if(sort == "popular"){
            sortingParams = "&sortBy=reviewCount&order=desc"
        }
        if(sort == "highRated"){
            sortingParams = "&sortBy=rating&order=desc"
        }
        
        setLoading(true) // start loader
        
        const data = await apiHandler(
            `${apiRoutes.recipeByMealType}/${mealType}?limit=${limit}&skip=${(page-1) * limit}${sortingParams}`,
            "GET"
        )
        if(data){
            setRecipes(data.recipes)
            setTotal(data.total)
        }
        setLoading(false)
    }
    
    // load the first data
    useEffect(() => {
        fetchRecipes()
    }, [page, sort, mealType])
    
    return (
        <section className={"page-section"} id={"recipe-by-tag"}>
            <section className={"section-layout"}>
                <div className="container">
                    <SectionTitle text={`Meal type - ${mealType}`}/>
                    
                    {/*selecting options*/}
                    <div className="controls pt-3 mb-3">
                        <select
                            id="select-option"
                            value={sort}
                            onChange={async (e) => {
                                setNewSearchParams("sort", e.target.value)
                                if (page != "1") {
                                    return setNewSearchParams("page", "1")
                                }
                            }}
                            className={"select-sort-option"}
                        >
                            <option value="newest">Newest</option>
                            <option value="popular">Popular</option>
                            <option value="highRated">Highest Rated</option>
                        </select>
                    </div>
                    
                    <DisplayRecipeCards recipes={recipes} showSeeMoreBtn={false} loading={loading}/>
                    
                    {/*pagination*/}
                    <Pagination
                        currentPage={parseInt(page)}
                        limit={limit}
                        total={total}
                        setPage={(e) => {
                            setNewSearchParams("page", e)
                        }}
                        loading={loading}
                    />
                </div>
            </section>
        </section>
    )
}

export default RecipeByMealType