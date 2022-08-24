import { render, screen, fireEvent } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('AddCategoryComponent', ()=>{
    const value = 'Drangon Ball Z';

    test('Should change the input value', ()=>{
        render(<AddCategory onNewCategory= { ()=>{} }/>);
        const input = screen.getByRole("textbox");
        fireEvent.input(input, { target: { value }})
        //screen.debug()
        expect(input.value).toBe(value)
    });

    test('Should call onNewCategory() if input has a value', ()=>{
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory= { onNewCategory }/>);
        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        fireEvent.input(input, { target: { value }});
        fireEvent.submit(form);

        //screen.debug()
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledWith(value); 
    });

    test('Should not call onNewCategory() if input do not has a value', ()=>{
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory= { onNewCategory }/>);
        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        fireEvent.input(input, { target: { value : '' }});
        fireEvent.submit(form);

        //screen.debug()
        expect(input.value).toBe('');
        expect(onNewCategory).not.toHaveBeenCalled();
    });
})