import prisma from "@/prisma/db"
import { User } from "./user";
import { UserDataCard, UserWorkExperienceCard, UserReferenceCard, UserLanguageCard } from "./components";
import { Container, Flex } from "@radix-ui/themes";

const Page = async ( { params }: { params: { user: string } } ) => {
  
  const user: User | null = await prisma.user.findUnique({
    where: {
      userName: params?.user
    },
    include: {
      address: true,
      phone: true,
      workExperience: {
        orderBy: {
          startDate: 'desc',
        },
        include: {
          company: true,
          technologies: true,
          workActivity: true,
        }
      },
      references: {
        include: {
          phone: true,
        }
      },
      languages: {
        include: {
          languageLevel: true
        }
      }
    }
  });

  return (
    <>
    { 
      user ? 
        <Container>
          <Flex gap={"7"} direction={"column"}>
            <UserDataCard user={user}/>
            <UserWorkExperienceCard workExperiences={ user.workExperience }/>
            <UserLanguageCard languages={ user.languages } />
            <UserReferenceCard references={ user.references } />
          </Flex>
        </Container>
      : 'Loading'  
    }
    </>
  )
}

export default Page;