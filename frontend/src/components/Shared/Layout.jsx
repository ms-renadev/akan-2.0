import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../features/auth/AuthContext'

const navItems = [
  { to:'/', label:'Home', icon:'⬡', end:true },
  { to:'/calendar', label:'Events', icon:'◫' },
  { to:'/prospectus', label:'Prosp.', icon:'◈' },
  { to:'/insights', label:'Charts', icon:'◉' },
]

export default function Layout() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => { logout(); navigate('/login') }

  return (
    <div style={{ display:'flex', minHeight:'100vh' }}>
      {/* Sidebar */}
      <nav style={{
        position:'fixed', left:0, top:0, width:68, height:'100vh',
        background:'linear-gradient(180deg,#4B0082 0%,#2D004F 100%)',
        display:'flex', flexDirection:'column', alignItems:'center',
        padding:'20px 0', gap:8, zIndex:100,
        boxShadow:'4px 0 24px rgba(75,0,130,0.18)',
      }}>
        <div style={{
          width:42, height:42, background:'rgba(255,255,255,0.15)',
          borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center',
          fontFamily:'"Playfair Display",serif', fontSize:18, fontWeight:700, color:'#fff',
          marginBottom:20, border:'1px solid rgba(255,255,255,0.2)',
        }}>U</div>

        {navItems.map(item => (
          <NavLink key={item.to} to={item.to} end={item.end} style={({ isActive }) => ({
            width:48, height:48, borderRadius:12, display:'flex', flexDirection:'column',
            alignItems:'center', justifyContent:'center', cursor:'pointer',
            textDecoration:'none', gap:3,
            background: isActive ? 'rgba(243,232,255,0.2)' : 'transparent',
            border: isActive ? '1px solid rgba(243,232,255,0.35)' : '1px solid transparent',
            transition:'all 0.2s',
          })}>
            <span style={{ fontSize:18 }}>{item.icon}</span>
            <span style={{ fontSize:9, color:'rgba(255,255,255,0.8)', fontWeight:500, letterSpacing:'0.5px' }}>{item.label}</span>
          </NavLink>
        ))}

        {user?.role === 'Professor' && (
          <NavLink to="/professor-portal" style={({ isActive }) => ({
            width:48, height:48, borderRadius:12, display:'flex', flexDirection:'column',
            alignItems:'center', justifyContent:'center', cursor:'pointer',
            textDecoration:'none', gap:3,
            background: isActive ? 'rgba(243,232,255,0.2)' : 'transparent',
            border: isActive ? '1px solid rgba(243,232,255,0.35)' : '1px solid transparent',
          })}>
            <span style={{ fontSize:18 }}>◎</span>
            <span style={{ fontSize:9, color:'rgba(255,255,255,0.8)', fontWeight:500 }}>Portal</span>
          </NavLink>
        )}

        <div style={{ marginTop:'auto' }}>
          <button onClick={handleLogout} title="Logout" style={{
            width:48, height:48, borderRadius:12, background:'transparent',
            border:'1px solid rgba(255,255,255,0.15)', cursor:'pointer',
            display:'flex', alignItems:'center', justifyContent:'center', fontSize:16,
          }}>🚪</button>
        </div>
      </nav>

      {/* Main area */}
      <div style={{ marginLeft:68, padding:24, flex:1 }}>
        <Outlet />
      </div>
    </div>
  )
}
