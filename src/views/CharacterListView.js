import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getChars } from "../actions/index";

class CharacterListView extends React.Component {
  // constructor() {
  //   super();
  // }

  componentDidMount() {
    // call our action
    this.props.getChars();
  }

  render() {
    return (
      <div>
        {this.props.fetching && <p>Fetching character data</p>}
        {this.props.err && <p>Error fetching character data</p>}
        {this.props.characters && (
          <div className="CharactersList_wrapper">
            <CharacterList characters={this.props.characters} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ charsReducer }) => {
  return {
    characters: charsReducer.characters,
    isFetching: charsReducer.isFetching,
    error: charsReducer.error
  };
};

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  { getChars }
)(CharacterListView);
