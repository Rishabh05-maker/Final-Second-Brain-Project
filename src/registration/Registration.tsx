import { ErrorMessage, FormikProps } from "formik";
import { FaUserEdit } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";

type Props = {formikProps: FormikProps<any>};

const Register = ({formikProps}: Props) => {
    const {values, handleChange, isSubmitting } = formikProps

  return (
    <div className='h-screen flex justify-center items-center flex-col gap-3 m-auto bg-[url("https://images.pexels.com/photos/3137068/pexels-photo-3137068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")] bg-cover px-4 sm:px-8'>
      
      {/* Registration container */}
      <div className='bg-white rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-xl p-8 sm:p-12'>
        
        <h1 className="text-center text-xl sm:text-2xl text-gray-700 mb-2 font-bold">Create Account</h1>
        <hr className="mb-7" />

        {/* Name Field */}
        <label className="flex items-center m-2 text-gray-700">
          <FaUserEdit className="mr-2" /> Name
        </label>
        <div>
          <input
            type="text"
            className='p-2 border-2 border-gray-300 rounded w-full'
            placeholder='NAME'
            name="name"
            value={values.name}
            onChange={handleChange}

          />
          <p className="text-red-500"><ErrorMessage name="name"/></p>
        </div>

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
          <p className="text-red-500"><ErrorMessage name="userName"/></p>
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
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          <p className="text-red-500"><ErrorMessage name="password"/></p>
        </div>

        {/* Confirm Password Field */}
        <label className="flex items-center m-2 text-gray-700">
          <RiLockPasswordFill className="mr-2" /> Confirm Password
        </label>
        <div>
          <input
            type="password"
            className='border-2 border-gray-300 rounded p-2 w-full'
            placeholder='CONFIRM PASSWORD'
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
          />
          <p className="text-red-500"><ErrorMessage name="confirmPassword"/></p>
        </div>

        {/* Register Button */}
        <div>
          <button
            className='border rounded-lg bg-blue-500 hover:bg-blue-600 text-white mt-4 w-full p-2 transition-colors'
            disabled={isSubmitting}
          >
            Create Account
          </button>
        </div>

        <p className="mt-8 text-center text-gray-600">Already have an account? <Link to={'/login'}> Login</Link>  </p>
      </div>

      <p className="text-center text-gray-600 mt-4 sm:mt-8">A New Way of Organizing our Digital Lives and Improving our Productivity.</p>
    </div>
  );
};

export default Register;
