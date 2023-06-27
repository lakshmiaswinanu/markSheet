import { React } from 'react';
import './App.scss';
import markSheetManger from './services/markSheetManger';
import Table from './components/Table';
import markSheets from './data/markSheets';

const App = (context) =>
	<div className="App">
		<Table { ...{ ...context, data: markSheetManger({ ...context,
			data: markSheets }) } }
		/>
	</div>;

export default App;
