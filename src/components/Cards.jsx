import Card from './Card';

const Cards=(props) =>{
   const { characters, onClose } = props;

   return (
      <div >
         {characters.map((character) => (
            <div className="cards">
            <Card
               key={character.id}
               id={character.id}
               name={character.name}
               status={character.status}
               species={character.species}
               gender={character.gender}
               origin={character.origin.name}
               image={character.image}
               onClose={onClose}
               
               
            />
            </div>
         ))}
      </div>
   );
}
export default Cards;