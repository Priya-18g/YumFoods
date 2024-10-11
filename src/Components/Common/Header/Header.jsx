import './Header.css'
export default function Header() {
    return (
        <>
            <div className='max-width header'>
                <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="Zomato-Logo" className='header-logo' />
                <div className="header-right">
                    <div className="header-loacation-search-container">
                        <div className="location-wrapper">
                            <div className="location-icon-name">
                                <i className="fi fi-rr-marker absolute-center location-icon"></i>
                                <div>Banglore</div>
                            </div>

                            <i className="fi fi-rr-caret-down absolute-center caret-icon"></i>
                        </div>
                        <div className="location-search-separator"></div>
                        <div className="header-search-bar">
                            <i className="fi fi-rr-search absolute-center search-icon"></i>
                            <input type="text" placeholder='Search For Resturant, Cusine or a Dish' className='search-input' />
                        </div>
                    </div>
                </div>
                <div className="profile-wrapper">
                    <img src="https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" 
                    alt="Profile" className='header-profile-image' />

                    <span className='header-username'>Sumit</span>
                    <i className="fi fi-rr-angle-small-down absolte-center profile-arrow-icon"></i>
                </div>
            </div>
        </>
    );
};