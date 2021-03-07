import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, SafeAreaView } from 'react-native';
import EnterRoomButton from '../component/enter-room/EnterRoomButton';
import EnterRoomTextForm from '../component/enter-room/EnterRoomTextForm';
import EnterRoomBackground from '../component/enter-room/EnterRoomBackground';
import global, { COLORS } from '../styles/global';
import GuessWhomLogo from '../component/GuessWhomLogo';

export default () => {
    const [shownForm, setShownForm] = useState<"Join" | "Create" | "">("");
    const [formState, setFormState] = useState<{ [key: string]: string }>({});


    return (
        <SafeAreaView style={[global.safeAreaView]}>
            <EnterRoomBackground style={styles.containerView}>
                <View style={styles.contentView}>
                    <GuessWhomLogo
                        width={262}
                    />
                    <View>
                        <EnterRoomButton
                            onClick={() => setShownForm("Join")}
                            title="Join Game"
                            color={COLORS.THEME_ORANGE}
                        />
                        <EnterRoomButton
                            onClick={() => setShownForm("Create")}
                            title="Create Game"
                            color={COLORS.THEME_PINK}
                        />
                        <Pressable>
                            <Text style={styles.hyperlinkText}>How to play?</Text>
                        </Pressable>
                    </View>

                </View>
                {/* <EnterRoomTextForm
                    label="Your Name"
                    inputText={formState.name}
                    onChangeText={(name:string) => setFormState(s => ({...s, name}))}
                    highlightColor={COLORS.THEME_ORANGE}
                />             */}
            </EnterRoomBackground>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    containerView: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.THEME_BLACK,
    },
    contentView:{
        alignItems: "center",
        justifyContent: "space-evenly",
        height:"60%"
    },
    hyperlinkText: {
        textAlign:"center",
        marginTop: 30,
        textDecorationLine: "underline",
        color: COLORS.THEME_WHITE,
        fontSize: 12,
    }
})