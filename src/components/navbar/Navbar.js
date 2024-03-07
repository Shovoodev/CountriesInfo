import logo from "../../../src/assets/countrylogo.jpg"
function Navbar() {
  return (
    <div className="text-lg p-2 bg-slate-200 " >
	<nav className=" relative px-4 py-4 flex justify-between items-center bg-white border-none">
		<a className="text-3xl font-bold leading-none" href="#">
			<img className=" h-[50px] w-[50px]" src={logo} alt=""/>
		</a>
		<div className="lg:hidden">
			<button className="navbar-burger flex items-center text-blue-600 p-3">
				<svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Mobile menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg>
			</button>
		</div>
		<ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
			<li><a className="text-lg  hover:text-gray-500" href="#">Home</a></li>
			<li className="text-gray-300">
				
			</li>
			<li><a className="text-sm  " href="#">About Us</a></li>
			<li class="text-gray-300">
				
			</li>
			<li><a className="text-sm  hover:text-gray-500" href="#">Services</a></li>
			<li class="text-gray-300">
				
			</li>
			
			<li><a className="text-sm  hover:text-gray-500" href="#">Contact</a></li>
		</ul>
		<a className="hidden lg:inline-block py-2 px-6  hover:bg-blue-600 text-sm  font-bold rounded-xl transition duration-200" href="#">Sign up</a>
	</nav>
	<div className="navbar-menu relative z-50 hidden">
		<div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
		
	</div>
    </div>
  )
}

export default Navbar