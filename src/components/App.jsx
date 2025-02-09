import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "@material-ui/core/Container";
import Header from "./Header.jsx";
import ListContents from "./ListContents.jsx";
import ReadContents from "./ReadContents.jsx";
import HistoryContents from "./HistoryContents.jsx";
import { getAllUrlListsAsync } from "../redux/redux";
import "../styles/styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "List",
      urlLists: []
    };
  }

  componentDidMount() {
    this.props.getAllUrlListsAsync();
  }

  render() {
    return (
      <Container id="app">
        <Header />

        {(() => {
          if (this.props.currentView === "LIST") {
            return <ListContents />;
          } else if (this.props.currentView === "READ") {
            return <ReadContents />;
          } else {
            return <HistoryContents />;
          }
        })()}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentView: state.currentView
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getAllUrlListsAsync: () => dispatch(getAllUrlListsAsync)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
