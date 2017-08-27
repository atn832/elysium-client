var EventTypes = {
    Join:1,
    Leave: 2,
    Message: 3,
    SessionStart: 4,
    SessionStop: 5,
    SessionPause: 6,
    SessionResume: 7,
    LostConnection: 10,
    FoundConnection: 11
}

function getEventTypeID(event) {
    var typeID = event.eventType.ID;
    return typeID;
}

export { getEventTypeID };
export default EventTypes;
