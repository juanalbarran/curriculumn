import { Prisma } from "@prisma/client";

const user = Prisma.validator<Prisma.UserDefaultArgs>()({
    include: {
        address: true,
        phone: true,
        workExperience: {
            include: {
                company: true,
                technologies: true,
                workActivity: true,
            }
        }
    }
})

const workExperience = Prisma.validator<Prisma.WorkExperienceDefaultArgs>()({
    include: {
        company: true,
        technologies: true,
        workActivity: true,
    }
})

export type User = Prisma.UserGetPayload<typeof user>
export type WorkExperience = Prisma.WorkExperienceGetPayload<typeof workExperience>