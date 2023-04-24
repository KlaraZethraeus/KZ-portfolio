import React, { createContext, useState } from 'react'

interface SignupProviderProps {
  children: React.ReactNode
}

interface FormData {
  firstName: string
  lastName: string
  email: string
  jobType: string
}

interface SignupContextValue {
  formData: FormData | null
  setFormData: React.Dispatch<React.SetStateAction<FormData | null>>
}

export const SignupContext = createContext<SignupContextValue>({
  formData: null,
  setFormData: () => {},
})

export const SignupProvider = ({ children }: SignupProviderProps) => {
  const [formData, setFormData] = useState<FormData | null>(null)

  return (
    <SignupContext.Provider value={{ formData, setFormData }}>
      {children}
    </SignupContext.Provider>
  )
}

// import React, { createContext, useState } from 'react'

// interface UserProviderProps {
//   children: React.ReactNode
// }

// interface UserData {
//   name: string
//   email: string
//   age: number
// }

// interface UserContextValue {
//   userData: UserData | null
//   saveUserData: (data: UserData) => void
// }
// export const UserContext = createContext<UserContextValue | null>(null)

// export const UserProvider = ({ children }: UserProviderProps) => {
//   const [userData, setUserData] = useState<UserData | null>(null)

//   const saveUserData = (data: UserData) => {
//     setUserData(data)
//   }

//   return (
//     <UserContext.Provider value={{ userData, saveUserData }}>
//       {children}
//     </UserContext.Provider>
//   )
// }
