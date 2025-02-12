import NextArrow from '../../Common/Carousel/NextArrow';
import PrevArrow from '../../Common/Carousel/PrevArrow';
import './DeliveryCollection.css'
import React, { Component } from "react";
import DeliveryItem from './DeliveryItem/DeliveryItem';
import Slider from "react-slick";


let DeliveryItems = [
    {
        id: 1,
        title: "Pizza",
        cover: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
    },
    {
        id: 2,
        title: "Biryani",
        cover: "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"
    },
    {
        id: 3,
        title: "Roll",
        cover: "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"
    },
    {
        id: 4,
        title: "Chicken",
        cover: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"
    },
    {
        id: 5,
        title: "Burgur",
        cover: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
    },
    {
        id: 6,
        title: "Noodles",
        cover: "https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png"
    },
    {
        id: 8,
        title: "Thali",
        cover: "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png"
    },
    {
        id: 9,
        title: "North Indian",
        cover: "https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg"
    },
    {
        id: 10,
        title: "Paratha",
        cover: "https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png"
    },
    {
        id: 12,
        title: "Cake",
        cover: "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png"
    },
    {
        id: 13,
        title: "Fried Rice",
        cover: "https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png"
    },
    {
        id: 14,
        title: "Momos",
        cover: "https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png"
    },
];

const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
};

export default function DeliveryCollection() {
    return (
        <>
            <div className="delivery-collection">
                <div className="max-width">
                    <div className='collection-title'>Eat What Makes You Happy</div>
                    <Slider {...settings} className='slider' >
                        {DeliveryItems.map((item) => {
                            return <DeliveryItem item={item} />;
                        })}
                    </Slider>
                </div>
            </div>

        </>
    );
}