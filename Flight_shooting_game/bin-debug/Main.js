//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        //将每次调用Tick的时间保存下来
        _this.now = 0;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    /**配置文件加载完成,开始预加载preload资源组。*/
    Main.prototype.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComplete, this);
        RES.loadGroup("preload");
    };
    /** preload资源组加载完成*/
    Main.prototype.onGroupComplete = function (event) {
        if (event.groupName == "preload") {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComplete, this);
            this.createScene();
        }
    };
    /**
    * 创建游戏场景
    * Create a game scene
    */
    Main.prototype.createScene = function () {
        this.stageWidth = this.stage.stageWidth;
        this.stageHeight = this.stage.stageHeight;
        this.background = new egret.Bitmap();
        this.background.texture = RES.getRes("bg_jpg");
        this.background.fillMode = egret.BitmapFillMode.SCALE;
        this.addChild(this.background);
        this.boss = new egret.Bitmap();
        this.boss.texture = RES.getRes("f2_png");
        this.boss.$setScaleX(2);
        this.boss.$setScaleY(2);
        this.addChild(this.boss);
        // this.boss.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        this.bossSpeed = 0.05;
        // this.bossSpeed = 1;
        this.bossDirection = 1;
        egret.startTick(this.onTicker, this);
    };
    Main.prototype.onEnterFrame = function (e) {
        var x = this.boss.x;
        var y = this.boss.y;
        if (y < this.stageHeight - this.boss.height) {
            this.boss.y += this.bossSpeed;
        }
        if (x < this.stageWidth - this.boss.width && x > 0) {
            this.boss.x += this.bossSpeed * this.bossDirection;
        }
        else if (x <= 0) {
            this.boss.x += this.bossSpeed;
            this.bossDirection = 1;
        }
        else {
            this.boss.x -= this.bossSpeed;
            this.bossDirection = -1;
        }
    };
    Main.prototype.onTicker = function (time) {
        //初始化时间
        if (!this.now)
            this.now = time;
        var then = time;
        //计算时间间隔
        var pass = then - this.now;
        var x = this.boss.x;
        var y = this.boss.y;
        if (y < this.stageHeight - this.boss.height) {
            this.boss.y += this.bossSpeed * pass;
        }
        else if (y >= this.stageHeight - this.boss.width) {
            this.boss.x -= this.bossSpeed * pass;
        }
        console.log(this.stageWidth);
        console.log(this.stageHeight);
        // console.log(x);
        if (x < this.stageWidth - this.boss.width && x > 0) {
            this.boss.x += this.bossSpeed * pass * this.bossDirection;
        }
        else if (x <= 0) {
            this.boss.x += this.bossSpeed * pass;
            this.bossDirection = 1;
        }
        else if (x >= this.stageWidth - this.boss.width) {
            this.boss.x -= this.bossSpeed * pass;
            this.bossDirection = -1;
        }
        //刷新时间
        this.now = then;
        return false;
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map