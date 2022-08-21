import React from 'react';
import PropTypes from 'prop-types';

function Profile({ fullName, bio, profession, click }) {
	return (
		<div>
			<h1
				style={{
					color: ' rgba(200, 200, 200)',
					textDecoration: ' underline orange',
				}}
			>
				{fullName}
			</h1>
			<h4>{bio}</h4>
			<h1>{profession}</h1>
			<button onClick={() => click()}>Handle Name</button>
		</div>
	);
}

Profile.propTypes = {
	fullName: PropTypes.string,
	profession: PropTypes.string,
	bio: PropTypes.string,
};

Profile.defaultProps = {
	fullName: 'Abdallah',
	profession: 'police man',
	bio: 'hello',
};
export default Profile;
