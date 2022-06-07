namespace lasertag_slave {
    //% block
    //% x.min=1 x.max=65
    export function connect_headset_gun(x: number) {
        let num_serial = null;
        
        radio.setTransmitPower(1)
        radio.setTransmitSerialNumber(true)
        radio.setGroup(x)
        radio.sendNumber(x)
        
        radio.onReceivedNumber(function(receivedNumber: number) {
            num_serial=radio.receivedPacket(RadioPacketProperty.SerialNumber)
            if (receivedNumber==x){
                connected = true;

            }
                
        })
      
    }


    //% block
    export function setup_slave(){
        if (connected==true){

        }

    }


    let connected = false;
}
