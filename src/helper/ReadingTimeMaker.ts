import type { CollectionBeforeChangeHook } from 'payload'

const WORDS_PER_MINUTE = 200

const getText = (value: unknown): string => {
  if (!value || typeof value !== 'object') return ''

  if (Array.isArray(value)) return value.map(getText).filter(Boolean).join(' ')

  const node = value as { text?: unknown; [key: string]: unknown }
  if (typeof node.text === 'string') return node.text

  return Object.values(node).map(getText).filter(Boolean).join(' ')
}

export const ReadingTimeMaker: CollectionBeforeChangeHook = ({ data, originalDoc }) => {
  const content = getText(data?.content ?? originalDoc?.content)
  const words = content.trim().match(/\S+/g)?.length ?? 0
  const seconds = Math.ceil((words / WORDS_PER_MINUTE) * 60)
  return {
    ...data,
    readingTime: String(seconds),
  }
}
