export function CardBuild(data: any) {
  const { title, subtitle, image } = data

  if (!(title || subtitle || image)) return null

  return (
    <div className="oit-bin-to-card-item card-3 grey-bg">
      {title && <h4 className="oit-bin-to-card-title">{title}</h4>}
      {subtitle && <span>{subtitle}</span>}
      {image && <img className="text-center pt-30" src={image.url} alt={image.alt} />}
    </div>
  )
}
