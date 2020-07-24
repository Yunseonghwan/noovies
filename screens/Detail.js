import React, {useState, useCallback} from 'react';
import {View, Text} from 'react-native';
import { movieApi } from '../api';

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