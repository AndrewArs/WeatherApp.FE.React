import { Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { WeatherForecastDto } from '../api';

export interface WeatherForecastProps {
  data: WeatherForecastDto;
}

interface GridItemProps {
  title: string;
  text: string | null | number | undefined;
}
const GridItem = ({ title, text }: GridItemProps) => {
  return (
    <>
      <Grid xs={5} md={2}>
        <Typography fontWeight={'bold'}>{title}</Typography>
      </Grid>
      <Grid xs={7} md={10}>
        <Typography>{text}</Typography>
      </Grid>
    </>
  );
};

const WeatherForecast = (props: WeatherForecastProps) => {
  const { data } = props;
  return (
    <Paper sx={{ mb: 2, p: 2 }} elevation={12}>
      <Grid container spacing={2}>
        <GridItem title="Provider:" text={data.provider} />
        <GridItem title="Temperature:" text={data.temperature} />
        <GridItem title="Forecast:" text={data.weather} />
        <GridItem
          title="Last updated at:"
          text={new Date(data.updatedAt!).toLocaleString()}
        />
      </Grid>
    </Paper>
  );
};
export default WeatherForecast;
