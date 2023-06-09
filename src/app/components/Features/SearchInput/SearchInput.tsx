import React, { ChangeEventHandler, KeyboardEventHandler, useState } from 'react';

import SearchIcon from '../../../../assets/search-icon.png';
import Button from '../../UI/Button/Button';
import FlexBox from '../../UI/FlexBox';

import './SearchInput.styles.scss';

type SearchBoxProps = {
  onSubmit: (value: string) => void;
  initialValue: string;
};

const SearchInput = ({ onSubmit, initialValue }: SearchBoxProps) => {
  const [value, setValue] = useState(initialValue || '');

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    if (value && value !== '' && onSubmit) {
      onSubmit(value);
    }
  };

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <FlexBox className="cb-search-wrapper">
      <input className="search-input" onChange={handleChange} value={value} onKeyDown={handleKeyDown} />
      <Button buttonType="icon" onClick={handleSubmit}>
        <img src={SearchIcon} alt="search button" />
      </Button>
    </FlexBox>
  );
};

export default SearchInput;
