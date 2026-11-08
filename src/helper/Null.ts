export default function __(value: any) {
  return value == null || value === '' || (Array.isArray(value) && !value.length) ? null : value
}
