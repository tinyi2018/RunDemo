
import { _decorator, Component, Node, systemEvent, SystemEvent, RigidBody, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

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

    start () {
        systemEvent.on(SystemEvent.EventType.TOUCH_START, this.onTouchStar, this);
        systemEvent.on(SystemEvent.EventType.TOUCH_END, this.onTouchEnd, this);
        // [3]
    }

    onTouchStar(){
        
        var rigid: RigidBody = this.node.getComponent(RigidBody);
        rigid.setLinearVelocity(new Vec3(0,0,-2));


    }    

    onTouchEnd(){

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
