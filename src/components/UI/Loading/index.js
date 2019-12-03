import React from 'react';

const Loading = () => (
	<div className="container d-flex justify-content-center mt-5">
		<div className="spinner-grow text-danger" role="status">
			<span className="sr-only">Loading...</span>
		</div>
	</div>
);

export default Loading;
