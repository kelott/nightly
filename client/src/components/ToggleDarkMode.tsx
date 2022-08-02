// @ts-nocheck

import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export function ToggleDarkMode({ darkState, setDarkState }) {
  const handleChange = (event) => {
    setDarkState({ ...darkState, [event.target.name]: event.target.checked });
  };

  return (
    <div
      /* style={{
        display: 'flex',
        margin: 'auto',
        width: 'fit-content',
        float: 'inline-start',
      }} */
      style={{
        display: 'flex',
        paddingInline: '0.8em',
        paddingBlock: '1.5em',
      }}
    >
      <FormControlLabel control={<Switch checked={darkState.status} onChange={handleChange} /* color="primary" */ name="status" />} label="Dark mode" />
    </div>
  );
}
