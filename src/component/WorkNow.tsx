import styled from 'styled-components'
const WorkNow = () => {
  const jobs = [
    {
      year: '14',
      title: 'Freelancer',
      description:
        'Creative director, stylist, advertising, product development,  business development, project management, film, exhibitions, photo, fashion shows, teaching, workshops',
      // 'Creative Director ,Stylist, Product developmemt, Advertising, film, exhibition, fashion shows, project management, business development, teaching, workshops',
      customers:
        'Plaza Kvinna, Saint Laurent,  Sport Max, Lindex, Textile fashion of school, Drivhuset, TV4.',
    },
  ]

  return (
    <WorkExperienceContainer>
      {jobs.map((job) => (
        <JobContainer key={job.title}>
          <YearTitle>
            {job.title} | {job.year}
          </YearTitle>
          {job.title === 'Freelancer/consultant' ? (
            <StyledDescription>
              {job.description.split(',').map((item, index) => (
                <li key={index}>{item.trim()}</li>
              ))}
            </StyledDescription>
          ) : (
            <Description>{job.description}</Description>
          )}
          {job.title === 'Freelancer' ? (
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
  gap: 0.3rem;
  margin-right: 0.8rem;
`

const YearTitle = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
  margin-top: 0.5rem;
`
const Description = styled.div`
  font-size: 0.8rem;
  line-height: 1.3;
  font-weight: 400;
  /* letter-spacing: 0.5px; */
  word-spacing: 1px;
  padding: 0 0.5rem 0.5rem 0;
  letter-spacing: 0.01rem;
`
const Customers = styled.div`
  font-size: 0.7rem;
  font-style: italic;
  font-weight: 300;
  /* padding-right: 0.5rem; */
  line-height: 0.9rem;
  letter-spacing: 0.01rem;
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
export default WorkNow
