import React from 'react'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test ("renders without errors", () => {
    render (<App  />)

})

test("Renders all missions that are returned from fetchMissions", async () => {
    //Arrange: render our App component
    render(<App />);
    
    //Act:
    //  1. find button
    //  2. click button
    const button = screen.getByRole('button');
    userEvent.click(button);

    //Assert:
    //  get all items with test-id mission and check for 10 missions
    const missions = await screen.findAllByTestId("mission");
    expect(missions).toHaveLength(10);
});