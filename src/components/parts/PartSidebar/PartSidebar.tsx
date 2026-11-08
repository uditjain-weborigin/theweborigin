'use client'

import { useEffect, useState } from 'react'
import { Icon } from '@/components/icons'
import { copyShareLink, shareU } from '@/helper/shareU'
import './PartSidebar.scss'
import { PartBtnArrowRight } from '../PartBtnArrowRight/PartBtnArrowRight'

export function PartSidebar({
  page,
  search = '',
  onSearch,
  onCategorySelect,
  selectedCategoryId = '',
}: any) {
  const [value, setValue] = useState(search)
  const [categories, setCategories] = useState<any[]>([])
  const [recentPosts, setRecentPosts] = useState<any[]>([])
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    const loadCategories = async () => {
      try {
        const response = await fetch('/api/posts/categories', {
          signal: controller.signal,
        })
        if (!response.ok) return
        const result = await response.json()
        setCategories(result.docs ?? [])
      } catch {}
    }

    const loadRecentPosts = async () => {
      try {
        const response = await fetch('/api/posts/recent?number=4', { signal: controller.signal })
        if (!response.ok) return
        const result = await response.json()
        setRecentPosts(result.docs ?? [])
      } catch {}
    }

    void loadCategories()
    void loadRecentPosts()
    return () => controller.abort()
  }, [])

  return (
    <div className="postbox-sidebar right-sidebar">
      {page?.isArchive && (
        <div className="sidebar-widget mb-40">
          <h4 className="sidebar-widget-title mb-25">Search here:</h4>
          <form
            className="sidebar-search-box p-relative"
            onSubmit={(event) => {
              event.preventDefault()
              onSearch?.(value)
            }}
          >
            <div className="sidebar-search-input">
              <input
                type="search"
                name="q"
                placeholder="Search here"
                value={value}
                onChange={(event) => setValue(event.target.value)}
              />
            </div>
            <div className="sidebar-search-button">
              <button type="submit" aria-label="Search posts">
                <Icon size={17} iconKey="search" />
              </button>
            </div>
          </form>
        </div>
      )}
      {page?.isArchive && categories?.length && (
        <div className="sidebar-widget mb-40">
          <h4 className="sidebar-widget-title mb-25">Category</h4>
          <div className="sidebar-widget-list-wrap">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={`sidebar-widget-list category-filter${selectedCategoryId === category.id ? ' is-selected' : ''}`}
                aria-pressed={selectedCategoryId === category.id}
                onClick={() =>
                  onCategorySelect?.(selectedCategoryId === category.id ? '' : category.id)
                }
              >
                <span>
                  {selectedCategoryId === category.id && <span aria-hidden="true">&times;</span>}
                  {category.title}
                </span>
                <em>{category.postCount ?? 0}</em>
              </button>
            ))}
          </div>
        </div>
      )}
      <div className="sidebar-widget mb-40">
        <h4 className="sidebar-widget-title mb-25">Recent post</h4>
        <div className="sidebar-widget-content">
          <div className="sidebar-widget-post">
            <ul>
              {recentPosts.map((post) => {
                if (post.id === page.id) return null
                return (
                  <li key={post.id}>
                    <div className="rc-post">
                      {post.thumbnail?.url && (
                        <div className="rc-post-thumb">
                          <a href={`/posts/${post.slug}`}>
                            <img src={post.thumbnail.url} alt={post.thumbnail.alt ?? post.title} />
                          </a>
                        </div>
                      )}
                      <div className="rc-post-content">
                        <div className="rc-meta mb-5">
                          <span>
                            {new Date(post.createdAt).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                              timeZone: 'UTC',
                            })}
                          </span>
                        </div>
                        <h3 className="rc-post-title">
                          <a href={`/posts/${post.slug}`}>{post.title}</a>
                        </h3>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
      {page?.isSingle && (
        <div className="sidebar-widget">
          <div className="sideba-widge-title-box">
            <h3 className="sidebar-widget-title sm-border mb-35">Share Post</h3>
            <div className="sidebar-widget-list-wrap">
              {shareU.map(({ name, getHref }) => (
                <a
                  key={name}
                  href="#"
                  onClick={(event) => {
                    event.preventDefault()
                    window.open(getHref(window.location.href), '_blank', 'noopener,noreferrer')
                  }}
                >
                  <div className="sidebar-widget-list">
                    {name}
                    <span>
                      <PartBtnArrowRight />
                    </span>
                  </div>
                </a>
              ))}
              <button
                type="button"
                className="sidebar-widget-list"
                onClick={() => copyShareLink().then(() => setCopied(true))}
              >
                {copied ? 'Copied!' : 'Copy link'}
                <span>
                  <PartBtnArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
