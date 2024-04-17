import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt';


const RoomPage = () => {
    const {roomId} = useParams();

    const myMeeting = async (element) =>{
        const appID = 485780573;
        const serverSecret = "41f1cb6c692e758b9e7a67637f792800";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(),"Anoop"); 
        // server se connect krna hai date.now().toString me username aae gaa

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
        container: element,
        scenario: {
            mode: ZegoUIKitPrebuilt.VideoConference,
        },
    });
};
    return (
        <div className='room-page' >
            <div ref={myMeeting} />

        </div>
    )
};

export default RoomPage;