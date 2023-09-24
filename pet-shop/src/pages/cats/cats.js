import * as React from 'react';
import DropdownTK from '../../components/Dropdown/dropdown';

export default class Cats extends React.Component {
  render() {
    return (
      <div>
        <DropdownTK
          title="Breed"
          options={[
            { name: 'Any' },
            { name: 'Atticus', total: 100 },
            { name: 'Winston', total: 21 },
          ]}
        ></DropdownTK>
      </div>
    );
  }
}
