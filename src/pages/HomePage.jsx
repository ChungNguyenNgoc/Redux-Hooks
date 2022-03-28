import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import HobbyList from '../components/Home/HobbyList';
import { addNewHobby, setActiveHobby } from '../actions/hobby';
import { v4 as uuidv4 } from 'uuid';
HomePage.propTypes = {

};

function HomePage(props) {
  const hobbyList = useSelector(state => state.hobby.list);
  const activeId = useSelector(state => state.hobby.activeId);
  const dispatch = useDispatch();
  console.log('Hobby list: ', hobbyList);

  const handleAddHobbyClick = () => {
    // Random a hobby object: id + title
    const newHobby = {
      id: uuidv4(),
      title: `Chung Hobby ${uuidv4()}`,
    }

    // Dispatch action to add a new hobby to redux store
    const action = addNewHobby(newHobby);
    dispatch(action);
  }

  const handleHobbyClick = (hobby) => {
    const action = setActiveHobby(hobby);
    dispatch(action);
  }

  return (
    <div className="home-page">
      <h1>REDUX HOOKS - Home Page</h1>

    <button onClick={handleAddHobbyClick} style={{padding: '20px'}}></button>
      <HobbyList 
        hobbyList={hobbyList}
        activeId={activeId}
        onHobbyClick={handleHobbyClick}
      />
    </div>
  );
}

export default HomePage;