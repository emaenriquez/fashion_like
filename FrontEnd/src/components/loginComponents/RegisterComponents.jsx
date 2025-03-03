
import { Link, useNavigate } from 'react-router-dom'
import Input from '../input'

const RegisterComponents = () => {

    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        // Add login logic here
        console.log('Login button clicked');
        navigate('/postfeed');
    };

    return (
        <div className="w-screen min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
            <div className="relative py-3 sm:max-w-xs sm:mx-auto">
                <div className="min-h-96 px-8 py-6 mt-4 text-left bg-white   rounded-xl shadow-lg">
                    <form onSubmit={handleLogin}>
                        <div className="flex flex-col justify-center items-center h-full select-none">
                            <div className="flex flex-col items-center justify-center gap-2 mb-8">
                                <Link to="/">
                                    <img src="https://amethgalarcio.web.app/assets/logo-42fde28c.svg" className="w-8" />
                                </Link>
                                <p className="m-0 text-[16px] font-semibold ">Login to your Account</p>
                                <span class="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]">Get started with our app, just start section and enjoy experience.
                                </span>
                            </div>
                            <Input
                                type="text"
                                placeholder="username"
                                labelName="Username"
                                value="username"
                            >
                            </Input>
                            <Input
                                type="email"
                                placeholder="email"
                                labelName="Email"
                                value="email"
                            >
                            </Input>
                        </div>
                        <Input
                            type="password"
                            placeholder="password"
                            labelName="Password"
                            value="password"
                        >
                        </Input>
                        <div className="mt-5">
                            <button className="py-1 px-8 bg-blue-500 hover:bg-blue-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterComponents;