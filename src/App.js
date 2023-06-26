import { React } from 'react';
import './App.scss';
import markSheetManger from './services/markSheetManger';
import data from './services/data';
import Table from './components/Table';

const App = (context) =>

	<div className="App">
		Ready to start.
		<Table{ ...{ ...context, data: markSheetManger(data) } }/>
	</div>;

export default App;
