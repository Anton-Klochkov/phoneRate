import {
  Typography,
  Card,
  CardContent,
  Select,
  MenuItem,
  FormControl,
  Slider,
  FormGroup,
  FormControlLabel,
  Checkbox,
  styled,
  Box,
  Button,
} from '@mui/material';
import styles from './phoneRate.module.scss';
import { useState, ChangeEvent } from 'react';
import InputMask from 'react-input-mask';
import {
  SetBlackThumb,
  SetBlueThumb,
  marksInternet,
  marksMinutes,
  marksSms,
} from './phoneRate.constants';

import { ReactComponent as Fb } from './assets/fb.svg';
import { ReactComponent as FbOff } from './assets/fbDis.svg';
import { ReactComponent as Instagram } from './assets/inst.svg';
import { ReactComponent as Ok } from './assets/ok.svg';
import { ReactComponent as TikTok } from './assets/tiktok.svg';
import { ReactComponent as Vk } from './assets/vk.svg';
import { ReactComponent as InstagramOff } from './assets/instDis.svg';
import { ReactComponent as OkOff } from './assets/okDis.svg';
import { ReactComponent as TikTokOff } from './assets/tiktokDis.svg';
import { ReactComponent as VkOff } from './assets/vkDis.svg';

export const PhoneRate = () => {
  const [phone, setPhone] = useState<undefined | string>(undefined);

  const SliderBlue = styled(Slider)({
    color: '#7A5CFA',
    height: 10,
    '& .MuiSlider-track': {
      border: 'none',
      height: 10,
    },
    '& .MuiSlider-thumb': {
      height: 60,
      width: 60,
    },
    '& .MuiSlider-markLabel': {
      paddingTop: '24px',
    },
  });

  const SliderBlack = styled(Slider)({
    color: '#000000',
    height: 10,
    '& .MuiSlider-track': {
      border: 'none',
      height: 10,
    },
    '& .MuiSlider-thumb': {
      height: 60,
      width: 60,
      backgroundImage: `url("./assets/thumbBlack.svg")`,
    },
    '& .MuiSlider-markLabel': {
      paddingTop: '24px',
    },
  });

  const handleInputPhone = (e: ChangeEvent<HTMLInputElement | undefined>) => {
    setPhone(e.target.value);
  };

  return (
    <Card className={styles.cardPhoneRate}>
      <CardContent
        sx={{
          p: 0,
          '&:last-child': { p: '120px' },
        }}
      >
        <Typography variant="h2">Настройте тариф</Typography>

        <Box sx={{ width: '368px' }}>
          <Typography variant="h4" fontWeight={500}>
            Телефон
          </Typography>

          <InputMask
            value={phone}
            onChange={handleInputPhone}
            mask="+7 (999) 999 99 99"
            maskChar=" "
          />

          <FormControl fullWidth>
            <Typography variant="h4" fontWeight={500}>
              Оператор
            </Typography>
            <Select defaultValue={'Оператор №1'}>
              <MenuItem value={'Оператор №1'}>Оператор №1</MenuItem>
              <MenuItem value={'Оператор №2'}>Оператор №2</MenuItem>
              <MenuItem value={'Оператор №3'}>Оператор №3</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box
          sx={{
            height: '450px',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h4" fontWeight={500}>
            Минуты
          </Typography>
          <SliderBlue
            slots={{ thumb: SetBlueThumb }}
            min={1}
            max={4}
            step={1}
            marks={marksMinutes}
          />

          <Typography variant="h4" fontWeight={500}>
            СМС
          </Typography>
          <SliderBlue
            slots={{ thumb: SetBlueThumb }}
            min={0}
            max={150}
            marks={marksSms}
          />

          <Typography variant="h4" fontWeight={500}>
            Интернет
          </Typography>
          <SliderBlack
            slots={{ thumb: SetBlackThumb }}
            min={1}
            max={4}
            step={1}
            // onChange={(_, newValue) => {
            //   if (newValue !== internet) {
            //     setInternet(newValue);
            //   }
            // }}
            marks={marksInternet}
          />
        </Box>

        <Box
          sx={{
            height: '141px',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexDirection: 'column',
            margin: '36px 0',
          }}
        >
          <Typography variant="h4" fontWeight={500}>
            Wi-Fi роутер
          </Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Аренда 99 ₽/мес." />
            <FormControlLabel control={<Checkbox />} label="Выкупить 2 600 ₽" />
          </FormGroup>
        </Box>
        <Box>
          <Typography>Соцсети</Typography>
          <FormGroup row>
            <FormControlLabel
              labelPlacement="bottom"
              control={<Checkbox icon={<FbOff />} checkedIcon={<Fb />} />}
              label="20 ₽"
            />
            <FormControlLabel
              labelPlacement="bottom"
              control={<Checkbox icon={<VkOff />} checkedIcon={<Vk />} />}
              label="20 ₽"
            />
            <FormControlLabel
              labelPlacement="bottom"
              control={<Checkbox icon={<OkOff />} checkedIcon={<Ok />} />}
              label="20 ₽"
            />
            <FormControlLabel
              labelPlacement="bottom"
              control={
                <Checkbox icon={<InstagramOff />} checkedIcon={<Instagram />} />
              }
              label="60 ₽"
            />
            <FormControlLabel
              labelPlacement="bottom"
              control={
                <Checkbox icon={<TikTokOff />} checkedIcon={<TikTok />} />
              }
              label="60 ₽"
            />
          </FormGroup>
        </Box>
        <Box>
          <Button
            sx={{ backgroundColor: '#7A5CFA', height: 90, width: 250 }}
            variant="contained"
          >
            420 ₽ в месяц
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
