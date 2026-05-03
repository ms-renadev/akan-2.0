import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../features/auth/AuthContext'

const roles = ['Student', 'Professor', 'Guest']

export default function Login() {
  const [role, setRole] = useState('Student')
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    login({ id: id || 'GU-EST', role })
    navigate('/')
  }

  const idLabel = role === 'Professor' ? 'Employee ID' : role === 'Guest' ? 'Guest Code (optional)' : 'Student ID'
  const idPlaceholder = role === 'Professor' ? 'e.g. EMP-00456' : role === 'Guest' ? 'Leave blank for guest access' : 'e.g. 2021-00123'

  return (
    <div style={{
      minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center',
      background:'linear-gradient(135deg,#2D004F 0%,#4B0082 50%,#7851A9 100%)',
    }}>
      <div style={{
        background:'rgba(255,255,255,0.97)', backdropFilter:'blur(20px)',
        borderRadius:24, padding:'48px 40px', width:420, maxWidth:'95vw',
        boxShadow:'0 32px 80px rgba(75,0,130,0.35)',
        border:'1px solid rgba(120,81,169,0.2)',
      }}>
        {/* Logo */}
        <div style={{ textAlign:'center', marginBottom:32 }}>
          <div style={{
            width:56, height:56, background:'linear-gradient(135deg,#7851A9,#4B0082)',
            borderRadius:16, display:'inline-flex', alignItems:'center', justifyContent:'center',
            fontFamily:'"Playfair Display",serif', fontSize:24, fontWeight:700, color:'#fff',
            boxShadow:'0 8px 24px rgba(75,0,130,0.4)', marginBottom:12,
          }}>U</div>
          <div style={{ fontFamily:'"Playfair Display",serif', fontSize:28, fontWeight:700, color:'#4B0082' }}>UniViolet</div>
          <div style={{ fontSize:13, color:'#6b4fa0', marginTop:2 }}>Academic Intelligence Hub</div>
        </div>

        {/* Role toggle */}
        <div style={{ display:'flex', background:'#f0e8ff', borderRadius:12, padding:4, gap:4, marginBottom:24 }}>
          {roles.map(r => (
            <button key={r} onClick={() => setRole(r)} style={{
              flex:1, padding:8, borderRadius:9, border:'none',
              background: role === r ? '#fff' : 'transparent',
              fontSize:13, fontWeight:500,
              color: role === r ? '#4B0082' : '#6b4fa0',
              cursor:'pointer', fontFamily:'"DM Sans",sans-serif',
              boxShadow: role === r ? '0 2px 8px rgba(75,0,130,0.15)' : 'none',
              transition:'all 0.2s',
            }}>{r}</button>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <label style={{ fontSize:12, fontWeight:600, color:'#4B0082', marginBottom:6, display:'block' }}>{idLabel}</label>
          <input
            value={id} onChange={e => setId(e.target.value)}
            placeholder={idPlaceholder}
            style={{
              width:'100%', padding:'12px 16px', borderRadius:10,
              border:'1.5px solid #d4b8f0', background:'#faf5ff',
              fontSize:14, color:'#1a0a2e', outline:'none', marginBottom:16,
              fontFamily:'"DM Sans",sans-serif', boxSizing:'border-box',
            }}
          />
          <label style={{ fontSize:12, fontWeight:600, color:'#4B0082', marginBottom:6, display:'block' }}>Password</label>
          <input
            type="password" value={password} onChange={e => setPassword(e.target.value)}
            placeholder="••••••••"
            style={{
              width:'100%', padding:'12px 16px', borderRadius:10,
              border:'1.5px solid #d4b8f0', background:'#faf5ff',
              fontSize:14, color:'#1a0a2e', outline:'none', marginBottom:24,
              fontFamily:'"DM Sans",sans-serif', boxSizing:'border-box',
            }}
          />
          <button type="submit" className="btn-royal" style={{ width:'100%', padding:14, fontSize:15, boxShadow:'0 4px 16px rgba(75,0,130,0.35)' }}>
            Enter UniViolet →
          </button>
        </form>
      </div>
    </div>
  )
}
