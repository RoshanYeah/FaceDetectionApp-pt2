import React,{Component} from 'react';
import {View, Image} from 'react-native';

const FilterTwo = ({
    face:{
        bounds:{size:{width:faceWidth,height:faceHeight}},
        leftEyePosition,
        rightEyePosition
    }
})=>{
    const glassesWidth = faceWidth
    const glassHeight = faceHeight/3;
    const transformAngle = (angleRadians =Math.atan((rightEyePosition.y-leftEyePosition.y)/(rightEyePosition.x-leftEyePosition.x)) )=> angleRadians * 180 / Math.PI
    return (
        <View style={{position:'absolute',
        left:leftEyePosition.x - glassesWidth*0.67,top:leftEyePosition.y - glassHeight*0.5}} >
            <Image
             style={{
                width: glassesWidth,
                height: glassHeight,
                resizeMode: 'contain',
                transform: [{rotate:`${transformAngle()}deg`}]
             }}
             source={require("../assets/glasses1.jpeg")}
            />
        </View>
        )
}