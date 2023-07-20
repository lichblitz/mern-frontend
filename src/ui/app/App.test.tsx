import React from "react";
import {render, screen} from '@testing-library/react'
import App from './App';

describe("App test", ()=> {
    it('Should exist', () => {
        render(<App />);
        const element = screen.getByTestId('app');
        expect(element).toBeInTheDocument();
    });
});
