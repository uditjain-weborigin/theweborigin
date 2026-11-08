'use client'
import { useRowLabel } from '@payloadcms/ui'

export const CustomRowLabel = () => {
  const { data } = useRowLabel<{ label?: string; title?: string; usp?: string }>()

  return <span>{data?.label || data?.title || data?.usp || 'Item'}</span>
}
