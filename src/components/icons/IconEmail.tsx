type IconProps = { size: number }

export function IconEmail({ size }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <rect x="1.5" y="3.5" width="17" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="m2.5 5 7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  )
}
