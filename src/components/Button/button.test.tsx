import React from "react";
import Button from "./button";
import {render} from "@testing-library/react";

test("our first button", () => {
    const wrapper = render(<Button>nice</Button>);
    const element = wrapper.queryByText('nice');
    expect(element).toBeTruthy();
    expect(element).toBeInTheDocument();
})

describe('test button component', () => {
    it('should render default button', () => {
        const wrapper = render(<Button>nice</Button>);
        const element = wrapper.getByText('nice');
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual('BUTTON');
        expect(element).toHaveClass('btn btn-default');
    })
    it('should render button with different props', () => {
        
    })
    it('should render a link when  btnType equal link and href is provices', () => {
        
    })
})