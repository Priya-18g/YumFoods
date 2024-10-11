import './CollectionItem.css'
export default function CollectionItem({ list }) {
    return (
        <>
            <div className='collection-cover'>
                <img src={list.cover} alt={list.title} className='collection-cover-image' />
                <div className="gradient-bg">
                    <div className='collection-card-title'>{list.title} </div>
                    <div className="collection-card-subtitle">
                        <div>{list.places} </div>
                        <i className="fi fi-rr-caret-right absolute-center "></i>
                    </div>
                </div>
            </div>
        </>
    )
}