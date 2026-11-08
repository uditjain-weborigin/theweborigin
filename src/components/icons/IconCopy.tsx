type IconProps = { size: number }

export function IconCopy({ size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="6.5" y="6.5" width="11" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13.5 4.5V3A1.5 1.5 0 0 0 12 1.5H3A1.5 1.5 0 0 0 1.5 3v10A1.5 1.5 0 0 0 3 14.5h1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
