import React from "react";
import Loadable from "react-loadable";

const LoadableBar = Loadable({
  loader: () => import("./components/Bar"),
  loading() {
    return <div>Loading...</div>;
  }
});

class ControlledPanelGroup extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return <LoadableBar />;
  }
}

export default ControlledPanelGroup;
