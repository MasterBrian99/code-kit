import { Button } from '@mantine/core';
import React from 'react';

import { GeneratePassword } from '../../../../wailsjs/go/main/App';
const PasswordGenerator = () => {
  // const updateResultText = (result: string) => setResultText(result);

  interface Prop {
    alpha: boolean;
    calpha: boolean;
    num: boolean;
    specials: boolean;
    length: number;
  }

  const dat: Prop = {
    calpha: true,
    num: false,
    specials: true,
    length: 10,
    alpha: true,
  };
  function greet() {
    GeneratePassword(dat).then((res) => console.log(res));
  }
  return (
    <div>
      <Button onClick={() => greet()}>asd</Button>
    </div>
  );
};

export default PasswordGenerator;
