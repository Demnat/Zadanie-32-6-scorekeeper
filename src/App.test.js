import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import AddPlayer from './components/AddPlayer/AddPlayer';
import PlayersList from './Components/PlayersList/PlayersList';

it('renders without crashing', () => {
	shallow(<App />);
});

it('should update player score', () => {

	const appComponent = shallow(<App />);
	// console.log(appComponent.debug());
	const players = [
		{
			name: 'Kunegunda',
			score: 5
		}
	];
	appComponent.setState({ players });
	const playersBeforeUpdate = appComponent.state('players');
	// console.log(playersBeforeUpdate);

	// const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');
	const onScoreUpdate = appComponent.find('#playersList').prop('onScoreUpdate');

	onScoreUpdate(0, 5);
	const playersAfterUpdate = appComponent.state('players');

	expect(playersAfterUpdate[0].score).toEqual(10);
});

it('should add player to players state', () => {

	const appComponent = shallow(<App />);
	const players = [];
	appComponent.setState({ players });
	// console.log(players);

	const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');
	onPlayerAdd('Ania');

	const actualPlayers = appComponent.state('players');
	// console.log(actualPlayers);

	expect(actualPlayers.length).toEqual(1);
	expect(actualPlayers[0].name).toEqual('Ania');
	expect(actualPlayers[0].score).toEqual(0);

});

it('should remove player from players state', () => {

	const appComponent = shallow(<App />);
	const players = [{
		name: 'Kunegunda',
		score: 5
	},
	{
		name: 'Antoś',
		score: 0
	}];
	appComponent.setState({ players });
	console.log(players);

	const onPlayerRemove = appComponent.find('#playersList').prop('onPlayerRemove');
	onPlayerRemove(0);
	const playersAfterUpdate = appComponent.state('players');
	console.log(playersAfterUpdate);

	expect(playersAfterUpdate.length).toEqual(1);

});