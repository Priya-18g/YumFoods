import './ExploreCard.css'
export default function ExploreCard({ resturants }) {
    let name = resturants?.info?.name ?? "";
    let coverImage = resturants?.info?.image?.url;
    let deliveryTime = resturants?.order?.deliveryTime;
    let rating = resturants?.info?.rating?.rating_text;
    let approxPrice = resturants?.info?.cfo?.text;
    let offers = resturants?.bulkOffers ?? [];
    let cuisines = resturants?.info?.cuisine?.map((item) => item.name).slice(0, 3);
    let bottomContainers = resturants?.bottomContainers;
    let goldOff = resturants?.gold?.text;
    let proOff = offers.length > 1 ? offers[0]?.text : null;
    let discount = offers.length > 1 ? offers[1]?.text : offers.length == 1 ? offers[0]?.text : null;


    return (
        <>
            <div className="explore-card cursor">
                <div className="explore-card-cover">
                    <img src={coverImage} alt="Card Image" className='explore-card-image' />
                    <div className="delivery-time"> {deliveryTime} </div>
                    {proOff && <div className='pro-off absolute-center' > {proOff} </div>}
                    {goldOff && <div className='gold-off absolute-center' > {goldOff} </div>}
                    {discount && <div className='discount absolute-center'>{discount} </div>}
                </div>

                <div className="resturant-row">
                    <div className="resturant-name">
                        {name}
                    </div>
                    <div className="resturant-rating absolute-center">
                        {rating && <div><i className="fi fi-rr-star-sharp-half-stroke absolute-center"></i> {rating} </div>   }
                    </div>

                </div>
                <div className="resturant-row">
                    {cuisines.length && (
                        <div className='resturant-cuisine'>
                            {cuisines.map((item, i) => {
                                return (
                                    <span className='res-cuisine-tag'>{
                                        item}{i !== cuisines.length - 1 && ","}
                                    </span>
                                );

                            })}
                        </div>
                    )}
                    {approxPrice && <div className='resturant-price'>{approxPrice} </div>}
                </div>
                {bottomContainers.length > 0 && <div>
                    <div className='card-seperator'></div>
                    <div className="explore-bottom">
                        <img src={bottomContainers[0]?.image?.url} alt={bottomContainers[0].text} style={{ height: "18px" }} />
                        <div className="resturant-bottom-text">
                            {bottomContainers[0]?.text}
                        </div>
                    </div>
                </div>}

            </div>
        </>
    );
}