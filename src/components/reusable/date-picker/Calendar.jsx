import {
  HStack,
  Center,
  Grid,
  GridItem,
  Button,
  IconButton,
  Text,
  Icon,
} from '@chakra-ui/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function Calendar({ calendar, getDateProps, locale }) {
  return (
    <Center>
      <Grid
        templateRows={`repeat(${calendar.weeks}, 1fr)`}
        templateColumns="repeat(7, 40px)"
        gap={1}
      >
        {locale.weekdayNamesShort.map(weekday => (
          <Text
            key={`${calendar.month}${calendar.year}${weekday}`}
            textAlign="center"
            fontWeight="semibold"
          >
            {weekday}
          </Text>
        ))}
        {calendar.weeks.map((week, weekIndex) => {
          return week.map((dateObj, index) => {
            if (!dateObj) {
              return <GridItem key={`${weekIndex}.${index}`} />;
            }
            const { date, selected, today } = dateObj;
            return (
              <Button
                key={`${weekIndex}.${index}`}
                borderRadius="full"
                bg={selected ? 'blue.300' : today ? 'gray.300' : 'transparent'}
                {...getDateProps({ dateObj })}
              >
                <Text fontWeight="normal">{date.getDate()}</Text>
              </Button>
            );
          });
        })}
      </Grid>
    </Center>
  );
}

export function NavHeader({ getBackProps, getForwardProps, calendar, locale }) {
  const calendars = [calendar];
  console.log(calendars);
  return (
    <Center>
      <HStack>
        <NavButton
          icon={<Icon as={FiChevronLeft} />}
          {...getBackProps({ calendars, offset: 12 })}
        />
        <NavButton
          icon={<Icon as={FiChevronLeft} />}
          {...getBackProps({ calendars })}
        />
        <Text fontWeight="semibold">
          {locale.monthNames[calendar.month]} {calendar.year}
        </Text>
        <NavButton
          icon={<Icon as={FiChevronRight} />}
          {...getForwardProps({ calendars })}
        />
        <NavButton
          icon={<Icon as={FiChevronRight} />}
          {...getForwardProps({ calendars, offset: 12 })}
        />
      </HStack>
    </Center>
  );
}

function NavButton({ icon, ...props }) {
  return (
    <IconButton
      size="sm"
      isRound
      variant="outline"
      border="none"
      icon={icon}
      {...props}
    />
  );
}
