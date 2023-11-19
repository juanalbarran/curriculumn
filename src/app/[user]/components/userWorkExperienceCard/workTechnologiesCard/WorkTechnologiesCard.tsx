import { Badge, Flex, Separator, Text } from "@radix-ui/themes"

export interface WorkTechnology {
  id: number,
  name: string,
}

interface WorkTechnologiesProps {
  workTechnologies: WorkTechnology[]
}

export const WorkTechnologiesCard = (props: WorkTechnologiesProps) => {
  const { workTechnologies } = props
  return(
    <>
      <Separator my="3" size="4" />
      <Text as="div" weight={"medium"} className="pb-3">Technologies / Skills</Text>
      <Flex gap={"2"} direction={"row"} shrink={"0"} grow={"0"}>
        { workTechnologies.length ? workTechnologies.map((technology) => (
          <Badge key={ technology.id }>{ technology.name }</Badge>
        )) : ''}
      </Flex>
    </>
  )
}