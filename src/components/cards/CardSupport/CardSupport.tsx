export function CardSupport(data: any) {
  const { title, subtitle, shape, image } = data

  if (!(title || subtitle || shape || image)) return null

  return (
    <div className="oit-bin-to-card-item card-3 grey-bg">
      {title && <h4 className="oit-bin-to-card-title">{title}</h4>}
      {subtitle && <span>{subtitle}</span>}
      {image && <img className="pl-10 pt-45" src={image.url} alt={image.alt} />}
      {shape && (
        <div className="oit-bin-to-card-shape-3">
          <img src={shape.url} alt={shape.alt} />
        </div>
      )}
    </div>
  )
}
