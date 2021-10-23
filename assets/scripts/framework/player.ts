
import { _decorator, Component, Node, systemEvent, SystemEvent, RigidBody, Vec3, EventKeyboard, KeyCode } from 'cc';
const { ccclass, property } = _decorator;

import { constant } from './constant';
import { clientEvent } from './clientEvent';

/**
 * Predefined variables
 * Name = Player
 * DateTime = Fri Oct 22 2021 14:49:10 GMT+0800 (中国标准时间)
 * Author = tin_yi2018
 * FileBasename = player.ts
 * FileBasenameNoExtension = player
 * URL = db://assets/scripts/framework/player.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('Player')
export class Player extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    private rigid: RigidBody = null;


    start () {
        systemEvent.on(SystemEvent.EventType.TOUCH_START, this.onTouchStar, this);
        systemEvent.on(SystemEvent.EventType.TOUCH_END, this.onTouchEnd, this);
        systemEvent.on(SystemEvent.EventType.KEY_DOWN,this.onKeyDown, this);
        clientEvent.on(constant.EVENT_TYPE.KEY_EVENT_TEST, this.onKeyEventTest, this);

        this.rigid=this.node.getComponent(RigidBody);
        // [3]
    }

    onKeyEventTest(){
       console.log("clientEvent: clientEvent call back action")    
    }


    onTouchStar(){
        
      //  var rigid: RigidBody = this.node.getComponent(RigidBody);
        this.rigid.setLinearVelocity(new Vec3(0,0,-2));
        console.log("on Touch Start");
        console.log("before dispatchEvent")
        clientEvent.dispatchEvent(constant.EVENT_TYPE.KEY_EVENT_TEST);
        console.log("after dispatchEvent")


    }    

    onTouchEnd(){
        console.log("on Touch End");

    }


    onKeyDown(event:EventKeyboard){
       // var rigid: RigidBody = this.node.getComponent(RigidBody);
       // this.rigid.setLinearVelocity(new Vec3(0,0,-2));

       // console.log("key Down");
        switch(event.keyCode){
            case KeyCode.KEY_W:    
            this.rigid.setLinearVelocity(new Vec3(0,0,-2));
            console.log(" Key w press");
            break;

            case KeyCode.KEY_A:
            this.rigid.setLinearVelocity(new Vec3(-2,0,0));
            console.log(" Key A press");
            break;

            case KeyCode.KEY_D:   
            this.rigid.setLinearVelocity(new Vec3(2,0,0));
            console.log(" Key D press");
            break;

            case KeyCode.KEY_S: 
            this.rigid.setLinearVelocity(new Vec3(0,0,2));
            console.log(" Key S press");
            break;

            default:
                console.log(" Key Down switch default");
                         


        }
        


    }
    // update (deltaTime: number) {
    //     // [4]
    // }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
 */
