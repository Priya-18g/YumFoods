import { restaurants } from '../../Data/Resturant';
import ExploreSection from '../Common/Explore Section/ExploreSection';
import Filter from '../Common/Filter/Filter';
import './Delivery.css'
import DeliveryCollection from './DeliveryCollections/DeliveryCollection';
import TopBrands from './DeliveryCollections/TopBrands/TopBrands';

let deliveryFilters = [
    {
        id:1,
        icon:<i className="fi fi-rr-settings-sliders absolute-center"></i>,
        title:"Filter"
    },
    {
        id:2,
        title:"Safe and Hygenic"
    },
    {
        id:3,
        title:"Pure Veg"
    },
    {
        id:4,
        title:"Rating 4.0+"
    },
    {
        id:5,
        icon:<i className="fi fi-rr-apps-sort absolute-center"></i>,
        title:"Delivery Time"
    },
    {
        id:6,
        title:"Great Offers"
    },
];

let resturantList = restaurants;
export default function Delivery(){
    return(
        <>
            <div className="max-width">
                <Filter filterList={deliveryFilters} />
            </div>
            <DeliveryCollection/>
            <TopBrands />
            <ExploreSection  list = {resturantList} collectionName="Delivery Resturants in Bhopal"/>
        </>
    );
}