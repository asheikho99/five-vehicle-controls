const Print = (message) => {
    emit('chat:addMessage', message)
}

function onStart() {
    emit('chat:addMessage', `Running thread at ${GetGameTimer()}`)
}


RegisterCommand('open', (source, args, raw) => {

    if (IsPedSittingInAnyVehicle(PlayerPedId())) {

        const VEHICLE = GetVehiclePedIsIn(PlayerPedId(), false)
        const VEH_NUM_OF_DOORS = GetNumberOfVehicleDoors(VEHICLE)

        for (let vehicleDoor = 0; vehicleDoor < VEH_NUM_OF_DOORS; vehicleDoor++) {
            SetVehicleDoorOpen(
                VEHICLE,
                vehicleDoor,
                false,
                false
            )
        }
    }

})

RegisterCommand('close', (source, args, raw) => {

    if (IsPedSittingInAnyVehicle(PlayerPedId())) {

        const VEHICLE = GetVehiclePedIsIn(PlayerPedId(), false)
        const VEH_NUM_OF_DOORS = GetNumberOfVehicleDoors(VEHICLE)

        for (let vehicleDoor = 0; vehicleDoor < VEH_NUM_OF_DOORS; vehicleDoor++) {
            SetVehicleDoorShut(
                VEHICLE,
                vehicleDoor,
                false
            )
        }
    }

})


onStart()