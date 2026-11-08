import { CardTestimonial } from '@/components/cards/CardTestimonial/CardTestimonial'
import { getCollection } from '@/helper/fetch'

export async function Testimonial({ block }: any) {
  let { tag, title, subtitle, image, testimonials } = block || {}

  testimonials = await getCollection({ collection: 'testimonials', limit: 12 }, testimonials)

  if (!(tag || title || subtitle || image || testimonials)) return null

  return (
    <section className="dg-testimonial-area rotate-section p-relative pt-150 pb-150 z-index-1">
      {image && (
        <div className="dg-testimonial-shape d-none d-lg-block">
          <img className="rotate-on-scroll" src={image.url} alt={image.alt} />
        </div>
      )}
      <div className="container">
        {tag && (
          <div className="row">
            <div className="col-xl-2">
              <div className="oit-section-subtitle-box text-center text-lg-start">
                <span className="oit-section-subtitle">{tag}</span>
              </div>
            </div>
          </div>
        )}
        {(title || subtitle) && (
          <div className="row">
            <div className="offset-xl-1 col-xl-10">
              <div className="oit-section-title-box pl-70 mb-90 text-center text-lg-start">
                <h3 className="oit-section-title oit-title-revel">
                  {title}
                  {subtitle && (
                    <>
                      <br />
                      <span className="pl-265">{subtitle}</span>
                    </>
                  )}
                </h3>
              </div>
            </div>
          </div>
        )}
        {testimonials && (
          <div className="row">
            <div className="col-12">
              <div className="dg-testimonial-wrapper">
                <div className="swiper-container dg-testimonial-active">
                  <div className="swiper-wrapper">
                    {testimonials?.map((item: any) => (
                      <div key={item.id} className="swiper-slide">
                        <CardTestimonial {...item} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
