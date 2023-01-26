import { Card, Group, Text } from '@mantine/core';
import React from 'react';
import { FaHtml5 } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface Prop {
  path: string;
  name: string;
  description: string;
}

const CategoryItemCard = (prop: Prop) => {
  const navigate = useNavigate();
  return (
    <Card
      withBorder
      radius="md"
      onClick={() => navigate(`../${prop.path}`)}
      sx={{
        cursor: 'pointer',
      }}
    >
      <Group position="apart">
        <Text size={'xl'}>{prop.name}</Text>
        {/* <Badge>12 days left</Badge> */}
        <FaHtml5 size={50} />
      </Group>

      <Text size="sm" color="dimmed" mt={5} mb={10}>
        {prop.description}
      </Text>
    </Card>
  );
};

export default CategoryItemCard;
