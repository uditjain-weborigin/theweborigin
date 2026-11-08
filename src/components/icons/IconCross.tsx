type IconProps = {
  size: number
}

export function IconCross({ size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M16.7707 10.5727H10.5727V16.7707C10.5727 17.5758 9.91959 18.229 9.11449 18.229C8.3094 18.229 7.65625 17.5758 7.65625 16.7707V10.5727H1.45824C0.653152 10.5727 0 9.91959 0 9.11449C0 8.3094 0.653152 7.65625 1.45824 7.65625H7.65625V1.45824C7.65625 0.653152 8.3094 0 9.11449 0C9.91959 0 10.5727 0.653152 10.5727 1.45824V7.65625H16.7707C17.5758 7.65625 18.229 8.3094 18.229 9.11449C18.229 9.91959 17.5758 10.5727 16.7707 10.5727Z"
        fill="currentcolor"
      />
    </svg>
  )
}
