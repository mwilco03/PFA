/**
 * Scoring constants for 2026 PFA (50-20-15-15 model)
 */

// Component weights (total = 100)
export const COMPONENT_WEIGHTS = {
  CARDIO: 50,
  BODY_COMP: 20,
  STRENGTH: 15,
  CORE: 15,
}

// Component types
export const COMPONENTS = {
  CARDIO: 'cardio',
  STRENGTH: 'strength',
  CORE: 'core',
  BODY_COMP: 'bodyComp',
}

// Exercise types
export const EXERCISES = {
  // Cardio
  RUN_2MILE: '2mile_run',
  HAMR: 'hamr',
  WALK_2KM: '2km_walk',

  // Strength
  PUSHUPS: 'pushups',
  HRPU: 'hrpu',

  // Core
  SITUPS: 'situps',
  CLRC: 'clrc',
  PLANK: 'plank',

  // Body Comp
  WHTR: 'whtr',
}

// Age groups
export const AGE_GROUPS = {
  UNDER_20: '<20',
  AGE_20_29: '20-29',
  AGE_30_39: '30-39',
  AGE_40_49: '40-49',
  AGE_50_59: '50-59',
  AGE_60_PLUS: '60+',
}

// Gender
export const GENDER = {
  MALE: 'M',
  FEMALE: 'F',
}

// Passing composite score
export const PASSING_COMPOSITE = 75.0

// Component minimum percentages (must pass component AND composite)
export const COMPONENT_MINIMUMS = {
  [COMPONENTS.CARDIO]: 60.0, // 30/50 points
  [COMPONENTS.STRENGTH]: 60.0, // 9/15 points
  [COMPONENTS.CORE]: 60.0, // 9/15 points
  [COMPONENTS.BODY_COMP]: 50.0, // 10/20 points
}

// Diagnostic period (non-scored)
export const DIAGNOSTIC_PERIOD_START = '2026-03-01'
export const DIAGNOSTIC_PERIOD_END = '2026-08-31'

/**
 * Calculate age from DOB and date
 * @param {Date} dob - Date of birth
 * @param {Date} date - Date to calculate age at (default: today)
 * @returns {number} Age in years
 */
export function calculateAge(dob, date = new Date()) {
  const dobDate = new Date(dob)
  const checkDate = new Date(date)
  let age = checkDate.getFullYear() - dobDate.getFullYear()
  const monthDiff = checkDate.getMonth() - dobDate.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && checkDate.getDate() < dobDate.getDate())) {
    age--
  }
  return age
}

/**
 * Get age group from age
 * @param {number} age - Age in years
 * @returns {string} Age group constant
 */
export function getAgeGroup(age) {
  if (age < 20) return AGE_GROUPS.UNDER_20
  if (age < 30) return AGE_GROUPS.AGE_20_29
  if (age < 40) return AGE_GROUPS.AGE_30_39
  if (age < 50) return AGE_GROUPS.AGE_40_49
  if (age < 60) return AGE_GROUPS.AGE_50_59
  return AGE_GROUPS.AGE_60_PLUS
}

/**
 * Check if date is in diagnostic period
 * @param {Date|string} date - Date to check
 * @returns {boolean}
 */
export function isDiagnosticPeriod(date) {
  const checkDate = new Date(date)
  const start = new Date(DIAGNOSTIC_PERIOD_START)
  const end = new Date(DIAGNOSTIC_PERIOD_END)
  return checkDate >= start && checkDate <= end
}
