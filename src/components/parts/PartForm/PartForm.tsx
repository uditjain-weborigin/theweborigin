'use client'

import { useState } from 'react'

function getText(value: any): string {
  if (Array.isArray(value)) return value.map(getText).join('')
  if (typeof value !== 'object' || value === null) return ''
  const children = Array.isArray(value.children) ? value.children.map(getText).join('') : ''
  return `${value.text || ''}${children}${value.type === 'paragraph' ? '\n' : ''}`
}

export function PartForm({ form }: { form: any }) {
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: any) {
    event.preventDefault()
    setError('')
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    const submissionData = (form.fields || [])
      .filter((field: any) => field.blockType !== 'message')
      .map((field: any) => ({
        field: field.name,
        value:
          field.blockType === 'checkbox'
            ? String(formData.has(field.name))
            : String(formData.get(field.name) || ''),
      }))

    try {
      const response = await fetch('/api/form-submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ form: form.id, submissionData }),
      })
      const result: any = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'The form could not be submitted.')
      }

      if (form.confirmationType === 'redirect' && form.redirect?.url) {
        const url = new URL(form.redirect.url, window.location.href)
        if (url.protocol !== 'http:' && url.protocol !== 'https:') {
          throw new Error('This form has an invalid confirmation URL.')
        }
        window.location.assign(url.toString())
        return
      }

      setSubmitted(true)
    } catch (error: any) {
      setError(error.message || 'The form could not be submitted.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <p role="status">
        {getText(form.confirmationMessage).trim() || 'Thank you for your submission.'}
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row gx-25">
        {(form.fields || []).map((field: any, index: number) => {
          const id = `contact-${form.id}-${field.id || field.name || index}`
          const label = field.label || field.name
          const required = Boolean(field.required)
          const columns = field.width
            ? Math.min(12, Math.max(1, Math.round((field.width / 100) * 12)))
            : 12
          const columnClass = `col-12${columns < 12 ? ` col-md-${columns}` : ''}`

          if (field.blockType === 'message') {
            return (
              <p className="col-12 mb-30" key={id}>
                {getText(field.message)}
              </p>
            )
          }

          if (field.blockType === 'checkbox') {
            return (
              <div className={`${columnClass} mb-30`} key={id}>
                <label htmlFor={id}>
                  <input
                    id={id}
                    name={field.name}
                    type="checkbox"
                    defaultChecked={field.defaultValue}
                    required={required}
                  />{' '}
                  {label}
                  {required && ' *'}
                </label>
              </div>
            )
          }

          const labelElement = (
            <label htmlFor={id}>
              {label}
              {required && ' *'}
            </label>
          )

          return (
            <div className={columnClass} key={id}>
              {field.blockType === 'radio' ? (
                <fieldset className="dg-contact-input-box mb-30">
                  <legend>
                    {label}
                    {required && ' *'}
                  </legend>
                  {(field.options || []).map((option: any) => (
                    <label className="d-block" htmlFor={`${id}-${option.value}`} key={option.value}>
                      <input
                        id={`${id}-${option.value}`}
                        name={field.name}
                        type="radio"
                        value={option.value}
                        defaultChecked={option.value === field.defaultValue}
                        required={required}
                      />{' '}
                      {option.label}
                    </label>
                  ))}
                </fieldset>
              ) : (
                <div
                  className={`${field.blockType === 'textarea' ? 'dg-contact-textarea-box mb-70' : 'dg-contact-input-box mb-65'}`}
                >
                  {labelElement}
                  {field.blockType === 'textarea' ? (
                    <textarea
                      id={id}
                      name={field.name}
                      defaultValue={field.defaultValue || ''}
                      required={required}
                    />
                  ) : field.blockType === 'select' ? (
                    <div className="dg-contact-select">
                      <select
                        id={id}
                        name={field.name}
                        defaultValue={field.defaultValue || ''}
                        required={required}
                      >
                        <option value="">
                          {field.placeholder || `Select ${label.toLowerCase()}`}
                        </option>
                        {(field.options || []).map((option: any) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  ) : (
                    <input
                      id={id}
                      name={field.name}
                      type={
                        field.blockType === 'email'
                          ? 'email'
                          : field.blockType === 'number'
                            ? 'number'
                            : field.blockType === 'date'
                              ? 'date'
                              : 'text'
                      }
                      defaultValue={field.defaultValue || ''}
                      required={required}
                    />
                  )}
                </div>
              )}
            </div>
          )
        })}

        <div className="col-12">
          {error && (
            <p className="mb-20" role="alert">
              {error}
            </p>
          )}
          <button
            type="submit"
            className="oit-btn-border btn-large btn-white-bg d-inline-flex justify-content-center align-items-center w-100"
            disabled={isSubmitting}
          >
            <span>
              <span className="text-1">
                {isSubmitting ? 'Sending...' : form.submitButtonLabel || 'Send inquiry'}
              </span>
              <span className="text-2">
                {isSubmitting ? 'Sending...' : form.submitButtonLabel || 'Send inquiry'}
              </span>
            </span>
          </button>
        </div>
      </div>
    </form>
  )
}
