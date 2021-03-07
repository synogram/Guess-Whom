import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, SafeAreaView } from 'react-native';
import EnterRoomButton from '../component/enter-room/EnterRoomButton';
import EnterRoomTextForm from '../component/enter-room/EnterRoomTextForm';
import EnterRoomBackground from '../component/enter-room/EnterRoomBackground';
import global, { COLORS } from '../styles/global';
import GuessWhomLogo from '../component/GuessWhomLogo';

export default () => {
    const [shownForm, setShownForm] = useState<"Join" | "Create" | "">("");
    const [formState, setFormState] = useState<{ [key: string]: string }>({
        name: "",
        roomCode: "",
    });

    let SlideForm = null;

    if (shownForm === "Join") {
        SlideForm = (
            <View style={styles.slideFormContainerView}>
                <EnterRoomTextForm
                    label="Your Name"
                    inputText={formState.name}
                    onChangeText={(name) => setFormState((s) => ({ ...s, name }))}
                    highlightColor={COLORS.THEME_ORANGE}
                />
                <EnterRoomTextForm
                    label="Room Code"
                    inputText={formState.roomCode}
                    onChangeText={(roomCode) => setFormState((s) => ({ ...s, roomCode }))}
                    highlightColor={COLORS.THEME_ORANGE}
                />
            </View>)
    }

    if (shownForm === "Create") {
        SlideForm = (
            <View style={styles.slideFormContainerView}>
                <EnterRoomTextForm
                    label="Your Name"
                    inputText={formState.name}
                    onChangeText={(name) => setFormState((s) => ({ ...s, name }))}
                    highlightColor={COLORS.THEME_PINK}
                />
            </View>)
    }
    return (
        <SafeAreaView style={[global.safeAreaView]}>
            <EnterRoomBackground style={styles.containerView}>
                <View style={styles.contentView}>
                    <GuessWhomLogo width={262} />
                    <View>
                        {SlideForm}
                        {
                            (shownForm === "Join" || shownForm === "") ? (
                                <EnterRoomButton
                                    onClick={() => setShownForm("Join")}
                                    title="Join Game"
                                    color={COLORS.THEME_ORANGE}
                                />
                            ) : null
                        }
                        {
                            (shownForm === "Create" || shownForm === "") ? (
                                <EnterRoomButton
                                    onClick={() => setShownForm("Create")}
                                    title="Create Game"
                                    color={COLORS.THEME_PINK}
                                />
                            ) : null
                        }
                        <View style={styles.hyperlinkContainerView}>
                            <Pressable>
                                <Text style={styles.hyperlinkText}>How to play?</Text>
                            </Pressable>
                            {
                                (shownForm !== "") ? (
                                    <Pressable onPress={() => setShownForm("")}>
                                        <Text style={styles.hyperlinkText}>Go back</Text>
                                    </Pressable>
                                ) : null
                            }
                        </View>
                    </View>
                </View>
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
    contentView: {
        alignItems: "center",
        justifyContent: "space-evenly",
        height: "60%"
    },
    hyperlinkContainerView:{
        justifyContent:"center",
        flexDirection:"row",        
    },
    hyperlinkText: {
        textAlign: "center",
        marginTop: 30,
        marginHorizontal:10,
        textDecorationLine: "underline",
        color: COLORS.THEME_WHITE,
        fontSize: 12,
    },
    slideFormContainerView:{
        height: 180,
    }
})