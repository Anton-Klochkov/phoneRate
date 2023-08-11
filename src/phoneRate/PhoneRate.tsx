import { FormEvent, useState } from 'react';

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
  Box,
  Button,
  TextField,
  Snackbar,
  Alert,
} from '@mui/material';
import styles from './phoneRate.module.scss';
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

import { secondary } from '../theme';

export const PhoneRate = () => {
  const [formSubmit, setFormSubmit] = useState('');
  const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    setFormSubmit(JSON.stringify(Object.fromEntries(data.entries())));
    toggleBar();
  };

  const toggleBar = () => {
    setIsOpenSnackbar((prev) => !prev);
  };

  return (
    <>
      <Card
        className={styles.cardPhoneRate}
        sx={{ backgroundColor: '#eef2f4', boxShadow: 'none', overflow: 'auto' }}
      >
        <CardContent
          sx={{
            p: 0,
            '&:last-child': { p: '120px' },
          }}
        >
          <Typography variant="h2">Настройте тариф</Typography>
          <form onSubmit={handleSubmit}>
            <Box>
              <Typography variant="h4" fontWeight={500}>
                Телефон
              </Typography>

              <InputMask name="phoneNumber" mask="+7 (999) 999-99-99">
                <TextField
                  required
                  fullWidth
                  placeholder="+7 (___) ___-__-__"
                />
              </InputMask>

              <FormControl fullWidth>
                <Typography variant="h4" fontWeight={500}>
                  Оператор
                </Typography>
                <Select name="operator" defaultValue={'Оператор №1'}>
                  <MenuItem value={'Оператор №1'}>Оператор №1</MenuItem>
                  <MenuItem value={'Оператор №2'}>Оператор №2</MenuItem>
                  <MenuItem value={'Оператор №3'}>Оператор №3</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box className={styles.wrapSliders}>
              <Box className={styles.sliderContainer}>
                <Typography variant="h4" fontWeight={500}>
                  Минуты
                </Typography>
                <Slider
                  defaultValue={2}
                  name="minutes"
                  slots={{ thumb: SetBlueThumb }}
                  min={1}
                  max={4}
                  step={1}
                  marks={marksMinutes}
                />
              </Box>
              <Box className={styles.sliderContainer}>
                <Typography variant="h4" fontWeight={500}>
                  СМС
                </Typography>
                <Slider
                  defaultValue={1}
                  name="sms"
                  slots={{ thumb: SetBlueThumb }}
                  min={1}
                  max={4}
                  step={1}
                  marks={marksSms}
                />
              </Box>
              <Box className={styles.sliderContainer}>
                <Typography variant="h4" fontWeight={500}>
                  Интернет
                </Typography>
                <Slider
                  defaultValue={3}
                  name="internet"
                  sx={{ color: secondary.main }}
                  slots={{ thumb: SetBlackThumb }}
                  min={1}
                  max={4}
                  step={1}
                  marks={marksInternet}
                />
              </Box>
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
                <FormControlLabel
                  control={
                    <Checkbox name="routerTenancy" defaultChecked={false} />
                  }
                  label={
                    <Typography variant="h5">"Аренда 99 ₽/мес."</Typography>
                  }
                />
                <FormControlLabel
                  control={<Checkbox name="routerBuy" defaultChecked={false} />}
                  label={
                    <Typography variant="h5">"Выкупить 2 600 ₽"</Typography>
                  }
                />
              </FormGroup>
            </Box>
            <Box>
              <Typography variant="h4" fontWeight={500}>
                Соцсети
              </Typography>
              <FormGroup row>
                <FormControlLabel
                  labelPlacement="bottom"
                  control={
                    <Checkbox
                      name="facebook"
                      defaultChecked={false}
                      icon={<FbOff />}
                      checkedIcon={<Fb />}
                    />
                  }
                  label="20 ₽"
                />
                <FormControlLabel
                  labelPlacement="bottom"
                  control={
                    <Checkbox
                      name="vk"
                      defaultChecked={true}
                      icon={<VkOff />}
                      checkedIcon={<Vk />}
                    />
                  }
                  label="20 ₽"
                />
                <FormControlLabel
                  labelPlacement="bottom"
                  control={
                    <Checkbox
                      name="ok"
                      defaultChecked={false}
                      icon={<OkOff />}
                      checkedIcon={<Ok />}
                    />
                  }
                  label="20 ₽"
                />
                <FormControlLabel
                  labelPlacement="bottom"
                  control={
                    <Checkbox
                      name="instagram"
                      defaultChecked={false}
                      icon={<InstagramOff />}
                      checkedIcon={<Instagram />}
                    />
                  }
                  label="60 ₽"
                />
                <FormControlLabel
                  labelPlacement="bottom"
                  defaultChecked={false}
                  control={
                    <Checkbox
                      name="tiktok"
                      defaultChecked={false}
                      icon={<TikTokOff />}
                      checkedIcon={<TikTok />}
                    />
                  }
                  label="60 ₽"
                />
              </FormGroup>
            </Box>
            <Button
              type="submit"
              sx={{
                backgroundColor: '#7A5CFA',
                height: 90,
                width: 250,
                marginTop: '24px',
              }}
              variant="contained"
            >
              <Typography fontWeight={400} fontSize={24}>
                отправить форму
              </Typography>
            </Button>
          </form>
        </CardContent>
      </Card>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={isOpenSnackbar}
        autoHideDuration={2000}
        onClose={toggleBar}
      >
        <Alert onClose={toggleBar} severity="success" sx={{ width: '100%' }}>
          <Typography variant="h3">{formSubmit}</Typography>
        </Alert>
      </Snackbar>
    </>
  );
};
