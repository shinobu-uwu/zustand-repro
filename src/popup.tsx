import { useCounterStore } from '~stores/counter';

function IndexPopup() {
    const { count, increment } = useCounterStore();
    return (
        <div>
            Hello, {count}!
            <p>
                <button onClick={increment}>Increment</button>
            </p>
        </div>
    );
}

export default IndexPopup;
