import { React } from 'react';
import { map } from '@laufire/utils/collection';

const Body = (context) => {
	const { data } = context;

	return <tbody>
		{map(data, (mark, index) => {
			const className = mark.result === 'pass' ? 'pass' : 'fail';

			return <tr key={ index }>
				<td>{mark.rollNo}</td>
				<td>{mark.name}</td>
				<td>{mark.tamil}</td>
				<td>{mark.english}</td>
				<td>{mark.maths}</td>
				<td>{mark.science}</td>
				<td>{mark.social}</td>
				<td>{mark.total}</td>
				<td className={ className }>{mark.result}</td>
				<td>{mark.rank}</td>
			</tr>;
		})}
	</tbody>;
};

export default Body;
