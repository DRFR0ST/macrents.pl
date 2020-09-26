import React, { useContext } from "react";

export const fetchData = async () => {
  return fetch("https://gist.githubusercontent.com/DRFR0ST/0b918694167f6135b8b56db19491db69/raw/05dbd6e935215be3ee7f8eda586827d39a274817/fleet.json")
    .then(response => response.json())
}

const FleetContext = React.createContext([]);

export class FleetProvider extends React.Component {
  state = {
    data: []
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data: data || [] });
  }

  render() {
    return <FleetContext.Provider value={this.state.data || []}>
      {this.props.children}
    </FleetContext.Provider>
  }
}

export const useFleet = () => {
  const data = useContext(FleetContext);

  return [...data];
}

export const useVehicle = (id) => {
  const data = useFleet().find(veh => veh.id === id);

  return data ? { ...data } : null;
}