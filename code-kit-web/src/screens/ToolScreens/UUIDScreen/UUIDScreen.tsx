import React, { useEffect, useState } from 'react'
import {
  Box,
  Text,
  Container,
  NumberInput,
  Grid,
  Button,
  Group,
  Textarea,
  Tooltip,
} from '@mantine/core'
import { IconCopy, IconRefreshDot } from '@tabler/icons'
import { useStyles } from './styles'
import { v4 as uuidv4 } from 'uuid'
import { successNotification } from '../../../notifications/notifications'
const UUIDScreen = () => {
  const [amount, setAmount] = useState(1)
  const [uuidValues, setUuidValues] = useState('')
  const { classes } = useStyles()

  useEffect(() => {
    const list = []
    if (!isNaN(amount)) {
      for (let i = 0; i < amount; i++) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        const value = String(uuidv4())
        list.push(value)
      }
      setUuidValues(list.join('\n'))
    }
  }, [amount])

  function copyToClipboard() {
    async function copy() {
      await window.Neutralino.clipboard.writeText(uuidValues)
    }
    copy()
      .then((res) => {
        console.log(res)
        successNotification('Copied to clipboard')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <Box className={'main'}>
      <Text className={`header`}>UUIDv4 Generator</Text>

      <Container size="xl" p="xs" className={classes.container}>
        <Grid justify="center" align="center">
          <Grid.Col xl={9} lg={9} md={8} sm={7} xs={7}>
            <NumberInput
              radius={'md'}
              value={amount}
              placeholder="Amount"
              label="Amount"
              size="md"
              onChange={(e) => setAmount(e as number)}
              min={1}
            />
          </Grid.Col>
          <Grid.Col xl={3} lg={3} md={4} sm={5} xs={5}>
            <Group position="center" mt={'xl'}>
              <Button className={classes.mainButton} onClick={() => setAmount(1)}>
                <IconRefreshDot size={18} />
              </Button>
              <Tooltip label={'Copy'} withArrow position="right">
                <Button className={classes.mainButton} onClick={copyToClipboard}>
                  <IconCopy size={18} />
                </Button>
              </Tooltip>
            </Group>
          </Grid.Col>
        </Grid>
        <Box className={classes.textArea}>
          <Textarea autosize minRows={2} maxRows={20} value={uuidValues} />
        </Box>
      </Container>
    </Box>
  )
}

export default UUIDScreen
