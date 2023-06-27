const getTotalMark = (context) =>
	context.config.subjects.reduce((acc, cur) =>
		acc + Number(context.data[cur]), 0);

const getResult = (context) => {
	const minValue = context.config.subjects.map((sub) =>
		context.data[sub]);

	return Math.min(...minValue) >= '35' ? 'pass' : 'fail';
};

const getMarkList = (context) => ({
	...context.data,
	total: getTotalMark(context),
	result: getResult(context),
});

const getRank = (totalResult) => {
	const sortList = totalResult.sort((a, b) => b.total - a.total);
	const rank = sortList.map((
		student, index, array
	) => ({
		...student,
		rank: student.result === 'pass'
			? array.filter((mark) =>
				(mark.total > student.total)
				&& (mark.result === 'pass')).length + 1
			: '-',
	}));

	return rank;
};

const markSheetManger = (context) => {
	const addList = context.data.map((markSheet) =>
		getMarkList({ ...context, data: markSheet }));
	const rankList = getRank(addList);
	// eslint-disable-next-line no-console

	return rankList;
};

export default markSheetManger;
