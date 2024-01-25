import { useState } from 'react';

import Header from './components/Header';
import UserInput from './components/UserInput';
import ResultsTable from './components/ResultsTable';

// import { calculateInvestmentResults } from './util/investment';

const INITIAL_INVESTMENT_DATA = {
	initialInvestment: 10000,
	annualInvestment: 1200,
	expectedReturn: 6,
	duration: 10,
};

const App = () => {
	const [investmentData, setInvestmentData] = useState(
		INITIAL_INVESTMENT_DATA
	);

	const handleInvestmentDataChange = (event) => {
		setInvestmentData((prevData) => ({
			...prevData,
			[event.target.name]: parseFloat(event.target.value),
		}));
	};

	return (
		<>
			<Header />
			<UserInput
				initialData={INITIAL_INVESTMENT_DATA}
				onChange={handleInvestmentDataChange}
			/>
			{investmentData.duration > 0 ? (
				<ResultsTable inputData={investmentData} />
			) : (
				<p className="center">Duration must be greater than 0.</p>
			)}
		</>
	);
};

export default App;
