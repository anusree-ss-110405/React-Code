import React from 'react';
import PropTypes from 'prop-types';

const ProductListComponent = ({ productList }) => {
    return (
        <div>
            {productList.map(({ id, image, name, price }) => (
                <div key={id}>
                    <img src={image} alt={name} />
                    <h2>{name}</h2>
                    <p>{price}</p>
                </div>
            ))}
        </div>
    )
}

ProductListComponent.propTypes = {
    productList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ProductListComponent;