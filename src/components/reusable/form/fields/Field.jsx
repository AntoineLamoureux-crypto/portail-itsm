import React from 'react';
import PanelField from './PanelField';
import TextField from './TextField';
import RadioField from './RadioField';
import NoMatch from './NoMatch';
import DateField from './DateField';
import PanelWrapper from './PanelWrapper';

export default function Field({
  nBFieldValue,
  onValueChange,
  field,
  direction,
}) {
  function getFieldContent() {
    switch (field.type) {
      case 'PanelInput':
        return <PanelWrapper direction={direction}>{getPanels()}</PanelWrapper>;
      case 'TextInput':
        return (
          <TextField
            field={field}
            nBFieldValue={nBFieldValue}
            onValueChange={onValueChange}
          />
        );

      case 'DateInput':
        return (
          <DateField
            field={field}
            nBFieldValue={nBFieldValue}
            onValueChange={onValueChange}
          />
        );

      case 'RadioInput':
        return (
          <RadioField
            field={field}
            options={field.options}
            nBFieldValue={nBFieldValue}
            onValueChange={onValueChange}
          />
        );
      default:
        <NoMatch />;
    }
  }

  return getFieldContent();

  function getPanels() {
    return field.options.map((option, id) => {
      return (
        <PanelField
          key={id}
          label={option.value}
          icon={option.icon}
          fieldName={field.name}
          nBFieldValue={nBFieldValue}
          onValueChange={onValueChange}
        />
      );
    });
  }
}
