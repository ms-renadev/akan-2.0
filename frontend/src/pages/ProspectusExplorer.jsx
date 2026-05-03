import { useState } from 'react'
import Topbar from '../components/Shared/Topbar'
import GlassCard, { SectionHeader, StatCard } from '../components/Shared/GlassCard'
import SubjectCard from '../components/Prospectus/SubjectCard'
import { runShiftSimulation } from '../features/simulator/shiftEngine'
import prospectusData from '../data/mockProspectus.json'

export default function ProspectusExplorer() {
  const [selectedProgram, setSelectedProgram] = useState('')
  const [simResult, setSimResult] = useState(null)

  const handleProgramChange = (e) => {
    const id = e.target.value
    setSelectedProgram(id)
    if (!id) { setSimResult(null); return }
    const prog = prospectusData.programs.find(p => p.id === id)
    if (!prog) return
    const result = runShiftSimulation({
      creditedCodes: prospectusData.studentCreditedCodes,
      targetCurriculum: prog.curriculum,
    })
    setSimResult({ ...result, programName: prog.name, totalUnits: prog.totalUnits })
  }

  const prog = prospectusData.programs.find(p => p.id === selectedProgram)

  return (
    <div>
      <Topbar title="Prospectus Explorer" crumb="UniViolet / Prospectus" />
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>

        {/* Simulator Panel */}
        <GlassCard>
          <SectionHeader title="Shift-Ready Simulator" />
          <div style={{ marginBottom:14 }}>
            <label style={{ fontSize:12, fontWeight:600, color:'#4B0082', marginBottom:6, display:'block' }}>Target Program</label>
            <select value={selectedProgram} onChange={handleProgramChange} style={{
              width:'100%', padding:'10px 14px', borderRadius:10,
              border:'1.5px solid #d4b8f0', background:'#faf5ff',
              fontSize:14, color:'#1a0a2e', outline:'none',
              fontFamily:'"DM Sans",sans-serif', appearance:'none', cursor:'pointer',
            }}>
              <option value="">— Select a program —</option>
              {prospectusData.programs.map(p => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
          </div>

          {simResult ? (
            <>
              {/* Time badge */}
              <div style={{
                background:'linear-gradient(135deg,#7851A9,#4B0082)', color:'#fff',
                borderRadius:12, padding:'12px 20px', textAlign:'center', marginBottom:16,
              }}>
                <div style={{ fontFamily:'"Playfair Display",serif', fontSize:32, fontWeight:700 }}>{simResult.yearsLeft} yrs</div>
                <div style={{ fontSize:12, opacity:0.85, marginTop:2 }}>Estimated Years to Graduate</div>
              </div>

              <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:10, marginBottom:12 }}>
                <StatCard label="Credited" value={`${simResult.creditedUnits}`} />
                <StatCard label="To Take" value={`${simResult.remainingUnits}`} />
                <StatCard label="Total Units" value={`${simResult.totalUnits}`} />
              </div>

              <div style={{ fontSize:12, color:'#6b4fa0', padding:'8px 12px', background:'rgba(243,232,255,0.6)', borderRadius:8 }}>
                💡 Based on 18 units/semester, 2 semesters/year
              </div>
            </>
          ) : (
            <div style={{ textAlign:'center', padding:'40px 20px', color:'#6b4fa0' }}>
              <div style={{ fontSize:32, marginBottom:8 }}>◈</div>
              <div style={{ fontSize:13 }}>Select a target program to begin the simulation</div>
            </div>
          )}
        </GlassCard>

        {/* Curriculum Map */}
        <GlassCard>
          <SectionHeader title={prog ? `${prog.name} — Curriculum` : 'Curriculum Map'} />
          <div style={{ maxHeight:500, overflowY:'auto' }}>
            {prog ? (
              simResult && [...simResult.credited, ...simResult.remaining].map((s, i) => (
                <SubjectCard key={i} code={s.code} name={s.name} units={s.units} credited={simResult.credited.includes(s)} />
              ))
            ) : (
              <div style={{ textAlign:'center', padding:'60px 20px', color:'#6b4fa0', fontSize:13 }}>
                Curriculum will appear here after selecting a program.
              </div>
            )}
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
