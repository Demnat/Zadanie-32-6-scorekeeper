import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import PlayersList from './Components/PlayersList/PlayersList';

it('renders without crashing', () => {
	shallow(<App />);
});

it('should update player score', () => {
	const appComponent = shallow(<App />);
	console.log(appComponent.debug());
	const players = [
		{
			name: 'Kunegunda',
			score: 5
		}
	];
	appComponent.setState({ players });

	const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');
	
	onScoreUpdate(0, 5);
});