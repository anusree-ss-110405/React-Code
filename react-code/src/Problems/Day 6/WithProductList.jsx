import React from 'react';

export const WithProductList = (WrappedComponent, productList) => {
    return () => {
        return <WrappedComponent productList={productList} />
    }
}
