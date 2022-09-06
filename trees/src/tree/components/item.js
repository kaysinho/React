import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { set } from '../../store/slices/animalsSlice';
import { AddItem } from './addItem';


export default function Item({children}) {

    const { animals } = useSelector((state) => state.animals);
    const dispatch = useDispatch()

    const [items, setItems] = useState([]);


    useEffect(() => {
        setItems(children ? children : []);
    });

    const onAddItem = (animal, parent) => {
        if (!animal) return;
        dispatch(set({ animals : [...findParentAndAddChild(parent, [...animals], animal)]}));
        
    };

    const findParentAndAddChild = (parentName, animals, newChild) => {
        return animals.map((animal)=> {
            if (animal.name === parentName) {
                return { name: animal.name, children : [...animal.children, { name: newChild, children: [] }]};
            } else {
                return { name: animal.name, children : [...findParentAndAddChild(parentName, animal.children, newChild)]};
            }
        });
    
    }


    return (
            <ul>
                {
                    items.map((item, index) => {
                    return (
                        <li key={item.name + index} >
                            <div className='title'>{item.name} <AddItem onNewItem={(value) => onAddItem(value, item.name)} /> </div>
                            <Item children={ item.children } /> 
                        </li> 
                    )})
                }
            </ul>

        
    )
}
