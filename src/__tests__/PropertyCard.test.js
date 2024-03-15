import React from "react";
import {render, screen} from "@testing-library/react"
import PropertyCard from "../components/PropertyCard"

describe("property card", ()=>{
    const validProps = {
        title: "property title",
        type: "property type",
        bedrooms: 0,
        bathrooms: 0,
        price: 0,
        city: "Manchester",
        email: "",
    }
    it("renders properly", ()=>{
        const {asFragment} = render(<PropertyCard />)

        expect(asFragment).toMatchSnapshot()
    })

    it("renders with the correct title", ()=>{
        render(<PropertyCard title={validProps.title} />)
        const linkElement = screen.getByText("property title", {exact: true})
        expect(linkElement).toBeInTheDocument()
    })
})