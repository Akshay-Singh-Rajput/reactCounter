
import './App.css';
function CounterFun () {


    const [ counter, setCounter ] = useState(0);
    const handleAdd = () => {
        if (counter >= 100){
            return alert("Can't go above 100") ;
        }
        setCounter(counter + 1);
    };
    const handleSub = () => {
        if (counter <= 0){
            return alert("Can't go below 0") ;
        }
        setCounter(counter - 1);
    };
    const handleDouble = () => {
        if (counter >= 100){
            return alert("You have cross Maximum limit, Max is 100") ;
        }
       
        setCounter(counter * 2);

    };

     return ( <div className='App'>
        <h3 className={ counter % 2 === 0 ? "green"  : "red" }>Counter : { counter } </h3>
        <button onClick={ handleAdd }>Add 1</button>
        <button onClick={ handleSub }>Sub 1</button>
        <button onClick={ handleDouble }>Double</button>
        <div >Number is { counter % 2 === 0 ? "Even" : "Odd" }  </div>
    </div>
     );

};


function App() {
  return (
   return CounterFun();
  );
}

export default App;
