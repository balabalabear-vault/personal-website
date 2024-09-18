

import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";


describe('testing the Header component', () => {
    const title = 'a';
    const subtitle = 'blablabla';

    beforeEach(() => (
        render(<Header title={title} subtitle={subtitle} />)
    ))
    
    it('should render properly', () => {
        const header = screen.getByRole("heading", { name: title });
        expect(header).toBeInTheDocument()
    })
})