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
var fighter;
(function (fighter) {
    /**
     * 主游戏容器
     */
    var GameContainer = (function (_super) {
        __extends(GameContainer, _super);
        // /**@private*/
        // private stageW: number;
        // /**@private*/
        // private stageH: number;
        // /**开始按钮*/
        // private btnStart: egret.Bitmap;
        // /**可滚动背景*/
        // private bg: fighter.BgMap;
        // /**我的飞机*/
        // private myFighter: fighter.Airplane;
        // /**我的子弹*/
        // private myBullets: fighter.Bullet[] = [];
        // /**敌人的飞机*/
        // private enemyFighters: fighter.Airplane[] = [];
        // /**触发创建敌机的间隔*/
        // private enemyFightersTimer: egret.Timer = new egret.Timer(1000);
        // /**敌人的子弹*/
        // private enemyBullets: fighter.Bullet[] = [];
        // /**成绩显示*/
        // private scorePanel: fighter.ScorePanel;
        // /**我的成绩*/
        // private myScore: number = 0;
        // /**@private*/
        // private _lastTime: number;
        function GameContainer() {
            var _this = _super.call(this) || this;
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
            return _this;
        }
        /**初始化*/
        GameContainer.prototype.onAddToStage = function (e) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            this.createGameScene();
        };
        /**创建游戏场景*/
        GameContainer.prototype.createGameScene = function () { };
        return GameContainer;
    }(egret.DisplayObjectContainer));
    fighter.GameContainer = GameContainer;
    __reflect(GameContainer.prototype, "fighter.GameContainer");
})(fighter || (fighter = {}));
//# sourceMappingURL=GameContainer.js.map