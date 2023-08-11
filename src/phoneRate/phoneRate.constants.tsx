import { SliderThumb } from '@mui/material';
import { HTMLAttributes } from 'react';
import { ReactComponent as ThumbBlue } from './assets/thumbBlue.svg';
import { ReactComponent as ThumbBlack } from './assets/thumbBlack.svg';

export const MOCK_OPERATOR = [
  {
    value: 'Оператор №1',
  },
  {
    value: 'Оператор №2',
  },
  {
    value: 'Оператор №3',
  },
];

export const selectPointValueMinutes = (value: number) => {
  switch (value) {
    case 1:
      return 100;
    case 2:
      return 200;
    case 3:
      return 300;
    case 4:
      return 600;
    default:
      return 100;
  }
};

export const selectPointValueInternet = (value: number) => {
  switch (value) {
    case 1:
      return 5;
    case 2:
      return 10;
    case 3:
      return 15;
    case 4:
      return 25;
    default:
      return 5;
  }
};

export const selectPointValueSms = (value: number) => {
  switch (value) {
    case 1:
      return 0;
    case 2:
      return 50;
    case 3:
      return 100;
    case 4:
      return 150;
    default:
      return 0;
  }
};

const sliderPoints = [1, 2, 3, 4];

export const marksMinutes = sliderPoints.map((value) => ({
  value,
  label: selectPointValueMinutes(value),
}));

export const marksSms = sliderPoints.map((value) => ({
  value,
  label: selectPointValueSms(value),
}));

export const marksInternet = sliderPoints.map((value) => ({
  value,
  label: selectPointValueInternet(value),
}));

// export const checkPrice = (operator: string,) => {

// }

// export const marksSms = [
//   {
//     value: 0,
//     label: '0',
//   },
//   {
//     value: 50,
//     label: '50',
//   },
//   {
//     value: 100,
//     label: '100',
//   },
//   {
//     value: 150,
//     label: '150',
//   },
// ];

export const SetBlueThumb = (props: HTMLAttributes<unknown>) => {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <ThumbBlue />
    </SliderThumb>
  );
};

export const SetBlackThumb = (props: HTMLAttributes<unknown>) => {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <ThumbBlack />
    </SliderThumb>
  );
};

// export const foo = (data: { [k: string]: FormDataEntryValue }) => {
//   let newData = {}
//   switch (data?.operator) {
//     case "Оператор №1":
//       newData = {

//       }
//     case "Оператор №2":

//       break;
//     case "Оператор №3":

//       break;

//     default:
//       break;
//   }
// };
