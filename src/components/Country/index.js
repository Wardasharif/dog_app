const Country = ({data}) => {
    return (
        <div className="country">
            {data.map(breed => {
                return (
                    <div>
                        <hr></hr>
                        <p> {breed.origin} </p>
                    </div>
                )
            })}
        </div>
    )
}

export default Country;