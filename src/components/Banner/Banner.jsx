import './Banner.css'


function Banner (props) {
    return (
       <div className='banner dp-flex al-end' style={{ backgroundImage: `url(/${props.image})` }}>

            <div className='container'>
                <div className='title-panel dp-flex al-center jc-center'>
                      <h1>{props.title}</h1>  
                </div>
            </div>

       </div>
    )
}

export default Banner