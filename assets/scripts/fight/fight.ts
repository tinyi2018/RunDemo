
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

import { clientEvent } from './../framework/clientEvent';
import { constant } from '../framework/constant';
/**
 * Predefined variables
 * Name = Fight
 * DateTime = Sat Oct 23 2021 14:18:02 GMT+0800 (中国标准时间)
 * Author = tin_yi2018
 * FileBasename = fight.ts
 * FileBasenameNoExtension = fight
 * URL = db://assets/scripts/fight/fight.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */
 
@ccclass('Fight')
export class Fight extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start () {
        // [3]
        clientEvent.on(constant.EVENT_TYPE.KEY_EVENT_TEST, this.onKeyEventTest, this);
    }

    onKeyEventTest(){
        console.log("fight: clientEvent call back action")    
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
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/zh/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/zh/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/zh/scripting/life-cycle-callbacks.html
 */