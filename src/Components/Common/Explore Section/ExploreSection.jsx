import ExploreCard from "./ExploreCard/ExploreCard";
import './ExploreSection.css'
export default function ExploreSection({list,collectionName}){
    return(
        <>
            <div className="max-width explore-section">
                <div className="collection-title"> {collectionName} </div>
                <div className="explore-grid">
                    {list.map((resturant)=>{
                        return <ExploreCard resturants={resturant} />;
                    })}
                </div>
            </div>
        </>
    );
}