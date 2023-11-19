import { Separator, Text } from "@radix-ui/themes";

interface WorkDescriptionCardProps {
  description: string,
}

export const WorkDescriptionCard = (props: WorkDescriptionCardProps): JSX.Element => {

  const { description } = props;
  return (
    <>
      <Separator my="3" size="4" />
      <Text as="div">{ description }</Text>
    </>
  )
}