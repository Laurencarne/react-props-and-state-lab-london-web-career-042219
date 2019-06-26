import React from "react";
import Pet from "./Pet";

class PetBrowser extends React.Component {
  renderPetsData = () => {
    return this.props.pets.map(pet => (
      <Pet
        pet={pet}
        key={pet.id}
        // id={pet.id}
        // name={pet.name}
        // type={pet.type}
        // age={pet.age}
        // weight={pet.weight}
        // gender={pet.gender}
        // isAdopted={pet.isAdopted}
        onAdoptPet={this.props.onAdoptPet}
      />
    ));
  };
  render() {
    return <div className="ui cards">{this.renderPetsData()}</div>;
  }
}

export default PetBrowser;
