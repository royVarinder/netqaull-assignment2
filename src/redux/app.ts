import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//this api will fetch all images & images by Id (single images) ====>
export const getImages = createApi({
    //making base url
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.slingacademy.com/",

    }),
    //defining end points of the api
    endpoints: (builder) => ({
        //end point for get all images ===>
        getAllImages: builder.query({ query: () => "v1/sample-data/photos" }),
        //end point for get image by id ===>
        getImageById: builder.query({
            query: (imageId) => {
                return `v1/sample-data/photos/${imageId}`
            }
        })

        // getAllImages: builder.query({ query: () => "v1/sample-data/photos" })
    })
})

export const { useGetAllImagesQuery, useGetImageByIdQuery } = getImages;