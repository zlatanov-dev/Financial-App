import DashboardBox from '@/components/DashboardBox'

type Props = {}

function Row1({}: Props) {
  return (
    <>
    <DashboardBox gridArea="a"></DashboardBox>
    <DashboardBox gridArea="b"></DashboardBox>
    <DashboardBox gridArea="c"></DashboardBox>
    </>
  )
}

export default Row1
