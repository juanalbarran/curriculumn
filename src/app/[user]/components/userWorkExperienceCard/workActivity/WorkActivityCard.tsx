import { Separator, Text } from "@radix-ui/themes";

export interface WorkActivity {
  id: number,
  activity: string,
}

interface WorkActivityProps {
  workActivities: WorkActivity[],
}

export const WorkActivityCard = (props: WorkActivityProps) => {

  const { workActivities } = props
  return (
    <>
      <Separator my="3" size="4" />
      <Text weight={"medium"} as="div" className="pb-3">Activities</Text>
      <ul>
        { workActivities ? workActivities.map((workActivity: WorkActivity) => (
          <li key={ workActivity.id }>{ workActivity.activity }</li>
        )) : ''}
      </ul>
    </>
  )
}