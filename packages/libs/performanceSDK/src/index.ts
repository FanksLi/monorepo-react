import RecordScreen from "./recordScreen";

export default function performanceSDK() {
    console.log('performanceSDK');
    const recordScreen = new RecordScreen();
    return {
        recordScreen,
    }
}