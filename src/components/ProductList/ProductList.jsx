import React, { useState } from "react";
import './ProductList.css';
import ProductItem from "../Productitem/Productitem";
import {useTelegram} from "../../hooks/useTelegram";
import { useCallback, useEffect } from "react";

const products = [
    {id:1, title: 'T-shirt', price: 400, description: 'Run clothes'},
    {id:2, title: 'Longsleave', price: 800, description: 'Cold Run clothes'},
    {id:3, title: 'Hoodie', price: 9000, description: 'Warm Run clothes'},
    {id:4, title: 'Sneakers', price: 12000, description: 'Run shoes'},
    {id:5, title: 'T-shirt', price: 900, description: 'Run clothes'},
    {id:6, title: 'Shirts', price: 400, description: 'Run clothes'},
    {id:7, title: 'Bandana', price: 100, description: 'Head Run clothes'},
]

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc + item.price;
    }, 0)
}

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            products: addedItems,
            totalPrice: getTotalPrice(addedItems),
        }
        fetch('http://localhost:8000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }, [])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData);
        return () => {
            tg.offEvent('mainButtonClicked', onSendData);
        }
    }, [onSendData]);

    const onAdd = (product) => {
        const alreadyAdded = addedItems?.find((item) => item?.id === product.id);
        let newItems = [];

        if (alreadyAdded) {
            newItems = addedItems?.filter(item => item?.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems);

        if (newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            })
        }
    }
    return (
    
        <div className={"list"}>
            {products.map((item) => 
                <ProductItem
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />)
            }
        </div>
    );
};

export default ProductList;