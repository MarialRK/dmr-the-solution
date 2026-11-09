import type { Access } from 'payload'

export const isLoggedIn: Access = ({ req }) => Boolean(req.user)

export const publishedOrLoggedIn: Access = ({ req }) =>
  req.user ? true : { published: { equals: true } }
