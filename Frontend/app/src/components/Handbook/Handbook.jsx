import * as React from 'react'
import { useParams } from 'react-router-dom';

const Handbook = () => {
    const params = useParams();
    console.log(Object.keys(params)[0])
  return (
    <div>Handbook</div>
  )
}

export { Handbook };