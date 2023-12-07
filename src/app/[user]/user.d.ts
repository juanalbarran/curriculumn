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
})

const workExperience = Prisma.validator<Prisma.WorkExperienceDefaultArgs>()({
    include: {
        company: true,
        technologies: true,
        workActivity: true,
    }
})
const reference = Prisma.validator<Prisma.ReferenceDefaultArgs>()({
    include: {
        phone: true,
    }
})

const language = Prisma.validator<Prisma.LanguageDefaultArgs>()({
    include: {
        languageLevel: true
    }
})

export type User = Prisma.UserGetPayload<typeof user>
export type WorkExperience = Prisma.WorkExperienceGetPayload<typeof workExperience>
export type Reference = Prisma.ReferenceGetPayload<typeof reference>
export type Language = Prisma.LanguageGetPayload<typeof language>