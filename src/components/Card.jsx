function Card({imageUrl, title, description,url})
{
    return(
        <div className="card">
            <img src={imageUrl} alt="image" />
            <h1>{title}</h1>
            <p>{description}</p>
           <a href={url} target="_blank"> <button>Read More</button></a>
        </div>
    );
}
export default Card