import React from 'react';
import Box from '../components/box';
import * as actions from '../actions/index';
import { connect } from 'react-redux';

class BoxContainer extends React.Component {
	render() {
		return <Box handleClick={() => this.props.loadColor()} color={this.props.color} />;
	}
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, actions)(BoxContainer);
