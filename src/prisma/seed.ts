import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const java = await prisma.technology.create({
    data: { name: 'Java' }
  })
  const javaScript = await prisma.technology.create({
    data: { name: 'Javascript' }
  })
  const react = await prisma.technology.create({
    data: { name: 'React' }
  })
  const springmvc = await prisma.technology.create({
    data: { name: 'SpringMVC' }
  })
  const springboot = await prisma.technology.create({
    data: { name: 'Spring boot' }
  })
  const struts = await prisma.technology.create({
    data: { name: 'Struts2' }
  })
  const angular = await prisma.technology.create({
    data: { name: 'AngularJS' }
  })
  const postgreSql = await prisma.technology.create({
    data: { name: 'PostgreSQL' }
  })
  const jquery = await prisma.technology.create({
    data: { name: 'JQuery' }
  })
  const linux = await prisma.technology.create({
    data: { name: 'Linux Bash' }
  })
  const cvs = await prisma.technology.create({
    data: { name: 'CVS' }
  })
  const git = await prisma.technology.create({
    data: { name: 'Git' }
  })
  const bootstrap = await prisma.technology.create({
    data: { name: 'Bootstrap' }
  })
  const ymer = await prisma.technology.create({
    data: { name: 'Ymer' }
  })
  const redux = await prisma.technology.create({
    data: { name: 'Redux' }
  })
  const jenkins = await prisma.technology.create({
    data: { name: 'Jenkins' }
  })
  const jira = await prisma.technology.create({
    data: { name: 'JIRA' }
  })
  const bitBucket = await prisma.technology.create({
    data: { name: 'Bitbucket' }
  })
  const gitlab = await prisma.technology.create({
    data: { name: 'Gitlab' }
  })
  const docker = await prisma.technology.create({
    data: { name: 'Docker' }
  })

  const juan = await prisma.user.upsert({
    where: { 
      userName: 'juanalbarran',
      email: 'juanjesusalbarran@gmail.com'
    },
    update: {},
    create: {
      name: 'Juan Jesus',
      lastName: 'Albarran Rodriguez',
      email: 'juanjesusalbarran@gmail.com',
      userName: 'juanalbarran',
      nationality: 'Venezuelan',
      birthDate: new Date('1983-09-11'),
      birthPlace: 'Venezuela',
      address: {
        create: {
          country: 'Hungary',
          city: 'Budapest',
          code: 1115,
          street: 'Bank ban utca 9'
        }
      },
      phone: {
        create: {
          countryCode: 36,
          phoneNumber: 706601399,          
        }
      },
      workExperience: {
        create: [{
          title: 'Lead Developer / Solution Architect',
          description: 'Responsible for the design, development and completion of all the projects of the Systems department. Project Name: PMiS (POS Management and information System)',
          company: {
            create: {
              logo: "",
              name: "Pos Managed Services",
            },
          },
          startDate: new Date('2010-04-01'),
          endDate: new Date('2014-04-01'),
          technologies: {
            connect: [
              java, javaScript, springmvc, struts, postgreSql, jquery, linux, cvs
            ]
          },
          workActivity: {
            create: [
              { activity: 'Automatize the operation of the company.' },
              { activity: 'Lead a team of 5 developers.' },
              { activity: 'Design and develop the Inventory and Consultation modules in PMiS, the software of the company.' },
              { activity: 'In charge of the maintenace of the Linux and Windows Server.' },
              { activity: 'Configuration and maintenance of the company firewall.' },
            ]
          }
        },
        {
          title: 'Lead Developer',
          description: 'Responsible for the design, development and completion of all the projects of the Systems department. Project Name: Hxplus.',
          company: {
            create: {
              logo: "",
              name: "Globinsoft Solutions",
            },
          },
          startDate: new Date('2014-04-01'),
          endDate: new Date('2016-12-01'),
          technologies: {
            connect: [
              java, javaScript, springmvc, postgreSql, linux, angular, bootstrap, git
            ]
          },
          workActivity: {
            create: [
              { activity: 'Lead a team of 5 developers.' },
              { activity: 'Design and develop HxPlus, a medical software.' },
              { activity: 'In charge of the maintenace of the Linux server.' },
              { activity: 'Configuration and maintenance of the company firewall.' },
            ]
          }
        },
        {
          title: 'Freelancer',
          startDate: new Date('2017-01-01'),
          endDate: new Date('2018-05-01'),
          description: 'Project Name: Odontologico.',
          company: {
            create: {
              logo: '',
              name: 'Andres Abraham C.A.'
            }
          },
          technologies: {
            connect: [
              angular, java, springboot, postgreSql
            ]            
          }
        },
        {
          title: 'Software developer',
          startDate: new Date('2018-05-15'),
          description: 'Cognitive Software, Design Optimization Platform - Contributing in the development of the tools of the 5G platform.',
          company: {
            create: {
              logo: '',
              name: 'Ericsson',
            }
          },
          workActivity: {
            create: [
              { activity: 'Developer in creating a design tool of 5G networks.' },
              { activity: 'Designing CICD pipelines.' },
              { activity: 'Security spock of several services in the CSW area.' },
              { activity: '3PP spock of several services in CSW, BMAS areas.' },
            ]
          },
          technologies: {
            connect: [
              java, javaScript, springboot, git, react, ymer, redux,jenkins, jira, bitBucket, gitlab, docker
            ]
          },
        }
      ]
      }
    }
  })
}
main().then(async () => {
  await prisma.$disconnect()
}).catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})