import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all"
      }
    };
  }

  onChangeType = option => {
    this.setState({
      filters: {
        type: option
      }
    });
  };

  onFindPetsClick = () => {
    let url = "/api/pets";
    if (this.state.filters.type === "dog") {
      url = "/api/pets?type=dog";
    } else if (this.state.filters.type === "cat") {
      url = "/api/pets?type=cat";
    } else if (this.state.filters.type === "micropig") {
      url = "/api/pets?type=micropig";
    } else {
      url = "/api/pets";
    }
    return fetch(url)
      .then(response => response.json())
      .then(json => this.saveFetchData(json));
  };

  saveFetchData = json => {
    this.setState({
      pets: json
    });
  };

  onAdoptPet = petsID => {
    let petsCopy = [...this.state.pets];
    let chosenPet = petsCopy.find(pet => {
      return pet.id === petsID;
    });
    chosenPet.isAdopted = !chosenPet.isAdopted;
    this.setState({ pets: petsCopy });
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
