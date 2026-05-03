import { useState } from 'react'

const DAYS = ['S','M','T','W','Th','F','S']
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate()
}
function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay()
}

export default function MiniCalendar({ events = [], activeFilter = 'all' }) {
  const today = new Date()
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth())

  const daysInMonth = getDaysInMonth(year, month)
  const firstDay = getFirstDayOfMonth(year, month)
  const prevDays = getDaysInMonth(year, month - 1)

  const filteredEvents = activeFilter === 'all' ? events : events.filter(e => e.type === activeFilter)
  const eventDays = new Set(filteredEvents.map(e => {
    const d = new Date(e.date)
    if (d.getFullYear() === year && d.getMonth() === month) return d.getDate()
    return null
  }).filter(Boolean))

  const cells = []
  for (let i = firstDay - 1; i >= 0; i--) {
    cells.push({ day: prevDays - i, current: false })
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, current: true })
  }

  return (
    <div>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:12 }}>
        <div style={{ fontFamily:'"Playfair Display",serif', fontSize:15, fontWeight:600, color:'#4B0082' }}>
          {MONTHS[month]} {year}
        </div>
        <div style={{ display:'flex', gap:6 }}>
          <button onClick={() => { if (month === 0) { setMonth(11); setYear(y => y-1) } else setMonth(m => m-1) }}
            style={{ width:28, height:28, borderRadius:8, border:'1px solid rgba(120,81,169,0.3)', background:'transparent', cursor:'pointer', fontSize:14, color:'#7851A9' }}>‹</button>
          <button onClick={() => { if (month === 11) { setMonth(0); setYear(y => y+1) } else setMonth(m => m+1) }}
            style={{ width:28, height:28, borderRadius:8, border:'1px solid rgba(120,81,169,0.3)', background:'transparent', cursor:'pointer', fontSize:14, color:'#7851A9' }}>›</button>
        </div>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(7,1fr)', gap:2 }}>
        {DAYS.map(d => (
          <div key={d} style={{ textAlign:'center', fontSize:11, fontWeight:600, color:'#6b4fa0', padding:'6px 0' }}>{d}</div>
        ))}
        {cells.map((cell, i) => {
          const isToday = cell.current && cell.day === today.getDate() && month === today.getMonth() && year === today.getFullYear()
          const hasEvent = cell.current && eventDays.has(cell.day)
          return (
            <div key={i} style={{
              aspectRatio:'1', display:'flex', flexDirection:'column',
              alignItems:'center', justifyContent:'center', borderRadius:8,
              fontSize:12, cursor:'pointer', position:'relative', gap:2,
              background: isToday ? '#4B0082' : 'transparent',
              color: isToday ? '#fff' : cell.current ? '#1a0a2e' : '#c4a8e8',
              fontWeight: isToday ? 600 : 400,
              transition:'background 0.15s',
            }}>
              {cell.day}
              {hasEvent && (
                <div style={{
                  width:4, height:4, borderRadius:'50%',
                  background: isToday ? '#fff' : '#7851A9',
                  position:'absolute', bottom:3,
                }} />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
