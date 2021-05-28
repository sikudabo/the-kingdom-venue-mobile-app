import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function Cat(props) {
    const [isHungry, setIsHungry] = useState(true);

    return (
        <View>
            <Text>
                I am {props.name}, and I am {isHungry ? 'Hungry' : 'Full'}
            </Text>
            <Button 
                onPress={() => {
                    setIsHungry(!isHungry)
                }}
                disabled={!isHungry}
                title={isHungry ? 'Pour me some milk' : 'Thank you!'}
            />
        </View>
    );
}