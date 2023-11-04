import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type User = {
  id: string;
  title: string;
  content: string;
  time: string;
};

type Delete = {
  id: string;
};

export const userApi = createApi({
  reducerPath: "userApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], []>({
      query: () => "list",
    }),
    getDelete: builder.query<Delete, string>({
      query: (id) => `delete/${id}`,
    }),
  }),
});

export const { useGetUsersQuery, useGetDeleteQuery } = userApi;
