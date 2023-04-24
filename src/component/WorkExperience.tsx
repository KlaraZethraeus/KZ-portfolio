import styled from 'styled-components'

const WorkExperience = () => {
  const jobs = [
    {
      year: '08 - 14',
      title: 'CD / VD',
      description: 'Billy and I, Head of design',
      customers:
        'Sweden, All over Europe, New York. Stores, Magazines, PR, Artists, Televison.',
    },
    {
      year: '08',
      title: 'Brand manager',
      description: 'fashionfairs',
      customers: 'Sarabia',
    },
    {
      year: '07 - 08',
      title: ' VM',
      description: 'Visual Merchandiser, Sale',
      customers: 'Grandpa',
    },
    {
      year: '06 - 08',
      title: 'Freelancer',
      description: 'Fashion designer, print designer, pattern construction.',
      customers: 'In Wear, Carlings, Bik Bok, Stadium',
    },
    {
      year: '00 - 02',
      title: 'Manager',
      description:
        'Visual Merchandiser, Concept developer, responsible of set design in new stores',
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
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

const JobContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.3rem;
  margin-right: 0.8rem;
`

const YearTitle = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
  margin-top: 0.2rem;
`
const Description = styled.div`
  font-size: 0.8rem;
  line-height: 1.3;
  font-weight: 400;
  word-spacing: 1px;
  padding: 0 0.5rem 0.5rem 0;
  letter-spacing: 0.01rem;
`
const Customers = styled.div`
  font-size: 0.7rem;
  font-style: italic;
  font-weight: 300;
  line-height: 0.9rem;
  letter-spacing: 0.01rem;
  /* margin-bottom: 0.2rem; */
  /* padding-right: 0.5rem; */
`
const StyledDescription = styled.p`
  font-size: 0.7rem;
`
const StyledCustomers = styled.p`
  font-size: 0.7rem;
  /* font-style: italic;
  line-height: 1.3;
  list-style: none;
  font-weight: 400; */
`
export default WorkExperience
