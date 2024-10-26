
import { createMatchMedia } from '../../../mocks/matchMedia.mock';
import NavBar from './NavBar';
import { render, screen } from '@testing-library/react';

describe('NavBar', () => {

    describe('md screen size', () => {
        beforeAll(() => {
            window.matchMedia = createMatchMedia(900);
        })

        it('renders all buttons and icons with correct text and href.', () => {
            render(<NavBar />)

            const homeButton = screen.getByRole('link', { name: /home/i });
            const projectButton = screen.getByRole('link', { name: /project/i });
            const travelButton = screen.getByRole('link', { name: /travel/i });
            const blogButton = screen.getByRole('link', { name: /blog/i });
            const gitHubIcon = screen.getByTestId('github');
            const linkedInIcon = screen.getByTestId('linkedIn');

            expect(homeButton).toBeInTheDocument();
            expect(homeButton).toHaveTextContent('HOME');
            expect(homeButton).toHaveAttribute('href', '/');


            expect(projectButton).toBeInTheDocument();
            expect(projectButton).toHaveTextContent('PROJECT');
            expect(projectButton).toHaveAttribute('href', '/projects');

            expect(travelButton).toBeInTheDocument();
            expect(travelButton).toHaveTextContent('TRAVEL');
            expect(travelButton).toHaveAttribute('href', '/travels');


            expect(blogButton).toBeInTheDocument();
            expect(blogButton).toHaveTextContent('BLOG');
            expect(blogButton).toHaveAttribute('href', '/blogs');

            expect(gitHubIcon).toBeVisible();
            expect(gitHubIcon).toHaveAttribute('href', 'https://github.com/kuenyuikwok1106');


            expect(linkedInIcon).toBeVisible();
            expect(linkedInIcon).toHaveAttribute('href', 'https://www.linkedin.com/in/yui-kuen-kwok/');

        })
    })


})