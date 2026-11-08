export function Brands({ block, page }: any) {
  const { style, backgroundImage, images } = block || page

  if (!(backgroundImage || images)) return null

  const bg = backgroundImage
    ? {
        backgroundImage: `url("${backgroundImage.url}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
      }
    : undefined

  return (
    <section className="container" style={bg}>
      <div className={`brand-area pt-150 pb-115 ${style == 'dark' && 'brand-style-2'}`}>
        <div className="row row-cols-xl-6 row-cols-lg-4 row-cols-md-3 row-cols-2 row-cols-sm-3 gx-25 align-items-center">
          {images?.map((item: any) => (
            <div key={item.id} className="col">
              <div className="brand-item">{item && <img src={item.url} alt={item.alt} />}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
