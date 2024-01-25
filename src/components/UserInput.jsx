// import { useState } from 'react';

const UserInput = (props) => {
	const {
		initialData: {
			initialInvestment,
			annualInvestment,
			expectedReturn,
			duration,
		},
		onChange,
	} = props;
	return (
		<section id="user-input">
			<div className="input-group">
				<p>
					<label htmlFor="">Initial Investment</label>
					<input
						name="initialInvestment"
						type="number"
						defaultValue={initialInvestment}
						onChange={onChange}
					/>
				</p>

				<p>
					<label htmlFor="">Annual Investment</label>
					<input
						name="annualInvestment"
						type="number"
						defaultValue={annualInvestment}
						onChange={onChange}
					/>
				</p>
			</div>

			<div className="input-group">
				<p>
					<label htmlFor="">Expected Return</label>
					<input
						name="expectedReturn"
						type="number"
						defaultValue={expectedReturn}
						onChange={onChange}
					/>
				</p>

				<p>
					<label htmlFor="">Duration</label>
					<input
						name="duration"
						type="number"
						defaultValue={duration}
						onChange={onChange}
					/>
				</p>
			</div>
		</section>
	);
};

export default UserInput;
