import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SnackBar from "../components/SnackBar";

export default function Social({ navigation }) {
    const [usersQuizes, setUsersQuizes] = useState({});
    const [users, setUsers] = useState([]);

    const [isLoading, setIsLoading] = useState(true);
    const [snackBarVisible, setSnackBarVisible] = useState(false);
    const [snackBarText, setSnackBarText] = useState("");
    const [snackBarType, setSnackBarType] = useState("");

    //component did mount
    useEffect(() => {
        fetchUsersQuizes();
        fetchUsers();
    }, [])

    //function to fetch quizes of all users
    async function fetchUsersQuizes() {
    }

    //function to fetch users from firebase db
    async function fetchUsers() {
       
    }

    //function to handle when any profile card is clicked on
    function handleProfileClick(index) {
        console.log("profile clicked", index);
    }

    //function to display snackbar
    function displaySnackBar(type, text) {
        setSnackBarType(type);
        setSnackBarText(text);
        setSnackBarVisible(true);
    }

    //function to hide snackbar
    function hideSnackBar() {
        setSnackBarVisible(false);
    }

    //component rendering
    return (
        <>
            <View style={styles.container}>
                {
                    isLoading ?
                        <View style={styles.loaderContainer}>
                            <ActivityIndicator style={styles.loader} />
                        </View>
                        :
                        users.map(function(item, idx) {
                            return (
                               <Text> {item.name} : {item.email} : {item.desc}</Text>
                            )
                        })
                }
            </View>

            {
                snackBarVisible ?
                    <SnackBar
                        isVisible={snackBarVisible}
                        text={snackBarText}
                        type={snackBarType}
                        onClose={hideSnackBar}
                    />
                    : null
            }
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10,
        paddingHorizontal: 30,
    },

    loaderContainer: {
        flex: 1,
        justifyContent: "center",
    },

    title: {
        fontWeight: '500',
        fontSize: 20,
        letterSpacing: 0.1,
        color: '#2E2E2E',
    },

    divider: {
        paddingVertical: 8,
    },
});
