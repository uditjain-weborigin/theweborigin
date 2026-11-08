import { renderTextArea } from '@/helper/renderTextArea'

export function CardStep(data: any) {
  const { title, text, i } = data
  const step = String(i).padStart(2, '0')

  if (!(title || text)) return null

  return (
    <div className="dg-step-item p-relative mb-35">
      <h4 className="dg-step-big-text">{step}</h4>
      <span>Step - {step}</span>
      {title && <h4 className="dg-step-title">{title}</h4>}
      {text && <p>{renderTextArea(text)}</p>}
    </div>
  )
}
