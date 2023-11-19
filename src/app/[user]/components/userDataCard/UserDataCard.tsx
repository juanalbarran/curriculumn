import { Box, Card, Heading, Separator, Text } from "@radix-ui/themes";
import { User } from "../../user";

interface UserCardProps {
  user: User,
}

export const UserDataCard = (props: UserCardProps): JSX.Element => {
  
  const { user } = props;

  return (
    <Card size={"3"}>
      <Heading>{ user.lastName }, { user.name }</Heading>
      <Separator my="3" size="4" />
      <Box className="py-2">
        <Text as="div">{ user.email }</Text>
        <Text as="div">(+{ user.phone?.countryCode }) { user.phone?.phoneNumber }</Text>
      </Box>
      <Box>
        <Text as="div">I'm { user.nationality }</Text>
        <Text as="div">Living in { user.address?.city }, { user.address?.country }</Text>
        <Text as="div">In { user.address?.street }, { user.address?.code }</Text>
      </Box>
    </Card>
  )
}