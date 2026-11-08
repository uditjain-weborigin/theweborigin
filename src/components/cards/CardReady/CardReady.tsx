import { renderTextArea } from '@/helper/renderTextArea'

export function CardReady(data: any) {
  const { title, image } = data

  if (!(title || image)) return null

  return (
    <div
      className="oit-bin-to-card-item card-3 text-center item-overlay"
      data-background={image.url}
    >
      {title && <h4 className="oit-bin-to-card-title text-white">{renderTextArea(title)}</h4>}
    </div>
  )
}
