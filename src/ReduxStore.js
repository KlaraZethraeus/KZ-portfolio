// import { createSlice, configureStore } from '@reduxjs/toolkit'
// import imageReducer from './ImageReducer'

// type ImageData = {
//   name: string
//   src: string
//   id: string
// }

// type ImagesState = {
//   data: ImageData[]
//   loading: boolean
//   error: string | null
// }

// const initialState: ImagesState = {
//   data: [],
//   loading: false,
//   error: null,
// }

// const imagesSlice = createSlice({
//   name: 'images',
//   initialState,
//   reducers: {
//     imagesRequested(state) {
//       state.loading = true
//       state.error = null
//     },
//     imagesReceived(state, action) {
//       state.data = action.payload
//       state.loading = false
//       state.error = null
//     },
//     imagesRequestFailed(state, action) {
//       state.loading = false
//       state.error = action.payload as string
//     },
//   },
// })

// export const { imagesRequested, imagesReceived, imagesRequestFailed } =
//   imagesSlice.actions

// export const selectImages = (state: { images: ImagesState }) =>
//   state.images.data
// export const selectImagesLoading = (state: { images: ImagesState }) =>
//   state.images.loading
// export const selectImagesError = (state: { images: ImagesState }) =>
//   state.images.error

// export const fetchImages = () => async (dispatch: any) => {
//   dispatch(imagesRequested())

//   try {
//     const response = await fetch(`${process.env.PUBLIC_URL}/graphic-img.json`)
//     const data = await response.json()
//     dispatch(imagesReceived(data))
//   } catch (error) {
//     const errorMessage = typeof error === 'string' ? error : 'An error occurred'
//     dispatch(imagesRequestFailed(errorMessage))
//   }
// }

// const ReduxStore = configureStore({
//   reducer: {
//     images: imageReducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
// })

// export default ReduxStore
