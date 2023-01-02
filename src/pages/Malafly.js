import {useState, useEffect} from 'react';

import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';

import {Outlet} from 'react-router-dom';

import BasePage from './BasePage';
import {
  ROW_STYLE, COLUMN_STYLE, RIGID, RELATIVE, ABSOLUTE, combine, valueSetter,
  FULL_HEIGHT, GROW, HORIZONTAL_CENTER
} from '../constant_styles';
import MalaflyIndex from './MalaflyIndex';

import MalaflyIcon from '../../assets/malafly/malafly1_full.svg';
import BadGuyIcon from '../../assets/malafly/malafly-bad-guy-full.svg';

const Malafly = () => {

  const [index, setIndex] = useState();

  useEffect(() => {

    const doIt = async () => {

      const response = await fetch('assets/malafly_index.json');
      const json = await response.json();

      setIndex(json);
    };

    doIt();

  }, []);

  return (
    <BasePage title="Malafly Comics" id="malafly_comics">
      <Box sx={combine(ROW_STYLE, FULL_HEIGHT)}>
        <Box sx={combine(RIGID, COLUMN_STYLE, RELATIVE, {width: '150px'})}>
          <Box sx={combine(ABSOLUTE, valueSetter('bottom', '0px'))}>
            <SvgIcon component={MalaflyIcon} viewBox="160 160 800 800" sx={{fontSize: '15rem'}}/>
          </Box>
        </Box>
        <Box sx={combine(GROW, HORIZONTAL_CENTER, {overflow: 'auto'})}>
          <Outlet context={index} />
        </Box>
        <Box sx={combine(RIGID, COLUMN_STYLE, RELATIVE, {width: '150px'})}>
          <Box sx={combine(ABSOLUTE), {'bottom': '20px'}}>
            <SvgIcon component={BadGuyIcon} viewBox="160 160 800 800" sx={{fontSize: '15rem'}}/>
          </Box>
        </Box>
      </Box>
    </BasePage>
  );
};

export default Malafly;
