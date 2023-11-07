import { Box, Grid } from '@chakra-ui/react';

export default function ProgressBar({ numberOfSteps, stepNumber }) {
  const getColor = index => {
    if (stepNumber > index) {
      return 'cyan.600';
    } else if (stepNumber === index) {
      return 'cyan.900';
    }
    return 'gray.300';
  };
  const steps = Array.from({ length: numberOfSteps }, (_, i) => i + 1);

  return (
    <Grid templateColumns={`repeat(${numberOfSteps}, 1fr)`} gap={2}>
      {steps.map(step => (
        <Box
          key={step}
          bgColor={getColor(step)}
          borderLeftRadius={step === 1 ? 'md' : ''}
          borderRightRadius={numberOfSteps === step ? 'md' : ''}
          height="10px"
        />
      ))}
    </Grid>
  );
}
