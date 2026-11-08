import type { Page } from '@/payload-types'
import { Content } from './sections/Content/Content'
import { About } from './sections/About/About'
import { FunFact } from './sections/FunFact/FunFact'
import { Project } from './sections/Project/Project'
import { Service } from './sections/Service/Service'
import { Bento } from './sections/Bento/Bento'
import { Testimonial } from './sections/Testimonial/Testimonial'
import { Team } from './sections/Team/Team'
import { Award } from './sections/Award/Award'
import { Contact } from './sections/Contact/Contact'
import { Blog } from './sections/Blog/Blog'
import { Fix } from './sections/Fix/Fix'
import { Brands } from './sections/Brands/Brands'
import { ServicesPanel } from './sections/ServicesPanel/ServicesPanel'
import { FaqArea } from './sections/FaqArea/FaqArea'
import { Broadcast } from './sections/Broadcast/Broadcast'
import { Connect } from './sections/Connect/Connect'
import { ContactDetails } from './sections/ContactDetails/ContactDetails'

type FlexLayout = {
  layout: Page['layout']
  welcome: any
  content: any
  excerpt: any
}

export function Flexible(params: FlexLayout) {
  const { layout, welcome, content, excerpt, ...rest } = params
  if (!layout) return null

  return (
    <>
      {layout.map((block) => {
        if (block.blockType === 'content') {
          return <Content key={block.id} block={block} page={rest} />
        }

        if (block.blockType === 'about') {
          return <About key={block.id} block={block} page={rest} />
        }

        if (block.blockType === 'fun-fact') {
          return <FunFact key={block.id} block={block} page={rest} />
        }

        if (block.blockType === 'project') {
          return <Project key={block.id} block={block} page={rest} />
        }

        if (block.blockType === 'service') {
          return <Service key={block.id} block={block} page={rest} />
        }

        if (block.blockType === 'fix') {
          return <Fix key={block.id} block={block} page={rest} />
        }

        if (block.blockType === 'brands') {
          return <Brands key={block.id} block={block} page={rest} />
        }

        if (block.blockType === 'bento') {
          return <Bento key={block.id} block={block} page={rest} />
        }

        if (block.blockType === 'testimonial') {
          return <Testimonial key={block.id} block={block} page={rest} />
        }

        if (block.blockType === 'team') {
          return <Team key={block.id} block={block} page={rest} />
        }

        if (block.blockType === 'award') {
          return <Award key={block.id} block={block} page={rest} />
        }

        if (block.blockType === 'contact') {
          return <Contact key={block.id} block={block} page={rest} />
        }

        if (block.blockType === 'blog') {
          return <Blog key={block.id} block={block} page={rest} />
        }

        if (block.blockType === 'servicePanel') {
          return <ServicesPanel key={block.id} block={block} page={rest} />
        }

        if (block.blockType === 'faq-area') {
          return <FaqArea key={block.id} block={block} page={rest} />
        }

        if (block.blockType === 'broadcast') {
          return <Broadcast key={block.id} block={block} page={rest} />
        }

        if (block.blockType === 'connect') {
          return <Connect key={block.id} block={block} page={rest} />
        }

        if (block.blockType === 'contactDetail') {
          return <ContactDetails key={block.id} block={block} page={rest} />
        }

        return null
      })}
    </>
  )
}
