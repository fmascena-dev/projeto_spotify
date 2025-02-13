import PropTypes from 'prop-types';
import SingleItem from './SingleItem';
import { Link } from 'react-router-dom';

export default function ItemList({ title, items, itemsArray, path, idPath }) {
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>
        <Link to={path} className="item-list__link">
          Mostrar tudo
        </Link>
      </div>

      <div className="item-list__container">
        {itemsArray
          .filter((currentValue, index) => index < items)
          .map((currObj, index) => (
            <SingleItem
              // id={currObj.id}
              // name={currObj.name}
              // image={currObj.image}
              // banner={currObj.banner}
              idPath={idPath}
              {...currObj}
              key={`${title}-${index}`}
            />
          ))}
      </div>
    </div>
  );
}

ItemList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.string.isRequired,
  itemsArray: PropTypes.string.isRequired,
  path: PropTypes.string, // Não é obrigatório porque não está sendo usado
  idPath: PropTypes.string.isRequired,
};
