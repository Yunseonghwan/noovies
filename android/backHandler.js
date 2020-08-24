import React, {Component} from "react";
import {
    ToastAndroid, BackHandler
} from "react-native";
import Stack from '../navigation/Stack';

export default class Back extends Component {
    constructor (props) {
        super(props);
    }

    // 이벤트 등록
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    // 이벤트 해제
    componentWillUnmount() {
        this.exitApp = false;
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    // 이벤트 동작
    handleBackButton = () => {
        // 2000(2초) 안에 back 버튼을 한번 더 클릭 할 경우 앱 종료
        if (this.exitApp === undefined || !this.exitApp) {
            ToastAndroid.show('한번 더 누르시면 종료됩니다.', ToastAndroid.SHORT);
            this.exitApp = true;

            this.timeout = setTimeout(
                () => {
                    this.exitApp = false;
                },
                2000    // 2초
            );
        } else {
            clearTimeout(this.timeout);

            BackHandler.exitApp();  // 앱 종료
        }
        return true;
    }
    render(){
        return(
            <Stack back={() => this.handleBackButton()}/>
        )
    }
}
