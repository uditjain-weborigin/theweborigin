export const formatPhone = (phone: string | null | undefined): string => {
  if (!phone) return ''

  const digits = phone.replace(/\D/g, '')
  return phone.trimStart().startsWith('+') ? `+${digits}` : digits
}