import { cookies } from 'next/headers'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { redirect } from 'next/navigation'
import type { User } from '@/payload-types'
import Link from 'next/link'
import '../auth/auth.scss'

export default async function ProfilePage() {
  const cookieStore = await cookies()
  const token = cookieStore.get('payload-token')?.value

  if (!token) {
    redirect('/login')
  }

  const payload = await getPayload({ config })
  const { user } = await payload.auth({
    headers: new Headers({
      Authorization: `JWT ${token}`,
    }),
  })

  if (!user) {
    redirect('/login')
  }

  const currentUser = user as User

  return (
    <div className="auth-container" style={{ paddingTop: '80px' }}>
      <div className="auth-card">
        <h1>Account Profile</h1>
        
        <div style={{ marginBottom: '24px' }}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ color: '#999', fontSize: '14px' }}>Email</label>
            <p style={{ fontSize: '18px', fontWeight: '600', margin: '4px 0' }}>{currentUser.email}</p>
          </div>
          
          <div style={{ marginBottom: '16px' }}>
            <label style={{ color: '#999', fontSize: '14px' }}>Account Type</label>
            <p style={{ 
              fontSize: '14px', 
              fontWeight: '700', 
              textTransform: 'uppercase',
              background: currentUser.role === 'admin' ? '#4CAF50' : '#2196F3',
              display: 'inline-block',
              padding: '2px 8px',
              borderRadius: '4px',
              margin: '4px 0'
            }}>
              {currentUser.role}
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {currentUser.role === 'admin' && (
            <Link 
              href="/admin" 
              style={{ 
                textAlign: 'center', 
                padding: '12px', 
                background: '#333', 
                borderRadius: '6px',
                textDecoration: 'none',
                color: '#fff',
                fontWeight: '600'
              }}
            >
              Go to Admin Panel
            </Link>
          )}
          
          <Link 
            href="/" 
            style={{ 
              textAlign: 'center', 
              fontSize: '14px', 
              color: '#666',
              textDecoration: 'none',
              marginTop: '12px'
            }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
