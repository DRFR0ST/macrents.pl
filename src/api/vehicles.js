import React, { useContext } from "react";

export const fetchData = async () => {
  return fetch("https://api.github.com/gists/0b918694167f6135b8b56db19491db69")
    .then(response => response.json())
    .then(response => response && response.files && response.files["fleet.json"] ? JSON.parse(response.files["fleet.json"].content) : [])
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

export const useFleet = (includeInvisible = false) => {
  const data = useContext(FleetContext);

  if (!includeInvisible)
    return [...data].filter(veh => veh.visible && veh.visible === true);

  return [...data];
}

export const useVehicle = (id) => {
  const data = useFleet(true).find(veh => veh.id === id);

  return data ? { ...data } : null;
}