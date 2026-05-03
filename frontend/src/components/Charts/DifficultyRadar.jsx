import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip,
} from 'recharts'

export default function DifficultyRadar({ data, subject }) {
  const chartData = Object.entries(data).map(([key, value]) => ({
    axis: key,
    value,
  }))

  return (
    <div>
      {subject && (
        <div style={{ textAlign:'center', fontSize:13, fontWeight:500, color:'#6b4fa0', marginBottom:8 }}>{subject}</div>
      )}
      <ResponsiveContainer width="100%" height={260}>
        <RadarChart data={chartData} margin={{ top:10, right:30, bottom:10, left:30 }}>
          <PolarGrid stroke="rgba(120,81,169,0.2)" />
          <PolarAngleAxis
            dataKey="axis"
            tick={{ fill:'#6b4fa0', fontSize:11, fontWeight:600, fontFamily:'"DM Sans",sans-serif' }}
          />
          <Radar
            dataKey="value"
            stroke="#4B0082"
            fill="#7851A9"
            fillOpacity={0.25}
            strokeWidth={2}
          />
          <Tooltip
            formatter={(v) => [`${v}%`, 'Score']}
            contentStyle={{
              background:'rgba(255,255,255,0.95)',
              border:'1px solid rgba(120,81,169,0.3)',
              borderRadius:10,
              fontSize:12,
            }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
