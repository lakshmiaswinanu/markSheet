import { peek } from '@laufire/utils/debug';
const getTotalMark = (mark) =>
	Number(mark.tamil)
	+ Number(mark.english)
	+ Number(mark.science)
	+ Number(mark.maths)
	+ Number(mark.social);

const getResult = (markSheets) =>
	(Math.min(
		markSheets.tamil,
		markSheets.english,
		markSheets.science,
		markSheets.maths,
		markSheets.social
	) >= '40'
		? 'pass'
		: 'Fail');

const getMarkList = (mark) =>
	mark.map((marks) => ({
		...marks,
		total: getTotalMark(marks),
		result: getResult(marks),
	}));

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

const markSheetManger = (data) => {
	peek(data);
	const markList = getMarkList(data);
	const rankList = getRank(markList);

	// eslint-disable-next-line no-console

	return rankList;
};

export default markSheetManger;
