import { useState } from 'react'
import Topbar from '../components/Shared/Topbar'
import GlassCard, { SectionHeader, FeedbackBar } from '../components/Shared/GlassCard'
import DifficultyRadar from '../components/Charts/DifficultyRadar'
import { subjects, professors } from '../data/mockInsights'

export default function InsightsPage() {
  const [selectedSubjectCode, setSelectedSubjectCode] = useState(subjects[0].code)

  const subj = subjects.find(s => s.code === selectedSubjectCode) || subjects[0]

  return (
    <div>
      <Topbar title="Subject & Prof Insights" crumb="UniViolet / Insights" />

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:16 }}>
        <GlassCard>
          <SectionHeader title="Subject Difficulty Radar" />
          <div style={{ textAlign:'center', marginBottom:8 }}>
            <select value={selectedSubjectCode} onChange={e => setSelectedSubjectCode(e.target.value)} style={{
              padding:'8px 14px', borderRadius:10, border:'1.5px solid #d4b8f0',
              background:'#faf5ff', fontSize:13, color:'#1a0a2e', outline:'none',
              fontFamily:'"DM Sans",sans-serif', cursor:'pointer',
            }}>
              {subjects.map(s => <option key={s.code} value={s.code}>{s.code} — {s.name}</option>)}
            </select>
          </div>
          <DifficultyRadar data={subj.radar} subject={subj.name} />
        </GlassCard>

        <GlassCard>
          <SectionHeader title="Student Sentiment" action={subj.code} />
          <div style={{ fontSize:12, fontWeight:600, color:'#6b4fa0', marginBottom:12 }}>{subj.name}</div>
          {Object.entries(subj.sentiment).map(([label, value]) => (
            <FeedbackBar key={label} label={label} value={value} />
          ))}
        </GlassCard>
      </div>

      <GlassCard>
        <SectionHeader title="Professor Directory" action="Rate & Review →" />
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
          {professors.map(prof => (
            <div key={prof.id} style={{
              background:'rgba(255,255,255,0.75)', border:'1px solid rgba(120,81,169,0.25)',
              borderRadius:14, padding:16, display:'flex', gap:14, cursor:'pointer',
              transition:'background 0.15s',
            }}>
              <div style={{
                width:44, height:44, borderRadius:'50%',
                background:'linear-gradient(135deg,#C4A8E8,#7851A9)',
                display:'flex', alignItems:'center', justifyContent:'center',
                color:'#fff', fontSize:14, fontWeight:600, flexShrink:0,
              }}>{prof.initials}</div>
              <div>
                <div style={{ fontSize:14, fontWeight:600, color:'#1a0a2e' }}>{prof.name}</div>
                <div style={{ fontSize:12, color:'#6b4fa0', marginTop:1 }}>{prof.dept}</div>
                <div style={{ fontSize:13, fontWeight:600, color:'#4B0082', marginTop:4 }}>
                  ⭐ {prof.rating} / 5.0 · {prof.reviewCount} reviews
                </div>
                <div style={{ marginTop:6, display:'flex', gap:4, flexWrap:'wrap' }}>
                  {prof.tags.map(t => (
                    <span key={t} style={{
                      padding:'2px 8px', borderRadius:20, fontSize:11, fontWeight:600,
                      background:'#e0f4ff', color:'#0a5a80',
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  )
}
