const NATIONALITIES = {
  IN: "Indian",
  SA: "Saudi",
  PK: "Pakistani",
  BD: "Bangladesh",
  SD: "Sudan",
  EG: "Egypt",
  JO: "Jordan",
  PS: "Palestine",
  AE: "Dubai",
  SY: "Syria",
  YE: "Yemen",
  US: "United States",
  UK: "United Kingdom",
  NP: "Nepal",
  ID: "Indonesia",
  PH: "Philippines",
};

const NATIONALITY_CODES = Object.keys(NATIONALITIES);

const RELATIONSHIP_STATUS = {
  MARRIED: "married",
  SINGLE: "single",
  OTHER: "other",
};

const GENDER = {
  MALE: "male",
  FEMALE: "female",
  OTHER: "other",
};

const UAC = {
  OWNER: "owner",
  HR_MANAGER: "hr_manager",
  MANAGER: "manager",
  EMPLOYEE: "employee",
  HR_MEMBER: "hr_member",
  HR_MEMBER_PAYROLL: "hr_member_payroll",
  HR_MEMBER_ATTENDANCE: "hr_member_attendance",
  HR_MEMBER_RECRUITMENT: "hr_member_recruitment",
  HR_MEMBER_CONTRACTS: "hr_member_contracts",
  HR_MEMBER_BENEFITS: "hr_member_benefits",
  HR_MEMBER_TRAINING: "hr_member_training",
  HR_MEMBER_PAYROLL_ATTENDANCE: "hr_member_payroll_attendance",
};

const USER_STATUS = {
  ACTIVE: "active",
  ON_LEAVE: "onLeave",
  TERMINATED: "terminated",
  PROBATION: "probation",
  NOTICE: "notice",
};

module.exports = {
  NATIONALITIES,
  NATIONALITY_CODES,
  UAC,
  RELATIONSHIP_STATUS,
  GENDER,
  USER_STATUS,
};
