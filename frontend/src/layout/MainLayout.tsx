import { Fragment } from 'react';
import { AppShell } from '@mantine/core';
import Navigation from '../components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import CustomHeader from '../components/CustomHeader/CustomHeader';
export function MainLayout() {
  return (
    <Fragment>
      <AppShell
        padding={'md'}
        navbar={<Navigation />}
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            minHeight: '95vh',
          },
        })}
      >
        <CustomHeader />
        <Outlet />
      </AppShell>
    </Fragment>
  );
}
