export function CardPlans(data: any) {
  const { title, subtitle, backgroundImage, image } = data

  if (!(title || subtitle || backgroundImage || image)) return null

  return (
    <div className="oit-bin-to-card-item grey-bg card-1 mb-30">
      {title && <h4 className="oit-bin-to-card-title">{title}</h4>}
      {subtitle && <span>{subtitle}</span>}
      {image && <img className="pt-55 pl-50" src={image.url} alt={image.alt} />}
      {backgroundImage && (
        <div className="oit-bin-to-card-shape-1">
          <img src={backgroundImage.url} alt={backgroundImage.alt} />
        </div>
      )}
    </div>
  )
}
