function ChickenCard ({imgSrc, name, role, description}) {
    return (
        <div className="chicken-card">
            <img src={imgSrc} alt={name} />
            <h2>{name}</h2>
            <h3>{role}</h3>
            <p>{description}</p>
        </div>
    )
}

export default ChickenCard;