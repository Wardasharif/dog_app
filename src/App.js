import data from './dog_friendly_data';
import './App.css'
import DogBreed from './components/DogBreed';
import SideBar from './components/SideBar';
import Country from './components/Country';


const App = () => {
  return (
    <div className='container' style={{ textAlign: "center" }}>
      <h2 className='big-header' style={{ textAlign: "center" }}> <hr></hr> Welcome to my dog friendly page  	<hr></hr></h2>
      <div className='dogs row'>
        <div className='col col-4 navi'>
          <h3> Breed Types </h3>
          <SideBar data={data} ></SideBar>
          <br>
          </br>
          <h3> Origins </h3>
          <Country data={data} ></Country>
        </div>

        <div className='col col-8 navi'>
          <h3> Dog Gallery </h3>
          <div className='row'>
            {
              data.map(breed => {
                return (
                  <div className='col col-4'>
                    <DogBreed breed={breed}></DogBreed>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
