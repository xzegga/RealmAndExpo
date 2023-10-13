import { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';

import tailwind from 'twrnc';

export default function Home() {
    

    return (
        <SafeAreaView style={[tailwind`bg-white h-full`]}>
            
            <View style={tailwind`pt-12`}>
                <Text>Somthing </Text>
            </View>
        </SafeAreaView>
    );
}
