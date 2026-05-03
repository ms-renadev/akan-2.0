/**
 * Shift Simulator Engine
 * Given a student's credited subjects and a target program's curriculum,
 * calculate how many units remain and estimate years to graduate.
 */
export function runShiftSimulation({ creditedCodes, targetCurriculum, unitsPerSemester = 18, semestersPerYear = 2 }) {
  const credited = targetCurriculum.filter(subj => creditedCodes.includes(subj.code))
  const remaining = targetCurriculum.filter(subj => !creditedCodes.includes(subj.code))

  const creditedUnits = credited.reduce((sum, s) => sum + s.units, 0)
  const remainingUnits = remaining.reduce((sum, s) => sum + s.units, 0)
  const totalUnits = targetCurriculum.reduce((sum, s) => sum + s.units, 0)

  const semestersLeft = Math.ceil(remainingUnits / unitsPerSemester)
  const yearsLeft = (semestersLeft / semestersPerYear).toFixed(1)

  return {
    credited,
    remaining,
    creditedUnits,
    remainingUnits,
    totalUnits,
    semestersLeft,
    yearsLeft,
  }
}
