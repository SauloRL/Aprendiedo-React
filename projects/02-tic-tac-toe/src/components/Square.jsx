import PropTypes from 'prop-types';

export const Square = ({ children, isSelected, updatedBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`;

  const handleClick = () => {
    updatedBoard(index);
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

Square.propTypes = {
  children: PropTypes.node, // Validación para la prop children
  isSelected: PropTypes.bool,
  updatedBoard: PropTypes.func,
  index: PropTypes.number,
};
