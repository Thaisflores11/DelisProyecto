import '/styles/home.css'
function home(props) 
{
    const more=props.more
    return(
        
        <section className='home'>
            <div className='letra'>
                <h4>¿Que hay en la tienda?</h4>
                </div>
            
            <div >
                 <img src="queque.png" alt="" />
                
            </div>
        </section>
    )
    
}
export default home 