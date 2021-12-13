import React from "react"
import { render, screen } from '@testing-library/react'
import MissionForm from "./MissionForm"

test ( "render wothout error", () => {
    render (<MissionForm />)
}) 

test ("renders loading message if isFetchingData is true", () => {
    //Arrange : render the component to the screen
    render (<MissionForm isFetchingData = { true } />)
    //Act : query for my loading message
    const message = screen.queryByText(/we are fetching data/i)
    const button = screen.queryByRole('button')
    
    console.log('message: ', message)
    //Assert : does the message exist
    expect(message).toBeInTheDocument()
    expect(message).toHaveTextContent('we are fetching data')
    expect(message).not.toBeFalsy()
    expect(message).toBeTruthy()
    expect(button).not.toBeInTheDocument()
})

// test ("renders button if isFetchingData is false", () => {

// })

// test ("executes getData when the button is clicked", () => {

// })

