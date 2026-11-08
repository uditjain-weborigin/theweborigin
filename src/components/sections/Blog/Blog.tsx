import { CardPost } from '@/components/cards/CardPost/CardPost'
import { getCollection } from '@/helper/fetch'

export async function Blog({ block }: any) {
  const { id, tag, title } = block

  const posts = await getCollection(
    {
      collection: 'posts',
      limit: 3,
    },
    block.posts,
  )

  if (!(tag || title || posts)) return null

  return (
    <section key={id} className="oit-blog-area pt-120 pb-90">
      <div className="container">
        {tag && (
          <div className="row">
            <div className="col-xl-2">
              <div className="oit-section-subtitle-box mb-30 text-center text-lg-start">
                <span className="oit-section-subtitle">{tag}</span>
              </div>
            </div>
          </div>
        )}
        {title && (
          <div className="row">
            <div className="offset-xl-2 col-xl-10">
              <div className="oit-section-title-box pl-70 mb-100 text-center text-lg-start">
                <h3 className="oit-section-title oit-title-revel">{title}</h3>
              </div>
            </div>
          </div>
        )}
        {posts && (
          <div className="row">
            {posts.map((item: any, i: number) => {
              return (
                <div key={item.id} className="col-xl-4 col-lg-6">
                  <CardPost i={i} {...item} />
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
