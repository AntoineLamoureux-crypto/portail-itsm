import { isString } from 'lodash-es';
import { forwardRef, useState } from 'react';
import { useDayzed } from 'dayzed';
import {
  Box,
  Popover,
  PopoverTrigger,
  PopoverHeader,
  PopoverContent,
  PopoverBody,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
} from '@chakra-ui/react';

import Calendar, { NavHeader } from './Calendar.jsx';
import locales from './locales';
import { FiCalendar } from 'react-icons/fi';

const DatePicker = forwardRef(({ min, max, value, onChange }, ref) => {
  const [isOpen, setIsOpen] = useState();

  const dateValue = isString(value) ? Date.fromISO(value) : value;

  const selectedDate = dateValue;
  const { calendars, ...calendarProps } = useDayzed({
    date: selectedDate,
    selected: selectedDate,
    onDateSelected: ({ date }) => {
      setIsOpen(false);
      onChange(new Date(date));
    },
    minDate: min,
    maxDate: max,
  });
  calendarProps.calendar = calendars[0];
  calendarProps.locale = Date.locale === 'fr' ? locales.fr : locales.en;

  return (
    <Box w="full">
      <Popover
        isOpen={isOpen}
        closeOnEsc
        onClose={() => setIsOpen(false)}
        matchWidth
      >
        <PopoverTrigger>
          <InputGroup onClick={() => setIsOpen(true)}>
            <InputLeftElement>
              <Icon
                color="gray.400"
                fontSize="20px"
                as={FiCalendar}
                cursor="pointer"
              />
            </InputLeftElement>
            <Input ref={ref} isReadOnly value={dateValue} />
          </InputGroup>
        </PopoverTrigger>
        <PopoverContent w="330px">
          <PopoverHeader>
            <NavHeader {...calendarProps} />
          </PopoverHeader>
          <PopoverBody>
            <Calendar {...calendarProps} />
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
});

DatePicker.displayName = 'DatePicker';

export default DatePicker;
