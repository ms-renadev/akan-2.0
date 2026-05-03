import { useState } from 'react'
import Topbar from '../components/Shared/Topbar'
import GlassCard, { SectionHeader, FeedbackBar, StatCard } from '../components/Shared/GlassCard'
import { anonymizeComments } from '../features/feedback/anonymize'
import { professors } from '../data/mockInsights'

export default function ProfessorPortal() {
  const [selectedProfId, setSelectedProfId] = useState(professors[0].id)
  const prof = professors.find(p => p.id === selectedProfId) || professors[0]
  const anonComments = anonymizeComments(prof.comments)

  const stars = (n) => '★'.repeat(Math.round(n)) + '☆'.repeat(5 - Math.round(n))

  return (
    <div>
      <Topbar title="Professor Portal" crumb="UniViolet / Professor Portal" />

      {/* Privacy notice */}
      <div style={{
        background:'#fffbeb', border:'1px solid #fde68a', borderRadius:8,
        padding:'8px 12px', fontSize:12, color:'#92400e',
        display:'flex', alignItems:'center', gap:8, marginBottom:16,
      }}>
        🔒 Privacy Mode Active — Student identities are fully anonymized. Only aggregate data and masked comments are displayed.
      </div>

      {/* Subject selector */}
      <div style={{ marginBottom:16 }}>
        <select value={selectedProfId} onChange={e => setSelectedProfId(Number(e.target.value))} style={{
          padding:'10px 14px', borderRadius:10, border:'1.5px solid #d4b8f0',
          background:'rgba(255,255,255,0.8)', fontSize:14, color:'#1a0a2e', outline:'none',
          fontFamily:'"DM Sans",sans-serif', cursor:'pointer', minWidth:280,
        }}>
          {professors.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
        </select>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
        {/* Analytics */}
        <GlassCard>
          <SectionHeader title="My Subject Analytics" />
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginBottom:14 }}>
            <StatCard label="Students Enrolled" value={prof.analytics.enrolled} />
            <StatCard label="Avg. Rating" value={prof.rating} />
          </div>
          {Object.entries(prof.analytics.bars).map(([label, value]) => (
            <FeedbackBar key={label} label={label} value={value} />
          ))}
        </GlassCard>

        {/* Anonymous Comments */}
        <GlassCard>
          <SectionHeader title="Anonymous Student Comments" action={`${anonComments.length} responses`} />
          <div style={{ maxHeight:400, overflowY:'auto' }}>
            {anonComments.map((c, i) => (
              <div key={i} style={{
                background:'rgba(255,255,255,0.6)', border:'1px solid rgba(120,81,169,0.2)',
                borderRadius:10, padding:12, marginBottom:8,
              }}>
                <div style={{ fontSize:11, fontWeight:600, color:'#6b4fa0', marginBottom:6 }}>
                  {c.authorId} · Anonymous
                </div>
                <div style={{ fontSize:13, color:'#1a0a2e', lineHeight:1.5 }}>"{c.text}"</div>
                <div style={{ display:'flex', gap:2, marginTop:6, alignItems:'center' }}>
                  <span style={{ color:'#f59e0b', fontSize:13 }}>{stars(c.rating)}</span>
                  <span style={{ fontSize:12, color:'#6b4fa0', marginLeft:6 }}>{c.rating}.0</span>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
