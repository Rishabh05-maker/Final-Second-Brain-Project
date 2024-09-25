import { ErrorMessage, FormikProps } from "formik";
import { FaUserEdit } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

type Props = { formikProps: FormikProps<any> };

const Login = ({ formikProps }: Props) => {
  const { values, handleChange, isSubmitting, resetForm } = formikProps;

  return (
    <div className='h-screen flex justify-center items-center flex-col gap-3 m-auto bg-[url("https://images.pexels.com/photos/3137068/pexels-photo-3137068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")] bg-cover px-4 sm:px-8'>
      
      {/* Login container */}
      <div className='bg-white rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-xl p-8 sm:p-12 '>
        
        <h1 className="text-center text-xl sm:text-2xl text-gray-700 mb-2 font-bold">Login</h1>
        <hr className="mb-7" />

        {/* Username Field */}
        <label className="flex items-center m-2 text-gray-700">
          <FaUserEdit className="mr-2" /> Username
        </label>
        <div>
          <input
            type="text"
            className='p-2 border-2 border-gray-300 rounded w-full'
            placeholder='USERNAME'
            name="userName"
            value={values.userName}
            onChange={handleChange}
          />
          <p className="text-red-500"><ErrorMessage name="userName" /></p>
        </div>

        {/* Password Field */}
        <label className="flex items-center m-2 text-gray-700">
          <RiLockPasswordFill className="mr-2" /> Password
        </label>
        <div>
          <input
            type="password"
            className='border-2 border-gray-300 rounded p-2 w-full'
            placeholder='PASSWORD'
            value={values.password}
            name="password"
            onChange={handleChange}
          />
          <p className="text-red-500"><ErrorMessage name="password" /></p>
        </div>

        {/* Sign In Button */}
        <div>
          <button
            type='submit'
            disabled={isSubmitting}
            className='border rounded-lg bg-blue-500 hover:bg-blue-600 text-white mt-4 w-full p-2 transition-colors'
          >
            {isSubmitting ? "Submitting" : "Login"}
          </button>
        </div>

        <p className="mt-8 text-center text-gray-600">Don't have an account? Create Account</p>
      </div>

      <p className="text-center text-gray-600 mt-4 sm:mt-8">Organize Your Digital Life and Unlock Your Creative Potential</p>
    </div>
  );
};

export default Login;
