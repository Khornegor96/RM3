import { connect } from 'react-redux';
import { addFav, removeFav } from '../redux/actions';
import { useState } from 'react';

function Card(props) {
  const { id, name, status, species, gender, origin, image, onClose, addFav, removeFav } = props;
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id.toString());
    } else {
      setIsFav(true);
      addFav(props);
    }
  };

  return (
    <div>
      <button onClick={() => onClose(id)}>X</button>
      <h2>Name={name}</h2>
      <h2>Status={status}</h2>
      <h2>Species={species}</h2>
      <h2>Gender={gender}</h2>
      <h2>Origin={origin}</h2>
      <img src={image} alt='' />
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
        
      )
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = {
  addFav,
  removeFav,
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);