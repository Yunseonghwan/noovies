import React, {useState, useEffect} from 'react';
import {movieApi} from '../api'
import {View, Text} from 'react-native';

export default () => {
    const [movies, setMovies] = useState({
        result: [],
        error: null
    })

    const getData = async() => {
        const [result, error] = await movieApi.discover()
        setMovies({
            result,
            error
        })
    }
    useEffect(() => {
        getData()
    }, [])
    return(
        <View>
            <Text>{movies.result.length}</Text>
        </View>
    )
}