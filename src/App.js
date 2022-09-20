import './App.css';
import ProgressBar from "./components/ProgressBar";


const items = [
    {name: 'Sold', color: '#BD1FBE', value: 102},
    {name: 'Got free', color: '#FC64FF', value: 25},
    {name: 'Burned', color: '#7ce851', value: 202}
]

function App() {
    return (
        <div className="container mx-auto px-4 min-w-[840px]">
            <h1 className={'text-3xl text-center font-bold mb-2'}>Hello Trood Team!</h1>
            <ProgressBar items={items}/>
        </div>
    );
}

export default App;

//todo: add ts support