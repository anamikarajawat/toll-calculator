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
						<h4 className="mt-8 max-w-3xl text-xl font-bold tracking-tight md:text-2xl lg:text-3xl text-gray-700">
							How do tolls work in the USA
						</h4>
						<h2 className="mt-5 max-w-xl text-xl font-bold tracking-tight md:text-xl lg:text-xl text-gray-700">
						There are three types of tolling systems in the US:
						</h2>
						<p className="mt-8 max-w-3xl text-lg text-gray-700">
							1. Barrier system or Open System: Every time you pass through the mainline toll booth or ramp toll plaza, you pay a fixed time-based toll.
						</p>
						<p className="mt-8 max-w-3xl text-lg text-gray-700">
							2. Ticket system or Closed System: Similar to traveling on a subway, you pay a toll based on your entry toll gantry and exit toll gantry combination. New York State Thruway, New Jersey Turnpike, Kansas Turnpike and other toll roads are ticket systems or closed systems.
						</p>
						<p className="mt-8 max-w-3xl text-lg text-gray-700">
							3. Distance-based system: You pay a toll for the distance travelled on the designated toll road.
						</p>
						<p className="mt-8 max-w-3xl text-lg text-gray-700">
							On electronic toll collection (ETC) systems, when you cross an electronic toll pass plaza without a valid toll pass, it is counted as a toll violation. Cameras near toll booths register your license plates and send a bill to the vehicle owner via the Video toll or Pay-By-Bill system.The US toll system is fragmented. Over 90 tolling agencies, 12 interoperable groups and 20 tolling brands are active. Click on state names to see state-specific tolling details:
						</p>
						
					</div>
				</div>
			</div>
        </div>
    );
}

export default UserGuide;