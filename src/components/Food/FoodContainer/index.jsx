import './FoodContainer.css';
import calorieIcon from '../../../assets/icons/calories-icon.png'
import proteinIcon from '../../../assets/icons/protein-icon.png'
import glucidIcon from '../../../assets/icons/carbs-icon.png'
import lipidIcon from '../../../assets/icons/fat-icon.png'


function FoodContainer(props) {

    return (
        <div className="foodContainer">
            <div className='foodElementContainer calorieContainer'>
                <div className='foodIcoContainer'>
                    <img className='foodIconElement' src={calorieIcon} alt="Calorie Icon" />
                </div>
                <div className='foodTextContainer'>
                    <p className='foodValue'>{props.data.calorieCount} kCal</p>
                    <p className='foodType'>Calories</p>
                </div>
            </div>
            <div className='foodElementContainer proteinContainer'>
                <div className='foodIcoContainer'>
                    <img className='foodIconElement' src={proteinIcon} alt="Protéines Icon" />
                </div>
                <div className='foodTextContainer'>
                    <p className='foodValue'>{props.data.proteinCount}g</p>
                    <p className='foodType'>Protéines</p>
                </div>
            </div>
            <div className='foodElementContainer glucidContainer'>
                <div className='foodIcoContainer'>
                    <img className='foodIconElement' src={glucidIcon} alt="Glucides Icon" />
                </div>
                <div className='foodTextContainer'>
                    <p className='foodValue'>{props.data.carbohydrateCount}g</p>
                    <p className='foodType'>Glucides</p>
                </div>
            </div>
            <div className='foodElementContainer lipidContainer'>
                <div className='foodIcoContainer'>
                    <img className='foodIconElement' src={lipidIcon} alt="Lipides Icon" />
                </div>
                <div className='foodTextContainer'>
                    <p className='foodValue'>{props.data.lipidCount}g</p>
                    <p className='foodType'>Lipides</p>
                </div>
            </div>
        </div>
    )
}

export default FoodContainer;