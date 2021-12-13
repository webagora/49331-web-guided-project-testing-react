import React from 'react';
import { screen, render } from '@testing-library/react';
import MissionsList from './MissionsList';

test("renders without errors", ()=> {
    render(<MissionsList missions={[]}/>);
});

test("renders no missions and then renders 3 missions on rerendering", ()=> {
    //Arrange 1
    render(<MissionsList mission={[]}/>);

    //Act 1
    
    //Assert 1

    //Arrange 2
    //Act 3
    //Assert 3
    
});