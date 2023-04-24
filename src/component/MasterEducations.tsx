import styled from 'styled-components'

const MasterEducations = () => {
  const jobs = [
    {
      year: '22 - 24',
      title: 'Frontend developer',
      description: 'IT-Högskolan',
      customers: '',
    },
    {
      year: '13',
      title: 'David Jones',
      description: 'Fashion entrepreneurship',
      customers: '',
    },
    {
      year: '11',
      title: 'Maj-La Pizzelli',
      description: 'Collection planning',
      customers: '',
    },
    {
      year: '11 - 12',
      title: 'Fashion',
      description: ' Incubator program',
      customers: 'Business development in fashion',
    },
    {
      year: '01 - 03',
      title: 'Beckmans',
      description: 'College Of Design',
      customers: 'Fashion',
    },
    {
      year: '03 - 06',
      title: ' The Akademy',
      description: 'Of Cutting and Tailoring',
      customers: 'Design and Pattern construction',
    },
    {
      year: '01 - 02',
      title: 'Diploma',
      description: 'Folkuniversitetet',
      customers: 'Construction and sewing',
    },
    {
      year: '00',
      title: 'Universitè',
      description: 'Paul Valèry ',
      customers: 'French',
    },
    {
      year: '97 - 00',
      title: 'Akedemy',
      description: 'Ballet Akedemy',
      customers: 'Professional Dancers Education',
    },
    {
      year: '97 - 00',
      title: 'Social science',
      description: 'High school',
      customers: '(distance)',
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
  word-spacing: 1px;
  letter-spacing: 0.01rem;
`
const Customers = styled.div`
  font-size: 0.7rem;
  font-style: italic;
  font-weight: 300;

  /* margin-bottom: 0.2rem;
  padding-right: 0.5rem; */
`
const StyledDescription = styled.ul`
  font-size: 0.7rem;
`
const StyledCustomers = styled.ul`
  font-size: 0.7rem;
  /* font-style: italic;
  line-height: 1.3;
  list-style: none;
  font-weight: 400; */
`
export default MasterEducations
