import React from "react"
import { render, screen } from '@testing-library/react'
import MissionForm from "./MissionForm"

test ( "render wothout error", () => {
    render (<MissionForm />)
}) 