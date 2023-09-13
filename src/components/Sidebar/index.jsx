import yoga from './../../assets/icons/yoga.png'
import natation from './../../assets/icons/natation.png'
import bike from './../../assets/icons/bike.png'
import muscu from './../../assets/icons/muscu.png'
import './Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_menu">
                <a href="#noUse" className="sidebar_menu-item">
                    <img src={yoga} alt="yoga" className='menu-img'/>
                </a>
                <a href="#noUse" className="sidebar_menu-item">
                    <img src={natation} alt="natation" className='menu-img'/>
                </a>
                <a href="#noUse" className="sidebar_menu-item">
                    <img src={bike} alt="bike" className='menu-img'/>
                </a>
                <a href="#noUse" className="sidebar_menu-item">
                    <img src={muscu} alt="muscu" className='menu-img'/>
                </a>
            </div>
            <p className='copyright'>Copyright, SportSee 2020</p>
        </div>
    );
};

export default Sidebar;