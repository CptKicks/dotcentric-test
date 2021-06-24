import { FunctionalComponent, h } from 'preact';
import { Route, Router } from 'preact-router';
import Home from '../routes/home';
import Header from './shell/header';
import Footer from './shell/footer';
import { useState } from 'preact/hooks';

const App: FunctionalComponent = () => {
    const [canvasOffset, setCanvasOffset] = useState('');

    const handleRoute = async (): Promise<void> => {
        setCanvasOffset('');
    };

    return (
        <div>
            <Header canvasOffset={canvasOffset} setCanvasOffset={setCanvasOffset} />
            <main style={canvasOffset}>
                <Router onChange={handleRoute}>
                    <Route path="/" component={Home} />
                </Router>
                <Footer />
            </main>
        </div>
    );
};
export default App;
