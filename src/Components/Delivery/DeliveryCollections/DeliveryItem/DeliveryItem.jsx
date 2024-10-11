import './DeliveryItem.css'
export default function DeliveryItem({ item }) {
    return (
        <>
            <div className="cover-frame">
                <div className="delivery-item-cover">
                    <img src={item.cover} alt="Item-Image" className='delivery-item-image' />

                </div>
                <div className="delivery-item-title">
                    {item.title}
                </div>
            </div>


        </>
    );
}