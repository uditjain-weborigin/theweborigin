'use client'

import { LinkIcon, useRowLabel } from '@payloadcms/ui'

export const LinkLabel = ({ groupName }: { groupName: string }) => {
  const { data } = useRowLabel<unknown>()
  const group = (data as Record<string, { label?: string }> | undefined)?.[groupName]

  return (
    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
      <LinkIcon /> {group?.label || 'Link'}
    </span>
  )
}
