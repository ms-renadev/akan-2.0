export default function SubjectCard({ code, name, units, credited }) {
  return (
    <div style={{
      padding:'10px 12px', borderRadius:10,
      border:'1px solid rgba(120,81,169,0.25)',
      background:'rgba(255,255,255,0.6)',
      display:'flex', alignItems:'center', justifyContent:'space-between',
      marginBottom:6, transition:'background 0.15s',
    }}>
      <div>
        <div style={{ fontSize:11, fontWeight:700, color:'#7851A9' }}>{code}</div>
        <div style={{ fontSize:12, color:'#1a0a2e', marginTop:2 }}>{name}</div>
      </div>
      <div style={{ textAlign:'right' }}>
        <div style={{ fontSize:11, color:'#6b4fa0' }}>{units} units</div>
        <div style={{ fontSize:11, marginTop:2, fontWeight:600, color: credited ? '#15803d' : '#6b4fa0' }}>
          {credited ? '✓ Credited' : 'To take'}
        </div>
      </div>
    </div>
  )
}
