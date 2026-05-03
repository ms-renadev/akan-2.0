const filters = [
  { key:'all', label:'All' },
  { key:'uni', label:'University' },
  { key:'eng', label:'Engineering' },
  { key:'it', label:'Dept. IT' },
  { key:'cs', label:'Dept. CS' },
]

export default function EventFilters({ active, onChange }) {
  return (
    <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:16 }}>
      {filters.map(f => (
        <button key={f.key} onClick={() => onChange(f.key)} style={{
          padding:'5px 12px', borderRadius:20, fontSize:12, fontWeight:500,
          border: active === f.key ? 'none' : '1.5px solid rgba(120,81,169,0.3)',
          cursor:'pointer', fontFamily:'"DM Sans",sans-serif', transition:'all 0.15s',
          background: active === f.key ? '#4B0082' : 'transparent',
          color: active === f.key ? '#fff' : '#7851A9',
        }}>{f.label}</button>
      ))}
    </div>
  )
}
