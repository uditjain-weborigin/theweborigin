'use client'

import { useFormFields } from '@payloadcms/ui'

export const CustomWelcomeLabel = () => {
  const style = useFormFields(([fields]) => fields['welcome.style']?.value) as String
  const styleLabel = style
    ? style
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, (letter) => letter.toUpperCase())
    : null

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
      <span>Welcome</span>
      {styleLabel && <span style={{ opacity: 0.7 }}>( {styleLabel} )</span>}
    </span>
  )
}
