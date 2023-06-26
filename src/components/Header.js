import { React } from 'react';
import { map } from '@laufire/utils/collection';
const Header = (context) => {
	const { config: { header }} = context ;

	return <tr>
		{map(header, (heading) =>
			<th key={ heading }>
				{heading}</th>)}
	</tr>;
};

export default Header;
