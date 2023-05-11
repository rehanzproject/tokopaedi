import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { auth, provider, providerFacebook, providerEmail } from "../../../config/firebase/config";
import { signInWithPopup } from "firebase/auth";
import google from '../../../assets/images/google.jpg'
import facebook from '../../../assets/images/facebook.png'
import { addUser, addUserProfile } from '../../../config/redux/userSlice/userSlice'
import { useDispatch } from "react-redux";
function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handleSignInWithEmail = () =>
  signInWithPopup(auth, providerEmail).then((data) => {
   console.log(data)
  });  
  const handleSignInWithGoogle = () =>
    signInWithPopup(auth, provider).then((data) => {
      dispatch(addUser(data.user.displayName))
      dispatch(addUserProfile(data.user.photoURL))
      navigate('/')
    });  
    const handleSignInWithFacebook = () =>
    signInWithPopup(auth, providerFacebook).then((data) => {
      dispatch(addUser(data.user.displayName))
      dispatch(addUserProfile(data.user.photoURL))
      navigate('/')
    });  

  const schema = Yup.object().shape({
    email: Yup.string().email("Invalid email !").required("Required"),
   });

  const formik = useFormik({
    initialValues: {
     email:"",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      handleSignInWithEmail
    },
  });

  return (
    <div className="App">
      <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md border border-green-300 p-10 space-y-8 ">
          <div>
           
            <h2 className="mt-6  text-3xl font-bold tracking-tight text-gray-900">
              Masuk
            </h2>
            
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label
                  htmlFor="Email-address"
                  className="text-sm text-gray-600 float-left font-bold"
                >
                  Alamat Email :
                </label>

                <input
                  id="email-address"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  autoComplete="email"
                  required
                  className="relative z-0 block w-full rounded-t-md border-0 px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  placeholder="Email address"
                />
              </div>
              <div>
                <div className="text-red-600 text-sm float-left">
                  {formik.errors.email}
                </div>
              </div>

            </div>

            <div>
              <button
                type="submit"
                onClick={formik.handleSubmit}
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                Sign in
              </button>
              <p className="my-2 text-center text-sm text-gray-600">
                Atau masuk dengan{" "}
              </p>
              <div className="sign-in text-center py-2 shadow-md text-md font-medium border border-solid flex justify-center hover:border-blue-500 ">
                <img src={google} width={90} className="pr-16" />
                <button onClick={handleSignInWithGoogle}> Google</button>
              </div>
              <div className="sign-in my-3 text-center py-2 shadow-md text-md font-medium  border border-solid flex justify-center text-white bg-blue-700 hover:border-black">
                <img src={facebook} width={65} className="pr-10"   />
                <button onClick={handleSignInWithFacebook}>Facebook</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
