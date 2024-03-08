import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `${name}`,
      providesTags: ["Posts"],
    }),
    deleteTodo: builder.mutation({
      query: (postId) => ({
        url: `/data/${postId}`,
        method: "DELETE",

        headers: { accept: "application/json" },
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi;
