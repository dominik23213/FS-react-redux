import React from 'react';
import {connect} from "react-redux";

const ActorsContainer = ({actors}) => {
	return (
		<ul>
			{actors.list.map(actor => <li>{actor}</li>)}
		</ul>
	)
};

const mapStateToProps = state => ({
	actors: state.actors
});

export default connect(mapStateToProps, {})(ActorsContainer)
