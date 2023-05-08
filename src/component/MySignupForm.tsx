import React, { useContext } from 'react'
import { Formik, Form, useField } from 'formik'
import * as Yup from 'yup'
import '../css/StyleMySignup.css'
import { SignupContext } from './context/SignupContext'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface MyTextInputProps {
  label: string
  name: string
  type: string
  placeholder: string
  id?: string
}

interface MySelectProps {
  label: string
  name: string
  children: React.ReactNode
  id?: string
}

const MyTextInput = ({ label, ...props }: MyTextInputProps) => {
  const [field, meta] = useField(props)

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  )
}

interface MyCheckboxProps {
  children: React.ReactNode
  name: string
}

const MyCheckbox = ({ children, ...props }: MyCheckboxProps) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' })

  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  )
}

interface MySelectProps {
  label: string
  name: string
}

const MySelect = ({ label, id, ...props }: MySelectProps) => {
  const [field, meta] = useField(props)

  return (
    <div>
      <label htmlFor={id || props.name}>{label}</label>
      <select id={id} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  )
}

const SignupForm = () => {
  const { setFormData } = useContext(SignupContext)

  // const { name } = useParams()
  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          acceptedTerms: false,
          jobType: '',
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions.'),
          jobType: Yup.string()
            .oneOf(
              ['designer', 'development', 'product', 'other'],
              'Invalid Job Type'
            )
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            //   alert(JSON.stringify(formData, null, 2))
            //   setFormData({
            //     firstName: values.firstName,
            //     lastName: values.lastName,
            //     email: values.email,
            //     subject: values.Subject,
            //   })
            //   setSubmitting(false)
            // }, 400)
            toast.success(
              `Hi ${values.firstName}!
               Thanks for contacting me. I will shortly get back to you.
                 All the best Klara`
            )
            setFormData({
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              subject: values.jobType,
            })
            setSubmitting(false)
          }, 400)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              type="text"
              placeholder="Klara"
              id="firstName"
            />

            <MyTextInput
              label="Last Name"
              name="lastName"
              type="text"
              placeholder="Zethraeus"
              id="firstName"
            />

            <MyTextInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="klara@aroundkz.com"
              id="email"
            />

            <MySelect label="" name="jobType">
              <option value="">Subject</option>
              <option value="designer">Designer</option>
              <option value="development">Developer</option>
              <option value="product">Product Manager</option>
              <option value="other">Other</option>
            </MySelect>

            <MyCheckbox name="acceptedTerms">
              I accept the terms of GDPR
            </MyCheckbox>
            {/* const notify = () => toast("Wow so easy!"); */}
            <button
              // onClick={() =>
              //   toast(
              //     `Thanks for contacting me ${'hej'}! I will get back to you soon.`
              //   )
              // }
              type="submit"
            >
              Submit
            </button>
            <ToastContainer
              className="foo"
              style={{
                width: '20rem',
                height: '10rem',
                fontSize: '1rem',
                margin: '1.5rem 1rem 3rem 2rem',
                padding: '1rem',
                textAlign: 'center',
                lineHeight: '1.5',
                fontStyle: 'italic',
                fontFamily: 'Arial, sans-serif',
              }}
              position="bottom-right"
              autoClose={4000}
              hideProgressBar={true}
              closeOnClick
              icon={false}
            />
          </Form>
        )}
      </Formik>
    </>
  )
}
export default SignupForm
