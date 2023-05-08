import styled from 'styled-components'

const WorkExperience = () => {
  const jobs = [
    {
      year: '08 - 14',
      title: 'C.E.O / C.D ',
      description: 'billy and I,',
      customers:
        'Sweden, All over Europe, New York. Stores, Magazines, PR, Artists, Television.',
    },
    {
      year: '08',
      title: 'BRAND SALESREP.',
      description: 'Fashionfairs Europe',
      customers: 'Sarabia, Kuyichi, Katharine Hamnett, Rickard Lindquist.',
    },
    {
      year: '07 - 08',
      title: ' VISUAL MERCH.',
      description: 'Set design, sale',
      customers: 'Grandpa',
    },
    {
      year: '06 - 08',
      title: 'FREELANCER',
      description: 'Fashion/print/pattern-design',
      customers: 'InWear, Carlings, BikBok, Stadium',
    },
    {
      year: '00 - 02',
      title: 'STORE MANAGER',
      description: 'Visual Merch, concept dev, set design, store openings',
      customers: 'BikBok',
    },
  ]

  return (
    <WorkExperienceContainer>
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
    </WorkExperienceContainer>
  )
}

const WorkExperienceContainer = styled.div`
  display: grid;
  justify-content: center;
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 1.5rem;
`

const JobContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`

const YearTitle = styled.div`
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 0.3rem;
  margin-top: 1.1rem;
`
const Description = styled.div`
  font-size: 0.8rem;
  line-height: 1.3;
  font-weight: 500;
  word-spacing: 1px;
  letter-spacing: 0.01rem;
  line-height: 1.1rem;
`
const Customers = styled.div`
  font-size: 0.7rem;
  font-style: italic;
  font-weight: 300;
  line-height: 1.1rem;
  letter-spacing: 0.01rem;
`
const StyledDescription = styled.p`
  font-size: 0.7rem;
`
const StyledCustomers = styled.p`
  font-size: 0.7rem;
  font-weight: 400;
`
export default WorkExperience
