import './LoadingSpinner.css'
import LoadingSpinnerGif from "../../assets/loading-gif.gif"



function LoadingSpinner () {
    return (
        <div className='dp-flex al-center  jc-center loading-overlay-container'>
            <img src={LoadingSpinnerGif} alt='Loading' height="180px" />
        </div>
    )
}

export default LoadingSpinner