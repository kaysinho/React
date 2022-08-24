import { render, screen } from "@testing-library/react"
import GifItem from "../../src/components/GifItem"

describe('GifItemComponent', () => {

    const img = {
        img: {
            title: 'Example',
            url: 'https://example.com/image.jpg'
        }
    }


    test('Should be a match with Snapshot', () => {
        const { container } = render(<GifItem img={ img } />);
        expect(container).toMatchSnapshot()
    });

    test('Should render an Image passed', () => {
        render(<GifItem img={ img.img } />);
        //screen.debug()
        expect(screen.getByRole('img').src).toBe(img.img.url)
    });

    test('Should render an Alt passed', () => {
        render(<GifItem img={ img.img } />);
        //screen.debug()
        expect(screen.getByRole('img').alt).toBe(img.img.title)
    });

    test('Should render a Title', () => {
        render(<GifItem img={ img.img } />);
        //screen.debug()
        expect(screen.getByText(img.img.title)).toBeTruthy()
    });
})