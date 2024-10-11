import Collection from "../Common/Collection/Collection";
import ExploreSection from "../Common/Explore Section/ExploreSection";
import Filter from "../Common/Filter/Filter";
import { DiningOutData } from "../../Data/DiningOut";
let DiningFilters = [
    {
        id: 1,
        icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
        title: "Filter"
    },
    {
        id: 2,
        title: "Safe and Hygenic"
    },
    {
        id: 3,
        title: "Pure Veg"
    },
    {
        id: 4,
        title: "Rating 4.0+"
    },
    {
        id: 5,
        icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
        title: "Dining Time"
    },
    {
        id: 6,
        title: "Great Offers"
    },
];

let DiningList = DiningOutData;

export default function DiningOut() {
    return (
        <>
            <Collection />
            <div className="max-width">
                <Filter filterList={DiningFilters} />
            </div>
            <ExploreSection list={DiningList} collectionName="Trending dining restaurants in Bhopal" />

        </>
    );
}