import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { set } from '../store/slices/animalsSlice';
 
import './index.css';
import Item from './components/item';

export default function Tree() {

    const { animals } = useSelector((state) => state.animals);
    const dispatch = useDispatch()


    const getData=()=>{
        fetch('./data.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then((response)=>response.json())
          .then((myJson)=> dispatch(set({ animals : myJson})));
      }

    useEffect(() => {
        if (animals.length==0){
            getData();
        }
    });

    return (
        <div className="tree">
            <Item children={ animals } />           
        </div>
    )
}
