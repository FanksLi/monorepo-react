import RecordScreen from "./recordScreen";

export default function performanceSDK() {
    const recordScreen = new RecordScreen();
    return {
        recordScreen,
    }
}