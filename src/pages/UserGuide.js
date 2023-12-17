import React from 'react';

function UserGuide(props) {
    return (
        <div>
          <div className="relative w-full bg-white">
				<div className="mx-auto max-w-8xl lg:px-8">
					<div className="flex flex-col justify-center px-4 py-10 lg:px-6">
						<h1 className="mt-8 max-w-4xl text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
							User Guide
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
        </div>
    );
}

export default UserGuide;