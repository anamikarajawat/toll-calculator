import React, { useState } from 'react';
import vehicleData from '../assets/data/vehicle-data.json';
import MapComponent from '../components/MapComponent';
import api from '../services/api';
import req from '../services/api';
import { json } from 'react-router-dom';

function Home(props) {
	var tollAmount = 0;
	var body = {
			from: {
				address: "",
			},
			to: {
				address: "",
			},
			waypoints: []
	}
	const [state, setState] = useState({
		selectedVehicle: null,
		fromDestination: '',
		toDestination: '',
		tollAmount: 0,
	});
	const vehicleOptions = vehicleData.vehicles;

	const handleSelect = (option) => {
		setState({ ...state, selectedVehicle: option });
	};

	const handleChangeFrom = (value) => {
		setState({ ...state, fromDestination: value });
	};

	const handleChangeTo = (value) => {
		setState({ ...state, toDestination: value });
	};

	const handleSubmit = () => {
		console.log({ state });
		const endpoint = 'origin-destination-waypoints';
		body.from.address = state.fromDestination;
		body.to.address = state.toDestination;
		console.log(JSON.stringify(body),'2222');

		// fetch("https://apis.tollguru.com/toll/v2/origin-destination-waypoints", {
		// 	"mode":"no-cors",
		// 	"method": "POST",
		// 	"headers": {
		// 		"content-type": "application/json",
		// 		'x-api-key': 'Q42f4H9r2jpGt4mBqPfD8mLBdb6M3RHJ',
		// 	},
		// 	"body": JSON.stringify({body})
		// })
		// .then(response => {
		// 	console.log(response)
		// })
		// .catch(err => {
		// 	console.log(err);
		// });

		api.postRequest(endpoint, JSON.stringify(body)).then(tollApiData => {
			console.log(tollApiData,'tollapi dtat home');
			// var parsedApiData = JSON.parse(tollApiData);
			// console.log('tollApiData',parsedApiData);
			let temptollAmount = tollApiData.summary.rates.USD;
			setState({ ...state, tollAmount: temptollAmount });
			console.log('tollamount',tollAmount);
			console.log('tollamount',state.tollAmount);
		});
		
	};

	return (
		<div>
			<div className="relative w-full bg-white">
				<div className="mx-auto max-w-8xl lg:px-8">
					<div className="flex flex-col justify-center px-4 py-10 lg:px-6">
						<h1 className="mt-8 max-w-4xl text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
							Calculate toll costs between cities
						</h1>
						<p className="mt-8 max-w-3xl text-lg text-gray-700">
							Looking to calculate toll costs between cities across all countries?
							Use the Toll Calculator App! See trip cost breakdown - tolls, fuel
							and other applicable charges, toll plazas, discounts, etc. Travel
							on the cheapest or the fastest routes to your destination.
						</p>
					</div>
				</div>
			</div>
			<section>
				<div className="grid grid-cols-1 lg:grid-cols-2">
					<div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
						<div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
							<form action="#" className="mt-8">
								<div className="space-y-5">
									<div>
										<label
											htmlFor=""
											className="text-base font-medium text-gray-900"
										>
											From{' '}
										</label>
										<div className="mt-2">
											<input
												className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
												type="text"
												placeholder="From Address"
												onChange={(e) => handleChangeFrom(e.target.value)}
											></input>
										</div>
									</div>
									<div>
										<div className="flex items-center justify-between">
											<label
												htmlFor=""
												className="text-base font-medium text-gray-900"
											>
												To{' '}
											</label>
										</div>
										<div className="mt-2">
											<input
												className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
												type="text"
												placeholder="To Address"
												onChange={(e) => handleChangeTo(e.target.value)}
											></input>
										</div>
									</div>
									<div>
										<div className="flex items-center justify-between">
											<label
												htmlFor=""
												className="text-base font-medium text-gray-900"
											>
												Vehicle Type{' '}
											</label>
										</div>
										<div className="mt-2">
											<select
												className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
												id="vehicle"
												onChange={(e) => handleSelect(e.target.value)}
												value={state.selectedVehicle}
											>
												<option value="" disabled selected>
													Select a vehicle
												</option>
												{vehicleOptions.map((option) => (
													<option key={option.value} value={option.value}>
														{option.name}
													</option>
												))}
											</select>
										</div>
									</div>
									<div>
										<button
											type="button"
											className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
											onClick={handleSubmit}
										>
											Submit
										</button>
									</div>
								</div>
							</form>
							<h2 className="mt-8 max-w-3xl text-lg text-gray-700">
								{ state.tollAmount > 0 ? ` Your calculated toll amount is  $${state.tollAmount}` : ""}
							</h2>
						</div>
					</div>
					<div className="flex items-right justify-right px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
						<div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
							<MapComponent></MapComponent>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Home;
