const radiusOfffset = (Math.PI * 2) / 360;

export const calculateDegrees = (steps: number, degrees: number) => {
  const degreesStep = degrees / (steps - 1);
  const startDegrees = degreesStep * ((steps - 1) / 2)

  return {
    degreesStep,
    startDegrees,
  }
}

export const getRangeStart = (range: number) => (
  (90 + (360 - range) / 2) * radiusOfffset
);

export const getRangeEnd = (startingAngle: number, range: number) => (
  startingAngle + range * radiusOfffset
);
 
export const getValueEnd = (startingAngle: number, stepSize: number, index: number) => {
  const angle = stepSize * index * radiusOfffset;
  return startingAngle + angle;
}

export const getCenteredValueEnd = (range: number, stepSize: number, index: number) => {
  const start = getRangeStart(range);
  const angle = stepSize * index * radiusOfffset;
  return start + angle;
}