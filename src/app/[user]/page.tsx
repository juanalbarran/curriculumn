import prisma from "@/prisma/db"
import { User } from "./user";
import { UserDataCard } from "./components";
import { UserWorkExperienceCard } from "./components/userWorkExperienceCard/UserWorkExperienceCard";
import { Container, Flex } from "@radix-ui/themes";
import { UserReferenceCard } from "./components/userRefenceCard/UserReferenceCard";

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
            <UserReferenceCard references={ user.references } />
          </Flex>
        </Container>
      : 'Loading'  
    }
    </>
  )
}

export default Page;