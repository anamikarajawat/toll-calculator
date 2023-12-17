import React from 'react';
import logoImage from '../assets/images/Logo.svg';

function Header(props) {
	return (
		<header id="appHeader" class="relative w-full border-b bg-white p-5">
			<div class="mx-auto flex items-center justify-between">
				<div class="inline-flex items-center space-x-2">
					<span>
						<img src={logoImage} alt="Logo" />
					</span>
					<span class="font-bold">
					<a
						href={'/'}
						className="text-sm font-semibold text-gray-800 hover:text-gray-900"
					>
						Toll Calculator
					</a>
					</span>
				</div>
				<div className="lg:block">
					<a
						href={'/user-guide'}
						className="text-sm font-semibold text-gray-800 hover:text-gray-900"
					>
						User Guide
					</a>
				</div>
			</div>
		</header>
	);
}

export default Header;
