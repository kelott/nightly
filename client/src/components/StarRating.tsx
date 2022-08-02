// @ts-nocheck

import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarHalfIcon from '@mui/icons-material/StarHalf';

export function StarRating({ rate }) {
  function starsCalculator() {
    if (rate > 0.5 && rate < 1) {
      return (
        <>
          <StarIcon />
          <StarOutlineIcon />
          <StarOutlineIcon />
          <StarOutlineIcon />
          <StarOutlineIcon />
        </>
      );
    }
    if (rate > 1 && rate < 1.5) {
      return (
        <>
          <StarIcon />
          <StarHalfIcon />
          <StarOutlineIcon />
          <StarOutlineIcon />
          <StarOutlineIcon />
        </>
      );
    }
    if (rate > 1.5 && rate < 2) {
      return (
        <>
          <StarIcon />
          <StarIcon />
          <StarOutlineIcon />
          <StarOutlineIcon />
          <StarOutlineIcon />
        </>
      );
    }
    if (rate > 2 && rate < 2.5) {
      return (
        <>
          <StarIcon />
          <StarIcon />
          <StarHalfIcon />
          <StarOutlineIcon />
          <StarOutlineIcon />
        </>
      );
    }
    if (rate > 2.5 && rate < 3) {
      return (
        <>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarOutlineIcon />
          <StarOutlineIcon />
        </>
      );
    }
    if (rate > 3 && rate < 3.5) {
      return (
        <>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarHalfIcon />
          <StarOutlineIcon />
        </>
      );
    }
    if (rate > 3.5 && rate < 4) {
      return (
        <>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarOutlineIcon />
        </>
      );
    }
    if (rate > 4 && rate < 4.5) {
      return (
        <>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarHalfIcon />
        </>
      );
    }
    if (rate > 4.5) {
      return (
        <>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </>
      );
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        paddingInline: '5px',
        color: 'orange',
      }}
    >
      {starsCalculator()}
    </div>
  );
}
