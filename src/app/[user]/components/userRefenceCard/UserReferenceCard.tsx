import { Card, Separator, Text } from "@radix-ui/themes"
import { Reference } from "../../user"

interface UserReferenceProps {
  references: Reference[],
}

export const UserReferenceCard = (props: UserReferenceProps): JSX.Element => {
  const { references } = props

  return (
    <Card size={"3"}>
      { references.map((reference: Reference) => (
        <>
          <Text as="div">{ reference.lastName }, { reference.name }</Text>
          <Text as="div">+({ reference.phone?.countryCode }) - { Number(reference.phone?.phoneNumber) }</Text>
          <Text as="div">{ reference.description }</Text>
          <Separator my="3" size="4" />
        </>
      ))}
    </Card>    
  )
}