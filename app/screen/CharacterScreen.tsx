import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, StyleSheet, SafeAreaView } from 'react-native';
import EnterRoomBackground from '../component/enter-room/EnterRoomBackground';
import global, { COLORS } from '../styles/global';
import GuessWhomLogo from '../component/GuessWhomLogo';
import CharacterIcon from '../component/CharacterIcon';
import EnterRoomButton from '../component/enter-room/EnterRoomButton';
import HowToPlayLink from '../component/enter-room/HowToPlayLink';


const CharacterBtn = (props: {
    idx: Number,
    onPress: Function,
    isSelected: Boolean
}) => {
    const [isSelected, setIsSelected] = useState(props.isSelected);

    useEffect(() => {
        setIsSelected(props.isSelected);
    }, [props.isSelected]);
    const style = isSelected ? {} : { opacity: 0.5 }
    return (
        <Pressable onPress={() => props.onPress(props.idx)} style={style}>
            <CharacterIcon idx={props.idx} />
        </Pressable >);
};

export default () => {
    const [selectedIdx, setSelectedIdx] = useState<Array<Number>>([0]);

    const onSelect = (idx: Number) => {
        setSelectedIdx((idxs) => [...idxs, idx])
    }

    return (
        <SafeAreaView style={[global.safeAreaView]}>
            <EnterRoomBackground style={styles.containerView}>
                <GuessWhomLogo imgStyle={{
                    width: 170,
                    height: 85,
                    resizeMode:"stretch"
                }}/>
                <Text style={styles.instructionText}>
                    Choose Your Character
                </Text>
                <View>
                    <View style={styles.charContainerView}>
                        {[0, 1, 2, 3].map((idx) =>
                            <CharacterBtn idx={idx} onPress={onSelect} isSelected={selectedIdx.includes(idx)} />)}
                    </View>
                    <View style={styles.charContainerView}>
                        {
                            [4, 5, 6, 7].map((idx) =>
                                <CharacterBtn idx={idx} onPress={onSelect} isSelected={selectedIdx.includes(idx)} />)}
                    </View>
                </View>
                <View style={styles.btnContainerView}>
                    <EnterRoomButton onClick={()=>console.log("Enter")} title="Enter"/>
                    <HowToPlayLink/>
                </View>
            </EnterRoomBackground>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    containerView: {
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: COLORS.THEME_BLACK,
    },
    instructionText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    },
    charContainerView: {
        width: "100%",
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    btnContainerView:{
        height:100,
        backgroundColor:"red"        
    }
})