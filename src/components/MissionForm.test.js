import React from 'react';
import { render, screen } from '@testing-library/react';
import MissionForm from './MissionForm';

test("renders without error", ()=> {
    render(<MissionForm/>);
});


test("renders loading message if isFetchingData is true", ()=> {
    //Arrange : render the component to the screen
    render(<MissionForm isFetchingData={true}/>);

    //Act : query for my loading message
    const message = screen.queryByText('div');
    console.log(message);
    //Assert
});

test("renders button if isFetchingData is false", ()=> {

});

test("executes getData when the button is clicked", ()=> {

});

