import '/styles/home.css'
function home(props) 
{
    const more=props.more
    return(
        <section className='home   '>
            <div className='home'>
                <p>¿Que hay en tienda?</p>
                 <img src="queque.png" alt="" />
                <img src="masita.png" alt=""/>
            </div>
        </section>
    )
    
}
export default home 