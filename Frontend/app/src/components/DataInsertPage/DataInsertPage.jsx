import { useFormControl } from '@mui/material';
import * as React from 'react';
import { useParams } from 'react-router-dom';

const DataInsertPage = () => {
    const form = useFormControl();
    const params = useParams();
  return (
    <div>
      {params.type}
    </div>
  )
}

export { DataInsertPage };