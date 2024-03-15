import React from "react";
import {render} from "@testing-library/react"
import NavBar from "../components/NavBar"
import { BrowserRouter } from "react-router-dom";

describe("NavBar", ()=>{
    it("renders correctly", ()=>{
        const {asFragment} = render(<BrowserRouter><NavBar /></BrowserRouter>)
        expect(asFragment).toMatchSnapshot()
    })
})