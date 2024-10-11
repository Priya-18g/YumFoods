import Slider from 'react-slick'
import NextArrow from '../Carousel/NextArrow';
import PrevArrow from '../Carousel/PrevArrow';
import './Collection.css'
import CollectionItem from './CollectionItem/CollectionItem';
let collectionList = [
    {
        id: 1,
        title: "9 Great Cafes",
        cover: "https://b.zmtcdn.com/data/collections/61d06b1dc0a478a6216bcf07ff8b2d67_1686730150.jpg",
        places: "9 places"
    },
    {
        id: 2,
        title: "16 Best Luxury Dining Places",
        cover: "https://b.zmtcdn.com/data/collections/a1e31eb92bb9951aaf1750d88497adb4_1686729607.jpg",
        places: "16 places"
    },
    {
        id: 3,
        title: "10 Best Bars and Pubs",
        cover: "https://b.zmtcdn.com/data/collections/21ebc8e2867c6917de5b0eb1aae8174e_1686727622.jpg",
        places: "10 places"
    },
    {
        id: 4,
        title: "10 Senere Rooftop places",
        cover: "https://b.zmtcdn.com/data/collections/293255cbfe49f4ebdb244c1bfc3a0f74_1686806499.jpg",
        places: "12 places"
    },
    {
        id: 5,
        title: "6 Local Favorites",
        cover: "https://b.zmtcdn.com/data/collections/92aaa9b449d0e05e0d118b5a0fa8fadd_1682856493.png",
        places: "6 places"
    },
    {
        id: 6,
        title: "Trending this week",
        cover: "https://b.zmtcdn.com/data/collections/61d06b1dc0a478a6216bcf07ff8b2d67_1686730150.jpg",
        places: "12 places"
    },
    {
        id: 7,
        title: "Trending this week",
        cover: "https://b.zmtcdn.com/data/collections/61d06b1dc0a478a6216bcf07ff8b2d67_1686730150.jpg",
        places: "12 places"
    },
    {
        id: 8,
        title: "Trending this week",
        cover: "https://b.zmtcdn.com/data/collections/61d06b1dc0a478a6216bcf07ff8b2d67_1686730150.jpg",
        places: "12 places"
    },
    {
        id: 9,
        title: "Trending this week",
        cover: "https://b.zmtcdn.com/data/collections/61d06b1dc0a478a6216bcf07ff8b2d67_1686730150.jpg",
        places: "12 places"
    },
    {
        id: 10,
        title: "Trending this week",
        cover: "https://b.zmtcdn.com/data/collections/61d06b1dc0a478a6216bcf07ff8b2d67_1686730150.jpg",
        places: "12 places"
    },
    {
        id: 11,
        title: "Trending this week",
        cover: "https://b.zmtcdn.com/data/collections/61d06b1dc0a478a6216bcf07ff8b2d67_1686730150.jpg",
        places: "12 places"
    },
    {
        id: 12,
        title: "Trending this week",
        cover: "https://b.zmtcdn.com/data/collections/61d06b1dc0a478a6216bcf07ff8b2d67_1686730150.jpg",
        places: "12 places"
    },
    {
        id: 13,
        title: "Trending this week",
        cover: "https://b.zmtcdn.com/data/collections/61d06b1dc0a478a6216bcf07ff8b2d67_1686730150.jpg",
        places: "12 places"
    },

];


export default function Collection() {
    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return (
        <>
            <div className="collection-wraper">
                <div className="max-width collection">
                    <div className='collection-title'>Collections</div>
                    <div className="collection-subtitle-row">
                        <div className="collection-subtitle-text">
                            Explore curated lists of top restaurants, cafes, pubs, and bars in Bhopal, based on trends
                        </div>

                        <div className="collection-location">
                            All Collections in Bhopal <i className="fi fi-rr-caret-right absolute-center"></i>
                        </div>
                    </div>

                    <Slider {...settings}>
                        {collectionList.map((item) => {
                            return (<CollectionItem list={item} />)


                        })}
                    </Slider>
                </div>
            </div>
        </>
    )
}