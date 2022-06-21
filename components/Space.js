import React from 'react';
import {View} from 'react-native';

const Space = ({height, width}) =>
{
    return (
        <View style={{
            width:width ? width: '100%',
            height:height ? height: 18,
        }}/>

    )
}
export default Space;