import NextArrow from '../../../Common/Carousel/NextArrow';
import PrevArrow from '../../../Common/Carousel/PrevArrow';
import DeliveryItem from '../DeliveryItem/DeliveryItem';
import './TopBrands.css'
import Slider from 'react-slick';
let brandList = [
    {
        id: 1,
        time: '35 min',
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/f8eeab5b2de60c8b2f19c9d1015e32f9_1617972403.png'
    },
    {
        id: 2,
        time: '35 min',
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/304f7e8f12ed82f7aa1e23f076a43e65_1617972508.png'
    },

    {
        id: 3,
        time: '35 min',
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/5caf38856d23347b351bb7abf97134d3_1521806747.png'
    },
    {
        id: 4,
        time: '35 min',
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187753.png'
    },
    {
        id: 5,
        time: '35 min',
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/ddc425ee369b0169900fec2738bfff26_1592480548.png'
    },
    {
        id: 6,
        time: '35 min',
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/36a794295319f643d4ec60fd74773639_1618410875.png'
    },
    {
        id: 7,
        time: '35 min',
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png'
    },
    {
        id: 8,
        time: '35 min',
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/f8eeab5b2de60c8b2f19c9d1015e32f9_1617972403.png'
    },
    {
        id: 9,
        time: '35 min',
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/f8eeab5b2de60c8b2f19c9d1015e32f9_1617972403.png'
    },
];
export default function TopBrands() {
    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return (
        <>
            <div className="top-brands-slider">
                <div className="top-brands max-width">
                    <div className='collection-title'>Top Brands For You</div>
                    <Slider {...settings} className='slider' >
                        {brandList.map((brand) => {
                            return <DeliveryItem item={brand} />;
                        })}
                    </Slider>
                </div>
            </div>

        </>
    );
}