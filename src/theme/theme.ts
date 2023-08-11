import { createTheme } from '@mui/material';

import {
  primary,
  secondary,
  error,
  customGray,
  textColor,
} from './theme.constants';

export const theme = createTheme({
  palette: {
    primary,
    secondary,
    error,
    textColor,
    customGray,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          whiteSpace: 'nowrap',
          wordBreak: 'break-word',
          textTransform: 'none',
          borderRadius: 15,
          ':disabled': {
            color: theme.palette.textColor.main,
            backgroundColor: theme.palette.customGray.main,
            opacity: 0.5,
          },
        }),
      },
      variants: [
        {
          props: { size: 'large' },
          style: {
            minWidth: 250,
            height: 90,
          },
        },
        {
          props: { variant: 'contained' },
          style: {
            backgroundColor: primary.main,
            color: textColor.main,
            '&:hover': {
              backgroundColor: primary.dark,
              color: textColor.main,
            },
          },
        },
      ],
    },
    MuiInputBase: {
      styleOverrides: {
        input: ({ theme }) => ({
          '&.Mui-disabled': {
            WebkitTextFillColor: 'initial',
            color: theme.palette.textColor.dark,
            '::placeholder': {
              opacity: 1,
              color: theme.palette.customGray.main,
            },
          },
        }),
        root: ({ theme }) => ({
          width: 368,
          height: 60,
          color: theme.palette.secondary.main,
          borderWidth: 1,
          borderRadius: 8,
          '&:hover': {
            '> fieldset.MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.customGray.main,
            },
          },
          '&.Mui-focused': {
            ' > fieldset.MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.primary.main,
              borderWidth: 2,
            },
          },
          '> input::placeholder': {
            fontSize: 14,
            color: theme.palette.customGray.main,
          },
        }),
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: ({ theme }) => ({
          color: secondary.main,

          '&.Mui-focused fieldset': {
            borderColor: theme.palette.customGray.dark,
            color: '#fff',
          },
        }),
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          paddingTop: 0,
          paddingBottom: 0,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          height: 60,
          '&.Mui-selected': {
            backgroundColor: theme.palette.primary.main,
            '&:hover': {
              backgroundColor: theme.palette.primary.main,
            },
          },
          '&:hover': {
            backgroundColor: theme.palette.customGray.main,
          },
        }),
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '& .MuiSvgIcon-root': {
            fontSize: 24,
          },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          height: 10,
          marginBottom: 36,
          marginTop: 24,
        },
        markLabel: ({ theme }) => ({
          top: 60,
          color: theme.palette.secondary.main,
          fontWeight: 500,
          fontSize: 24,
        }),
        thumb: {
          boxShadow: 'none',
          width: 60,
          height: 60,
        },
      },
    },
  },
});
