import {Link} from "react-router"

const DisplayTags = ({tag}) => {
    return (
        <Link to={`/recipe-list/tag/${tag}`} className={"recipe-tags text-white fw-semi-bold"}>
            #{tag}
        </Link>
    )
}

// main recipe card
const RecipeCard = ({item}) => {
    return (
        <div className={"card"}>
            <div className="card-img mb-2">
                <img src={item?.image} alt={item?.name}/>
            </div>
            <div className="card-body">
                <div className="tags">
                    {
                        item?.tags.map((tag, index) => (
                            <DisplayTags tag={tag} key={index} />
                        ))
                    }
                </div>
                <h3>{item?.name}</h3>
            </div>
        </div>
    )
}

export default RecipeCard