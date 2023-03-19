import InputForm from "./components/InputForm";
import Queues from "./components/Queues";

function App() {
  return (
    <div className="max-w-[1140px] m-auto w-full gap-2 p-4 relative z-10 flex flex-col h-screen">
      <div className="mb-8">
        <h1>Queue App</h1>
        <p className="text-gray-600">
          Add the numbers of items and proceed to Checkout
        </p>
      </div>

      <InputForm />
      <Queues />
    </div>
  );
}

export default App;
