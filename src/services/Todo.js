// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ["Ehson"],
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: () => `data`,
      providesTags: ["Ehson"],
    }),
    deletePokemon: builder.mutation({
      query: (postId) => ({
        url: `/data/${postId}`,
        method: "DELETE",

        headers: { accept: "application/json" },
      }),
      invalidatesTags: ["Ehson"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery, useDeletePokemonMutation } =
  pokemonApi;
