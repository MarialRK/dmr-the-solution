import { revalidatePath } from 'next/cache'
import type { CollectionAfterChangeHook, CollectionAfterDeleteHook, GlobalAfterChangeHook } from 'payload'

function refresh(paths: string[]) {
  try {
    paths.forEach((path) => revalidatePath(path, path.includes('[') ? 'page' : undefined))
  } catch {
    // Runs outside a Next.js request during start-up tasks; there is nothing to refresh then.
  }
}

export const refreshAfterChange =
  (paths: string[]): CollectionAfterChangeHook =>
  ({ doc }) => {
    refresh(paths)
    return doc
  }

export const refreshAfterDelete =
  (paths: string[]): CollectionAfterDeleteHook =>
  ({ doc }) => {
    refresh(paths)
    return doc
  }

export const refreshSiteAfterChange: GlobalAfterChangeHook = ({ doc }) => {
  try {
    revalidatePath('/', 'layout')
  } catch {
    // Runs outside a Next.js request during start-up tasks; there is nothing to refresh then.
  }
  return doc
}
