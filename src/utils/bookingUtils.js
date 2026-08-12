export const isAdultCapacityValid = (room, adult) => {
    return adult <= room.capacity;
};

export const getRoomByType = (rooms, roomType) => {
    return rooms.find(room => room.roomType === roomType);
};

