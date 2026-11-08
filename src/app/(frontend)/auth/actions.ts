'use server'

import { getPayload } from 'payload'
import config from '@/payload.config'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!email || !password) {
    return { error: 'Email and password are required' }
  }

  const payload = await getPayload({ config })

  let success = false
  try {
    const result = await payload.login({
      collection: 'users',
      data: {
        email,
        password,
      },
    })

    if (result.token) {
      const cookieStore = await cookies()
      cookieStore.set('payload-token', result.token, {
        path: '/',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
      })
      success = true
    }
  } catch (error: any) {
    return { error: 'Invalid email or password' }
  }

  if (success) {
    redirect('/')
  }
}

export async function signup(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const confirmPassword = formData.get('confirmPassword') as string

  if (!email || !password) {
    return { error: 'Email and password are required' }
  }

  if (password !== confirmPassword) {
    return { error: 'Passwords do not match' }
  }

  const payload = await getPayload({ config })

  try {
    // This creates a user. The 'role' is required by types,
    // but our hook in Users.ts will override it to 'admin' for the first user.
    await payload.create({
      collection: 'users',
      data: {
        email,
        password,
        role: 'user',
      },
    })

    // After signup, automatically login
    return login(formData)
  } catch (error: any) {
    return { error: 'Signup failed. Email might already exist.' }
  }
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete('payload-token')
  redirect('/login')
}
