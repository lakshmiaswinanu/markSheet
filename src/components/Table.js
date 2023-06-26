import { React } from 'react';
import Body from './Body';
import Header from './Header';

const Table = (context) => <table>
	<thead>
		<Header{ ...context }/>
	</thead>
	<Body{ ...context }/>
</table>;

export default Table;
