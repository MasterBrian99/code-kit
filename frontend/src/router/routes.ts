import PasswordGenerator from '../screens/GeneratorScreens/PasswordGenerator/PasswordGenerator';

export const routes = [
  {
    name: 'Generators',
    key: 'generators',
    element: [
      {
        key: 'password',
        component: PasswordGenerator,
      },
    ],
  },
];

export const categoryItems = {
  css: [
    {
      path: 'Password',
      name: 'Password',
      description:
        'Form context management, Switch, Grid and Indicator components improvements, new hook and 10+ other changes',
    },
  ],
  generators: [
    {
      path: 'password',
      name: 'Password',
      description:
        'Form context management, Switch, Grid and Indicator components improvements, new hook and 10+ other changes',
    },
    {
      path: 'password2',
      name: 'Password',
      description:
        'Form context management, Switch, Grid and Indicator components improvements, new hook and 10+ other changes',
    },
  ],
};
