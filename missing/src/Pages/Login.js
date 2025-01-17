import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';


function Login() {
        
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();
  
    const handleLogin = () => {
      // Simulate authentication logic
      if (username === 'Rahina' && password === 'password') {
        setIsAuthenticated(true);
        alert('Login successful!');
        navigate('/dashboard');
      } else {
        setIsAuthenticated(false);
        alert('Invalid credentials. Please try again.');
      }
    };

    const containerImg = {
        backgroundImage: 'url("/images/loginBG.jpg")',
      };
     return (
        <div>
              <section className="bg-cover bg-center h-300" style={containerImg}>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className=" h-12 mr-2" src="/Images/download.jpg" alt="logo" />   
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Login to your account
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Student id</label>
                            <input 
                                type="username" 
                                name="username" 
                                id="userame" 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="eg: 10982717" required="" />
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                id="password" placeholder="••••••••" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input 
                                        id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                </div>
                            </div>
                            <a href="#" className="text-sm font-medium text-gray-200 hover:underline dark:text-primary-500">Forgot password?</a>
                        </div>
                        <button 
                            type="button" 
                            onClick={handleLogin}
                            className="w-full text-white bg-yellow-600 over:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                    </form>
                    {isAuthenticated && (
                    <p className="text-green-500 mt-4">
                        Authenticated successfully! Go to <a href="/dashboard">Dashboard</a>.
                    </p>
                )}
                </div>
            </div>
                 
                </div>
              </section>
        </div>
    );
};

export default Login