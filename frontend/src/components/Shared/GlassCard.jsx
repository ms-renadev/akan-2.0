export default function GlassCard({ children, style = {} }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.75)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(120,81,169,0.25)',
      borderRadius: 16,
      padding: 20,
      ...style,
    }}>
      {children}
    </div>
  )
}

export function StatCard({ label, value, sub }) {
  return (
    <div style={{
      background:'rgba(255,255,255,0.8)', border:'1px solid rgba(120,81,169,0.25)',
      borderRadius:14, padding:'18px 20px',
    }}>
      <div style={{ fontSize:11, fontWeight:600, color:'#6b4fa0', textTransform:'uppercase', letterSpacing:'0.8px', marginBottom:6 }}>{label}</div>
      <div style={{ fontFamily:'"Playfair Display",serif', fontSize:28, fontWeight:700, color:'#4B0082' }}>{value}</div>
      {sub && <div style={{ fontSize:12, color:'#6b4fa0', marginTop:2 }}>{sub}</div>}
    </div>
  )
}

export function SectionHeader({ title, action, onAction }) {
  return (
    <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:16 }}>
      <div style={{ fontFamily:'"Playfair Display",serif', fontSize:16, fontWeight:600, color:'#4B0082' }}>{title}</div>
      {action && <div style={{ fontSize:12, color:'#7851A9', cursor:'pointer', fontWeight:500 }} onClick={onAction}>{action}</div>}
    </div>
  )
}

export function FeedbackBar({ label, value }) {
  return (
    <div style={{ marginBottom:12 }}>
      <div style={{ display:'flex', justifyContent:'space-between', fontSize:12, color:'#6b4fa0', marginBottom:4 }}>
        <span>{label}</span><span>{value}%</span>
      </div>
      <div style={{ height:8, borderRadius:4, background:'#ede0ff', overflow:'hidden' }}>
        <div style={{ height:'100%', borderRadius:4, width:`${value}%`, background:'linear-gradient(90deg,#7851A9,#4B0082)', transition:'width 0.8s' }} />
      </div>
    </div>
  )
}

export function Tag({ label, type }) {
  const colors = {
    uni:  { bg:'#ede0ff', color:'#4B0082' },
    eng:  { bg:'#dce4ff', color:'#1a3a8f' },
    it:   { bg:'#e0f4ff', color:'#0a5a80' },
    cs:   { bg:'#ffe0f0', color:'#7a0040' },
    default: { bg:'#ede0ff', color:'#4B0082' },
  }
  const c = colors[type] || colors.default
  return (
    <span style={{
      display:'inline-flex', alignItems:'center', padding:'3px 10px', borderRadius:20,
      fontSize:11, fontWeight:600, background:c.bg, color:c.color, marginLeft:4,
    }}>{label}</span>
  )
}
