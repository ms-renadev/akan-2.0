import { useAuth } from '../../features/auth/AuthContext'

export default function Topbar({ title, crumb }) {
  const { user } = useAuth()
  return (
    <div style={{
      display:'flex', alignItems:'center', justifyContent:'space-between',
      background:'rgba(255,255,255,0.7)', backdropFilter:'blur(12px)',
      border:'1px solid rgba(120,81,169,0.25)', borderRadius:16,
      padding:'12px 20px', marginBottom:24,
    }}>
      <div style={{ display:'flex', alignItems:'center', gap:12 }}>
        <div style={{ fontFamily:'"Playfair Display",serif', fontSize:22, fontWeight:600, color:'#4B0082' }}>{title}</div>
        <div style={{ fontSize:13, color:'#6b4fa0' }}>{crumb}</div>
      </div>
      <div style={{ display:'flex', alignItems:'center', gap:12 }}>
        <span style={{
          padding:'4px 12px', borderRadius:20, fontSize:12, fontWeight:600,
          background:'#F3E8FF', color:'#4B0082', border:'1px solid rgba(120,81,169,0.25)',
        }}>{user?.role}</span>
        <div style={{
          width:36, height:36, borderRadius:'50%',
          background:'linear-gradient(135deg,#7851A9,#4B0082)',
          display:'flex', alignItems:'center', justifyContent:'center',
          color:'#fff', fontSize:13, fontWeight:600,
        }}>{user?.initials}</div>
      </div>
    </div>
  )
}
