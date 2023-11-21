import './App.css';

import ArchitekturKomponente from './ArchitekturKomponente';
import Walker from './Walker'; 
import MyComponent1 from './MyComponent1';
import BooksList from './BooksList';

function App() {
  return (
    <div sytle={{display:'flex'}}>
      <div sytle={{flex:1}}>
        <h1>Eine Komponente</h1>
      <ArchitekturKomponente />
      </div>
       <div sytle={{flex:1}}> 
      <h1>Walker Component</h1>
      <Walker />
      </div>
     <div sytle={{flex:1}}> 
      <h1>Noch eine Komponente</h1>
      <MyComponent1 person={{ displayName: 'Test2023' }} />
      </div>
     <div sytle={{flex:1}}>
     <h1>Bücherverwaltung</h1>
      <BooksList />
     </div>
    </div>
  );
}

export default App;
