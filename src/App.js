function App() {

    let message = 'Bye there!';

    if (Math.random() > 0.5) {
        message = 'Hello there!';
    }

    return (<h1>{message}</h1>);

}

export default App;
