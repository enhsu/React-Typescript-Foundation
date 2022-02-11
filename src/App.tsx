import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import { NavLink } from 'react-router-dom';
import Props from './pages/Props';
import Hooks from './pages/Hooks';
import ClassComponent from './pages/ClassComponent';
import ComponentAsProps from './pages/ComponentAsProps';
import GenericProps from './pages/GenericProps';
import RestrictingProps from './pages/RestrictingProps';
import TemplateLiteralsAndExclude from './pages/TemplateLiteralsAndExclude';
import WrappingHTMLAndOmit from './pages/WrappingHTMLAndOmit';
import PolymorphicComponent from './pages/PolymorphicComponent';


function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="props">Props</NavLink>
        <NavLink to="hooks">Hooks</NavLink>
        <NavLink to="class-component">Class Component</NavLink>
        <NavLink to="component-as-props">Component As Props</NavLink>
        <NavLink to="generic-props">Generic Props</NavLink>
        <NavLink to="restricting-props">Restricting Props</NavLink>
        <NavLink to="wrapping-html-and-omit">Wrapping HTML And Omit</NavLink>
        <NavLink to="polymorphic-component">Polymorphic Component</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="props" element={<Props />} />
        <Route path="hooks" element={<Hooks />} />
        <Route path="class-component" element={<ClassComponent message="this is a class component" />} />
        <Route path="component-as-props" element={<ComponentAsProps />} />
        <Route path="generic-props" element={<GenericProps />} />
        <Route path="restricting-props" element={<RestrictingProps value={10} isPositive />} />
        <Route path="template-literals-and-exclude" element={<TemplateLiteralsAndExclude position='center' />} />
        <Route path="wrapping-html-and-omit" element={<WrappingHTMLAndOmit />} />
        <Route path="polymorphic-component" element={<PolymorphicComponent />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      
    </div>
  );
}

export default App;
