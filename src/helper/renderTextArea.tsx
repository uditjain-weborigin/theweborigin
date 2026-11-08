import { Fragment, type ReactNode } from 'react'

export function renderTextArea(text?: string | null): ReactNode {
  if (!text) return null

  return text.split(/\r?\n/).map((line, index) => (
    <Fragment key={index}>
      {index > 0 && <br />}
      {line}
    </Fragment>
  ))
}
