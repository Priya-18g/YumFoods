import Collection from '../Common/Collection/Collection';
import './NightLife.css'
import Filter from '../Common/Filter/Filter';
import { NightLifeData } from '../../Data/NightLife';
import ExploreSection from '../Common/Explore Section/ExploreSection';
let NightLifeFilters = [
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

let NightLifeList = NightLifeData;
export default function NightLife() {
    return (
        <>
            <Collection />
            <div className="max-width">
                <Filter filterList={NightLifeFilters} />
            </div>

            <ExploreSection list={NightLifeList} collectionName="Nightlife Restaurants in Bhopal" />
        </>
    );
}
