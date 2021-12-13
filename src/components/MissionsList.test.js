import React from 'react';
import { screen, render } from '@testing-library/react';
import MissionsList from './MissionsList';

test("renders without errors", ()=> {
    render(<MissionsList missions={[]}/>);
});

test("renders no missions and then renders 3 missions on rerendering", ()=> {
    
});