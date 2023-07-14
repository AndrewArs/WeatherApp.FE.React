import { Box, Button, Container, Typography } from '@mui/material';
import { useAppDispatch } from '../store/hooks';
import { openToast } from '../features/toast/toastSlice';

interface RowProps {
  name: string;
  value: object | string | number | boolean;
  path: string;
  fromArray: boolean;
}

const Row = ({ name, value, path, fromArray }: RowProps) => {
  const dispatch = useAppDispatch();
  const isArray = Array.isArray(value);
  const isObject = typeof value == 'object';
  const currPath = `${path}.${fromArray ? `[${name}]` : name}`;

  const handleValueClick = async () => {
    const finalPath = currPath.startsWith('.') ? currPath.slice(1) : currPath;
    await navigator.clipboard.writeText(finalPath);
    dispatch(
      openToast({
        severity: 'info',
        text: `Copied value "${finalPath}" for value: ${JSON.stringify(value)}`
      })
    );
  };
  return (
    <Box display={'flex'}>
      <Typography fontWeight={'bold'}>{name}: </Typography>
      {isObject ? (
        <>
          <Typography>{isArray ? '[' : '{'}</Typography>
          <JsonViewer json={value} path={currPath} fromArray={isArray} />
          <Typography>{isArray ? ']' : '}'}</Typography>
        </>
      ) : (
        <Button variant="text" onClick={handleValueClick}>
          {value}
        </Button>
      )}
    </Box>
  );
};

export interface JsonViewerProps {
  json: object;
  path?: string;
  fromArray?: boolean;
}

const JsonViewer = ({ json, path = '', fromArray = false }: JsonViewerProps) => {
  if (!json) {
    return;
  }
  return (
    <Container>
      {Object.entries(json).map(([k, v], i) => {
        return <Row name={k} value={v} path={path} fromArray={fromArray} key={i} />;
      })}
    </Container>
  );
};
export default JsonViewer;
