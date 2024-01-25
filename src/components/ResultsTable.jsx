import { formatter, calculateInvestmentResults } from '../util/investment';

const ResultsTable = (props) => {
	const { inputData } = props;
	const { initialInvestment } = inputData;
	const results = calculateInvestmentResults(inputData);
	console.error('inputData', inputData);
	console.error('results', results);
	return (
		<table id="result">
			<thead>
				<tr>
					<th>Year</th>
					<th>Investment Value</th>
					<th>Interest (Year)</th>
					<th>Total Interest</th>
					<th>Invested Capital</th>
				</tr>
			</thead>
			<tbody>
				{results.map((result) => {
					const totalInterest =
						result.valueEndOfYear -
						result.annualInvestment * result.year -
						initialInvestment;
					const totalInvestmentValue =
						result.valueEndOfYear - totalInterest;
					return (
						<tr key={result.year}>
							<td>{result.year}</td>
							<td>{formatter.format(result.valueEndOfYear)}</td>
							<td>{formatter.format(result.interest)}</td>
							<td>{formatter.format(totalInterest)}</td>
							<td>{formatter.format(totalInvestmentValue)}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default ResultsTable;
