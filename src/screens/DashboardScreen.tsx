import { Box } from '@chakra-ui/react'

const DashboardScreen = () => {
  return (
    <Box w={'full'}>
      <h1>asdasd</h1>
      <h1>asdasd</h1>
      <h1>asdasd</h1>
      <h1>asdasd</h1>
      {/* Array(n)].map((e, i) => <span className="busterCards" key={i}>♦</span> */}
      {Array.from({ length: 100 }, (_, i) => (
        <h1 key={i}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores at dolor
          voluptatum officiis. Harum, similique. Deleniti, quos id pariatur autem iure
          aperiam veritatis dolore nulla, nemo, debitis pers piciatis totam? Iusto.
        </h1>
      ))}
    </Box>
  )
}

export default DashboardScreen
