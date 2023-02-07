const SideBar = ({ data }) => {
  return (
    <div className="sidebar">
      {data.map((breed) => {
        return (
          <div>
            <p> {breed.breed} </p>
          </div>
        )
      })}
    </div>
  )
}

export default SideBar
