import type { GlobalBeforeChangeHook } from 'payload'

export const ArchiveTimestampMaker: GlobalBeforeChangeHook = ({ data, originalDoc }) => {
  const now = new Date().toISOString()

  return {
    ...data,
    createdAt: originalDoc?.createdAt ?? data?.createdAt ?? now,
    updatedAt: now,
  }
}
