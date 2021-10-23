
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

import { constant } from './framework/constant';
import { clientEvent } from './framework/clientEvent';


/**
 * Predefined variables
 * Name = Main
 * DateTime = Fri Oct 22 2021 14:42:50 GMT+0800 (中国标准时间)
 * Author = tin_yi2018
 * FileBasename = main.ts
 * FileBasenameNoExtension = main
 * URL = db://assets/scripts/main.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('Main')
export class Main extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start () {
        clientEvent.on(constant.EVENT_TYPE.KEY_EVENT_TEST, this.onKeyEventTest, this);
        // [3]
    }

    onKeyEventTest(){
        console.log("main: clientEvent call back action")    
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
