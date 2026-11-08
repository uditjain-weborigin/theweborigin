'use client'

import { useEffect, useState } from 'react'
import { PartSidebar } from '@/components/parts/PartSidebar/PartSidebar'
import { CardBlog } from '@/components/cards/CardBlog/CardBlog'
import __ from '@/helper/Null'

export function Posts({ page, collection, search = '' }: any) {
  const [query, setQuery] = useState(search)
  const [categoryId, setCategoryId] = useState('')
  const [posts, setPosts] = useState(collection)
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    const normalizedQuery = query.trim()
    if (!categoryId && !normalizedQuery) {
      setPosts(collection)
      setIsSearching(false)
      return
    }

    const controller = new AbortController()
    setIsSearching(true)

    const searchPosts = async () => {
      try {
        const params = new URLSearchParams()
        if (normalizedQuery) params.set('q', normalizedQuery)
        if (categoryId) params.set('categoryId', categoryId)
        const response = await fetch(`/api/posts/search?${params.toString()}`, {
          signal: controller.signal,
        })
        if (!response.ok) throw new Error('Post search failed')
        const result = await response.json()
        setPosts(result.docs)
      } catch {
        if (!controller.signal.aborted) setPosts([])
      } finally {
        if (!controller.signal.aborted) setIsSearching(false)
      }
    }

    void searchPosts()

    return () => {
      controller.abort()
    }
  }, [collection, query, categoryId])

  return (
    <div className="postbox-area blog-standard-style pt-140 pb-150">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-8">
            {isSearching ? (
              <h2 className="sidebar-widget-title">Searching posts...</h2>
            ) : __(posts) ? (
              <div className="postbox-left" data-bg-color="#101216">
                {posts.map((item: any) => (
                  <CardBlog key={item.id} data={item} />
                ))}
              </div>
            ) : (
              <h2 className="sidebar-widget-title">
                {query.trim() || categoryId ? 'No matching posts.' : 'No Posts : )'}
              </h2>
            )}
          </div>
          <div className="col-xl-3 col-lg-4">
            <PartSidebar
              page={page}
              search={query}
              selectedCategoryId={categoryId}
              onSearch={(value: string) => {
                setQuery(value)
              }}
              onCategorySelect={(id: string) => {
                setCategoryId(id)
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
