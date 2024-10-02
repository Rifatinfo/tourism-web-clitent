import { Link } from "react-router-dom";

const Login = () => {

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const loginInfo = { email, password }
        console.log(loginInfo);
    }

    return (
        <div>
            <div className="relative">
                <img className="w-full h-96 object-cover lg:h-[513px]" src="https://andit.co/projects/html/and-tour/demo/assets/img/banner/bg.png" alt="Login" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4 sm:p-6 lg:p-8">
                    <h2 className="text-purple-500 md:text-5xl text-4xl text-start lg:text-6xl font-bold mb-2 sm:mb-4">Login Now!</h2>
                    <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">Access your account to explore exclusive deals,<br /> track your bookings, and manage your profile.</p>
                </div>
            </div>

            {/* login field */}
            <div className="lg:w-[936px] lg:h-[526px] bg-[#f3f6fd] mx-auto mt-14">
                <form onSubmit={handleLogin}>
                    <div className="space-y-3 p-5">
                        <p className="lg:text-2xl text-gray-400 md:text-xl text-xl text-center">Login your account</p>
                        <h1 className="lg:text-3xl  md:text-3xl text-2xl text-center md:font-bold  lg:font-bold font-semibold">Logged in to stay in touch</h1>
                    </div>
                    <div className="p-8 space-y-5">
                        <input type="email" name="email" className="w-full h-14 border-2 border-[#dddddd75] px-3 py-5 mx-auto" placeholder="Enter user Email" />
                        <input type="password" name="password" className="w-full h-14 border-2 border-[#dddddd75] px-3 py-5 mx-auto" placeholder="Enter user password" />
                        <label className="label justify-end">
                            <a href="#" className="label-text-alt link link-hover lg:text-xl md:text-xl text-sm">Forgot password?</a>
                        </label>
                        <div className="form-control mt-6">
                            <input
                                type="submit"
                                className="bg-purple-500 w-full h-14  border-[#dddddd75] px-4 mx-auto text-white font-bold "
                                value="Submit"
                            />

                        </div>
                        <p className="lg:text-xl md:text-xl text-[16px] text-center">Do not have an account? <Link to="/register"><span className="text-purple-500 font-bold hover:underline">Register now</span></Link></p>
                    </div>

                </form>
            </div>
        </div>
        
    );
};

export default Login;
