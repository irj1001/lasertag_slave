enum Equipment {
    Gun,
    Headset
}
namespace lasertag_slave {
    //% block="Connect headset and gun | number $x"
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


    //% block="Setup Micro:bit"
    export function setup_slave(){
        radio.setTransmitSerialNumber(true)
        radio.setTransmitPower(1)
        if (connected){



            setup=true;
        }

    }

    //% block="Select number of lives"
    export function select_lives(livs:number) {
       lives=livs; 

    }

    //%block="Select type of equipment"
    export function select_type_of_equipment(eq: Equipment) {
        equipment = eq;

    }

    let connected = false;
    let setup=false;
    let lives=null;
    let equipment=null;

    
}
