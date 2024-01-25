import { formatter } from '../util/investment';

const ResultsTable = (props) => {
	const { initialInvestment, results } = props;
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
						<tr>
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
