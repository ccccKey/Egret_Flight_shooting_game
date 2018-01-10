module fighter {
    /**
     * 主游戏容器
     */
    export class GameContainer extends egret.DisplayObjectContainer 
    {
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

        public constructor() {
            super();
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        }

        /**初始化*/
        private onAddToStage(e: egret.Event) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            this.createGameScene();
        }
        /**创建游戏场景*/
        private createGameScene() { }

    }

}