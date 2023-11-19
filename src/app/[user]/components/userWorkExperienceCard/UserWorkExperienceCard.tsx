import dayjs from "dayjs"
import { Card, Flex, Text } from "@radix-ui/themes"
import { WorkExperience } from "../../user"
import { WorkDescriptionCard } from "./workDescriptionCard"
import { WorkActivity, WorkActivityCard } from "./workActivity"
import { WorkTechnologiesCard, WorkTechnology } from "./workTechnologiesCard"

interface UserWorkExperienceCardProps {
  workExperiences:  WorkExperience[],
}

export const UserWorkExperienceCard = ( props: UserWorkExperienceCardProps ) => {
  
  const { workExperiences } = props

  const renderDescription = (description: string) => (
    description ? <WorkDescriptionCard description={description}/> : <></>)

  const renderWorkActivity = (workActivities: WorkActivity[]) => (
    workActivities.length ? <WorkActivityCard workActivities={workActivities}/> : <></>)

  const renderWorkTechnologies = (workTechnologies: WorkTechnology[]) => (
    workTechnologies.length ? <WorkTechnologiesCard workTechnologies={workTechnologies}/> : <></>)

  return (
    <Flex direction={"column"} gap={"4"}>
      {
        workExperiences?.length ? workExperiences.map(( workExperience: WorkExperience ) => (
          <Card size={"3"} key={ workExperience.id }>
            <Text as="div" weight={"bold"}>{ workExperience.company?.name }</Text>
            <Text>{ workExperience.title }</Text>
            <Text as="div">
              { dayjs(workExperience.startDate).format('MMMM YYYY') } - { workExperience.endDate ? 
              dayjs(workExperience.endDate).format('MMMM YYYY') : 'Current' }
            </Text>
            { renderDescription(workExperience.description) }
            { renderWorkActivity(workExperience.workActivity) }
            { renderWorkTechnologies(workExperience.technologies) }
          </Card>
        )) : 
        <></>
      }
    </Flex>
  )

}