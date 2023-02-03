import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SelectGroup from './SelectGroup';
import SelectDate from './SelectDate';
import SelectPlace from './SelectPlace';

const PlanForm = () => {
  return (
    <div>
      <SelectGroup />
      <SelectDate />
      <SelectPlace />
    </div>
  );
};

export default PlanForm;
