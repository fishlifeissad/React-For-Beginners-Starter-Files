import React from "react";
import PropTypes from 'prop-types';
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import Login from "./Login";

class Inventory extends React.Component {
  static propTypes = {
    fishes: PropTypes.object, 
    updateFish: PropTypes.func, 
    deleteFish: PropTypes.func, 
    loadSampleFishes: PropTypes.func
  }
  render() {
    return (
      <Inventory/>
    );
  }
}

export default Inventory;
