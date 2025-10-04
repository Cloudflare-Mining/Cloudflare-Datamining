import {useState, useEffect} from 'react';


export default function BackToTopButton(){
	const[isVisible, setIsVisible] = useState(false);

	// show button when page scrolldown
	const toggleVisibility =() =>{
		if(window.pageYOffset > 300){
			setIsVisible(true);
		}else{
			setIsVisible(false);
		}
	};


	// Scroll to top smoothly
	const scrollToTop = () => {
		window.scrollTo({
			top:0,
			behavior: 'smooth',
		});
	};



	useEffect(()=>{
		window.addEventListener('scroll', toggleVisibility);
		return()=>{
			window.removeEventListener('scroll', toggleVisibility);
		};
	}, []);


	if(!isVisible){
		return null;
	}


	return(
		<button
			type='button'
			onClick={scrollToTop}
			className = "fixed bottom-6 right-6 z-50 rounded-full bg-blue-600 p-3 text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600">
				<svg
					className="h-5 w-5"
					fill="none"
					stroke="currentColor"
					viewBox = "0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M5 10l7-7m0 0l7 7m-7-7v18"
					/>
					</svg>
			</button>
	);
}