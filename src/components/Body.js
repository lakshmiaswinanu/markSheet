import { React } from 'react';
import { map } from '@laufire/utils/collection';
import { peek } from '@laufire/utils/debug';

const Body = (context) => {
	const { config: { subjects }, data } = context;

	peek(context);

	return <tbody>
		{map(data, (mark, index) => {
			const className = mark.result === 'pass' ? 'pass' : 'fail';

			return <tr key={ index }>
				<td>{mark.rollNo}</td>
				<td>{mark.name}</td>
				{map(subjects, (subject, sub) =>
					<td key={ sub }> {mark[subject]} </td>)}
				<td>{mark.total}</td>
				<td className={ className }>{mark.result}</td>
				<td>{mark.rank}</td>
			</tr>;
		})}
	</tbody>;
};

export default Body;
