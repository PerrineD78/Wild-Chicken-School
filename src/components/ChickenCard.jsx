function ChickenCard ({imgSrc, name, role, description}) {
    return (
        <div>
            <img src={imgSrc} alt="Photo" />
            <h2>{name}</h2>
            <h3>{role}</h3>
            <p>{description}</p>
        </div>
    )
}

export default ChickenCard;