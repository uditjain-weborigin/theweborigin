import { CardFunFact } from '@/components/cards/CardFunFact/CardFunFact'

export function FunFact({ block }: any) {
  const { shape, usps } = block

  if (!(shape || usps)) return null

  return (
    <section className="sd-funfact-area ba-funfact-style p-relative rotate-section pt-60 pb-70">
      {shape && (
        <img
          className="sd-funfact-shape-3 d-none d-xl-block rotate-on-scroll"
          src={shape.url}
          alt={shape.alt}
        />
      )}
      {usps && (
        <div className="container">
          <div className="row align-items-end">
            {usps.map((item: any, i: number) => (
              <div key={item.id} className="col-xxl-3 col-xl-4 col-md-6">
                <CardFunFact i={i} {...item} />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
