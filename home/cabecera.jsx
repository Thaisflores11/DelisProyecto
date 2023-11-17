import '/styles/cabecera.css'
function cabecera(props) 
{
    const more=props.more
    return(
        <section className='cabera'>
            <div className='orange-button'>
                 <p>Learn More</p>
            </div>
        </section>
    )
    
}
export default cabecera