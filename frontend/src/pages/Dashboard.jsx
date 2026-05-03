import Topbar from '../components/Shared/Topbar'
import GlassCard, { StatCard, SectionHeader, FeedbackBar } from '../components/Shared/GlassCard'
import { Tag } from '../components/Shared/GlassCard'
import DifficultyRadar from '../components/Charts/DifficultyRadar'

const currentSubjects = [
  { code:'IT 312', name:'Systems Analysis & Design', units:3 },
  { code:'IT 315', name:'Network Administration', units:3 },
  { code:'MATH 211', name:'Discrete Mathematics', units:3 },
  { code:'IT 320', name:'Web Systems & Tech', units:3 },
]

const upcomingEvents = [
  { title:'University Foundation Day', date:'May 10', dept:'All Departments', type:'uni' },
  { title:'IT Capstone Defense', date:'May 14', dept:'Dept. of IT', type:'it' },
  { title:'Engineering Quiz Bowl', date:'May 18', dept:'College of Engineering', type:'eng' },
]

const typeLabels = { uni:'University', eng:'Engineering', it:'Dept. IT', cs:'Dept. CS' }
const dotColors = { uni:'#4B0082', eng:'#1a3a8f', it:'#0a5a80', cs:'#7a0040' }

const radarData = {
  'SAD': 88, 'Network': 82, 'Discrete': 74, 'WebSys': 91,
}

const perfBars = [
  { label:'IT 312 — SAD', value:88 },
  { label:'IT 315 — NetAdmin', value:82 },
  { label:'MATH 211 — Discrete', value:74 },
  { label:'IT 320 — WebSys', value:91 },
]

export default function Dashboard() {
  return (
    <div>
      <Topbar title="Dashboard" crumb="UniViolet / Home" />

      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:16, marginBottom:16 }}>
        <StatCard label="Current Units" value="87" sub="of 160 required" />
        <StatCard label="GWA" value="1.68" sub="Excellent standing" />
        <StatCard label="Events This Month" value="12" sub="3 upcoming this week" />
        <StatCard label="Year Level" value="3rd" sub="BSIT — College of Eng." />
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:16 }}>
        <GlassCard>
          <SectionHeader title="Upcoming Events" action="View all →" />
          {upcomingEvents.map((ev, i) => (
            <div key={i} style={{
              display:'flex', alignItems:'flex-start', gap:10, padding:10,
              borderRadius:10, border:'1px solid rgba(120,81,169,0.2)',
              background:'rgba(255,255,255,0.6)', marginBottom:8,
            }}>
              <div style={{ width:10, height:10, borderRadius:'50%', background:dotColors[ev.type], marginTop:3, flexShrink:0 }} />
              <div>
                <div style={{ fontSize:13, fontWeight:500 }}>{ev.title}</div>
                <div style={{ fontSize:11, color:'#6b4fa0', marginTop:2 }}>
                  {ev.date} · {ev.dept}
                  <Tag label={typeLabels[ev.type]} type={ev.type} />
                </div>
              </div>
            </div>
          ))}
        </GlassCard>

        <GlassCard>
          <SectionHeader title="Current Subjects" action="Sem 2, AY 2024–25" />
          {currentSubjects.map((s, i) => (
            <div key={i} style={{
              padding:'10px 12px', borderRadius:10,
              border:'1px solid rgba(120,81,169,0.25)',
              background:'rgba(255,255,255,0.6)',
              display:'flex', alignItems:'center', justifyContent:'space-between',
              marginBottom:6,
            }}>
              <div>
                <div style={{ fontSize:11, fontWeight:700, color:'#7851A9' }}>{s.code}</div>
                <div style={{ fontSize:12, color:'#1a0a2e', marginTop:2 }}>{s.name}</div>
              </div>
              <div style={{ fontSize:11, color:'#6b4fa0' }}>{s.units} units</div>
            </div>
          ))}
        </GlassCard>
      </div>

      <GlassCard>
        <SectionHeader title="Subject Performance Overview" action="Current Semester" />
        <div style={{ display:'flex', gap:24, alignItems:'center' }}>
          <div style={{ width:220, flexShrink:0 }}>
            <DifficultyRadar data={radarData} />
          </div>
          <div style={{ flex:1 }}>
            {perfBars.map((b, i) => <FeedbackBar key={i} label={b.label} value={b.value} />)}
          </div>
        </div>
      </GlassCard>
    </div>
  )
}
