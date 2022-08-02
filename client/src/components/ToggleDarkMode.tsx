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
        margin: 'auto',
        display: 'block',
        width: 'fit-content',
      }} */
    >
      <FormControlLabel control={<Switch checked={darkState.status} onChange={handleChange} /* color="primary" */ name="status" />} label="Dark mode" />
    </div>
  );
}
