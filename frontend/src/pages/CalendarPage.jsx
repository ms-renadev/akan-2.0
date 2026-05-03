import { useState } from 'react'
import Topbar from '../components/Shared/Topbar'
import GlassCard, { SectionHeader } from '../components/Shared/GlassCard'
import { Tag } from '../components/Shared/GlassCard'
import MiniCalendar from '../components/Calendar/MiniCalendar'
import EventFilters from '../components/Calendar/EventFilters'
import { events, typeLabels, typeColors } from '../data/mockEvents'

const dotColors = { uni:'#4B0082', eng:'#1a3a8f', it:'#0a5a80', cs:'#7a0040' }

export default function CalendarPage() {
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all' ? events : events.filter(e => e.type === filter)

  return (
    <div>
      <Topbar title="Event Calendar" crumb="UniViolet / Events" />
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
        <GlassCard>
          <SectionHeader title="May 2025" />
          <EventFilters active={filter} onChange={setFilter} />
          <MiniCalendar events={events} activeFilter={filter} />
        </GlassCard>

        <GlassCard>
          <SectionHeader title={`Events — ${filter === 'all' ? 'All' : typeLabels[filter]}`} action={`${filtered.length} events`} />
          <div style={{ maxHeight:440, overflowY:'auto' }}>
            {filtered.map(ev => (
              <div key={ev.id} style={{
                display:'flex', alignItems:'flex-start', gap:10, padding:10,
                borderRadius:10, border:'1px solid rgba(120,81,169,0.2)',
                background:'rgba(255,255,255,0.6)', marginBottom:8,
                cursor:'pointer', transition:'background 0.15s',
              }}>
                <div style={{ width:10, height:10, borderRadius:'50%', background:dotColors[ev.type], marginTop:3, flexShrink:0 }} />
                <div>
                  <div style={{ fontSize:13, fontWeight:500 }}>{ev.title}</div>
                  <div style={{ fontSize:11, color:'#6b4fa0', marginTop:2 }}>
                    {ev.date} · {ev.time} · {ev.dept}
                    <Tag label={typeLabels[ev.type]} type={ev.type} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
