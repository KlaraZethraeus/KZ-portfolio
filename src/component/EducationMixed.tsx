import styled from 'styled-components'

const EducationMixed = () => {
  const jobs = [
    {
      year: '13',
      title: 'DAVID JONES',
      description: 'Fashion entrepreneurship',
      customers: 'Brand building',
    },
    {
      year: '11',
      title: 'MAJ-LA PIZZELLI',
      description: 'Fashion entrepreneurship',
      customers: 'Collection planning',
    },
    {
      year: '11 - 12',
      title: ' ENTREPRENEURSHIP',
      description: ' Incubator program',
      customers: 'Business development',
    },
    {
      year: '01 - 03',
      title: 'BECKMANS',
      description: 'College Of Design',
      customers: 'Fashion',
    },
    {
      year: '03 - 06',
      title: 'TEXTILE ACEDEMY',
      description: 'Cutting and Tailoring',
      customers: 'Design &Pattern &construction',
    },
    {
      year: '01 - 02',
      title: 'DIPLOMA',
      description: 'Folkuniversitetet',
      customers: 'Construction & sewing',
    },
    {
      year: '00',
      title: 'UNIVERSITÈ',
      description: 'Paul Valèry ',
      customers: 'French',
    },
    {
      year: '97 - 00',
      title: 'BALLET ACEDEMY',
      description: 'Professional dancers education',
      customers: 'Mixed dance styles',
    },
    {
      year: '97 - 00',
      title: 'SOCIAL SCIENCE',
      description: 'High school',
      customers: 'Distance',
    },
  ]
  return (
    <EducationMixedContainer>
      {jobs.map((job) => (
        <JobContainer key={job.title}>
          <YearTitle>
            {job.title} | {job.year}
          </YearTitle>
          {job.title === 'Freelance/consultant' ? (
            <StyledDescription>
              {job.description.split(',').map((item, index) => (
                <li key={index}>{item.trim()}</li>
              ))}
            </StyledDescription>
          ) : (
            <Description>{job.description}</Description>
          )}
          {job.title === 'Freelance' ? (
            <StyledCustomers>
              {job.customers.split(',').map((item, index) => (
                <li key={index}>{item.trim()}</li>
              ))}
            </StyledCustomers>
          ) : (
            job.customers && <Customers>{job.customers}</Customers>
          )}
        </JobContainer>
      ))}
    </EducationMixedContainer>
  )
}

const EducationMixedContainer = styled.div`
  display: grid;
  justify-content: center;
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 1.5rem;
`

const JobContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2.5rem;
  margin-right: 2.5rem;
`
const YearTitle = styled.div`
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 0.4rem;
  margin-top: 1.2rem;
`
const Description = styled.div`
  font-size: 0.8rem;
  font-weight: 500;
  word-spacing: 2px;
  letter-spacing: 0.01rem;
  line-height: 1.1rem;
  margin-left: 0.3rem;
`
const Customers = styled.div`
  font-size: 0.7rem;
  font-style: italic;
  font-weight: 300;
  line-height: 1.1rem;
  letter-spacing: 0.01rem;
  margin-left: 0.3rem;
`
const StyledDescription = styled.p`
  font-size: 0.7rem;
`
const StyledCustomers = styled.p`
  font-size: 0.7rem;
  font-weight: 400;
`
export default EducationMixed
