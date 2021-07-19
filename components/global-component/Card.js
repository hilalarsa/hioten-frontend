import React from 'react';
import { Card, Rate } from 'antd';

export default function CardComponent(props) {
    const { image, title, category, description, rating, allowHalfRate, countRating } = props;
    return(
        <Card>
            <img src={image}/>
            <label>{title}</label>
            <label>{category}</label>
            <p>{description}</p>
            <Rate allowHalf={allowHalfRate} defaultValue={rating}/>
            <label>({countRating} reviews)</label>
        </Card>
    )
}
