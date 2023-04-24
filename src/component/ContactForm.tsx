function AboutMe() {
  const heading = 'Om'
  return (
    <div className="App" id={heading}>
      <h1>Om</h1>
    </div>
  )
}
export default AboutMe // import { FC, useContext } from 'react'
// import { ErrorMessage, Form, Formik, Field, FormikErrors } from 'formik'
// import { useNavigate } from 'react-router-dom'
// import styled from 'styled-components'
// import { FeedbackContext } from './FeedbackContext'

// interface FormValues {
//   name: string
//   email: string
//   subject: string
//   message: string
//   feedbackMessage: string
// }

// interface FormProps {
//   setFeedbackMessage: (message: string) => void
//   onSubmit: (
//     values: FormValues,
//     { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
//   ) => void
// }

// const initialValues: FormValues = {
//   name: '',
//   email: '',
//   subject: '',
//   message: '',
//   feedbackMessage: '',
// }

// function validate(values: FormValues) {
//   const errors: FormikErrors<FormValues> = {}

//   if (!values.name) {
//     errors.name = 'ops you forgot your name'
//   }

//   if (!values.email) {
//     errors.email = ' ;)'
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//     errors.email = 'hm something went wrong..'
//   }

//   if (!values.message) {
//     errors.message = 'a short brief and we take it from there'
//   }

//   return errors
// }

// const FormGroup = styled.div`
//   margin-bottom: 0.5rem;
// `

// const FormLabel = styled.label`
//   display: block;
//   font-size: 1.2rem;
//   font-weight: 300;
//   margin-bottom: 0.5rem;
//   display: block;
//   color: #333;
// `

// const FormFi = styled.input`
//   display: block;
//   width: 100%;
//   padding: 0.5rem;
//   font-size: 1.2rem;
//   border: 1px solid #455158;
//   border-radius: 0.3rem

//   &:focus {
//     outline: none;
//     border-color: #455158;
//   }
// `
// const ErrorMsg = styled(ErrorMessage)`
//   color: #455158;
//   font-size: 0.8rem;
//   margin-top: 0.2rem;
// `

// const ContactFormContainer = styled.div`
//   .form-group:not(:last-child) {
//     margin-bottom: 1.5rem;
//     max-width: 700px;
//     margin: 0 auto;
//   }
// `
// const SubmitButtonContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 1.8rem;
//   margin-bottom: 8rem;
// `
// const SubmitButton = styled.button`
//   background-color: #26272a;
//   color: #e6e9ea;
//   font-size: 0.8rem;
//   padding: 0.6rem;
//   border: none;
//   border-radius: 0.3rem;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;

//   &:hover {
//     background-color: #2c302a;
//   }

//   &:disabled {
//     background-color: #6d9598;
//     cursor: not-allowed;
//   }
// `

// const ContactForm: FC = () => {
//   const navigate = useNavigate()

//   const { feedbackMessage } = useContext(FeedbackContext)

//   const handleSubmit: FormProps['onSubmit'] = (
//     values: FormValues,
//     { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
//   ) => {
//     setTimeout(() => {
//       alert(JSON.stringify(values, null, 2))
//       setSubmitting(false)
//       navigate('/thank-you')
//     }, 400)
//   }

//   return (
//     <ContactFormContainer>
//       <h1>Hello...</h1>
//       <Formik
//         initialValues={initialValues}
//         validate={validate}
//         onSubmit={handleSubmit}
//         // onSubmit={(values, { setSubmitting }) => {
//         //   console.log(values);
//         //   setSubmitting(false);}}
//       >
//         {({ dirty, isSubmitting, isValid, ...props }) => (
//           <Form onSubmit={props.handleSubmit}>
//             <FormGroup>
//               <FormLabel htmlFor="name">Namn</FormLabel>
//               <Field id="name" name="name" />
//               <ErrorMsg component="div" className="error" name="name" />
//             </FormGroup>
//             <FormGroup>
//               <FormLabel htmlFor="email">Email</FormLabel>
//               <Field id="email" name="email" type="email" />
//               <ErrorMsg component="div" className="error" name="email" />
//             </FormGroup>
//             <FormGroup>
//               <FormLabel htmlFor="subject">Ämne</FormLabel>
//               <Field id="subject" name="subject" />
//               <ErrorMsg component="div" className="error" name="subject" />
//             </FormGroup>
//             <FormGroup>
//               <FormLabel htmlFor="subject">Meddelande</FormLabel>
//               <FormFi>
//                 <Field id="message" name="message" />
//               </FormFi>
//               <ErrorMsg component="div" className="error" name="message" />
//             </FormGroup>
//             <SubmitButtonContainer>
//               <SubmitButton
//                 type="submit"
//                 disabled={!dirty || isSubmitting || !isValid}
//                 onClick={() =>
//                   console.log('disabled:', !dirty || isSubmitting || '!isValid')
//                 }
//               >
//                 Submit
//               </SubmitButton>
//             </SubmitButtonContainer>
//             <p>{feedbackMessage}</p>
//           </Form>
//         )}
//       </Formik>
//     </ContactFormContainer>
//   )
// }

// export default ContactForm

// interface FormValues {
//   userName: string
//   password: string
// }

// function FormikComp() {
//   return (
//     <Formik
//       initialValues={{ password: '', userName: '' }}
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//           setSubmitting(false)
//         }, 1000)
//       }}
//       validate={(values) => {
//         const errors: FormikErrors<FormValues> = {}

//         if (values.userName.trim() === '') {
//           errors.userName = 'User name cannot be empty'
//         }

//         if (values.password.trim() === '') {
//           errors.password = 'Password cannot be empty'
//         }
//         console.log(errors)
//         return errors
//       }}
//     >
//       {({ dirty, isSubmitting, isValid }) => (
//         <Form>
//           <label>
//             User name
//             <Field name="userName" />
//           </label>
//           <ErrorMessage component="span" name="userName" />
//           <label>
//             Password
//             <Field name="password" />
//           </label>
//           <ErrorMessage component="span" name="password" />
//           <input disabled={!dirty || isSubmitting || !isValid} type="submit" />
//         </Form>
//       )}
//     </Formik>
//   )
// }

// export default FormikComp

// import { Field, ErrorMessage, Form, Formik } from 'formik'

// function ContactForm() {
//   return (
//     <Formik
//       initialValues={{ password: '', userName: '' }}
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//           setSubmitting(false)
//         }, 1000)
//         console.log(values)
//       }}
//       validate={(values) => {
//         const errors = {}
//         console.log(errors)
//         if (values.userName.trim() === '') {
//           errors.userName = 'Username cannot be empty'
//         }

//         if (values.password.trim() === '') {
//           errors.password = 'Password cannot be empty'
//         }

//         return errors
//       }}
//     >
//       {({ dirty, isSubmitting, isValid }) => (
//         <Form>
//           <label>
//             Namn
//             <Field name="userName" />
//           </label>
//           <ErrorMessage component="span" name="userName" />
//           <label>
//             Password
//             <Field name="password" />
//           </label>
//           <ErrorMessage component="span" name="password" />
//           <input disabled={!dirty || isSubmitting || !isValid} type="submit" />
//         </Form>
//       )}
//     </Formik>
//   )
// }

// export default ContactForm

// function AboutMe() {
//   const heading = 'Om'
//   return (
//     <div className="App" id={heading}>
//       <h1>Om</h1>
//     </div>
//   )
// }
// export default ContactForm

// function ContactForm() {
//   const heading = 'Om'
//   return (
//     <div className="App" id={heading}>
//       <h1>Om</h1>
//     </div>
//   )
// }
// export default ContactForm
