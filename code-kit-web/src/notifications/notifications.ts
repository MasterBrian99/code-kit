import { showNotification } from '@mantine/notifications'

export function successNotification(message = '') {
  showNotification({
    id: 'hello-there',
    disallowClose: true,
    onClose: () => console.log('unmounted'),
    onOpen: () => console.log('mounted'),
    autoClose: 5000,
    title: 'Success !',
    message: message,
    color: 'green',
    style: { backgroundColor: 'red' },
    sx: { backgroundColor: 'green' },
    loading: false,
  })
}
