
import { _decorator, Component, Node } from 'cc';
import { clientEvent } from '../framework/clientEvent';
import { constant } from '../framework/constant';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = UiCtr
 * DateTime = Sat Oct 23 2021 17:00:32 GMT+0800 (中国标准时间)
 * Author = tin_yi2018
 * FileBasename = uiCtr.ts
 * FileBasenameNoExtension = uiCtr
 * URL = db://assets/scripts/ui/uiCtr.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */
 
@ccclass('UiCtr')
export class UiCtr extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start () {
        // [3]
    }


    startPress(){
        console.log("uiCtl: start press");
        clientEvent.dispatchEvent(constant.EVENT_TYPE.KEY_EVENT_TEST);

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