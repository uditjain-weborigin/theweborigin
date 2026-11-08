import { renderTextArea } from '@/helper/renderTextArea'

export function CardFunFact(data: any) {
  const { i, label, number, symbol, subtitle, image } = data

  return (
    <div
      className={`sd-funfact-card d-flex flex-column justify-content-between mb-30 fade-anim ${i % 2 && 'sd-content-white'}`}
      data-delay={`${0.3 + i * 0.2}`}
      data-bg-color={i % 2 ? '#0D0D0D' : '#101216'}
    >
      {image && <img className="sd-funfact-shape-1" src={image.url} alt={image.alt} />}
      {label && <span className="text-start">{label}</span>}
      {(number || symbol || subtitle) && (
        <div className="ba-funfact-content d-flex justify-content-between align-items-center">
          {(number || symbol) && <h4 className="sd-funfact-title">{`${number}${symbol}`}</h4>}
          {subtitle && <p>{renderTextArea(subtitle)}</p>}
        </div>
      )}
    </div>
  )
}
