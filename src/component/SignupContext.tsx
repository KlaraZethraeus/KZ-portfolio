//image sizes
import React, { useState } from 'react'

interface FormData {
  firstName: string
  lastName: string
  email: string
  jobType: string
}

interface ContextProps {
  formData: FormData | null
  setFormData: React.Dispatch<React.SetStateAction<FormData | null>>
}

const SignupContext = React.createContext<ContextProps>({
  formData: null,
  setFormData: () => {},
})
interface SignupProviderProps {
  children: React.ReactNode
}

const SignupProvider = ({ children }: SignupProviderProps) => {
  const [formData, setFormData] = useState<FormData | null>(null)

  return (
    <SignupContext.Provider value={{ formData, setFormData }}>
      {children}
    </SignupContext.Provider>
  )
}

export default SignupContext

//MySignupForm
// import React, { useContext } from 'react'
// import { Formik, Form, useField } from 'formik'
// import * as Yup from 'yup'
// import '../css/StyleMySignup.css'
// // import SignupProvider from './SignupProvider'
// import SignupContext from './SignupContext'
// import { useNavigate } from 'react-router-dom'

// interface MySignupFormProps {
//   userName?: string
// }

// interface MyTextInputProps {
//   label: string
//   name: string
//   type: string
//   placeholder: string
//   id?: string
// }

// interface MySelectProps {
//   label: string
//   name: string
//   children: React.ReactNode
//   id?: string
// }

// const MyTextInput = ({ label, ...props }: MyTextInputProps) => {
//   const [field, meta] = useField(props)

//   return (
//     <>
//       <label htmlFor={props.id || props.name}>{label}</label>
//       <input className="text-input" {...field} {...props} />
//       {meta.touched && meta.error ? (
//         <div className="error">{meta.error}</div>
//       ) : null}
//     </>
//   )
// }

// interface MyCheckboxProps {
//   children: React.ReactNode
//   name: string
// }

// const MyCheckbox = ({ children, ...props }: MyCheckboxProps) => {
//   const [field, meta] = useField({ ...props, type: 'checkbox' })

//   return (
//     <div>
//       <label className="checkbox-input">
//         <input type="checkbox" {...field} {...props} />
//         {children}
//       </label>
//       {meta.touched && meta.error ? (
//         <div className="error">{meta.error}</div>
//       ) : null}
//     </div>
//   )
// }

// interface MySelectProps {
//   label: string
//   name: string
// }

// const MySelect = ({ label, id, ...props }: MySelectProps) => {
//   const [field, meta] = useField(props)

//   return (
//     <div>
//       <label htmlFor={id || props.name}>{label}</label>
//       <select id={id} {...field} {...props} />
//       {meta.touched && meta.error ? (
//         <div className="error">{meta.error}</div>
//       ) : null}
//     </div>
//   )
// }

// const MySignupForm = ({ userName }: MySignupFormProps) => {
//   const { formData, setFormData } = useContext(SignupContext)
//   const navigate = useNavigate()

//   const handleSubmit = (values: any, { setSubmitting }: any) => {
//     setTimeout(() => {
//       setFormData({
//         firstName: values.firstName,
//         lastName: values.lastName,
//         email: values.email,
//         jobType: values.jobType,
//       })
//       setSubmitting(false)
//       navigate(`/autoreply/${values.firstName}`)
//     }, 400)
//   }

//   return (
//     <>
//       <h1>Lets grab a coffe and take it from there!</h1>
//       <p>Looking forward to here from you {userName}</p>
//       <Formik
//         initialValues={{
//           firstName: '',
//           lastName: '',
//           email: '',
//           acceptedTerms: false,
//           jobType: '',
//         }}
//         validationSchema={Yup.object({
//           firstName: Yup.string()
//             .max(15, 'Must be 15 characters or less')
//             .required('Required'),
//           lastName: Yup.string()
//             .max(20, 'Must be 20 characters or less')
//             .required('Required'),
//           email: Yup.string()
//             .email('Invalid email address')
//             .required('Required'),
//           acceptedTerms: Yup.boolean()
//             .required('Required')
//             .oneOf([true], 'You must accept the terms and conditions.'),
//           jobType: Yup.string()
//             .oneOf(
//               ['designer', 'development', 'product', 'other'],
//               'Invalid Job Type'
//             )
//             .required('Required'),
//         })}
//         onSubmit={(values, { setSubmitting }) => {
//           setTimeout(() => {
//             alert(JSON.stringify(formData, null, 2))
//             setFormData({
//               firstName: values.firstName,
//               lastName: values.lastName,
//               email: values.email,
//               jobType: values.jobType,
//             })
//             setSubmitting(false)
//           }, 400)
//         }}
//       >
//         <Form>
//           <MyTextInput
//             label="First Name"
//             name="firstName"
//             type="text"
//             placeholder="Klara"
//             id="firstName"
//           />

//           <MyTextInput
//             label="Last Name"
//             name="lastName"
//             type="text"
//             placeholder="Zethraeus"
//             id="firstName"
//           />

//           <MyTextInput
//             label="Email Address"
//             name="email"
//             type="email"
//             placeholder="klara@kz.com"
//             id="email"
//           />

//           <MySelect label="About" name="jobType">
//             <option value="">Subject</option>
//             <option value="designer">Designer</option>
//             <option value="development">Developer</option>
//             <option value="product">Product Manager</option>
//             <option value="other">Other</option>
//           </MySelect>

//           <MyCheckbox name="acceptedTerms">
//             I accept the terms of GDPR
//           </MyCheckbox>

//           <button type="submit">Submit</button>
//         </Form>
//       </Formik>
//     </>
//   )
// }
// export default MySignupForm
