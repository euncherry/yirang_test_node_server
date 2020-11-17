const {notices, getNotice, getsix, idNum , addData } = require('../database/notice.db');
const router = require('express').Router();

// 라우터 레벨 미들웨어
router.use((req, res, next) => {
  console.log('notice라우터 미들웨어 들렸다감');
  next();
});

/**
 * @description notice 테이블 조회
 * @route GET /notices/:noticeId
 */

//
// router.get('/:noticeId', (req, res) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   const { noticeId } = req.params;
//   //   const notice = getNotice(Number(noticeId));
//   const notice = getsix(Number(noticeId));
//   res.status(200).json(notice);
// });

router.get('/page', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  const noticeId = req.query.page;
  
  //   const notice = getNotice(Number(noticeId));
  const notice = getsix(Number(noticeId));
  const countId = Number(notices.length);
  console.log(JSON.stringify({notice:notice, Num:countId}))
 //res.status(200).json({Num : countId , notice});
  res.status(200).json({notice: notice, Num : countId});
  
});

router.post('/add',(req,res)=>{
  res.header('Access-Control-Allow-Origin', '*');
  console.log(req.body);
  const data = req.body;
  addData(data);
  console.log(notices);
  console.log(notices.length);
  res.send(200);
})
module.exports = router;
