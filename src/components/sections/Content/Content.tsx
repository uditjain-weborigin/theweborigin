import { RichText } from '@payloadcms/richtext-lexical/react'

export function Content({ block, page }: any) {
  const { content } = block || page

  if (!content) return null

  return (
    <section className="content">
      <div className="container">
        <RichText data={content} />
      </div>
    </section>
  )
}
