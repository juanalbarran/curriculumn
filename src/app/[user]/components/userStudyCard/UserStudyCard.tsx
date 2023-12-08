import { Box, Card, Text } from "@radix-ui/themes";
import { Study } from "../../user"
import dayjs from "dayjs";

interface UserStudyCardProps {
  studies: Study[]
}

export const UserStudyCard = ( props: UserStudyCardProps ) => {
  const { studies } = props;

  return (
    <Card size={"3"}>
      { studies.map((study: Study) => (
        <Box>
          <Text as="div" weight={"bold"}>
            { study.degree }
          </Text>
          <Text as="div">
            { study.school.name }
          </Text>
          <Text as="div">
            { dayjs(study.start).format('YYYY') } - { study.end ? 
              dayjs(study.end).format('YYYY') : ' Current' }
          </Text>
        </Box>
      ))}
    </Card>
  )
}