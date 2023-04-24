// import { createSlice } from '@reduxjs/toolkit'

// interface ImagesState {
//   data: ImageData[]
//   loading: boolean
//   error: string | null
// }

// // export interface ImageState {
// //   images: string[]
// // }

// const initialState: ImagesState = {
//   data: [],
//   loading: false,
//   error: null,
// }
// const imageSlice = createSlice({
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
//   imageSlice.actions

// const ImageReducer = imageSlice.reducer

// export default ImageReducer
// export const imageSlice = createSlice({
//   name: 'image',
//   initialState,
//   reducers: {
//     addImage: (state, action) => {
//       state.images.push(action.payload)
//     },
//     clearImages: (state) => {
//       state.images = []
//     },
//   },
// })

// export const { addImage, clearImages } = imageSlice.actions

// export const selectImages = (state: CombinedState<{ images: ImagesState }>) =>
//   state.images.data
// export default imageSlice.reducer
