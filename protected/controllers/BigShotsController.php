<?php

/**
 * Class BigShotsController
 * 大咖秀
 */
class BigShotsController extends BaseController
{
    public function __construct($id, $module = null)
    {
        parent::__construct($id, $module);
    }

    public function actionIndex()
    {
        Yii::app()->clientScript->registerCssFile(Yii::app()->baseUrl.'/css/main.css');
        Yii::app()->clientScript->registerCssFile(Yii::app()->baseUrl.'/css/common.css');
        if(defined('BIG_SHOTS_RECOMMEND_VIDEO')){
            $recommend = CJSON::decode(BIG_SHOTS_RECOMMEND_VIDEO);
        }
        $this->render('index');
    }

    public function actionDetail()
    {
        $this->render('detail');
    }
}