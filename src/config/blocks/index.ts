import type { Block, Field } from 'payload'
import { AboutBlock } from '@/config/blocks/AboutBlock'
import { AwardBlock } from '@/config/blocks/AwardBlock'
import { BentoBlock } from '@/config/blocks/BentoBlock'
import { BlogBlock } from '@/config/blocks/BlogBlock'
import { BrandsBlock } from '@/config/blocks/BrandsBlock'
import { ContactBlock } from '@/config/blocks/ContactBlock'
import { ContentBlock } from '@/config/blocks/ContentBlock'
import { FixBlock } from '@/config/blocks/FixBlock'
import { FunFactBlock } from '@/config/blocks/FunFactBlock'
import { ProjectBlock } from '@/config/blocks/ProjectBlock'
import { ServiceBlock } from '@/config/blocks/ServiceBlock'
import { ServicePanelBlock } from '@/config/blocks/ServicePanelBlock'
import { TeamBlock } from '@/config/blocks/TeamBlock'
import { TestimonialBlock } from '@/config/blocks/TestimonialBlock'
import { FaqAreaBlock } from './FaqAreaBlock'
import { BroadcastBlock } from './BroadcastBlock'
import { ConnectBlock } from './ConnectBlock'
import { ContactDetailBlock } from './ContactDetailBlock'

export const Blocks: Block[] = [
  ContentBlock,
  AboutBlock,
  FunFactBlock,
  ProjectBlock,
  ServiceBlock,
  FixBlock,
  BrandsBlock,
  BentoBlock,
  TestimonialBlock,
  TeamBlock,
  AwardBlock,
  ContactBlock,
  BlogBlock,
  ServicePanelBlock,
  FaqAreaBlock,
  BroadcastBlock,
  ConnectBlock,
  ContactDetailBlock,
]

export const Layout: Field = {
  name: 'layout',
  type: 'blocks',
  blocks: Blocks,
}
