export type AboutPage = {
  picture: string
  work: Work
  living_in: string
  college: College
}

type Work = {
  company: string
  position: string
  website: string
}

type College = {
  institution: string
  education: string
}
