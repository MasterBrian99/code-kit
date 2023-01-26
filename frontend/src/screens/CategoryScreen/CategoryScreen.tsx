import { Box, Grid } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import CategoryItemCard from '../../components/CategoryItemCard/CategoryItemCard';
import { categoryItems } from '../../router/routes';
const CategoryScreen = () => {
  const { key } = useParams();

  const [items, setItems] = useState<
    {
      path: string;
      name: string;
      description: string;
    }[]
  >([]);
  console.log(key);

  useEffect(() => {
    type ObjectKey = keyof typeof categoryItems;
    if (key) {
      setItems(categoryItems[key as ObjectKey]);
      console.log(categoryItems[key as ObjectKey]);
    }
  }, []);

  return (
    <Box>
      <Grid>
        {items.map((el, i) => (
          <Grid.Col md={6} lg={4} key={i}>
            <CategoryItemCard
              description={el.description}
              name={el.name}
              path={`${key || ''}/${el.path}`}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoryScreen;
