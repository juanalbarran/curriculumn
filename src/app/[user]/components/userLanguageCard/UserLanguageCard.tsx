import { Language } from "@/app/[user]/user"
import { Box, Card, Separator, Text } from "@radix-ui/themes"

interface UserLanguageCardProps {
  languages: Language[]
}

export const UserLanguageCard = (props: UserLanguageCardProps) => {
  
  const { languages } = props;

  return (
    <Card size="3">
      <Text as="div" weight={"bold"}>
        Languages
      </Text>
      <Separator my="3" size="4" />
      { languages.map((language: Language) => (
        <Box>
          <Text as="div">
            <b>{ language.name }</b> - { language.languageLevel.name }
          </Text>
        </Box>
      ))}
    </Card>
  ) 
}