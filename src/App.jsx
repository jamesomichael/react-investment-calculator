import { useState } from 'react';

import Header from './components/Header';
import UserInput from './components/UserInput';
import ResultsTable from './components/ResultsTable';

import { calculateInvestmentResults } from './util/investment';

const INITIAL_INVESTMENT_DATA = {
	initialInvestment: 10000,
	annualInvestment: 300,
	expectedReturn: 5.5,
	duration: 12,
	annualData: [],
};

const App = () => {
	const [investmentData, setInvestmentData] = useState(
		INITIAL_INVESTMENT_DATA
	);

	const handleInvestmentDataChange = (event) => {
		setInvestmentData((prevData) => {
			const updatedInputData = {
				...prevData,
				[event.target.name]: event.target.value,
			};
			const annualData = calculateInvestmentResults(updatedInputData);
			return {
				...updatedInputData,
				annualData,
			};
		});
	};

	return (
		<>
			<Header />
			<UserInput
				initialData={INITIAL_INVESTMENT_DATA}
				onChange={handleInvestmentDataChange}
			/>
			{investmentData.duration > 0 ? (
				<ResultsTable
					initialInvestment={investmentData.initialInvestment}
					results={investmentData.annualData}
				/>
			) : (
				<p className="center">Duration must be greater than 0.</p>
			)}
		</>
	);
};

export default App;
